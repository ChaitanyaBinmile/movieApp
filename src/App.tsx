import { Route, Routes } from "react-router-dom";
import "./App.css";
import { DashboardComponent } from "./components/DashboardComponent/DashboardComponent";
import { HomepageComponent } from "./pages/HomepageComponent/HomepageComponent";
import { RouterPath } from "./router/RouterPath";
import { onAuthStateChanged } from "firebase/auth";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { auth } from "./utilities/firebase";
import {
  setCredentials,
  removeCredentials,
} from "./app/feature/authSlice/authSlice";
import { changeLang } from "./app/feature/langSlice/langSlice";

function App() {
  const dispatch = useAppDispatch();
  const loggedIn = useAppSelector((store) => store.auth.user);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      dispatch(
        setCredentials({ user: user.email, accessToken: user.accessToken })
      );
      // ...
    } else {
      // User is signed out
      // ...
      dispatch(removeCredentials());
    }
  });
    
  const handleLanguageChange=(e:React.ChangeEvent<HTMLSelectElement>)=>{
    dispatch(changeLang(e.target.value))
  }
  return (
    <div className="flex pl-0">
      <div className="absolute top-2 right-2 h-5 grid z-20 ">
          <select className="bg-gray-950 bg-opacity-75 text-white" onChange={handleLanguageChange}>
            <option value="en">English</option>
            <option value="hindi">Hindi</option>
          </select>
        </div>
      {loggedIn && <DashboardComponent />}
      <Routes>
        <Route {...RouterPath.Home} />
        <Route path="Home" Component={HomepageComponent} />
        <Route {...RouterPath.Favourites} />
        <Route {...RouterPath.Trending} />
        <Route {...RouterPath.Calender} />
        <Route {...RouterPath.Login} />
      </Routes>
    </div>
  );
}

export default App;
