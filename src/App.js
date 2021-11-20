import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUsersData } from "./redux/usersSlice";
import { retrieveStorage } from "./redux/selectedUsersSlice";
import MainContent from "./components/main-content";

function App() {
  const users = useSelector((state) => state.users);
  const selectedUsers = JSON.parse(
    JSON.stringify(useSelector((state) => state.selectedUsers))
  );
  selectedUsers.sort(function (a, b) {
    return a.lastName.localeCompare(b.lastName);
  });

  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet = alpha.map((x) => String.fromCharCode(x));
  const dispatch = useDispatch();
  const months = [
    "November",
    "December",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
  ];

  useEffect(() => {
    dispatch(getUsersData({}));
    dispatch(retrieveStorage({}));
  }, [dispatch]);

  return (
    <Router basename="/test-app">
      <Switch>
        <Route exact path="/">
          <Redirect to="/employees" />
        </Route>
        <Route exact path="/employees">
          <MainContent users={users} alphabet={alphabet} selectedUsers={selectedUsers} months={months} />
        </Route>
        <Route path="*">
          <Redirect to="/employees" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
