import './App.css'
import ProductTab from './ProductTab';
import MsgBox from './MsgBox.jsx';


function App() {
  return (
    <div className='main'>
      <MsgBox userName="User!" textColor="orange"/>
      <ProductTab/>
    </div>
  )
}

export default App;
