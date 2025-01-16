import './Product.css'

const Product = () => {
  return (
    <div className='product'>
      <div className='productImage'>
        <img 
        src="https://i.pinimg.com/736x/dc/e0/e4/dce0e4f11cc3ed50ab2995257427bb55.jpg" alt="product image " />
      </div>
      <div className='productText'>
        <h2>Product Title</h2>
        <p>Product Description</p>
      </div>
    </div>
  )
}

export default Product