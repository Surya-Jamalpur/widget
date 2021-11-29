import React, { useState, useEffect, useRef } from 'react';

const DropdownPractice = (props) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();
    useEffect(() => {
        const onBodyClick = (event) => {
            if (ref.current && ref.current.contains(event.target)) {
                return;
            }
            setOpen(false);
        };
        document.body.addEventListener('click', onBodyClick);

        return () => {
            document.body.removeEventListener('click', onBodyClick);
        }
    }, [])

    const optionsToRender = props.colorOptions.map((color) => {
        return (
            <div onClick={() => props.onSelectedChange(color)} className={`item ${props.selected.lable == color.lable ? 'active' : ''}`} key={color.lable}>
                {color.lable}
            </div>
        )
    })

    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label>DD Practice</label>
                <div onClick={() => setOpen(!open)} className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{props.selected.lable}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {optionsToRender}
                    </div>
                </div>

            </div>
        </div>
    )
}
export default DropdownPractice;