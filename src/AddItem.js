import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useRef } from 'react'

export const AddItem = ({newItem, setNewItem, handleSubmit}) => {

  const inputRef = useRef();
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item:</label>
      <input
        autoFocus
        ref={inputRef}
        type="text"
        id="addItem"
        placeholder="Add Item..."
        required
        value={newItem}  // Fixed: was "vlaue"
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button 
        type="submit"
        aria-label="Add Item"  // Fixed: was "aiea-label"
        onClick={() => {inputRef.current.focus()}}
      >
      <FaPlus />
      </button>
      </form>
  )
}
