import Router from "./Config/Router";
import "./App.css";
import  store  from "./store";
import { Provider} from "react-redux";
// import Header from './view/Header'
// import Footer from "./view/Footer";

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Router />
    </div>
    </Provider>
  );
}

export default App;
