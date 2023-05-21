import Product from './Product';

function TableProducts({ items, removeItem, editItem }) {
  return (
    <section className='table'>
      <header className='row field-titles'>
        <div>Name</div>
        <div>Price</div>
        <div>Action</div>
      </header>
      {items.map((item) => {
        return (
          <Product
            item={item}
            key={item.id}
            removeItem={removeItem}
            editItem={editItem}
          />
        );
      })}
    </section>
  );
}

export default TableProducts;
