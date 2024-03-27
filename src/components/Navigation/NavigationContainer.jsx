import Navigation from './Navigation';
import { useNavigate } from "react-router-dom";

const NavigationContainer = () => {
    const navigate = useNavigate();

    const onReturnClick = () => navigate('/');

    const getNavigationItems = () => {
        return 'Home / Hoje';
    };

    return (
        <Navigation getNavigationItems={getNavigationItems} onReturnClick={onReturnClick}/>
    )
};

export default NavigationContainer;
