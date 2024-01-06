import './App.css';
import ClockList from './components/ClockList.jsx';
import Form from './components/Form.jsx';
function App() {
  const quantaties = [1]
  return <div>
    <Form/>
     <ClockList quantaties={quantaties} />
  
   </div>
}

export default App
