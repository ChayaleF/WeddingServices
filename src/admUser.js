const users2=JSON.parse( localStorage.getItem('users'));

const divUsers=document.getElementById('divUsers');

    const nameT=document.createElement('p');
    const divT=document.createElement('div');
    divT.classList='flex';
    divT.id='titlesUsers';

divUsers.appendChild(divT);
    const passwordT=document.createElement('p');
    const dateOfWeddingT=document.createElement('p');
    const emailT=document.createElement('p');
    const phoneT=document.createElement('p');
    nameT.innerText='שם משתמש';
    passwordT.innerText='סיסמא';
    dateOfWeddingT.innerText='תאריך החתונה';
    phoneT.innerText='טלפון';
    emailT.innerText='מיל';

    divT.append(nameT,passwordT,emailT,phoneT,dateOfWeddingT);

for (let index = 0; index < users2.length; index++) {

    const element = users2[index];

    const div=document.createElement('div');
    div.classList='flex';
    divUsers.appendChild(div);

    const name=document.createElement('p');
    const password=document.createElement('p');
    const dateOfWedding=document.createElement('p');
    const email=document.createElement('p');
    const phone=document.createElement('p');
    name.innerText=element.name;
    password.innerText=element.password;
    dateOfWedding.innerText=element.datewedding;
    phone.innerText=element.phone;
    email.innerText=element.email;
    div.append(name,password,email,phone,dateOfWedding);
}