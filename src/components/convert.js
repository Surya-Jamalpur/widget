import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Convert = ({ lang, text, textColor }) => {
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
        if (text && convertedText == '') {
            doTranslation()
        } else {
            const timer = setTimeout(() => {
                if (text) {
                    doTranslation()
                }
            }, 500);
            return () => {
                clearTimeout(timer)
            }
        }

    }, [text, lang])

    return (
        <div>
            <h3>converted</h3>
            <span style={{ color: textColor.value }}
            >{convertedText}</span>
        </div>
    )
}
export default Convert;