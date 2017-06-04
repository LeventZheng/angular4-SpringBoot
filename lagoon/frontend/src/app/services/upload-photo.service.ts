import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class UploadPhotoService implements OnInit {
    fileToUpload: Array<File>;

    constructor() { }

    ngOnInit() {
        this.fileToUpload = [];
    }

    upload() {
        const url = 'http://localhost:8080/rest/photo/upload';
        this.makeFileRequest(url, [], this.fileToUpload).then(
            (result) => {}
        );
    }

    fileChangeEvent(fileInput: any) {
        this.fileToUpload = <Array<File>> fileInput.target.files;
    }

    makeFileRequest(url: string, params: Array<string>, files: Array<File>) {
        return new Promise((resolve, reject) => {
            const formData: any = new FormData();
            const xhr = new XMLHttpRequest();
            for (let i = 0; i < files.length; i++) {
                formData.append('uploads[]', files[i], files[i].name);
            }

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        alert('Upload Successful');
                    } else {
                        reject(xhr.response);
                    }
                }
            }

            xhr.open('POST', url, true);
            xhr.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem('token'));
            xhr.send(formData);
        });
    }

}
