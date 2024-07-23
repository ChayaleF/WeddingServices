let imgChoose='./pictures/רקעים מעודכן/1.jpg';
let idImg=3;
let prevButton = null;



let dataImg=null;
const loadPictures = () => {
  let p = $.ajax({
    
      method: 'GET',
      url: './invitation.json',
      
      success: (data) => {

        dataImg=data;
        printPictures(data);
        attachButtonClickEvent();

      }
  });

}

// יצירת התמונות
const picturesInWidth=document.getElementById('picturesInWidth');
const picturesInLength=document.getElementById('picturesInLength');

const printPictures=(data)=>{
  console.log("jhgf");

  for(let i=0;i<data.length;i++)
  {
    let button=document.createElement('button');
    button.type='button';
    button.className='pictureButton';
    console.log(button);
    let img=document.createElement('img');
    img.src=data[i].img;
    img.id=data[i].id;
    button.appendChild(img);

    if(data[i].type==="width")
    {
      picturesInWidth.appendChild(button);
    }
    else
    {
      picturesInLength.appendChild(button);
    }
    
  }

}

loadPictures();

// גלילת התמונות וכפתורים
const scrollLeftButton = document.getElementById('scroll-left-button');
const scrollRightButton = document.getElementById('scroll-right-button');
const pictureRow = document.getElementById('picturesInWidth');

// Add event listeners to scroll buttons
scrollLeftButton.addEventListener('click', scrollLeft);
scrollRightButton.addEventListener('click', scrollRight);

// Scroll left
function scrollLeft() {
  pictureRow.scrollBy({ left: -244, behavior: 'smooth' });
}

// Scroll right
function scrollRight() {
  pictureRow.scrollBy({ left: 244, behavior: 'smooth' });
}

//חזרה לעמוד הקודם
const prevUrl="invitation.html";
sessionStorage.setItem('prevUrl',prevUrl);

// דום לארועים 
const dom={

  submitForm:document.getElementById('submitForm'),
  submitNumberOfGrandms:document.getElementById('submitNumberOfGrandms'),
  numOfGrandsGroom:document.getElementById('numOfGrandsGroom'),
  userNav:document.getElementById('userNav'),
  numOfGrandsKala:document.getElementById('numOfGrandsKala')

}


//שליפת ה data מהlocal
// let invitations=localStorage.getItem('invitations');
let invitations = JSON.parse(localStorage.getItem('invitations'));
console.log(invitations);

const ThisUser = (name, password) => {

  console.log("ThisUser");
  if (invitations === null) 
  {
    console.log(" מערך ריק");
    invitations = [];
    localStorage.setItem('invitations', JSON.stringify(invitations));

    return null;
  }
  else 
  {
    console.log(invitations.length);
    for (let i = 0; i < invitations.length; i++) 
    {
      if (invitations[i].name === name && invitations[i].password === password)
      {
        console.log(i);
        return i;
      } 
      console.log(invitations[i].name+" "+invitations[i].password);
      console.log(name+'   '+password);    
    }
    
    return null;
  }
}


const old={

  
  nameOfGroom:document.getElementById('nameGroom'),
  nameOfKala:document.getElementById('nameKala'),
  nameFatherOfGroom:document.getElementById('nameFatherOfGroom'),
  nameFamilyFatherOfGroom:document.getElementById('nameFamelyFatherOfGroom'),
  nameFatherOfKala:document.getElementById('nameFatherOfKala'),
  nameFamilyFatherOfKala:document.getElementById('nameFamelyFatherOfKala'),
  dateOfTheWedding:document.getElementById('DateOfWedding'),
  timeOfTheWedding:document.getElementById('timeOfWedding'),
  yourHall:document.getElementById('yourHall'),
  // colorr:document.getElementById('')

}

let arrGroomGrands=[];
let arrKalaGrands=[];

const usersI=JSON.parse(localStorage.getItem('users')) ;
const userI=JSON.parse(sessionStorage.getItem('user'));
let isTrue = false;
let indexInvitation=(ThisUser(usersI[userI].name,usersI[userI].password));
console.log(indexInvitation);

if(indexInvitation===null)
{
  isTrue=false;
  console.log(isTrue);
}

