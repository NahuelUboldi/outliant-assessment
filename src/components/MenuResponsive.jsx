import { FaTimes } from 'react-icons/fa';

function MenuResponsive({ setIsOpen }) {
  function handleClick() {
    setIsOpen(false);
  }
  return (
    <div className='responsive-menu'>
      <div>
        <div className='close-btn' onClick={handleClick}>
          <FaTimes />
        </div>
        <div className='links'>
          <ul>
            <li>
              <a href='/outliant-assessment'>Home</a>
            </li>
            <li>
              <a href='/outliant-assessment'>About</a>
            </li>
            <li>
              <a href='/outliant-assessment'>Services</a>
            </li>
            <li>
              <a href='/outliant-assessment/products'>Products</a>
            </li>
          </ul>
        </div>
        <button className='btn btn-primary'>Call to Action</button>
      </div>
    </div>
  );
}

export default MenuResponsive;
