import { menuItems } from "../data/db"
import { MenuItem } from "../types"

interface MenuProps {
  addOrder: (item: MenuItem) => void
}

interface MenuItemProps {
  item: MenuItem
  addOrder: (item: MenuItem) => void
}

function Item ({item, addOrder}: MenuItemProps) {
  const {name, price} = item
  return (
    <div className="flex justify-between px-3 py-2 border-2 border-emerald-400 rounded-md mb-4 cursor-pointer
    hover:bg-gray-100"
      onClick={() => addOrder(item)}
    >
      <p>
        {name}
      </p>
      <p className="font-semibold">
        ${price}
      </p>
    </div>
  )
}

export default function Menu ({addOrder}: MenuProps) {
  return (
    <div className="col-span-2
    md:col-span-1">
      <h2 className="font-semibold text-4xl px-4 py-4 mb-4">
        Menú
      </h2>

      <div className="px-4">
        {
          menuItems.map((item) => (
            <Item 
              key={item.id} 
              item={item}
              addOrder={addOrder}
            />
          ))
        }
      </div>
    </div>
  )
}