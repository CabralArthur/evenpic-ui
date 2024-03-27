import PropTypes from 'prop-types';
import Gallery from './Gallery';

const GalleryContainer = () => {
  return (
    <Gallery/>    
  )
}

GalleryContainer.propTypes = {
    mainColor: PropTypes.string
};

export default GalleryContainer;
