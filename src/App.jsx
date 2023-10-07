
import './App.css'
import Cards from './components/cards'

let first = {name : 'vansh pal' , discription: 'fist card'};
function App() {
  return (
    <>
      <h3 className= 'mb-4'>Learn React Props : </h3>
      <div>
       <Cards props = {first}/>
       {/* <Cards />
       <Cards /> */}
       </div>
    </>
  )
}

export default App
