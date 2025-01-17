import './Product.css'

export default function Product({name, src, price, features}) {
  // let list=features.map((option)=><li>{option}</li>)
  return (
    <div className='product'>
      <div className='productImage'>
        <img 
        src={src} alt="product image " />
      </div>
      <div className='productText'>
        <h2>{name}</h2>
        <p>{features}</p>
        <h3>{ features=="Sold"? <del>{price}</del>: price>=1999 ? <p><s>${price}</s> {price-Math.floor(price/100)*5}</p> : <p>{price}</p>}</h3>
        <p>{price>=1999?"Discount of 5% ":""}</p>
        <button >Add To Cart</button>
      </div>
    </div>
  )
 
}

