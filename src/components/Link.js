import React from 'react';

const Link = ({ href, className, children }) => {
    const onClick = (event) => {
        event.preventDefault();
        window.history.pushState({}, '', href);

        // this is to let other components  know that the url is changed
        const navEve = new PopStateEvent('popState');
        window.dispatchEvent(navEve);
    }
    return (
        <a href={href} onClick={onClick} className={className}>{children}</a>
    )
}
export default Link;





