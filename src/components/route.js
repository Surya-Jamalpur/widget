import { useEffect } from 'react';

const windowPath = window.location.pathname;

const onLocationChange = () => {
    console.log('Hey.. the location changed');
}
const Route = ({ path, children }) => {
    useEffect(() => {
        window.addEventListener('popState', onLocationChange)
    }, [])
    return windowPath === path ? children : null
}

export default Route;