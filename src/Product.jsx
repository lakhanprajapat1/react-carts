import './Product.css'

export default function Product({name, src, price, features}) {
  return (
    <div className='product'>
      <div className='productImage'>
        <img 
        src={src} alt="product image " />
      </div>
      <div className='productText'>
        <h2>{name}</h2>
        <h3>{"$ "+price}</h3>
        <p>{features}</p>
      </div>
    </div>
  )
}

