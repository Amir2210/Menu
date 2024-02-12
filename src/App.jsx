import { useState } from 'react'
import data from './data'
import { MenuList } from './cmps/MenuList'
const App = () => {
  const [menuItems, setMenuItems] = useState(data)
  const [catagory, setCatagory] = useState('all')
  function onChangeCatagory(catagory) {
    console.log(catagory)
    setCatagory(catagory)
  }
  return (
    <main>
      <MenuList menuItems={menuItems} onChangeCatagory={onChangeCatagory} />
    </main>
  )
}
export default App
