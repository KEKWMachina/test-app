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
import UsersSection from "./components/users-sections";
import Months from "./components/months";

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
    <div className="App">
      <Router basename="/test-app">
        <Switch>
          <Route exact path="/">
            <Redirect to="/employees" />
          </Route>
          <Route exact path="/employees">
            <div className="users">
              <div className="users-list">
                {users.length !== 0 &&
                  alphabet.map((letter, index) => (
                    <UsersSection letter={letter} key={index} />
                  ))}
              </div>
              <div className="users-selected-list">
                <div className="users-selected-list-header">Birthdays</div>
                {selectedUsers.length !== 0 ? (
                  months.map((month, index) => (
                    <Months month={month} key={index} users={selectedUsers} />
                  ))
                ) : (
                  <div className="users-selected-empty">
                    Employees List is empty
                  </div>
                )}
              </div>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
