// קבועים ומבנים
const imgChoose = '../assest/pictures/רקעים מעודכן/1.jpg';
let idImg = 3;
let prevButton = null;

let dataImg = null;
const picturesInWidth = document.getElementById('picturesInWidth');
const picturesInLength = document.getElementById('picturesInLength');

// טעינת תמונות מהשרת
const loadPictures = () => {
  $.ajax({
    method: 'GET',
    url: '../data/invitation.json',
    success: (data) => {
      dataImg = data;
      printPictures(data);
      attachButtonClickEvent();
    }
  });
};

// הדפסת תמונות לתוך האלמנטים המתאימים
const printPictures = (data) => {
  data.forEach(item => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'pictureButton';

    const img = document.createElement('img');
    img.src = item.img;
    img.id = item.id;
    button.appendChild(img);

    if (item.type === "width") {
      picturesInWidth.appendChild(button);
    } else {
      picturesInLength.appendChild(button);
    }
  });
};

loadPictures();

// גלילת התמונות
const scrollLeftButton = document.getElementById('scroll-left-button');
const scrollRightButton = document.getElementById('scroll-right-button');
const pictureRow = document.getElementById('picturesInWidth');

scrollLeftButton.addEventListener('click', () => pictureRow.scrollBy({ left: -244, behavior: 'smooth' }));
scrollRightButton.addEventListener('click', () => pictureRow.scrollBy({ left: 244, behavior: 'smooth' }));

// הגדרת URL קודמים
const prevUrl = "invitation.html";
sessionStorage.setItem('prevUrl', prevUrl);

// יצירת אובייקטים לאלמנטים
const dom = {
  submitForm: document.getElementById('submitForm'),
  submitNumberOfGrandms: document.getElementById('submitNumberOfGrandms'),
  numOfGrandsGroom: document.getElementById('numOfGrandsGroom'),
  userNav: document.getElementById('userNav'),
  numOfGrandsKala: document.getElementById('numOfGrandsKala')
};

const old = {
  nameOfGroom: document.getElementById('nameGroom'),
  nameOfKala: document.getElementById('nameKala'),
  nameFatherOfGroom: document.getElementById('nameFatherOfGroom'),
  nameFamilyFatherOfGroom: document.getElementById('nameFamelyFatherOfGroom'),
  nameFatherOfKala: document.getElementById('nameFatherOfKala'),
  nameFamilyFatherOfKala: document.getElementById('nameFamelyFatherOfKala'),
  dateOfTheWedding: document.getElementById('DateOfWedding'),
  timeOfTheWedding: document.getElementById('timeOfWedding'),
  yourHall: document.getElementById('yourHall')
};

// קבלת נתונים מה-localStorage
let invitations = JSON.parse(localStorage.getItem('invitations'));
const usersI = JSON.parse(localStorage.getItem('users'));
const userI = JSON.parse(sessionStorage.getItem('user'));

// פונקציה לחיפוש משתמש
const findUserIndex = (name, password) => {
  if (!invitations) {
    invitations = [];
    localStorage.setItem('invitations', JSON.stringify(invitations));
    return null;
  }

  return invitations.findIndex(invitation => invitation.name === name && invitation.password === password);
};

// הגדרת מצב משתמש
let indexInvitation = findUserIndex(usersI[userI]?.name, usersI[userI]?.password);
let isTrue = indexInvitation !== -1;

if (isTrue) {
  const invitation = invitations[indexInvitation];
  old.dateOfTheWedding.value = invitation.dateOfTheWedding;
  old.nameOfKala.value = invitation.nameOfKala;
  old.nameOfGroom.value = invitation.nameOfGroom;
  old.nameFatherOfKala.value = invitation.nameFatherOfKala;
  old.nameFatherOfGroom.value = invitation.nameFatherOfGroom;
  old.nameFamilyFatherOfKala.value = invitation.nameFamilyFatherOfKala;
  old.nameFamilyFatherOfGroom.value = invitation.nameFamilyFatherOfGroom;
  old.timeOfTheWedding.value = invitation.timeOfTheWedding;
  old.yourHall.value = invitation.yourHall;

  const arrGroomGrands = invitation.arrGroomGrands || [];
  const arrKalaGrands = invitation.arrKalaGrands || [];

  arrGroomGrands.forEach(grand => {
    const input = createGrandInput(grand, 'הכנס שם מצד החתן');
    dom.numOfGrandsGroom.appendChild(input);
  });

  arrKalaGrands.forEach(grand => {
    const input = createGrandInput(grand, 'הכנס שם מצד הכלה');
    dom.numOfGrandsKala.appendChild(input);
  });
}

