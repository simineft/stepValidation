import React, { Component } from 'react';
import  {connect} from 'react-redux'

class AllInfo extends Component {

    render() {
        const { firstName, lastName, nationalCode, birthDay, file } = this.props.allUser;
        console.log("allinfo", this.props.allUser);
        


        return (
            <div className="allinfo"   >
                <p>  نام: {firstName}</p>
                <p>  نام خانوادگی: {lastName}</p>
                <p>  کدملی:  {nationalCode} </p>
                <p>  تاریخ تولد:  {birthDay} </p>
                <p  className="showImag" > آپلود عکس:  {file && <img src={file} alt='' />} </p>
            </div>
        );
    }
}


const mapStateToProps = (state ) => {
    return {
        allUser: state
    }
}

   export default connect(mapStateToProps)( AllInfo)   ;