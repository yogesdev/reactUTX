
import React, { Component } from 'react';
import { fileUpload } from '../../helper/communication';
class Imageupload extends Component {
    constructor(props) {
        super(props);
        this.uploadImage = this.uploadImage.bind(this);
        this.state = {
            fileType: 'file',
            imageUploads: {},
            uploadStatus: 'success',
            uploadToggle: 'hide',
            uploadMessage: 'Image uploaded successfully',
            uploadState: 'Image uploaded successfully',

        }

    }

    async uploadImage(e) {
        await this.setState({ imageUploads: e.target.files, uploadToggle: 'hide'});
    }

    async performUpload() {
        let uploadImageData = this.state.imageUploads
        let imageDetails = new FormData();
        if (uploadImageData && uploadImageData[0]) {
            imageDetails.append("file", uploadImageData[0]);
            imageDetails.append("fileName", uploadImageData[0].name);
            try {
                await this.setState({ fileType: 'text', imageUploads: {} });//in order to make empty file values
                let uploadSuccess = await fileUpload(imageDetails);
                if (uploadSuccess.status) {
                    await this.setState({ fileType: 'file', uploadToggle: 'show', uploadStatus: 'success',uploadState:'Success', uploadMessage: ' Image uploaded successfully' });
                }

            } catch (error) {
                await this.setState({ fileType: 'file', uploadToggle: 'show', uploadStatus: 'danger', uploadState:'Error', uploadMessage: ' Failed to upload' });
            }

        }
    }
    render() {
        return (


            <div className="container">
                <h2>Image Upload</h2>
                <div className="form-group">
                    <div className={`alert alert-${this.state.uploadStatus} alert-dismissible fade ${this.state.uploadToggle}`}>
                        <button type="button" className="close" data-dismiss="alert" onClick={(e) => this.setState({ uploadToggle: 'hide' })}> &times;</button>
                        <strong>{this.state.uploadState}! </strong> {this.state.uploadMessage}
                    </div>
                </div>
                <div className="form-group">
                    <form  >
                        <div className="form-group">
                            <input type={this.state.fileType} id="upImage" name="upImage" onChange={(e) => this.uploadImage(e)} />

                            <button type="button" className="btn btn-primary" onClick={(e) => this.performUpload()}>Submit</button>
                        </div>
                    </form>
                </div>

            </div>

        )
    }
}
export default Imageupload;
