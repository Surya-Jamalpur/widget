import React, { useState } from 'react';

const Accordion = ({ items }) => {
    const [activeIndex, setactiveIndex] = useState(null);
    const onTitleClick = (index) => {
        setactiveIndex(index)
    }

    const accItems = items.map((item, index) => {
        const isActive = index === activeIndex ? 'active' : '';
        return <div key={item.title}>
            <div className={`title ${isActive}`} onClick={() => onTitleClick(index)}>
                <i className="dropdown icon"></i>
                {item.title}
            </div>
            <div className={`content ${isActive}`}>
                {item.desc}
            </div>
        </div>
    })
    return <div className="ui styled accordion">{accItems}</div>
}

export default Accordion;



