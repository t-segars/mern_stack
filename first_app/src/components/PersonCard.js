// IMPORT DEPENDENCIES
import React, {Component} from "react"

// CREATE THE COMPONENT 
class PersonCard extends Component {
    render() {
        return (
            <div className="center-flex">
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <h3>Age: {this.props.age}</h3>
                <h3>hair Color: {this.props.haircolor}</h3>
            </div>
        )
    }
}

// EXPORT THE COMPONENT WITH
export default PersonCard