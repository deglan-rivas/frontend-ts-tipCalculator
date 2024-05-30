import { OrderItem } from "../types"

export type OrderState = {
  orders: OrderItem[]
  tip: number
}

export type OrderActions =
  { type: "add-order", payload: { order: OrderItem } } |
  { type: "set-tip", payload: { tip: number } } |
  { type: "delete-order", payload: { id: OrderItem["id"] } } |
  { type: "save-order" }

export const initialState: OrderState = {
  orders: [],
  tip: 0
}

export const orderReducer = (
  state: OrderState = initialState,
  action: OrderActions
) => {
  switch (action.type) {
    case "add-order":
      return {
        ...state,
      }
    case "set-tip":
      return {
        ...state,
      }
    case "delete-order":
      return {
        ...state,
      }
    case "save-order":
      return {
        ...state,
      }
    default:
      return state
  }
}