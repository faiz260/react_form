import React, { Component } from 'react';
import {
    TextField,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
    Radio,
    RadioGroup,
    FormLabel,
    FormControlLabel
} from '@material-ui/core';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            euminatorName: '',
            gothName: '',
            districtName: '',
            ucName: '',
            areaName: '',
            streetName: '',
            buildingName: '',
            houseNumber: '',
            codeForHighRiskGroup: [],
            castName: '',
            guardianName: '',
            isThereAnyPregnantWoman: '',
            childName: '',
            childNumber: '',
            dateOfBirth: '',
            childAge: '',
            gender: '',
        }
        this.handlerChange = this.handlerChange.bind(this)
    }

    handlerChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div className="parentDiv">
                <label>
                    <TextField
                        id="outline-basic"
                        label="Euminator Name"
                        name="euminatorName"
                        value={this.state.euminatorName}
                        onChange={this.handlerChange}
                    />
                </label>
                <label>
                    <TextField
                        id="standard-basic"
                        label="Goth Name"
                        name="gothName"
                        value={this.state.gothName}
                        onChange={this.handlerChange}
                    />
                </label>
                <label>
                    <TextField
                        id="standard-basic"
                        label="District Name"
                        name="districtName"
                        value={this.state.districtName}
                        onChange={this.handlerChange}
                    />
                </label>
                <label>
                    <TextField
                        id="standard-basic"
                        label="UC Name"
                        name="ucName"
                        value={this.state.ucName}
                        onChange={this.handlerChange}
                    />
                </label>
                <label>
                    <TextField
                        id="standard-basic"
                        label="Area Name"
                        name="areaName"
                        value={this.state.areaName}
                        onChange={this.handlerChange}
                    />
                </label>
                <label>
                    <TextField
                        id="standard-basic"
                        label="Street Name"
                        name="streetName"
                        value={this.state.streetName}
                        onChange={this.handlerChange}
                    />
                </label>
                <label>
                    <TextField
                        id="standard-basic"
                        label="Building Name"
                        name="buildingName"
                        value={this.state.buildingName}
                        onChange={this.handlerChange}
                    />
                </label>
                <label>
                    <TextField
                        id="standard-basic"
                        label="House Number"
                        name="houseNumber"
                        value={this.state.houseNumber}
                        onChange={this.handlerChange}
                    />
                </label>
                <br />
                <br />
                {/* <label> */}
                <FormLabel>Code For High Risk Group</FormLabel>
                <RadioGroup
                    aria-label="Code For High Risk"
                    name="codeForHighRiskGroup"
                    value={this.state.codeForHighRiskGroup}
                    onChange={this.handlerChange}>
                    <FormControlLabel value="1" control={<Radio />} label="1" />
                    <FormControlLabel value="2" control={<Radio />} label="2" />
                    <FormControlLabel value="3" control={<Radio />} label="3" />
                    <FormControlLabel value="4" control={<Radio />} label="4" />
                </RadioGroup>
                {/* </label> */}
                <label>
                    <TextField
                        id="standard-basic"
                        label="Cast Name"
                        name="castName"
                        value={this.state.castName}
                        onChange={this.handlerChange}
                    />
                </label>
                <label>
                    <TextField
                        id="standard-basic"
                        label="Guardian Name"
                        name="guardianName"
                        value={this.state.guardianName}
                        onChange={this.handlerChange}
                    />
                </label>
                <br />
                <label>

                </label>

            </div>
        );
    }
}

export default Main;