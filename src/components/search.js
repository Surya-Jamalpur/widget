import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Search = () => {
    // using this useState to get state obj in this component
    const [term, setTerm] = useState('Microsoft')
    const [results, setResults] = useState([]);

    console.log(results);

    console.log('I run with every render');
    // this useEffet will be used to trigger whenever the term is changed
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

            // updating the results which lives in state obj
            setResults(data.query.search);
        }

        if (term && !results.length) {
            searchWiki();
        } else {
            // added time delay of 500ms while typing
            const timerId = setTimeout(() => {
                if (term) {
                    searchWiki();
                }
            }, 500)
            console.log('every Hit.');

            // this return is uesd to cleanup the methods and service calls
            // and this will trigger for every render except first render
            return () => {
                console.log('Cleanup this.');
                clearTimeout(timerId);
            }
        }

    }, [term])




    const resultsTobeRendered = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a target="_blank" href={`https://en.wikipedia.org?curid=${result.pageid}`} className="ui button" >Go</a>
                </div>
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