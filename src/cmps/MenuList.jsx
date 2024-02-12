import { MenuCatagory } from './MenuCatagory ';
import { MenuItemPreview } from './MenuItemPreview';

export function MenuList({ menuItems, onChangeCatagory }) {
  return (
    <section className='menu'>
      <div className="title"><h2>our menu</h2></div>
      <div className="title-underline"></div>
      <MenuCatagory onChangeCatagory={onChangeCatagory} />
      <div className="section-center">
        {menuItems.map(item => <MenuItemPreview key={item.id} item={item} />)}
      </div>
    </section>
  )
}