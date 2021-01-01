import React from 'react';
import Image from 'gatsby-image';
import { ImageThumbnailWrapper } from './styles';

export default function ImageThumbnail({ isActive, onClick, image }) {
  const handleClick = () => {
    onClick(image);
  };

  return (
    <ImageThumbnailWrapper onClick={handleClick} isActive={isActive}>
<<<<<<< HEAD
      <Image fluid={image.localFile?.childImageSharp.fluid} />
=======
      <Image fluid={image?.localFile?.childImageSharp?.fluid} />
>>>>>>> 9937a88f62fd2bb141777619753a58538ffe0222
    </ImageThumbnailWrapper>
  );
}
