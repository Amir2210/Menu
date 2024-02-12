import { MenuCatagory } from './MenuCatagory ';
import { MenuItemPreview } from './MenuItemPreview';

export function MenuList({ menuItems }) {
  return (
    <section className='menu'>
      <div className="title"><h2>our menu</h2></div>
      <div className="title-underline"></div>
      <MenuCatagory />
      <div className="section-center">
        {menuItems.map(item => <MenuItemPreview key={item.id} item={item} />)}
      </div>
    </section>
  )
}