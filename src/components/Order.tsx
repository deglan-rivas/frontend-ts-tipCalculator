import { Dispatch } from 'react';
import { useOrders } from '../hooks/useOrders';
import { OrderActions } from '../reducers/order-reducer';
import { OrderItem } from '../types/index';

interface OrderItemProps {
  order: OrderItem
  dispatch: Dispatch<OrderActions>
}

interface TipProps {
  tipItem: TipItem,
  dispatch: Dispatch<OrderActions>
  tip: number
}

interface TipItem {
  description: string
  value: number
}

const tips: TipItem[] = [
  {
    description: "10%",
    value: 0.1
  },
  {
    description: "20%",
    value: 0.2
  },
  {
    description: "50%",
    value: 0.5
  }
]

function Item({ order, dispatch }: OrderItemProps) {
  const { id, name, price, quantity } = order
  return (
    <div className="flex justify-between items-center px-5 py-4">
      <div>
        <p className="">
          {name} - ${price}
        </p>
        <p className="text-sm font-semibold ">
          Cantidad: {quantity} - ${quantity * price}
        </p>
      </div>
      <div className="w-8 h-8 p-2 text-white font-semibold bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-600/80"
        onClick={() => dispatch({ type: "delete-order", payload: { id } })}
      >
        X
      </div>
    </div>
  )
}

function Tip({ tipItem, dispatch, tip }: TipProps) {
  const { description, value } = tipItem
  return (
    <div className="flex items-center gap-2">
      <label htmlFor={`${value}`}>
        {description}
      </label>
      <input
        type="radio"
        id={`${value}`}
        name="propina"
        value={value}
        onChange={() => dispatch({ type: "set-tip", payload: { tip: value } })}
        checked={value === tip}
      />
    </div>
  )
}

export default function Order() {
  const { state, dispatch, calculateSubtotal, calculateTip, calculateTotal } = useOrders()

  return (
    <div className="col-span-2 border border-gray-300 rounded-md pb-4 mx-4
    md:col-span-1 md:pb-0">
      {
        state.orders.length === 0 ? (
          <h2 className="text-xl text-gray-400 text-center px-4 py-4">
            La orden está vacía
          </h2>
        ) : (
          <>
            <h2 className="font-semibold text-4xl px-4 py-4">
              Consumo
            </h2>

            <div className="border-y divide-y mb-8
            md:max-h-[304px] md:overflow-y-scroll">
              {
                state.orders.map((order) => (
                  <Item
                    key={order.id}
                    order={order}
                    dispatch={dispatch}
                  />
                ))
              }
            </div>

            <div className="px-4 mb-8">
              <p className="font-semibold text-2xl mb-2">
                Propina:
              </p>

              {tips.map((tipItem) => (
                <Tip
                  key={tipItem.value}
                  tipItem={tipItem}
                  dispatch={dispatch}
                  tip={state.tip}
                />
              ))}
            </div>

            <div className="px-4 mb-8 space-y-2">
              <p className="font-semibold text-2xl">
                Totales y Propina
              </p>

              <p>
                Subtotal a pagar:
                <span className="font-semibold ml-1">
                  ${calculateSubtotal().toFixed(2)}
                </span>
              </p>

              <p>
                Propina:
                <span className="font-semibold ml-1">
                  ${calculateTip().toFixed(2)}
                </span>
              </p>

              <p>
                Total a pagar:
                <span className="font-semibold ml-1">
                  ${calculateTotal().toFixed(2)}
                </span>
              </p>
            </div>

            <div className="px-4">
              <button className="uppercase py-4 text-center bg-black text-white font-semibold w-full
              hover:bg-black/90"
                onClick={() => dispatch({ type: "save-order" })}
              >
                Guardar Orden
              </button>
            </div>
          </>
        )
      }
    </div>
  )
}