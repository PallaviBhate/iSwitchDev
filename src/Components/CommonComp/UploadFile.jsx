import axios from 'axios';

import React, { Component, Fragment } from 'react';
import { Toast } from 'primereact/toast';
import HeaderAll from '../CommonComp/HeaderAll'
import Footer from '../CommonComp/Footer'
import Dropzone from 'react-dropzone';
import LeftNav from '../CommonComp/LeftNav'
class UploadFile extends Component {

    constructor(props) {
        super(props);

    }

    state = {

        selectedFile: '',
        DraggedFile: ''
    };


    onFileChange = event => {

        this.setState({ selectedFile: event.target.files[0] });
    };

    onFileChange1 = (fileAccept) => {

        this.setState({ DraggedFile: fileAccept[0] });
        this.fileValidation()
    };


    // Csv extention validation check on upload button
    fileValidation = () => {
        //    var fileInput = document.getElementById('myFile1');
        //var filePath = fileInput.value;
        var filemode1 = this.state.DraggedFile
        var filemode2 = this.state.selectedFile

        if (filemode1 != '') { var fileInput = filemode1 }
        else { var fileInput = filemode2 }
        console.log(fileInput.name)
        if (fileInput != '') {
            var allowedExtensions = /(\.pdf)$/i;
            if (!allowedExtensions.exec(fileInput.name)) {
                this.toast.show({ severity: 'warn', summary: 'Error', detail: 'Please upload file having extensions .pdf or .doc only.' }, 50000);
                // Toast.info('Please upload file having extensions .csv only.',4000);
                fileInput.value = '';
                return false;
            }
        }

    }

    //Dragging csv file to upload
    uploadFileAttachment = () => {

        this.fileValidation()
        const formData = new FormData();

        const options = {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        };

        if (this.state.DraggedFile) {
            formData.append(
                "file",
                this.state.DraggedFile,
            );
        }
        else {
            formData.append(
                "file",
                this.state.selectedFile,
            );
        }
        // axios
        //     .post("https://techm-jobzilla.herokuapp.com/jobs/user/uploadcsv", formData, options)

        //     .then(Response => {
        //         console.log("Success", Response)
        //         this.toast.show({ severity: 'success', summary: 'Success Message', detail: 'File uploaded Successfully' }, 50000);
        //         // this.selectedFile.name= ""
        //     })

        //     .catch(error => {
        //         console.log("Error", error)
        //         this.toast.show({ severity: 'error', summary: 'Error', detail: 'Server Error ' }, 50000);
        //     })
    }

    render() {
        return (
            <Fragment>

                <Toast ref={(el) => this.toast = el} />
                <div className="row  px-3 main">
                    {/* Content on the page */}
                    <section className="col px-2" style={{backgroundColor: '#FAFCFF'}}>
                        <div className="ml-0 mr-1">

                            <section className="col-12">
                                <div className="row">
                                    {/* CSV file upload */}

                                    <div className="col-md-6 offset-md-3 p-4">

                                        <div className="text-center mt-5">
                                            <Dropzone
                                                onDrop={this.onFileChange1}
                                                accept=".csv"
                                            >
                                                {({ getRootProps, getInputProps, isDragActive, isDragReject, rejectedFiles }) => {
                                                    /* const isFileTooLarge = rejectedFiles.length > 0 && rejectedFiles[0].size > maxSize; */
                                                    return (

                                                        <div {...getRootProps({ className: "dropzone" })}>
                                                            <img src="/images/Dashboard-assets/cloud-upload.svg" alt="cloud upload" className="cloud_upload_logo pb-2" />
                                                            <input {...getInputProps()} />

                                                            {!isDragActive && 'Click here or drop a file to upload!'}
                                                            <div className="file-path-wrapper font-blue">
                                                                <input className="file-path validate" type="text" value={this.state.DraggedFile.name} placeholder="" />

                                                            </div>

                                                            {isDragActive && !isDragReject && "Drop it like it's hot!"}
                                                            {isDragReject && "File type not accepted, sorry!"}

                                                        </div>
                                                    )
                                                }
                                                }
                                            </Dropzone>
                                        <p className="text-center">or</p>

                                        </div>
                                        <form action="">
                                            <div className="text-center d-flex justify-content-center">
                                                <div className="file-field d-flex-inline">
                                                    <div className="btn btn-primary btn-sm float-left waves-effect waves-light">
                                                        <span>Choose file</span>
                                                        <input type="file" id="myFile" name="filename" accept=".csv" files multiple onChange={this.onFileChange} />

                                                    </div>
                                                    <div className="file-path-wrapper">
                                                        <input className="file-path validate" type="text" value={this.state.selectedFile.name} placeholder="No file choosen" />
                                                    </div>
                                                </div>
                                                <div className="d-flex-inline">
                                                    <img src="/images/Dashboard-assets/csv.svg" className="pt-1" alt="csv icon" />
                                                    <span className="pl-2 fontMiddle">DOC/PDF File</span>
                                                </div>

                                            </div>
                                        </form>
                                        <p className="text-center mt-4">Max Size 5 MB</p>
                                    </div>

                                </div>
                            </section>
                        </div>
                    </section>
                    <div className="col-12 ml-2 mt-4">
                        <button type="button" className="btn btn-blue" onClick={this.uploadFileAttachment}>Upload</button>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default UploadFile; 
