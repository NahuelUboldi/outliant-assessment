import TableProducts from '../components/TableProducts';
import { useState } from 'react';
import products from '../data/products';

function Products() {
  const [query, setQuery] = useState('');
  const [items, setItems] = useState(products);

  function editItem(id, name, price) {
    const mappedItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, name, price };
      }
      return item;
    });
    setItems(mappedItems);
  }
  function removeItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  function getFilteredItems(query, items) {
    if (!query) return items;
    return items.filter((item) => item.name.includes(query));
  }
  const filteredItems = getFilteredItems(query, items);

  return (
    <main id='products-section'>
      <div className='container'>
        <div className='search-bar'>
          <label className='display-2' htmlFor='search-bar'>
            Products
          </label>
          <input
            id='search-bar'
            type='text'
            placeholder='Search for Keywords...'
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <section className='content'>
          <div className='products'>
            <TableProducts
              items={filteredItems}
              removeItem={removeItem}
              editItem={editItem}
            />
          </div>
          <aside className='form'>
            <div className='form-wrapper'>
              <h2>Header Text</h2>
              <p className='lead'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusantium, commodi?
              </p>
              <form>
                <input type='text' placeholder='Name' />
                <input type='text' placeholder='Price' />
                <button className='btn btn-primary'>Call to Action</button>
              </form>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}

export default Products;
