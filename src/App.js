import './index.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';


function App() {
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
    <div className="App">
      <Header title="To doer"/>
      <Content 
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}/>
      <Footer 
      length = {items.length}/>
    </div>
  );
}

export default App;