import React, {Component} from 'react';
import firebase from 'firebase';

class FileUpload extends Component {

    
    
    filestate(event){
        var file = event.target.files[0];
        const storageRef = firebase.storage().ref(`/imagenes/${file.name}`);
        const task = storageRef.put(file);
        console.log("bacan");
    };
    
    render(){
        return(
            <div>
                <form>
                    <input type="file" id="inputFile" capture accept="audio/*,video/*,image/*" onChange={this.filestate} />
                </form>
                <img id="imagen" src="https://miro.medium.com/max/1400/1*HCUtuON8qsHAyWusOsR64A.png" width="300px" height="300px" />
            </div>
        );

    }
}

export default FileUpload;