import { useState } from 'react'
import data from './data'
const App = () => {
  const [menuItems, setMenuItems] = useState(data)
  return <h2>Menu Starter</h2>
}
export default App
