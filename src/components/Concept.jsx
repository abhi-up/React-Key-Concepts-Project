// Import React library
import React from "react"

// Define a functional component called Concept
export const Concept = (props) => {
    return (
        // JSX for rendering a single concept
        <li className="concept">
            {/* Display the concept image */}
            <img src={props.image} alt={props.title} />
            {/* Display the concept title */}
            <h2>{props.title}</h2>
            {/* Display the concept description */}
            <p>{props.description}</p>
        </li>
    )
}
