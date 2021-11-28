import React from 'react';

const Dropdown = ({ colorOptions, selected, onSelectedChange }) => {
    const optionsToRender = colorOptions.map((color) => {
        return (
            <div onClick={() => onSelectedChange(color)} className="item" key={color.lable} >
                {color.lable}
            </div>
        )
    })
    return (
        <div className="" style={{ width: '500px', margin: '0px auto' }}>

            <div className="ui form">
                <div className="field">
                    <label className="label">Select a Color</label>
                    <div className="ui selection dropdown visible active">
                        <i className="dropdown icon"></i>
                        <div className="text">{selected.lable}</div>
                        <div className="menu visible transition">
                            {optionsToRender}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dropdown;