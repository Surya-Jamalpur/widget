import React from 'react';

const Dropdown = ({ colorOptions }) => {
    const optionsToRender = colorOptions.map((color) => {
        return (
            <div className="item" key={color.lable} >
                {color.value}
            </div>
        )
    })
    return (
        <div className="ui form">
            <div className="field">
                <label className="label">Select a Color</label>
                <div className="ui selection dropdown visible active">
                    <i className="dropdown icon"></i>
                    <div className="text">Select Color</div>
                    <div className="menu visible transition">
                        {optionsToRender}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dropdown;