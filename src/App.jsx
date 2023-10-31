import { useState } from 'react';
import { EXAMPLES } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import { CORE_CONCEPTS } from './data.js';
import TabButton from './components/TabButton.jsx';

function App() {
  const [ selectedTopic, setSelectedTopic ] = useState('');

  function handleSelect(selectedButton){
    setSelectedTopic(selectedButton);
    console.log("hello world - selected!", selectedButton);
    }

    let tabContent = <p>Please select a topic.</p>
    if(selectedTopic){
      tabContent = (<div id = "tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
       <p>{EXAMPLES[selectedTopic].description}</p>
       <pre>
         <code>
         {EXAMPLES[selectedTopic].code}
         </code>
       </pre>

     </div>
     );
    }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
        <h2>core-concepts</h2>
        <ul>
        <CoreConcept 
        title={CORE_CONCEPTS[0].title}
        description={CORE_CONCEPTS[0].description}
        image= {CORE_CONCEPTS[0].image}
        />
        <CoreConcept {...CORE_CONCEPTS[1]}/>
        <CoreConcept {...CORE_CONCEPTS[2]}/>
        <CoreConcept {...CORE_CONCEPTS[3]}/>
        </ul>
        </section>
        <section id = "examples">
          <h2>EXAMPLES</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={()=>{handleSelect("components")}}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'}  onSelect={()=>{handleSelect("jsx")}}>jsx</TabButton>
            <TabButton isSelected={selectedTopic === 'props'}  onSelect={()=>{handleSelect("props")}}>props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'}  onSelect={()=>{handleSelect("state")}}>state</TabButton>

          </menu>
            {!selectedTopic ? (tabContent) : null}
            {selectedTopic ? (tabContent) : null }
            
        </section>
      </main>
    </div>
  );
}
export default App;
