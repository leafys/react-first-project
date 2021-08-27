import "./scss/app.scss";
// import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <Dialogs />
      {/* <Profile /> */}
    </div>
  );
};

export default App;
