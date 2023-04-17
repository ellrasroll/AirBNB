import './App.css';
import a1 from "./images/airbnbCabin.png";
import a2 from "./images/airbnbHome.png";
import a3 from "./images/airbnbPets.png";
import a4 from "./images/airbnbUnique.png";

const App = () => {
    return (
      <div>
        <Person poster ={a1}/>
        <Person poster ={a2}/>
        <Person poster ={a3}/>
        <Person poster ={a4}/>
      </div>

        )
        }
        



const Person = (poster) => {
  return ( 
    <div class name="posterWrapper"> 
    <img src={poster.poster} alt="5"/>
    </div>
  )

}

// const AirbnbCards = () => {

// }

// const BbcArticle = () => {

// }
export default App;
