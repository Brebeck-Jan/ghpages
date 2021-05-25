import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Salesdashboard from "./salesdashboard"
import Customerdashboard from "./customerdashboard"
import Workshop_planing from "./workshop_planing"
import Order_planing from "./order_planing"

function Customer_B() {
  return (
    <span>
      <table>
        <tr>
          {/* Style Linien drum herum */}
          <td>
            <Link to="/customer/sales">Sales Dashboard</Link>
          </td>
          <td>
            <Link to="/customer/customer">Kundenübersicht</Link>
          </td>
          <td>
            <Link to="/customer/workshop_planing">Werkstattplanung</Link>
          </td>
          <td>
            {/* englisches Wort? */}
            <Link to="/customer/order_planing">Auftragsplanung</Link>
          </td>
        </tr>
      </table>
      <Switch>
        <Route exact path="/customer/sales" component={Salesdashboard} />
        <Route exact path="/customer/customer" component={Customerdashboard} />
        <Route exact path="/customer/workshop_planing" component={Workshop_planing} />
        <Route exact path="/customer/order_planing" component={Order_planing} />
      </Switch>
    </span>
  );
}

export default Customer_B;
