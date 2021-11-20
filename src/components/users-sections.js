import { useSelector } from "react-redux";
import User from "./user";

function UsersSection({ letter }) {
  const users = useSelector((state) => state.users);
  const sortedUsers = JSON.parse(JSON.stringify(users))[0]
    .sort(function (a, b) {
      return a.firstName.localeCompare(b.firstName);
    })
    .filter((user) => user.firstName[0].toLowerCase() === letter.toLowerCase());

  return (
    <div className="users-list__letter-section">
      <div className="users-list-letter-marker">{letter}</div>
      {sortedUsers.length === 0 ? (
        <div>No employees</div>
      ) : (
        <div>
          {sortedUsers.map((user) => (
            <User key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
}

export default UsersSection;
