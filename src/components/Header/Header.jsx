import reactImg from "../../assets/react-core-concepts.png"; // Imported img
import "./Header.css"; // Imported style
// Array of descriptions
const reactDescriptions = ["Fundamental", "Crucial", "Core"];

// Function to generate random integer between 0 and 'max'
function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

// Header component
export default function Header() {
    // Getting random description
    const description = reactDescriptions[getRandomInt(2)]
    return (
        <header>
            <img src={reactImg} alt="Stylized atom"/>
            <h1>React Essentials</h1>
            <p> // Description about the content
                Core React concepts you will need for almost any app you are
                going to build!
            </p>
        </header>
    )
}

