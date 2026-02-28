import Product from "./product.jsx"
import "./ProductTab.css"

function Title(){
  return (
    <h1>
      Blocbuster Deals on Computer Deals : Shop Now
    </h1>

  )
}

export default function ProductTab() {
  return (
    
    <>
    <Title/>
    <div className="coll">
      
      <Product Title="Logitech MX Master"Feature1="8000 DPI" Feature2="5 Programmable Buttons"price="12,495" Realprice="8,999"/>
      <Product Title="Apple pencil (2nd Gen)"Feature1="Intutive touch Surface" Feature2="Designed For iPad Pro"price="11,900" Realprice="9,199"/>
      <Product Title="Zebronics"Feature1="Designed For iPad Pro" Feature2="Intutive touch Surface"price="1,599" Realprice="899"/>
      <Product Title="Potronics Toad"Feature1="8000 DPI" Feature2="5 Programmable Buttons"price="599" Realprice="278"/>
    </div>
    </>
  )
}
