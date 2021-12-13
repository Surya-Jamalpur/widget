import React from 'react';

const Link = ({ href, className, children }) => {
    const onClick = (event) => {
        event.preventDefault();
        window.history.pushState({}, '', href);
    }
    return (
        <a href={href} onClick={onClick} className={className}>{children}</a>
    )
}
export default Link;





