import './App.css'
import ProductTab from "./ProductTab.jsx"
import Likebutton from './likeButton.jsx'
import Msg from "./msg.jsx"


function Title() {
  return <h1>I am A Python Programmer</h1>
}

function Foot() {
  return <h1>Ips academy Indore</h1>
}

function App() {
  let age = "21"

  return (
    <>
      <Title />
      <h1 id='h12'>This Is my App</h1>
      <ProductTab />
      <Msg Name="Hi..I am a Developer" Colour="Red"/>
      <Msg Name="Hi..I am a Developer" Colour="blue"/>
      <p>I am Hitesh Kumar age {age}</p>
      <Likebutton/>
      <Foot />
    </>
  )
}

export default App
