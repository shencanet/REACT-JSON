import './AddCardBtn.css';

const AddCardBtn = (props) => {
  return (
    <button className='sale' onClick={()=>{alert(`Has comprado ${props.name} en ${props.Price}  `)}}>Comprar</button>
  )
}

export default AddCardBtn