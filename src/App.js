import "./App.css";
import { Router, Switch, Route, Link } from "react-router-dom";
import FoYup from "./component/Yup/FoYup";
import LoginFrom from "./component/LoginFrom/LoginFrom";
import FinalForm from "./component/FinalForm";
import reactRouterDom from "react-router-dom";

function App() {
  return (
    
    <div >
      <div>
        <Link to="/LoginFrom">
          <div className="linkButton">
            <button type="submit" className="linkBtn">
              Login Form
            </button>
          </div>
        </Link>
      </div>
      <div>
        <Link to="/FoYup">
          <div className="linkButton">
            <button type="submit" className="linkBtn">
              Formik Form
            </button>
          </div>
        </Link>
      </div>
      <div>
        <Link to="/FinalForm">
          <div className="linkButton">
            <button type="submit" className="linkBtn">
              Final Form
            </button>
          </div>
        </Link>
      </div>
      <br />
      <br />
      <br />
      <Switch>
        <Route path="/LoginFrom" component={LoginFrom} />
        <Route path="/FoYup" component={FoYup} />
        <Route path="/FinalForm" component={FinalForm} />
      </Switch>
    </div>
  );
}

export default App;
