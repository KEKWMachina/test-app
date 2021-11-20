import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../redux/selectedUsersSlice";
import { useState } from "react";
import { useSelector } from "react-redux";

function User({ user }) {
  const selectedUsers = useSelector((state) => state.selectedUsers);
  const headerClassName = Boolean(
    selectedUsers.find((selectedUser) => selectedUser.id === user.id)
  )
    ? "users-list__name-active"
    : "";
  const checked = Boolean(
    selectedUsers.find((selectedUser) => selectedUser.id === user.id)
  )
    ? false
    : true;
  const [inputValue, setInputValue] = useState(false);
  const disptach = useDispatch();

  function setStatus(event) {
    if (event.target.id === `${user.firstName}-not-active`) {
      disptach(
        removeUser({
          user: user,
        })
      );
    } else {
      disptach(
        addUser({
          user: user,
        })
      );
    }
    setInputValue(!inputValue);
  }

  return (
    <div className="users-list__user-wrapper">
      <div
        className={headerClassName}
      >{`${user.firstName} ${user.lastName}`}</div>
      <div className="users-list__button-container">
        <div className="users-list__checkbox">
          <input
            className="users-checkbox"
            type="radio"
            id={`${user.firstName}-not-active`}
            value={inputValue}
            name={user.id}
            onChange={setStatus}
            checked={checked}
          ></input>
          <label
            className="users-checkbox"
            htmlFor={`${user.firstName}-not-active`}
          >
            Not Active
          </label>
        </div>
        <div className="users-list__checkbox">
          <input
            className="users-checkbox"
            type="radio"
            id={`${user.firstName}-active`}
            value={!inputValue}
            name={user.id}
            onChange={setStatus}
            checked={!checked}
          ></input>
          <label
            className="users-checkbox"
            htmlFor={`${user.firstName}-active`}
          >
            Active
          </label>
        </div>
      </div>
    </div>
  );
}

export default User;
