import './Product.css'

export default function Product({name, src, price, features}) {
  // let list=features.map((option)=><li>{option}</li>)
  var styles={opacity:features=="Sold"?"0.3":""}
  var sold={backgroundColor:features=="Sold"?"red":""}
  return (
    <div className='product'>
      <div className='productImage'>
        <img 
        src={src} alt="product image " />
      </div>
      <div className='productText'>
        <h2>{name}</h2>
        <p style={sold}>{features}</p>
        <h3 >{ features=="Sold"? <del>{price}</del>: price>=1999 ? <p><s>${price}</s> {price-Math.floor(price/100)*5}</p> : <p>{price}</p>}</h3>
        {price>=1999? <p>Discount Of 5%</p>: null}
        <button style={styles} onClick={features=="Sold"?"":(idx)=>{alert('Item is Successfully Add Cart')}}>Add To Cart</button>
      </div>
    </div>
  )
}

