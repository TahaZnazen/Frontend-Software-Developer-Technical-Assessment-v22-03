import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./components/Main/Main";
import NotFound from "./components/NotFound/NotFound";
import AddFormContainer from "./components/Products/Add/AddFormContainer";
import ProductsContainer from "./components/Products/ProductsContainer";
import UpdateFormContainer from "./components/Products/Update/UpdateFormContainer";

class App extends Component {
  render() {
    return (
      <Main>
        <Switch>
          <Route exact path="/" component={ProductsContainer} />,
          <Route
            path="/edit/:productId"
            render={({ match }) => (
              <UpdateFormContainer
                productId={parseInt(match.params.productId)}
              />
            )}
          />
          <Route path="/add" component={AddFormContainer} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Main>
    );
  }
}

export default App;
