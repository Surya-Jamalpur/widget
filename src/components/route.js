import { useEffect, useState } from 'react';

// const windowPath = window.location.pathname;


const Route = ({ path, children }) => {
    const [windowPath, setwindowPath] = useState(window.location.pathname);
    useEffect(() => {
        const onLocationChange = () => {
            console.log('Hey.. the location changed');
            setwindowPath(window.location.pathname);
        }
        window.addEventListener('popState', onLocationChange);

        return () => {
            window.removeEventListener('popState', onLocationChange);
        }
    }, [])
    return windowPath === path ? children : null
}

export default Route;