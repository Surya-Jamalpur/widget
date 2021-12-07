
const windowPath = window.location.pathname;
const Route = ({ path, children }) => {
    return windowPath === path ? children : null
}

export default Route;