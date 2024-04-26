import { menuItems } from "../data/db"

function MenuItem ({item}) {
  const {name, price} = item
  return (
    <div className="flex justify-between px-3 py-2 border-2 border-emerald-400 rounded-md mb-4">
      <p>
        {name}
      </p>
      <p className="font-semibold">
        ${price}
      </p>
    </div>
  )
}

export default function Menu () {
  return (
    <div className="col-span-2
    md:col-span-1">
      {/* <h2 className="font-semibold text-4xl px-4 py-4 mb-4">
        Menú
      </h2>

      <div className="px-4">
        {
          menuItems.map((item) => (
            <MenuItem 
              key={item.id} 
              item={item} 
            />
          ))
        }
      </div> */}
    </div>
  )
}