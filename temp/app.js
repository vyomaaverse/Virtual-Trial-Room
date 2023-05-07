let clothName, personName;

function handleFileUpload(event) {
  const { name, files } = event.target;
  if (name === 'cloth') {
    clothName = files[0].name;
  } else if (name === 'person') {
    personName = files[0].name;
  }
}

function handleSubmit(event) {
  event.preventDefault();
  console.log('Cloth name:', clothName);
  console.log('Person name:', personName);
}

const clothInput = document.getElementById('cloth-input');
const personInput = document.getElementById('person-input');
const uploadButton = document.getElementById('upload-button');

clothInput.addEventListener('change', handleFileUpload);
personInput.addEventListener('change', handleFileUpload);

uploadButton.addEventListener('click', (event) => {
  event.preventDefault();
  if (clothName && personName) {
    handleSubmit(event);
  } else {
    alert('Please select both images');
  }
});