// יצירת שדות סבים וסבתות
const createGrandInput = (value, placeholder) => {
  const input = document.createElement('input');
  input.type = 'text';
  input.value = value;
  input.classList.add('inputDetails');
  input.placeholder = placeholder;
  return input;
};

// הוספת סבים וסבתות
const addGrand = (element, placeholder, container, array) => {
  const input = createGrandInput('', placeholder);
  array.push(input);
  container.appendChild(input);
};

const plusgrandgroom = document.getElementById('plusgrandgroom');
const plusgrandkala = document.getElementById('plusgrandkala');

plusgrandgroom.onclick = () => addGrand('input', 'הכנס שם מצד החתן', dom.numOfGrandsGroom, arrGroomGrands);
plusgrandkala.onclick = () => addGrand('input', 'הכנס שם מצד הכלה', dom.numOfGrandsKala, arrKalaGrands);

// הסרת סבים וסבתות
const removeGrand = (container, array) => {
  if (array.length > 0) {
    const lastInput = container.lastElementChild;
    lastInput.remove();
    array.pop();
  }
};

const minusgrandgroom = document.getElementById('minusgrandgroom');
const minusgrandkala = document.getElementById('minusgrandkala');

minusgrandgroom.onclick = () => removeGrand(dom.numOfGrandsGroom, arrGroomGrands);
minusgrandkala.onclick = () => removeGrand(dom.numOfGrandsKala, arrKalaGrands);

// טיפול בבחירת רקע להזמנה
const attachButtonClickEvent = () => {
  Array.from(document.getElementsByClassName('pictureButton')).forEach(button => {
    button.onclick = (event) => {
      if (prevButton) {
        prevButton.style.borderColor = '';
        prevButton.style.borderStyle = '';
      }
      imgChoose = event.target.src;
      idImg = event.target.id;
      event.target.style.borderColor = 'rgb(150, 126, 5)';
      event.target.style.borderStyle = 'solid';
      event.target.style.borderWidth = '6px';
      prevButton = event.target;
    };
  });
};

// בעת אישור התופס
dom.submitForm.onclick = () => {
  if (dom.userNav.textContent === "user") {
    if (confirm("עדיין לא התחברת להתחברות הקש אישור")) {
      window.location.href = "./conect.html";
    }
    return;
  }

  let type = dataImg?.find(item => item.id === idImg)?.type || null;
  let color = 'kmkmlk';

  document.querySelectorAll('input[name="radioGroup"]').forEach(radio => {
    if (radio.checked) {
      color = radio.value === 'option1' ? 'black' :
              radio.value === 'option2' ? 'rgb(251, 244, 178)' :
              radio.value === 'option3' ? 'rgb(150, 126, 5)' :
              color;
    }
  });

  const getGrandValues = (array) => array.map(input => input.value);

  const data = {
    name: usersI[userI].name,
    password: usersI[userI].password,
    imgChoose,
    type,
    nameOfGroom: old.nameOfGroom.value,
    nameOfKala: old.nameOfKala.value,
    nameFatherOfGroom: old.nameFatherOfGroom.value,
    nameFamilyFatherOfGroom: old.nameFamilyFatherOfGroom.value,
    nameFatherOfKala: old.nameFatherOfKala.value,
    nameFamilyFatherOfKala: old.nameFamilyFatherOfKala.value,
    strOfGrandsOfGroom1: getGrandValues(arrGroomGrands).map(name => `הרב ${name} ורעיתו`).join('\n'),
    strOfGrandsOfKala1: getGrandValues(arrKalaGrands).map(name => `הרב ${name} ורעיתו`).join('\n'),
    dateOfTheWedding: old.dateOfTheWedding.value,
    timeOfTheWedding: old.timeOfTheWedding.value,
    yourHall: old.yourHall.value,
    color
  };

  localStorage.setItem('data', JSON.stringify(data));

  if (isTrue) {
    invitations[indexInvitation] = data;
  } else {
    invitations.push(data);
  }
  
  localStorage.setItem('invitations', JSON.stringify(invitations));
  window.location.href = './yourinvitation.html';
};
