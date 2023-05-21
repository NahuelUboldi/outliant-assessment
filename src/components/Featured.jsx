import img from '../assets/img/img.webp';
function Featured() {
  return (
    <section id='featured'>
      <div className='container'>
        <div>
          <h2>Header Text</h2>
          <p className='lead'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            necessitatibus, doloribus nulla nam nihil saepe rem incidunt odit
            quis autem.
          </p>
        </div>
        <div>
          <img src={img} alt='lorem ipsum image 2' />
        </div>
        <div>
          <h2>Header Text</h2>
          <p className='lead'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            necessitatibus, doloribus nulla nam nihil saepe rem incidunt odit
            quis autem.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Featured;
