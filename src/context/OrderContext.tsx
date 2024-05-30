import { createContext, useReducer } from "react";
import { initialState, OrderActions, orderReducer, OrderState } from "../reducers/order-reducer";

type OrderContextProps = {
  state: OrderState
  dispatch: React.Dispatch<OrderActions>
}

export const OrderContext = createContext<OrderContextProps>(null!)

export const OrderProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(orderReducer, initialState)

  return (
    <OrderContext.Provider value={{
      state,
      dispatch
    }}>
      {children}
    </OrderContext.Provider>
  )
}