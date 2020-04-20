import React, { Component } from 'react';

class PersonalInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: ""
        }
        this.HandlerChangeFirstName = this.HandlerChangeFirstName.bind(this)
    }

    HandlerChangeFirstName(event) {
        this.setState({
            [event.target.name]: event.target.value,
            // [name]: event.target.lastName
        })
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <form>
                    <h2>Enter Your First Name</h2>
                    <input type="text" name="firstName" value={this.state.firstName} onChange={this.HandlerChangeFirstName} />
                    <h2>Enter Your Last Name</h2>
                    <input type="text" name="lastName" value={this.state.lastName} onChange={this.HandlerChangeFirstName} />
                </form>
            </div>
        );
    }
}


export default PersonalInfo;