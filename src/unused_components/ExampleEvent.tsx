// example of using state (very useful)
// each component is going to have its own state

import { useState } from "react";

function ListGroup() {
  const items = ["New York", "San Fran", "Tokyo", "London", "Paris"];
  // hook: used to tap into react functions
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const getMessage = () => {
    return items.length == 0 ? <p>No Item Found</p> : null;
  };

  return (
    // this is a fragment, it allows multiple tags to be included, else the default allowed num of tags is 1 (child tags do not count, it just counted as 1 parent tag)
    <>
      <h1>List</h1>
      {getMessage()}
      <ul className="list-group">
        {/* <li className="list-group-item">item 1</li>
        <li className="list-group-item">item 2</li>
        <li className="list-group-item">item 3</li> */}
        {items.map((items, index) => (
          <li
            className={
              selectedIndex == index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={items}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {items}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
