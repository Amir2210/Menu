import { useState } from 'react'
import data from './data'
import { MenuList } from './cmps/MenuList'
const App = () => {
  const [menuItems, setMenuItems] = useState(data)
  const [category, setCategory] = useState('all')

  function onChangeCategory(category) {
    setCategory(category.toLowerCase())
  }
  return (
    <main>
      <MenuList menuItems={menuItems} onChangeCategory={onChangeCategory} category={category} />
    </main>
  )
}
export default App
