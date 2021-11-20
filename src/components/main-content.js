import UsersSection from "./users-sections";
import Months from "./months";

function MainContent({ users, alphabet, selectedUsers, months }) {
  return (
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
          <div className="users-selected-empty">Employees List is empty</div>
        )}
      </div>
    </div>
  );
}

export default MainContent;
