import { useState } from "react";

export default function List({ contacts }) {
  const [filterText, setFilterText] = useState("");
  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase())
    );
  });
  return (
    <div>
      <input
        placeholder="Filter Contact"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <ul className="list">
        {filtered.map((person, index) => (
          <li key={index}>
            <span>{person.fullname}</span> <span>{person.phone_number}</span>
          </li>
        ))}
      </ul>
      <p>
        {filtered.length ? "Total (" + filtered.length + ")" : "Not Found!"}
      </p>
    </div>
  );
}
