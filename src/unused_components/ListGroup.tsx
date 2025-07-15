import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // hook: used to tap into react functions
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    // this is a fragment, it allows multiple tags to be included, else the default allowed num of tags is 1 (child tags do not count, it just counted as 1 parent tag)
    <>
      <h1>{heading}</h1>
      {items.length == 0 && <p>'No item found'</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex == index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
