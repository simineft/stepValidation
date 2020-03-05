import React, { Component } from 'react';
import { connect } from 'react-redux'
import 'react-dropzone-uploader/dist/styles.css';
import { nextStep, prevStep, uploadFile } from "../redux/action"


class UploadImage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            file: null,

        }

    }

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }


    uploadSingleFile = (e) => {
        const { uploadFile } = this.props;
        let { files: [file] } = e.target;
        uploadFile(URL.createObjectURL(file))
    }


    render() {
        const { file } = this.props;
        console.log('uploadimage', this.props)
        let imgPreview;
        if (file) {
            imgPreview = <img src={file} alt='' />;
        }


        return (
            <>
                <form>
                    <div className="form-group  preview">
                        {imgPreview}
                    </div>

                    <div className="form-group"   >
                        <input type="file" className="form-control" onChange={this.uploadSingleFile} />
                    </div>

                </form >

                <button className="Back" onClick={this.back}>
                    « قبلی
                </button>


            </>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        file: state.file
    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        nextStep: () => dispatch(nextStep()),
        prevStep: () => dispatch(prevStep()),
        uploadFile: (file) => dispatch(uploadFile(file))

    }
}



export default connect(mapStateToProps, mapDispatchToProps)(UploadImage)