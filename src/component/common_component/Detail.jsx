import React from 'react';

function Detail(props) {
  const { img, title, author, publisher, link, desc,date } = props.details;

  return (
    <div className='detail-div'>
      <button className='cut' onClick={props.cut}>x</button>
      <div className='detail-div1'>
        <div className='detail-div2'>
          <img src={img} alt="" />
          <div className='detail-div3'>
            <h1>{title}</h1>
            <h4>{author}</h4>
            <h4>{date}</h4>
            <h6>{publisher}</h6>
            <a href={link} target='_blank'><button>more</button></a>
          </div>
        </div>
        <hr />
        <div className='para-div'>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default Detail;
