import React from 'react';
import './imageList.css';

const ImageList = (props) => {
  const images = props.images.map(({description, id, urls}) => {
    return <img alt={description} key={id} src={ urls.regular } />
  })

  console.log(images)
  
  
  
  return (
    <div className="image-list">{images}</div>
  )
}

export default ImageList;