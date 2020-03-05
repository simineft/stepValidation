import React, { Component } from 'react';
import PersonalInfo from './PersonalInfo';
import UploadImage from './uploadImage';
import AllInfo from './AllInfo';
import { connect } from 'react-redux'


export class StepForm extends Component {
    showStep = () => {
        const { step } = this.props.states;
        switch (step) {
            case 1:
                return (<PersonalInfo />);

            case 2:
                return (<UploadImage />);

            case 3:
                return (<AllInfo />);
        }

    }

    render() {
        console.log(this.props, "main");
        return (
            <>
                {this.showStep()}

            </>

        );
    }
}


const mapStateToProps = (state) =>
    ({
        states: state
    })

export default connect(mapStateToProps)(StepForm);