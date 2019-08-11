import './imageList.css';

import React from 'react';
import ImageCard from './imageCard';

const ImageList = props => {

	const images = props.images.map((image) => 
	{
		
		return <ImageCard key = {image.id}  image = {image} />
	});
	return <div className = "image-list"> {images} </div>

};

export default ImageList;