import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/search';
import Dropdown from './components/Dropdown';
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
    lable: 'Red',
    value: 'red'
  },
  {
    lable: 'Green',
    value: 'Green'
  },
  {
    lable: 'Pink',
    value: 'Pink'
  },
  {
    lable: 'Yellow',
    value: 'Yellow'
  },
  {
    lable: 'Sky Blue',
    value: 'Sky Blue'
  },
]
const App = () => {
  return (
    // <Accordion items={faqs} />
    // <Search />
    <Dropdown colorOptions={colors} />

  )
}
export default App;