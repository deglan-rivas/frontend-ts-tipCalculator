import Menu from "./components/Menu"
import Order from "./components/Order"

function App() {

  return (
    <>
      <h1 className="text-4xl font-semibold text-center bg-emerald-400 py-4 px-2 mb-8
      md:mb-16">
        Calculadora de Propinas y Consumo
      </h1>

      <section className="grid grid-cols-2 gap-y-4
      md:gap-x-0">
        <Menu
        />
        <Order
        />
      </section>
    </>
  )
}

export default App
