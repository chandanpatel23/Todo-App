
import './App.css';
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";

function App() {
    const onDelete = (todo) => {
        console.log("I am onDelete of todo");
    }
  let todos =[
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to the market to buy vegetables"
    },
    {
      sno: 2,
      title: "Go to the mall",
      desc: "You need to go to the mall to buy clothes"
    },
    {
      sno: 3,
      title: "Go to the gym",
      desc: "You need to go to the gym to stay fit"
    }

    ]
  
  return (
    
    
    <>
   <Header title = "My Todos List" searchBar = {false} />
   <Todos todos = {todos} onDelete={onDelete}/>
   <Footer/>
    </>
  );
}

export default App;
