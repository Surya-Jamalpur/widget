import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, selected, onSelectedChange }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();
    useEffect(() => {
        document.body.addEventListener('click', (event) => {

            if (ref.current.contains(event.target)) {
                return;
            }
            setOpen(false);
        })
    }, [])
    const optionsToRender = options.map((option) => {
        if (option.value === selected.value) {
            return null;
        }
        return (
            <div onClick={() => {
                console.log('clicked item..');
                onSelectedChange(option)
            }} className="item" key={option.lable} >
                {option.lable}
            </div>
        )
    })
    return (
        <div ref={ref} className="" style={{ width: '500px', margin: '0px auto' }}>

            <div className="ui form">
                <div className="field">
                    <label className="label">Select a option</label>
                    <div onClick={() => {
                        console.log('clicked Dropdown..');
                        setOpen(!open)
                    }
                    } className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                        <i className="dropdown icon"></i>
                        <div className="text">{selected.lable}</div>
                        <div className={`menu ${open ? 'visible transition' : ''}`}>
                            {optionsToRender}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dropdown;