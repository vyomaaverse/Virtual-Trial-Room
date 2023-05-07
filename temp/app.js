const clothImageInput = document.getElementById('cloth-image');
const personImageInput = document.getElementById('person-image');
const uploadButton = document.getElementById('upload-button');
let clothName, personName;

clothImageInput.addEventListener('change', function() {
    clothName = clothImageInput.files[0].name;
    checkFormValidity();
});

personImageInput.addEventListener('change', function() {
    personName = personImageInput.files[0].name;
    checkFormValidity();
});

function checkFormValidity() {
    if (clothName && personName) {
        uploadButton.removeAttribute('disabled');
    } 
    else {
        uploadButton.setAttribute('disabled', true);
      }
}

document.getElementById('file-upload-form').addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Cloth name:', clothName);
    console.log('Person name:', personName);
    this.reset();
    uploadButton.setAttribute('disabled', true);
    clothName = null;
    personName = null;
});