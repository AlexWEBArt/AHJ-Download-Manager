// import createImagePreview from './createImagePreview';
// import SS from '.../files/Storage Standard.pdf';

console.log('app.js is bunled');

// const rows = document.querySelectorAll('.table_row');

// const columnsName = Array.from(document.querySelectorAll('.name'));

// const pdf = document.querySelector('.action');

const data = document.querySelector('.action a');

// const reader = new FileReader();

console.dir(data);
// const file=URL.createObjectURL(data:[application/pdf][;base64], '../files/Storage Standard.pdf')

// data.addEventListener('click', (e) => {
//   reader.addEventListener('load', (e) => {
//     console.log(e);
//   });
//   console.log(e);
// });

// columnsName.forEach((items, index) => {
//   let link = document.createElement('a');
// link.download = '../files/Storage Standard.pdf'
// link.textContent = 'silk'
// link.href = '../files/Storage Standard.pdf'

//   console.log(link.click())
//   columnsName[index].appendChild(link)
//   console.log(columnsName)
// })

// const dndContainer = document.querySelector('.dnd_container');
// const fileInput = dndContainer.querySelector('.input_file');
// const previewContainer = document.querySelector('.preview_container');

// dndContainer.addEventListener('click', (e) => {
//   e.preventDefault();

//   fileInput.dispatchEvent(new MouseEvent('click'));
// });

// dndContainer.addEventListener('dragover', (e) => {
//   e.preventDefault();
// });

// const displayImageContent = (e) => {
//   e.preventDefault();

//   createImagePreview(previewContainer);

//   const images = Array.from(previewContainer.querySelectorAll('.preview_image'));
//   const nextPreview = images[images.length - 1];

//   if (e instanceof ProgressEvent) {
//     nextPreview.src = e.target.result;
//   };
//   if (e instanceof DragEvent) {
//     nextPreview.src = URL.createObjectURL(e.dataTransfer.files && e.dataTransfer.files[0]);
//   };
// };

// dndContainer.addEventListener('drop', (e) => {
//   e.preventDefault();

//   displayImageContent(e);
// });

// fileInput.addEventListener('change', (e) => {
//   const file = fileInput.files && fileInput.files[0];

//   if(!file) return;

//   const reader = new FileReader();

//   reader.addEventListener('load', displayImageContent);

//   reader.readAsDataURL(file);

//   fileInput.value = null;
// });
