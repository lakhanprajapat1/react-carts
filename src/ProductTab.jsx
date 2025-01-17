import Product from "./Product";
import './ProductTab.css'

const ProductTab = () => {
  let option=["hi-tech", "best deal", "sale", "new launch","Sold"];

  return (
    <>
      <Product 
      name="I Phone 16" 
      src="https://i.pinimg.com/736x/4b/69/f6/4b69f6a556641e2d5c7f2b9f59c62812.jpg"
      price={8999}
      features={option[0]}
      />
      <Product 
      name="Macbook Air" 
      src="https://i.pinimg.com/736x/aa/5d/6a/aa5d6a72b8fd7f01295516a4df231c89.jpg"
      price={9999}
      features={option[1]}
      />
      <Product 
      name="AirPods Pro" 
      src="https://i.pinimg.com/736x/84/a6/e0/84a6e09ac911713fc3625b1df83d8441.jpg"
      price={1999}
      features={option[3]}
      />
      <Product 
      name="Watch Ultra" 
      src="https://i.pinimg.com/736x/a5/ef/ba/a5efbaa48ebf441cacdd8bf942d32667.jpg"
      price={7999}
      features={option[0]}
      />
      <Product 
      name="HeadPhone" 
      src="https://i.pinimg.com/736x/7e/d7/6c/7ed76ce2f891f3a6ecd9af95e8db097e.jpg"
      price={999}
      features={option[4]}
      />
      <Product 
      name="Power Bank" 
      src="https://i.pinimg.com/736x/86/a9/3c/86a93cffa4c18dad181a1f049e93697a.jpg"
      price={799}
      features={option[2]} 
      />
    </>
  )
}

export default ProductTab