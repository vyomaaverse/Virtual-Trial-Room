const form = document.querySelector('form');
const clothImage = document.getElementById('cloth-image');
const personImage = document.getElementById('person-image');
const fileNames = document.getElementById('file-names');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const clothFileName = clothImage.files[0].name;
  const personFileName = personImage.files[0].name;
  fileNames.innerHTML = `Selected cloth image: ${clothFileName}<br>Selected person image: ${personFileName}`;
  console.log(personFileName);
  console.log(clothFileName);
});
