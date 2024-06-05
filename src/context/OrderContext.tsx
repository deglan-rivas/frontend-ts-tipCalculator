import { createContext, useReducer } from "react";
import { initialState, OrderActions, orderReducer, OrderState } from "../reducers/order-reducer";

type OrderContextProps = {
  state: OrderState
  dispatch: React.Dispatch<OrderActions>
  calculateSubtotal: () => number
  calculateTip: () => number
  calculateTotal: () => number
}

export const OrderContext = createContext<OrderContextProps>(null!)

export const OrderProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(orderReducer, initialState)

  function calculateSubtotal(): number {
    return state.orders.reduce((total, order) => total + order.price * order.quantity, 0)
  }

  function calculateTip(): number {
    return calculateSubtotal() * state.tip
  }

  function calculateTotal(): number {
    return calculateSubtotal() + calculateTip()
  }

  return (
    <OrderContext.Provider value={{
      state,
      dispatch,
      calculateSubtotal,
      calculateTip,
      calculateTotal
    }}>
      {children}
    </OrderContext.Provider>
  )
}