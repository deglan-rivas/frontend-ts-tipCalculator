import { MenuItem, OrderItem } from "../types"

export type OrderState = {
  orders: OrderItem[]
  tip: number
}

export type OrderActions =
  { type: "add-order", payload: { menuItem: MenuItem } } |
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

    case "add-order": {
      const { id } = action.payload.menuItem
      const currentOrder = state.orders.find((order) => order.id === id)
      if (currentOrder) {
        const newOrder: OrderItem = { ...currentOrder, quantity: currentOrder.quantity + 1 }
        return {
          ...state,
          orders: state.orders.map((order) => order.id === id ? newOrder : order)
        }
      }

      const newOrder: OrderItem = { ...action.payload.menuItem, quantity: 1 }
      return {
        ...state,
        orders: [...state.orders, newOrder]
      }
    }

    case "set-tip": {

      return {
        ...state,
        tip: action.payload.tip
      }
    }

    case "delete-order": {

      return {
        ...state,
        orders: state.orders.filter((order) => order.id !== action.payload.id)
      }
    }

    case "save-order": {

      return {
        ...state,
        orders: [],
        tip: 0
      }
    }

    default:
      return state
  }
}