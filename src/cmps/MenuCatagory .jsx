export function MenuCatagory({ onChangeCategory }) {
  return (
    <div className="btn-container">
      <button onClick={(event) => onChangeCategory(event.target.innerText)} className='btn'>all</button>
      <button onClick={(event) => onChangeCategory(event.target.innerText)} className='btn'>breakfast</button>
      <button onClick={(event) => onChangeCategory(event.target.innerText)} className='btn'>lunch</button>
      <button onClick={(event) => onChangeCategory(event.target.innerText)} className='btn'>shakes</button>
    </div>
  )
}