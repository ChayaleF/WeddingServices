

const prevUrl="halls.html";
sessionStorage.setItem('prevUrl',prevUrl);

let dataHalls;

const loadPictures = () => {
    let p = $.ajax({
      
        method: 'GET',
        url: '../data/halls.json',
               
        success: (data) => {
            printPictures(data);
            dataHalls=data;
        }
    });
  
}

const hallPictures=document.getElementById('hallPictures');

const buttonColorFunction=function(color){
    let backgroundColor="";
    let arrColors=[];
if(color=="black")
{
    color=" rgb(150, 126, 5)";
    backgroundColor="black"
}
else
{
    color="black";
    backgroundColor="rgb(150, 126, 5)";
}
arrColors[0]=color;
arrColors[1]=backgroundColor;
return arrColors;
}

const printPictures = (data) => {
    const divOtef = document.createElement('div');
    divOtef.classList.add('flex-container');
  
    for (let index = 0; index < data.length; index++) {
      const element = data[index];

      const div = document.createElement('div');
      div.classList = 'div-picture';
      div.id = element.id;
  
      const h1 = document.createElement('h1');
      h1.classList = 'title';
      h1.innerText = element.name;
  
      const img = document.createElement('img');
      img.src = element.img;
  
      const p = document.createElement('p');
      p.classList = 'description';
      p.innerText = element.hallShortDescription;

      const button = document.createElement('button');
      button.type = 'button';
      button.classList = 'details';
      button.innerHTML = 'לפרטים';
      button.id = element.id;
  
      let colorsArr=[];
      if(((parseInt(button.id)%2==0)&&(parseInt(button.id)<=4||parseInt(button.id)>8))||((parseInt(button.id)%2!=0)&&parseInt(button.id)>4&&parseInt(button.id)<=8))
      {
        button.style.backgroundColor="rgb(150, 126, 5)";
        button.style.border="none";
        button.style.color="black";
        button.style.fontSize="30px";
        button.style.borderRadius="60px"
      }
      else
      {
        button.style.backgroundColor="black";
        button.style.border="none";
        button.style.color="rgb(150, 126, 5)";
        button.style.fontSize="30px";
        button.style.borderRadius="60px"
      }
      setInterval(function() {
      colorsArr= buttonColorFunction(button.style.color);
      button.style.color=colorsArr[0];
      button.style.backgroundColor=colorsArr[1];
      },1000);

      button.addEventListener('mouseover',function(){
      button.style.cursor="pointer";
      })

      div.appendChild(h1);
      div.appendChild(img);
      div.appendChild(p);
      div.appendChild(button);
      divOtef.appendChild(div);
    }
  
    hallPictures.appendChild(divOtef);  
    choosseHall();
};
loadPictures();

const choosseHall=()=>{

    const details=document.getElementsByClassName('details');
    
    for (let index = 0; index < details.length; index++) {

        const element = details[index];
        element.onclick=()=>{
            printPicture(dataHalls,element.id);
        }
    }
}
let buttonEmail=null;
const emailButtonFunc=function()
{
    buttonEmail.addEventListener('click', function () {
        const recipient = 'c0556728176@gmail.com,t8472959@gmail.com'; 
        const subject = 'Hello'; 
        const body = 'This is the message body.'; 
        const mailtoURL = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(recipient)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(mailtoURL, '_blank');      
    });
}

const printPicture=(data,idHall)=>{

    const hallPictures=document.getElementById('hallPictures');
    
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        console.log("gygy  "+element.id);
        if(element.id===idHall)
        {
            console.log("gygy  "+element.id);

            const divN=document.createElement('div');
            divN.classList='div-picture';
            divN.id='idHall';
            const h1N=document.createElement('h1');
            h1N.classList='title';
            h1N.innerText=element.name;
            const divimgAndDetails=document.createElement('div');
            divimgAndDetails.id="divimgAndDetails";
            const imgN=document.createElement('img');
            imgN.src=element.img;
            imgN.id='chooseImg';
            const pN=document.createElement('div');
            pN.classList='detailsOfHall';
            const pNumOfChairsTitle=document.createElement('span');
            pNumOfChairsTitle.classList='titleDetails';
            pNumOfChairsTitle.innerText="מספר מקומות: ";
            const padressOfHallTitle=document.createElement('span');
            padressOfHallTitle.classList="titleDetails";
            padressOfHallTitle.innerText="כתובת האולם: ";
            const pPhoneNumberTitle=document.createElement('span');
            pPhoneNumberTitle.classList="titleDetails";
            pPhoneNumberTitle.innerText="מספר טלפון: ";
            const pNumOfChairs=element.numOfChairs;
            const padressOfHall=element.adress;
            const pPhoneNumber=element.ownerNum;
            const pEmail=document.createElement('span');
            pEmail.classList="titleDetails";
            pEmail.innerText=" כתובת מייל: ";
            buttonEmail=document.createElement('button');
            buttonEmail.id="emailButton2";
            buttonEmail.innerText=element.ownerGmail;
            buttonEmail.classList="gold";
            const br1=document.createElement('br');
            const br2=document.createElement('br');
            const br3=document.createElement('br');
            const br4=document.createElement('br');
            const br5=document.createElement('br');
            const br6=document.createElement('br');
            pN.style.textAlign="right";
            emailButtonFunc();
            pN.append(pNumOfChairsTitle,pNumOfChairs,br1,br3,padressOfHallTitle,padressOfHall,br2,br4,pPhoneNumberTitle,pPhoneNumber,br5,br6,pEmail,buttonEmail);
            divimgAndDetails.append(pN,imgN);
            divimgAndDetails.style.display="flex";
            divimgAndDetails.style.justifyContent="space-around";
            const hallLengthDescriptionN=document.createElement('p');
            hallLengthDescriptionN.innerText=element.hallLengthDescription;
            hallLengthDescriptionN.id='hallLengthDescription';
            const iframeN=document.createElement('iframe');
            iframeN.src=element.map;
            iframeN.classList='maps';
            iframeN.referrerPolicy="no-referrer-when-downgrade";
            iframeN.width="300";
            iframeN.height="300";
            iframeN.style="border:0;";
            iframeN.allowFullscreen="";
            iframeN.loading="lazy";
            const buttonN=document.createElement('button');
            const iconx=document.createElement('i');
            iconx.classList="material-icons";
            iconx.innerText="close";
            iconx.style.background="none";           
            buttonN.append(iconx);
            buttonN.type='button';
            buttonN.id='buttonN';
            buttonN.style.border="none";
            buttonN.style.background="none";
            divN.append(buttonN,h1N,divimgAndDetails,hallLengthDescriptionN,iframeN);
            console.log(divN);
            hallPictures.appendChild(divN);
            buttonEmail.addEventListener('mouseover',function(){
                buttonEmail.style.cursor="pointer";
            })
            buttonN.addEventListener('mouseover', function() {
                
                buttonN.style.backgroundColor = 'rgb(255, 0, 0)';
              });
              buttonN.addEventListener('mouseleave', function() {
                
                buttonN.style.background = 'none';
              });
            buttonN.onclick=()=>{
               
                hallPictures.removeChild(divN);
            }
            break;

        }
    }
}
