
const prevUrl="../index.html";
sessionStorage.setItem('prevUrl',prevUrl);


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