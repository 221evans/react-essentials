import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import {CORE_CONCEPTS, EXAMPLES} from "./data";
import TabButton from "./components/TabButton";
import {useState} from "react";


function App() {
    // Initiate state for selectedTopic with useState Hook
    const [selectedTopic, setSelectedTopic] = useState()

    // Function to handle selection of a topic
    function handleSelect(selectedButton) {
        console.log(selectedButton);
        setSelectedTopic(selectedButton)
    }

    return (
        <div>
            <Header/>
            <main>
                {/* Section for Core Concepts */}
                <section id="core-concepts">
                    <h2>Core Concepts</h2>

                    <ul>
                        {/* Core Concept components are being rendered here */}
                        {CORE_CONCEPTS.map((conceptItem) =>
                            <CoreConcept key={conceptItem.title} {...conceptItem}/>)}
                    </ul>
                </section>

                {/* Section for Examples */}
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        {/* Render TabButton components for each topic */}
                        <TabButton isSelected={selectedTopic === "components"}
                                   onSelect={() => handleSelect("components")}>Components</TabButton>
                        <TabButton isSelected={selectedTopic === "jsx"}
                                   onSelect={() => handleSelect("jsx")}>JSX</TabButton>
                        <TabButton isSelected={selectedTopic === "props"}
                                   onSelect={() => handleSelect("props")}>Props</TabButton>
                        <TabButton isSelected={selectedTopic === "state"}
                                   onSelect={() => handleSelect("state")}>State</TabButton>
                    </menu>
                    {/* Conditional rendering for selectedTopic */}
                    {!selectedTopic && <p>Please select a topic</p>}
                    {selectedTopic && <div id="tab-content">
                        <h3>{EXAMPLES[selectedTopic].title}</h3>
                        <p>{EXAMPLES[selectedTopic].description}</p>
                        <pre>
                  <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
                    </div>}

                </section>

            </main>
        </div>
    );
}

export default App;
