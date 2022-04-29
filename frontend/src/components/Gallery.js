import React, { useState } from 'react';
import gallery from '../data/gallery';

const Gallery = () => {
  const [model, setModel] = useState(false);
  const [imgSrc, setImgSrc] = useState('');
  const getImg = (imgSrc) => {
    setImgSrc(imgSrc);
    setModel(true);
  };
  return (
    <>
      <div className={model ? 'model open' : 'model'}>
        <img src={imgSrc} alt='gallery' />
        <i
          className='fas fa-times model-close-btn'
          onClick={() => setModel(false)}
        ></i>
      </div>
      <div className='gallery'>
        {gallery.map((item) => (
          <div
            className='pics'
            key={item.id}
            onClick={() => getImg(item.image)}
          >
            <img src={item.image} alt='gallery' />
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
