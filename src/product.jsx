import "./product.css"

// function Product({ title, price, features}) {
//     const styles={backgroundColor: price>30000 ? "yellow":""}
//   return (
//     < div style={styles} className="box">
//       <h1>{title}</h1>
      
//       {price > 30000 ? 
//         <p>
//           Discount of 5% is applied.
//           <br />
//           <h2>
//           price:
//            {(price - 0.05 * price)} </h2>
//         </p>:
//         <h2>price: {price}</h2>
//       }
//       <ul>
//         {features.map((element) => (
//           <li>{element}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }

export default function Product({Title,Feature1,Feature2,price,Realprice}){
  return (
    <div className="Box" >
    <h2>{Title}</h2>
    <p>{Feature1}</p>
    <p>{Feature2}</p>
    <div className="pricebox">
      <p className="price">{price}</p>&nbsp; &nbsp; <b><p>{Realprice}</p></b>
    </div>
    </div>
  )
}
