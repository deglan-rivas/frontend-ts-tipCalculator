import { useState } from "react"
import Menu from "./components/Menu"
import Order from "./components/Order"
import { MenuItem, OrderItem } from "./types"

function App() {
  const [orders, setOrders] = useState([] as OrderItem[])
  const [tip, setTip] = useState(0)

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

  function deleteOrder (id: OrderItem["id"]): void {
    setOrders(orders.filter((order) => order.id !== id))
  }

  function calculateSubtotal (): number {
    return orders.reduce((total, order) => total + order.price * order.quantity, 0)
  }

  function calculateTip (): number {
    return calculateSubtotal() * tip
  }

  function calculateTotal (): number {
    return calculateSubtotal() + calculateTip()
  }

  function saveOrder (): void {
    setOrders([])
    setTip(0)
  }

  return (
    <>
      <h1 className="text-4xl font-semibold text-center bg-emerald-400 py-4 px-2 mb-8
      md:mb-16">
        Calculadora de Propinas y Consumo
      </h1>

      <section className="grid grid-cols-2 gap-y-4
      md:gap-x-0">
        <Menu
          addOrder={addOrder}
        />
        <Order
          orders={orders}
          deleteOrder={deleteOrder}
          setTip={setTip}
          calculateSubtotal={calculateSubtotal}
          calculateTip={calculateTip}
          calculateTotal={calculateTotal}
          saveOrder={saveOrder}
          tip={tip}
        />
      </section>
    </>
  )
}

export default App
