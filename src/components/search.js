import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Search = () => {
    const [term, setTerm] = useState('Microsoft')
    const [results, setResults] = useState([]);

    console.log(results);

    console.log('I run with every render');
    useEffect(() => {
        // console.log('I run with only initial render');
        // console.log('I run with every render useEffect');
        const searchWiki = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                }
            })
            setResults(data.query.search);
        }
        searchWiki();
    }, [term])

    const resultsTobeRendered = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="content">
                    <div className="header" style={{ margin: '25px 0px 10px 0', color: 'red' }}>
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>

                </div>
            </div>
        )
    })
    return (
        <div className="" style={{ width: '500px', margin: '0px auto' }}>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Trem</label>
                    <input
                        className="input"
                        onChange={(e) => setTerm(e.target.value)}
                        value={term}
                    />
                </div>
            </div>

            <div className="ui celled list">
                {resultsTobeRendered}
            </div>
        </div>
    )
}
export default Search;