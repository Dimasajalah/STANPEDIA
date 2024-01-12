import React, { useState } from 'react';

const App = () => {
  const [items, setItems] = useState([]);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [newText, setNewText] = useState('');

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const handleTextChange = (e) => {
    setNewText(e.target.value);
  };

  const handleAddItem = () => {
    if (newText.trim() !== '') {
      setItems([...items, newText]);
      setNewText('');
      closePopup();
    }
  };

  const handleDeleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <div>
      <h1>CRUD App</h1>

      <button onClick={openPopup}>Add Text</button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleDeleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>

      {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <h2>Add Text</h2>
            <input
              type="text"
              placeholder="Enter text"
              value={newText}
              onChange={handleTextChange}
            />
            <button onClick={handleAddItem}>Save</button>
            <button onClick={closePopup}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;




