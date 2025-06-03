import React from 'react';
import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const Content = () => {
  const [items, setItems] = useState([
    { id: 1, item: 'Buy milk', checked: true },
    { id: 2, item: 'Buy bread', checked: true },
    { id: 3, item: 'Buy Tie', checked: false }
  ]);
  const handleCheck = (id) => {
    const listItems = items.map((item) => 
    item.id === id ? {...item, checked: !item.checked } : item)
    setItems(listItems);
    localStorage.setItem("todo", JSON.stringify(listItems));
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => 
      item.id !== id)
    setItems(listItems);
    localStorage.setItem("todo", JSON.stringify(listItems));
  }

  return (
    <main>
      {(items.length) ? (
      <ul>
        {items.map((item) => (
          <li className="item" key={item.id}>
            <input 
              type="checkbox" 
              onChange={() =>handleCheck(item.id)}
              checked={item.checked}
            />
            <label
                style={{ textDecoration: item.checked ? 'line-through' : 'none' }} 
                onDoubleClick={() =>handleCheck(item.id)}>{item.item}</label>
            <FaTrashAlt 
              className="trash-icon"
              role="button" 
              onClick={() => handleDelete(item.id)}
              tabIndex="0" 
            />
          </li>
        ))}
      </ul>
  ) : (
    <p className="no-items">Nothing To Do, Doer</p>
  )}
    </main>
  );
};

export default Content;