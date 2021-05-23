import { Route, Link, Switch } from "react-router-dom";
// import  from "./salesdashboard"
// import  from "./customerdashboard"

function Customer() {
  return (
    <span>
      {/* <table>
        <tr>
          {/* Style Linien drum herum 
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
            <Link to="/customer/order_planing">Auftragsplanung</Link>
          </td>
        </tr>
      </table>
      <Switch>
        <Route exact path="/customer_b/sales" component={Salesdashboard} />
        <Route exact path="/customer_b/customer" component={Customerdashboard} />
      </Switch> */}
    </span>

  );
}

export default Customer;
