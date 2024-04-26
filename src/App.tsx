import { useState } from "react"
import Menu from "./components/Menu"
import Order from "./components/Order"
import { MenuItem, OrderItem } from "./types"

function App() {
  const [orders, setOrders] = useState([] as OrderItem[])

  function addOrder (menuItem: MenuItem): void {
    const {id} = menuItem
    const currentOrder = orders.find((order) => order.id === id)
    if (currentOrder) {
      const newOrder: OrderItem = {...currentOrder, quantity: currentOrder.quantity + 1}
      setOrders(orders.map((order) => order.id === id ? newOrder : order))
      return
    }

    const newOrder: OrderItem = {...menuItem, quantity: 1}
    setOrders([...orders, newOrder])
    return
  }

  return (
    <>
      <h1 className="text-4xl font-semibold text-center bg-emerald-400 py-4 px-2 mb-8
      md:mb-16">
        Calculadora de Propinas y Consumo
      </h1>

      <section className="grid grid-cols-2 gap-y-4
      md:gap-x-8">
        <Menu
          addOrder={addOrder}
        />
        <Order
          orders={orders}
        />
      </section>
    </>
  )
}

export default App
