import React from 'react';
import Accordion from './components/Accordion';
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
]
const App = () => {
  return (
    <Accordion items={faqs} />
  )
}
export default App;