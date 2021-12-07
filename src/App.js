import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/search';
import Dropdown from './components/Dropdown';
import DropdownPractice from './components/DropdownPractice';
import Translate from './components/translate';

import Route from './components/route';
const faqs = [
  {
    title: 'what is React?',
    desc: 'React is a modren javascript lidrari.'
  },
  {
    title: 'Why Reactis uesd?',
    desc: 'React is used to create ton of reusable code components.'
  },
  {
    title: 'who will use React?',
    desc: 'React is used by most of the developers in the world.'
  }
];
const colors = [
  {
    lable: 'The Red',
    value: 'red'
  },
  {
    lable: 'The Green',
    value: 'Green'
  },
  {
    lable: 'The Pink',
    value: 'Pink'
  },
  {
    lable: 'The Yellow',
    value: 'Yellow'
  },
  {
    lable: 'The Sky Blue',
    value: 'Sky Blue'
  },
]
const App = () => {
  const [selected, setSelected] = useState(colors[0]);
  const [showDD, setShowDD] = useState(true);

  // const showAccordian = ()=>{
  //   if(window.location.)
  // }
  const showAccordian = () => {
    if (window.location.pathname === '/') {
      return <Accordion items={faqs} />
    }
  }
  const showSearch = () => {
    if (window.location.pathname === '/search') {
      return <Search />
    }
  }
  const showDropD = () => {
    if (window.location.pathname === '/dropdown') {
      return <Dropdown options={colors} selected={selected} onSelectedChange={setSelected} />
    }
  }
  const showTranslate = () => {
    if (window.location.pathname === '/translate') {
      return <Translate selectedColor={selected} />
    }
  }

  return (

    // <div>
    //   {showAccordian()}
    //   {/* {window.location.pathname === '/' ?
    //     <Accordion items={faqs} /> : null} */}
    //   {showSearch()}

    //   {/* {window.location.pathname === '/search' ?
    //     <Search /> : null} */}
    //   {showDropD()}

    //   {/* {window.location.pathname === '/dropdown' ?
    //     <Dropdown options={colors} selected={selected} onSelectedChange={setSelected} /> : null} */}
    //   {/* {window.location.pathname === '/ddPractice' ?
    //     <button onClick={() => setShowDD(!showDD)}>Toggle DD</button> : null}
    //   {showDD ?
    //     <DropdownPractice
    //       colorOptions={colors}
    //       selected={selected}
    //       onSelectedChange={setSelected}
    //     /> : null
    //   } */}
    //   {showTranslate()}

    //   {/* {window.location.pathname === '/translate' ?
    //     <Translate selectedColor={selected} /> : null} */}
    // </div>

    // this is by using route.js and not react router
    <div>
      <Route path='/'>
        <Accordion items={faqs} />
      </Route>
      <Route path='/search'>
        <Search />
      </Route>
      <Route path='/dropdown'>
        <Dropdown options={colors} selected={selected} onSelectedChange={setSelected} />
      </Route>
      <Route path='/translate'>
        <Translate selectedColor={selected} />
      </Route>
    </div>
  )
}
export default App;