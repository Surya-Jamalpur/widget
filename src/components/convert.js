import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Convert = ({ lang, text }) => {
    const [convertedText, setconvertedText] = useState('');
    useEffect(() => {
        const doTranslation = async () => {
            const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params: {
                    q: text,
                    target: lang.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            });
            setconvertedText(data.data.translations[0].translatedText)
        }
        doTranslation()
    }, [text, lang])

    return (
        <div>
            <h3>converted</h3>
            <span>{convertedText}</span>
        </div>
    )
}
export default Convert;