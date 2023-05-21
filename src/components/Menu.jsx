import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import MenuResponsive from './MenuResponsive';
function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    console.log('click');
    setIsOpen(true);
  }
  return (
    <div className='menu-wrapper'>
      <nav id='menu'>
        {isOpen && <MenuResponsive setIsOpen={setIsOpen} />}
        <div id='logo'>Logo</div>
        <div className='menu-links'>
          <ul>
            <li>
              <a href='/outliant-assessment/'>Home</a>
            </li>
            <li>
              <a href='/outliant-assessment/'>About</a>
            </li>
            <li>
              <a href='/outliant-assessment/'>Services</a>
            </li>
            <li>
              <a href='/outliant-assessment/products'>Products</a>
            </li>
          </ul>
        </div>
        <button className='btn btn-primary menu-call-to-action'>
          Call to Action
        </button>
        <div className='toggle-btn' onClick={handleClick}>
          <FaBars />
        </div>
      </nav>
    </div>
  );
}

export default Menu;
