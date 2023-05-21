import heroImg from '../assets/img/hero-img.webp';
function Hero() {
  return (
    <section className='hero'>
      <div>
        <h1 className='display-1'>Lorem ipsum dolor sit amet consectetur</h1>
        <p className='lead'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          repellendus rem fuga accusantium ab sed.
        </p>
        <div className='btns'>
          <button className='btn btn-primary'>Call to Action</button>
          <button className='btn btn-secondary'>See Workspace</button>
        </div>
      </div>
      <div>
        <img src={heroImg} alt='lorem ipsum image' />
      </div>
    </section>
  );
}

export default Hero;
