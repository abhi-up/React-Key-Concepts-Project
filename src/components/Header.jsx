// Import React library
import React from "react"

// Import image file
import keyConceptsImage from "../assets/images/key-concepts.png"

// Define a functional component called Header
const Header = () => {
    return (
        // JSX for the header component
        <header>
            {/* Display the imported image */}
            <img src={keyConceptsImage} alt="Medal badge with a star" />
            {/* Display the main heading */}
            <h1>Key React Concepts</h1>
            {/* Display a brief description */}
            <p>Selected key React concepts you should know about</p>
        </header>
    )
}

// Export the Header component to be used elsewhere
export default Header
