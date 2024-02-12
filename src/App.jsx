import { useState } from 'react'
import data from './data'
import { MenuList } from './cmps/MenuList'
const App = () => {
  const [menuItems, setMenuItems] = useState(data)
  const [catagory, setCatagory] = useState('all')
  return (
    <main>
      <MenuList menuItems={menuItems} />
    </main>
  )
}
export default App