else
{
  console.log(isTrue);
  isTrue=true;
  old.dateOfTheWedding.value=invitations[indexInvitation].dateOfTheWedding;
  old.nameOfKala.value=invitations[indexInvitation].nameOfKala;
  console.log(old.nameOfKala.value+"  "+invitations[indexInvitation].nameOfKala);
  old.nameOfGroom.value=invitations[indexInvitation].nameOfGroom;
  old.nameFatherOfKala.value=invitations[indexInvitation].nameFatherOfKala;
  old.nameFatherOfGroom.value=invitations[indexInvitation].nameFatherOfGroom;
  old.nameFamilyFatherOfKala.value=invitations[indexInvitation].nameFamilyFatherOfKala;
  old.nameFamilyFatherOfGroom.value=invitations[indexInvitation].nameFamilyFatherOfGroom;
  old.timeOfTheWedding.value=invitations[indexInvitation].timeOfTheWedding;
  old.yourHall.value=invitations[indexInvitation].yourHall;
  // arrGroomGrands=invitations[indexInvitation].arrGroomGrands;
  // arrKalaGrands=invitations[indexInvitation].arrKalaGrands;
  console.log(arrGroomGrands);

  


  for (let index = 0; index < invitations[indexInvitation].arrGroomGrands.length; index++) {

    const input=document.createElement('input');
    input.type='text';
    input.value=invitations[indexInvitation].arrGroomGrands[index];
    input.classList.add('inputDetails');
    arrGroomGrands.push(input);
    numOfGrandsGroom.appendChild(input);
    console.log(invitations[indexInvitation].arrGroomGrands);
  }
  

  for (let index = 0; index < invitations[indexInvitation].arrKalaGrands.length; index++) {

    const input=document.createElement('input');
    input.type='text';
    input.value=invitations[indexInvitation].arrKalaGrands[index];
    input.classList.add('inputDetails');
    arrKalaGrands.push(input);
    numOfGrandsKala.appendChild(input);
    console.log(invitations[indexInvitation].arrKalaGrands);
  }
  // const br3=document.createElement('br');
  // numOfGrandsKala.appendChild(br3);
  // const br4=document.createElement('br');
  // numOfGrandsKala.appendChild(br4);


 
}
 // הוספת סבים וסבתות
 const plusgrandgroom=document.getElementById('plusgrandgroom');
 const plusgrandkala=document.getElementById('plusgrandkala');
 plusgrandgroom.onclick=()=>{
   printGrandsGroom();
 }
 
 plusgrandkala.onclick=()=>{
   printGrandsKala();
 }
 
 const printGrandsGroom=()=>{
    
       let input=document.createElement('input');
       input.type='text';
       input.placeholder='הכנס שם מצד החתן';
       input.classList="inputDetails gold";
       arrGroomGrands.push(input);
       numOfGrandsGroom.appendChild(input);
   
 
       let br=document.createElement('br');
 
 }
 const printGrandsKala=()=>{
   

     let input=document.createElement('input');
     input.type='text';
     input.placeholder='הכנס שם מצד הכלה';
     input.classList="inputDetails gold";
     arrKalaGrands.push(input);
     numOfGrandsKala.appendChild(input);
   
 }
 
 // הסרת סבים וסבתות
 const minusgrandkala=document.getElementById('minusgrandkala');
 const minusgrandgroom=document.getElementById('minusgrandgroom');
 
 minusgrandgroom.onclick=()=>{
 
   console.log(arrGroomGrands);
   const lastInput = numOfGrandsGroom.lastElementChild; // Get the last input element
 
   if (arrGroomGrands.length>0) {
     
     // Check if a last input element exists
     lastInput.remove(); // Remove the last input
     arrGroomGrands.pop();
   }
 }
 
 minusgrandkala.onclick=()=>{
 
   console.log(arrKalaGrands);
   const lastInput = numOfGrandsKala.lastElementChild; // Get the last input element
   console.log(numOfGrandsKala);
 
   if (arrKalaGrands.length>0) {
     
     // Check if a last input element exists
     lastInput.remove(); // Remove the last input
     arrKalaGrands.pop();
     console.log(numOfGrandsKala);
   }
 }

// בחירת רקע להזמנה

// let imgChoose='./pictures/רקעים מעודכן/1.jpg';
// let idImg=3;
// let prevButton = null;
function attachButtonClickEvent() {
  const buttons = document.getElementsByClassName('pictureButton');

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = (event) => {

      console.log(event.target);
      const button = event.target;
      
      console.log(prevButton);
      if (prevButton) {
        prevButton.style.borderColor = '';
        prevButton.style.borderStyle = '';
      }
      console.log(button);
      imgChoose=button.src;
      idImg=button.id;
      console.log(idImg);
      button.style.borderColor = 'rgb(150, 126, 5)';
      button.style.borderStyle = 'solid';
      button.style.borderWidth = '6px'
      console.log('iu');
      prevButton = button;
      console.log(imgChoose+" "+idImg+"jhgfds");
    };
  }
}


// מספר סבים וסבתות

// dom.submitNumberOfGrandms.onclick=function(){

//   console.log("hygftrdes");
//    printGrands();
// }



