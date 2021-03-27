import { ThemeProvider } from "@material-ui/styles";
import Header from "./Header";
import theme from "../ui/Theme";
import { BrowserRouter, Route, Switch } from "react-router-dom";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={() => <div>home</div>} />
          <Route exact path="/services" component={() => <div>serv</div>} />
          <Route
            exact
            path="/customsoftware"
            component={() => <div>cust</div>}
          />
          <Route exact path="/mobileapps" component={() => <div>mon</div>} />
          <Route exact path="/websites" component={() => <div>web</div>} />
          <Route exact path="/revolution" component={() => <div>rev</div>} />
          <Route exact path="/about" component={() => <div>ab</div>} />
          <Route exact path="/contact" component={() => <div>cı</div>} />
          <Route exact path="/estimate" component={() => <div>es</div>} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
