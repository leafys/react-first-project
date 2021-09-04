import "./scss/app.scss";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";
import Note from "./components/Note/Note";
import News from "./components/News/News";
import Setings from "./components/Setings/Setings";

const App = ({ state }) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav state={state.navbarInfo} />
        <div className="app-wrapper-content">
          <Route
            path="/profile"
            render={() => <Profile state={state.profilePage} />}
          />
          <Route
            path="/dialogs"
            render={() => <Dialogs state={state.dialogsPage} />}
          />
          <Route path="/news" component={News} />
          <Route path="/music" component={Note} />
          <Route path="/setings" component={Setings} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
