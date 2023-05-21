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
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/'>About</a>
            </li>
            <li>
              <a href='/'>Services</a>
            </li>
            <li>
              <a href='/products'>Products</a>
            </li>
          </ul>
        </div>
        <button className='btn btn-primary'>Call to Action</button>
      </div>
    </div>
  );
}

export default MenuResponsive;
