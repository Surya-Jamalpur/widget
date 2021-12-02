import React, { useState, useEffect } from 'react';
import Dropdown from './Dropdown';
import Convert from './convert';
import axios from 'axios';


const languages = [
    {
        lable: 'Afrikaans',
        value: 'af'
    },
    {
        lable: 'Hindi',
        value: 'hi'
    },
    {
        lable: 'Arabic',
        value: 'ar'
    }
]
const Translate = () => {
    const [language, setLanguage] = useState(languages[0]);
    const [inputVal, setInputVal] = useState('');

    useEffect(() => {
        console.log(inputVal);



    }, [inputVal])
    return (
        <div>
            <h1>Translate text</h1>
            <div>
                <label>Enter Text
                </label>
                <input type="text" onChange={(e) => setInputVal(e.target.value)} value={inputVal} />
            </div>

            <Dropdown options={languages} selected={language} onSelectedChange={setLanguage} />
            <hr />
            <Convert text={inputVal} lang={language} />
        </div>
    )

}
export default Translate;