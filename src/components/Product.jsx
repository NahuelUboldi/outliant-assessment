import { useState } from 'react';
import PopUp from './PopUp';

function Product({ item, removeItem, editItem }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      {isActive && (
        <PopUp item={item} editItem={editItem} setIsActive={setIsActive} />
      )}
      <article className='row product'>
        <div>{item.name}</div>
        <div>{item.price}</div>
        <div>
          <button className='btn btn-primary' onClick={() => setIsActive(true)}>
            Edit
          </button>
          <button
            className='btn btn-secondary'
            onClick={() => removeItem(item.id)}
          >
            Delete
          </button>
        </div>
      </article>
    </>
  );
}

export default Product;
