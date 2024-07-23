// let w=document.getElementById('w');
// window.addEventListener("load",()=>{
//     music.play();
// });


const prevUrl="home.html";
sessionStorage.setItem('prevUrl',prevUrl);

// const user= sessionStorage.getItem('user');
// if(user!=null)
// {
//     let conect=document.getElementById('pr');
   
//     conect.innerText=user; 
// }
// function uploadImage() {
//   const fileInput = document.getElementById('imageUpload');
//   const file = fileInput.files[0];
//   const formData = new FormData();
//   formData.append('image', file);

  // You can use AJAX or fetch to send the image data to the server
  // Here is an example using fetch with a POST request
//   fetch('/json.json', {
//     method: 'POST',
//     body: formData
//   })
//   .then(response => {
//     if (response.ok) {
//       // Image uploaded successfully
//       console.log('Image uploaded!');
//     } else {
//       // Error occurred while uploading the image
//       console.error('Image upload failed.');
//     }g
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });
// }

// const hallsAnimation=document.getElementById('hallsAnimation');

// window.addEventListener("load", () => {
//   hallsAnimation.play()
// });

// const buttonHalls=document.getElementById('buttonHalls');

// buttonHalls.onclick=function(){

//   window.location.href = './halls.html';

// }



const buttonPhotographers=document.getElementById('buttonPhotographers');
buttonPhotographers.onclick=function(){
  const url="https://tekno-art.com/";
  window.open(url,'_blank');
}
buttonPhotographers.addEventListener('mouseover', function() {              
  buttonPhotographers.style.cursor="pointer";
});

const pnew1=document.getElementById('pnew1');
const pnew2=document.getElementById('pnew2');

const buttonColorFunction=function(color){
  let arrColors="";
if(color=="white")

  color=" rgb(150, 126, 5)";

else

  color="white";

arrColors=color;
return arrColors;
}
setInterval(function() {
  colorsArr= buttonColorFunction(pnew1.style.color);
  pnew1.style.color=colorsArr;
  if(pnew1.style.color=="white")
  pnew2.style.color="rgb(150, 126, 5)";
else
pnew2.style.color="white";
  
 },1000);