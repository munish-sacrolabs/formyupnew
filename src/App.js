import "./App.css";
import { Router, Switch, Route, Link } from "react-router-dom";

import LoginFrom from "./component/LoginFrom/LoginFrom";
import FormYup from "./component/formikform/FormYup";
import FinalForm from "./component/finalForm/FinalForm";
import reactRouterDom from "react-router-dom";

function App() {
  return (
    <div class="sidebar">
      <br/>
    <div class="center break-column">
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
        <Link to="/FormYup">
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
     
      
    </div>
    <Switch>
        <Route path="/LoginFrom" component={LoginFrom} />
        <Route path="/FormYup" component={FormYup} />
        <Route path="/FinalForm" component={FinalForm} />
      </Switch>
    </div>
  );
}

export default App;
