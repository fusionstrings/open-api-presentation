import React from 'react';
import { Image } from 'mdx-deck';

function ImageSplit({children, ...props}){
	return (
		<Image {...props} style={{width: '100%', textAlign: 'center', color: 'black'}}>{children}</Image>
	)
}

export default ImageSplit;