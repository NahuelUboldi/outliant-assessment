import img from '../assets/img/img2.webp';
function Footer() {
  return (
    <section id='footer'>
      <div className='container'>
        <div>
          <img src={img} alt='lorem ipsum image' />
        </div>
        <div>
          <h2 className='display-2'>Lorem ipsum dolor sit amet consectetur</h2>
          <p className='lead'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            repellendus rem fuga accusantium ab sed.
          </p>
          <div className='btns'>
            <button className='btn btn-primary'>Call to Action</button>
            <button className='btn btn-secondary'>See Workspace</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
