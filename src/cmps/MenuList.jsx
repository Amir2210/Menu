import { MenuCatagory } from './MenuCatagory ';
import { MenuItemPreview } from './MenuItemPreview';

export function MenuList({ menuItems, onChangeCategory, category }) {
  const filteredMenu = category === 'all' ? menuItems : menuItems.filter(item => item.category === category)
  return (
    <section className='menu'>
      <div className="title"><h2>our menu</h2></div>
      <div className="title-underline"></div>
      <MenuCatagory onChangeCategory={onChangeCategory} />
      <div className="section-center">
        {filteredMenu.map(item => <MenuItemPreview key={item.id} item={item} />)}
      </div>
    </section>
  )
}