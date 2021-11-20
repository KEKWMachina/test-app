function Months({ month, users }) {
  const filteredByMonth = users.filter(
    (user) =>
      new Date(user.dob).toLocaleString("en-EN", { month: "long" }) === month
  );

  function formatBday(user) {
    if (user) {
      const date = new Date(user);
      const month = date.toLocaleString("en-EN", { month: "long" });
      return `${date.getDate()} ${month} ${date.getFullYear()}`;
    }
  }

  return (
    <>
      <div className="users-list__month-header">{month}</div>
      {filteredByMonth.length > 0 ? (
        filteredByMonth.map((user) => (
          <div className="users-list__selected-user" key={user.id}>
            {`${user.firstName} ${user.lastName}`} {formatBday(user.dob)}
          </div>
        ))
      ) : (
        <div className="users-list__no-b-days-msg">No Employees</div>
      )}
    </>
  );
}

export default Months;
