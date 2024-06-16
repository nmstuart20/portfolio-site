import React, { useState } from 'react';

function Gallery () {
  const images = [
    { id: 1, url: 'image1.jpg', alt: 'Image of a spartan race' },
    { id: 2, url: 'image2.jpg', alt: 'Image of some skiers' },
    { id: 3, url: 'image3.jpg', alt: 'Image of a golden doodle' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <>
    <div className="header-container">
    <header className="page-header">Photo Gallery
          <div style={{ fontSize: 'small' }}>Photos from over the years.</div>
      </header><div className="gallery">
              <button onClick={goToPrevious}>←</button>
              <div className="gallery-item">
                  <img src={images[currentIndex].url} alt={images[currentIndex].alt} />
              </div>
              <button onClick={goToNext}>→</button>
          </div>
          </div></>
  );
};

export default Gallery;