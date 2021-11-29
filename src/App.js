import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/search';
import Dropdown from './components/Dropdown';
import DropdownPractice from './components/DropdownPractice';
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
  return (
    // <Accordion items={faqs} />
    // <Search />
    // <Dropdown colorOptions={colors} selected={selected} onSelectedChange={setSelected} />
    <div>
      <button onClick={() => setShowDD(!showDD)}>Toggle DD</button>
      {showDD ?
        <DropdownPractice
          colorOptions={colors}
          selected={selected}
          onSelectedChange={setSelected}
        /> : null
      }
    </div>
  )
}
export default App;