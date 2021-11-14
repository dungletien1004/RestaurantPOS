import Foods from './components/foodList';
import Footer from './components/Footer';
import Header from './components/Header';
import {Container} from "@material-ui/core"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ManagerSignIn from './components/managerSignIn';
function App() {

  return (
    
    <div className="App">
      
      <Header /> 
      <Switch>
      <Route path="/menuEdit">
        <ManagerSignIn />
      </Route>

      <Route path="/">
        <p></p>
        <Foods />
        <p></p>
      
      </Route>
     
      </Switch>
      <Footer /> 
    </div>
 
  );
}

export default App;
