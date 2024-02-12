export function MenuCatagory({ onChangeCatagory }) {
  return (
    <div className="btn-container">
      <button onClick={(event) => onChangeCatagory(event.target.innerText)} className='btn'>all</button>
      <button onClick={(event) => onChangeCatagory(event.target.innerText)} className='btn'>breakfast</button>
      <button onClick={(event) => onChangeCatagory(event.target.innerText)} className='btn'>lunch</button>
      <button onClick={(event) => onChangeCatagory(event.target.innerText)} className='btn'>snakes</button>
    </div>
  )
}