//בעת אישור התופס
dom.submitForm.onclick=(event)=>{

 

  // בדיקה אם המשתמש מחובר
  if(dom.userNav.textContent==="user")
  {
    
    const confirmation = confirm("עדיין לא התחברת להתחברות הקש אישור");
    if (confirmation) 
    {
      window.location.href = "./conect.html";
    }

  }

  else
  {

    // בחירת רקע להזמנה
    let type=null;
  
    for (let index = 0; index < dataImg.length; index++) 
    {
      const element = dataImg[index];
      
      console.log(element.id);
      
      if ( idImg === element.id) 
      {

        type = element.type;
        break;
      }
    }

    console.log(imgChoose);

    // בחירת צבע
    const radioButtons = document.querySelectorAll('input[name="radioGroup"]');
    let color='kmkmlk';
    console.log(color);
    radioButtons.forEach(function(radio) {

      console.log(color+"  "+radio.value);
      // radio.addEventListener('change', function() {
      //   console.log(color);
      console.log(radio.checked);
      if (radio.checked) {
        const option = radio.value;
        console.log(radio.value+this.checked);
        if (option === 'option1') {
          color = 'black';
        } else if (option === 'option2') {
          color = 'rgb(251, 244, 178)';
          console.log("kjhgfds");
        } else if (option === 'option3') {
          color = 'rgb(150, 126, 5)';
        }
      }
        console.log(color);

      // });
    });


    console.log(arrKalaGrands[0]);
    console.log(arrKalaGrands[0]);

    // המרת השמות מאוביקט לערך
    
      for (let index = 0; index < arrKalaGrands.length; index++) {

       
        {
          const element = arrKalaGrands[index];

    
          arrKalaGrands[index]=element.value;
          console.log(arrKalaGrands[index]);
        }
        
        
      }
    
      for (let index = 0; index < arrGroomGrands.length; index++) {

      
        {
          const element = arrGroomGrands[index];
          arrGroomGrands[index]=element.value;
        }
        
        
      }
    

    //יצירת השמות
    let strOfGrandsOfGroom="";
    let strOfGrandsOfKala="";

    for (let index = 0; index < arrGroomGrands.length; index++) 
    {
      strOfGrandsOfGroom+="הרב "+arrGroomGrands[index]+" ורעיתו \n";  
    }

    for (let index = 0; index < arrKalaGrands.length; index++) 
    {
      strOfGrandsOfKala+="הרב "+arrKalaGrands[index]+" ורעיתו \n";  
    }
    
    
    // אוביקט לשליחה לעיצוב ההזמנה
    let data={

      name:usersI[userI].name,
      password:usersI[userI].password,
      imgChoose,
      type,
      nameOfGroom:document.getElementById('nameGroom').value,
      nameOfKala:document.getElementById('nameKala').value,
      nameFatherOfGroom:document.getElementById('nameFatherOfGroom').value,
      nameFamilyFatherOfGroom:document.getElementById('nameFamelyFatherOfGroom').value,
      nameFatherOfKala:document.getElementById('nameFatherOfKala').value,
      nameFamilyFatherOfKala:document.getElementById('nameFamelyFatherOfKala').value,
      strOfGrandsOfGroom1:strOfGrandsOfGroom,
      strOfGrandsOfKala1:strOfGrandsOfKala,
      dateOfTheWedding:document.getElementById('DateOfWedding').value,
      timeOfTheWedding:document.getElementById('timeOfWedding').value,
      yourHall:document.getElementById('yourHall').value,
      color
    }
    json=JSON.stringify(data);
    localStorage.setItem('data',json);
    console.log(arrKalaGrands+" "+color);

    data={

      name:usersI[userI].name,
      password:usersI[userI].password,
      imgChoose,
      type,
      nameOfGroom:document.getElementById('nameGroom').value,
      nameOfKala:document.getElementById('nameKala').value,
      nameFatherOfGroom:document.getElementById('nameFatherOfGroom').value,
      nameFamilyFatherOfGroom:document.getElementById('nameFamelyFatherOfGroom').value,
      nameFatherOfKala:document.getElementById('nameFatherOfKala').value,
      nameFamilyFatherOfKala:document.getElementById('nameFamelyFatherOfKala').value,
      arrGroomGrands:arrGroomGrands,
      arrKalaGrands:arrKalaGrands,
      strOfGrandsOfGroom1:strOfGrandsOfGroom,
      strOfGrandsOfKala1:strOfGrandsOfKala,
      dateOfTheWedding:document.getElementById('DateOfWedding').value,
      timeOfTheWedding:document.getElementById('timeOfWedding').value,
      yourHall:document.getElementById('yourHall').value,
      color,
    }
    console.log(data.arrGroomGrands);

    //  בדיקה אם קימת הזמנה למשתמש 
    if(isTrue)
    {
      console.log(isTrue);
      invitations[indexInvitation]=data ;
      console.log(invitations[indexInvitation]);
      localStorage.setItem('invitations',JSON.stringify(invitations) );

      console.log(data);
      console.log(indexInvitation);
    }
    else
    {
      console.log(isTrue);
      invitations.push(data);
      localStorage.setItem('invitations',JSON.stringify(invitations) );
      console.log(invitations[indexInvitation]);
      console.log(data);
      console.log(indexInvitation);
    }
    console.log(isTrue);
    console.log(invitations);
    

    window.location.href ='./yourinvitation.html';
  }
}