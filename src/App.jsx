// Import images for each concept
import componentsImage from "./assets/images/components.png"
import stateImage from "./assets/images/state.png"
import eventsImage from "./assets/images/events.png"

// Import the Header component
import Header from "./components/Header"
// Import the Concept component
import { Concept } from "./components/Concept"

// Array containing information about different concepts
const concepts = [
    {
        title: "Components",
        image: componentsImage,
        description:
            "Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.",
    },
    {
        title: "State",
        image: stateImage,
        description:
            "State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.",
    },
    {
        title: "Events",
        image: eventsImage,
        description:
            "Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.",
    },
]

// App component
function App() {
    return (
        // Main container for the app
        <div>
            {/* Render the Header component */}
            <Header />
            {/* Render a list of Concept components */}
            <ul id="concepts">
                {/* Map over the concepts array and create a Concept component for each */}
                {concepts.map((item) => (
                    <Concept
                        title={item.title}
                        image={item.image}
                        description={item.description}
                    />
                ))}
            </ul>
        </div>
    )
}

// Export the App component
export default App
