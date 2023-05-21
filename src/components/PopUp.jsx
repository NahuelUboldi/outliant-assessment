import { useState } from 'react';
function PopUp({ item, editItem, setIsActive }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  function handleDone() {
    const editedName = name || item.name;
    const editedPrice = price || item.price;
    editItem(item.id, editedName, editedPrice);
    setIsActive(false);
  }
  function handleCancel() {
    setIsActive(false);
  }

  return (
    <div id='pop-up-wrapper'>
      <div id='pop-up'>
        <h2>Edit Product</h2>

        <input
          id='edit-name'
          type='text'
          placeholder='Name'
          onChange={(e) => setName(e.target.value)}
        />

        <input
          id='edit-price'
          type='number'
          placeholder='Price'
          onChange={(e) => setPrice(e.target.value)}
        />

        <button className='btn btn-primary' onClick={handleDone}>
          Done
        </button>
        <button className='btn btn-secondary' onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default PopUp;
