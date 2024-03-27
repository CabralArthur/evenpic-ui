import Home from './Home';
import PropTypes from 'prop-types';

const HomeContainer = ({ mainColor }) => {
  return (
    <Home mainColor={mainColor}/>
  )
}

HomeContainer.propTypes = {
    mainColor: PropTypes.string
};

export default HomeContainer;
