import { OrderItem } from '../types/index';

interface OrderProps {
  orders: OrderItem[]
}

interface OrderItemProps {
  order: OrderItem
}

function Item ({order}: OrderItemProps) {
  const {name, price, quantity} = order
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
      <div className="w-8 h-8 p-2 text-white font-semibold bg-red-500 rounded-full flex items-center justify-center">
        X
      </div>
    </div>
  )
}

export default function Order ({orders}: OrderProps) {
  return (
    <div className="col-span-2 border border-gray-300 rounded-md pb-4
    md:col-span-1 md:pb-0">
      <h2 className="font-semibold text-4xl px-4 py-4">
        Consumo
      </h2>

      <div className="border-y divide-y mb-8
      md:max-h-[304px] md:overflow-y-scroll">
        {
          orders.map((order) => (
            <Item 
              key={order.id} 
              order={order} 
            />
          ))
        }
      </div>

      <div className="px-4 mb-8">
        <p className="font-semibold text-2xl mb-2">
          Propina:
        </p>

        <div className="flex items-center gap-2">
          <label htmlFor="10%">
            10%
          </label>
          <input 
            type="radio"
            id="10%"
            name="propina"
          />
        </div>

        <div className="flex items-center gap-2">
          <label htmlFor="20%">
            20%
          </label>
          <input 
            type="radio"
            id="20%"
            name="propina"
          />
        </div>

        <div className="flex items-center gap-2">
          <label htmlFor="50%">
            50%
          </label>
          <input 
            type="radio"
            id="50%"
            name="propina"
          />
        </div>
      </div>

      <div className="px-4 mb-8 space-y-2">
        <p className="font-semibold text-2xl">
          Totales y Propina
        </p>

        <p>
          Subtotal a pagar:
          <span className="font-semibold ml-1">
            $285.00
          </span>
        </p>

        <p>
          Propina:
          <span className="font-semibold ml-1">
            $28.50
          </span>
        </p>

        <p>
          Total a pagar:
          <span className="font-semibold ml-1">
            $313.50
          </span>
        </p>
      </div>

      <div className="px-4">
        <button className="uppercase py-4 text-center bg-black text-white font-semibold w-full">
          Guardar Orden
        </button>
      </div>
    </div>
  )
}