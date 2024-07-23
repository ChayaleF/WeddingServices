
// const image = new Image();
// image.src = './pictures/טבעות/1.jpg'; // Replace 'image-url' with the actual image URL

// image.onload = function() {
//   const isFromAnotherDomain = !!this.crossOrigin;
//   console.log('Is the image from another domain?', isFromAnotherDomain);
// };
const invitations=JSON.parse(localStorage.getItem('invitations'))
console.log(invitations);
const downloadButton = document.getElementById('download-button');
downloadButton.addEventListener('click', () => {
  const pageContent = document.documentElement;
  body.removeChild(downloadButton);
  const images = Array.from(pageContent.getElementsByTagName('img'));
  const imageLoadPromises = images.map(img => new Promise(resolve => {
    if (img.complete) {
      resolve();
    } else {
      img.onload = resolve;
    }
  }));

  Promise.all(imageLoadPromises).then(() => {
    html2canvas(pageContent).then(canvas => {
      const dataUrl = canvas.toDataURL("image/png");

      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = 'page.png';
      link.click();
    });
  });
});

//פונקציה לחישוב תאריך עברי תקין לחתונה!!!!!!
const hebrewdatewedding=function(date2)
{
const date1 = new Date(date2);

// Get the Hebrew calendar options
const options1 = { calendar: 'hebrew', year: 'numeric', month: 'long', day: 'numeric' };

// Format the date using the Hebrew calendar and Hebrew language
const hebrewDate1 = date1.toLocaleDateString('he-IL', options1);
const hebrewDays=[0,'\'א','ב\'','ג\'','ד\'','ה\'','ו\'','ז\'','ח\'','ט\'','י\'','י\"א','י\"ב','י\"ג','י\"ד','ט\"ו','ט\"ז','י\"ז','י\"ח','י\"ט','כ\,','כ\"א','כ\"ב','כ\"ג','כ\"ד','כ\"ה','כ\"ו','כ\"ז','כ\"ח','כ\"ט','ל\''];
const hebrewYears=['תשפ\"ג',"תשפ\"ד","תשפ\"ד"];

console.log(hebrewDate1); // Output: ויתן לי: 6 באב תשפ"ג
const month = hebrewDate1.split(' ')[1];
const year = hebrewDate1.split(' ')[0];
const day = hebrewDate1.split(' ')[2];

console.log(month); // Output: "Bab"
console.log(year); // Output: "6"
console.log(day); // Output: "Tashpag"

const day1=parseInt(day);
const year1=parseInt(year);

console.log(day1,year1);
const updatedDate=hebrewDays[year1]+" "+month+" "+hebrewYears[day1-5783];
console.log(updatedDate);

return updatedDate;
}


const data=JSON.parse(localStorage.getItem("data"));

console.log(data.type );
const body=document.querySelector('body');
body.style.color=data.color;
body.style.backgroundColor=data.color;
const div=document.createElement('div');
div.id='divBoth';
body.appendChild(div);
const divfront=document.createElement('div');
divfront.style.backgroundImage=`url(${data.imgChoose})`;
divfront.id='divFront';
divfront.classList=('imgBackground');
div.appendChild(divfront);

const divBack=document.createElement('div');
divBack.style.backgroundImage=`url(${data.imgChoose})`;
divBack.id='divBack';
divBack.classList=('imgBackground');
div.appendChild(divBack);

const bsd=document.createElement('p');
bsd.innerText='בסיעתא דישמיא';
bsd.id='bsd';
divfront.appendChild(bsd);

// const br1=document.createElement('br');
// divfront.appendChild(br1);


const nahale=document.createElement('p');
nahale.innerText='נעלה את ירושלים על ראש שמחתנו';
nahale.id='nahale';
divfront.appendChild(nahale);

const divTov=document.createElement('div');
divTov.id='divTov';
divTov.classList='flex';
// const br2=document.createElement('br');
divfront.appendChild(divTov);

const pSiman=document.createElement('p');
const pMazal=document.createElement('p');
pSiman.id='pSiman';
pMazal.id='pMazal';
pSiman.innerText='בסימן טוב';
pMazal.innerText='ובמזל טוב';
divTov.append(pSiman,pMazal);

const pbeshevach = document.createElement('p');
pbeshevach.id = "pbeshevach";
pbeshevach.innerText = "בשבח ובהודאה לבורא עולם על כל הטוב אשר גמלנו \n הננו מתכבדים להזמינכם להשתתף \n בשמחת כלולות בנינו היקרים";
divfront.appendChild( pbeshevach);

const divgroomandkala = document.createElement('div');
divgroomandkala.id = "divgroomandkala";
const pgroom = document.createElement('p');
pgroom.id = "pgroom";
pgroom.innerText = data.nameOfGroom;
const pny = document.createElement('p');
pny.id = "pny";
pny.innerText = "נ\"י";
const pgny = document.createElement('p');
pgny.id = "pgny";
pgny.innerText = pgroom.textContent + " " + pny.textContent;
const pabg = document.createElement('p');
pabg.id = "pabg";
pabg.innerText = "עב\"ג";
const pkala = document.createElement('p');
pkala.id = "pkala";
pkala.innerText = data.nameOfKala;
const ptchi = document.createElement('p');
ptchi.id = "ptchi";
ptchi.innerText ="תח\"י";
const pktchi = document.createElement('p');
pktchi.id = "pktchi";
pktchi.innerText = pkala.textContent + " " + ptchi.textContent;
divgroomandkala.classList="flex";
divgroomandkala.append(pgny, pabg, pktchi);
divfront.append(divgroomandkala);

const weddDate = new Date(data.dateOfTheWedding);
const dateDay = weddDate.getDay();
const daysOfWeek = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת'];
const dayName = document.createElement('p');
dayName.id = "dayName";
dayName.innerText = daysOfWeek[dateDay];
const pweddDateUpdated=document.createElement('p');
pweddDateUpdated.id="pweddDateUpdated";
pweddDateUpdated.innerText=hebrewdatewedding(weddDate);
const pweddingHall=document.createElement('p');
pweddingHall.id="pWeddingHall";
pweddingHall.innerText=data.yourHall;
const pweddHour=document.createElement('p');
pweddHour.id="pweddHour";
pweddHour.innerText=data.timeOfTheWedding;
const pweddingDetails=document.createElement('p');
pweddingDetails.id="pweddingDetails";
pweddingDetails.innerText="שתתקים בשעה טובה ומוצלחת \n ביום "+dayName.textContent+" "+pweddDateUpdated.textContent+" \nב\""+pweddingHall.textContent+"\" \n החופה בשעה "+pweddHour.textContent+" \n \n נשמח לראותכם משתתפים בשמחתינו \n";
divfront.append(pweddingDetails);

const divParents=document.createElement('div');
divParents.id="divParents";
const familyOfGroom=document.createElement('p');
familyOfGroom.id="familyOfGroom";
familyOfGroom.innerText=data.nameFamilyFatherOfGroom;
const familyOfKala=document.createElement('p');
familyOfKala.id="familyOfKala";
familyOfKala.innerText=data.nameFamilyFatherOfKala;
const pFatherOfGroom=document.createElement('p');
pFatherOfGroom.id="pFatherOfGroom";
pFatherOfGroom.innerText=data.nameFatherOfGroom+" "+familyOfGroom.textContent+" ורעיתו";
const pFatherOfKala=document.createElement('p');
pFatherOfKala.id="pFatherOfKala";
pFatherOfKala.innerText=data.nameFatherOfKala+" "+familyOfKala.textContent+" ורעיתו";
divParents.className="flex";
divParents.append(pFatherOfGroom,pFatherOfKala);
divfront.append(divParents);
const divGrands=document.createElement('div');
divGrands.id="divGrands";
const pgrandsOfGroom=document.createElement('p');
pgrandsOfGroom.id="pgrandsOfGroom";
pgrandsOfGroom.innerText=data.strOfGrandsOfGroom1;
const pgrandsOfKala=document.createElement('p');
pgrandsOfKala.id="pgrandsOfKala";
pgrandsOfKala.innerText=data.strOfGrandsOfKala1;
divGrands.classList="flex";
divGrands.append(pgrandsOfGroom,pgrandsOfKala);
divfront.append(divGrands);


// const bDiv=document.createElement('div');
// bDiv.style.borderRadius='50%'
// const gk=document.createElement('p');
// gk.innerText=data.nameOfGroom+" "+'&'+" "+data.nameOfKala;
// gk.style.width='100px';
// const bDate=document.createElement('p');
// bDate.innerText=pweddDateUpdated.textContent;
// bDiv.append(gk,bDate);
// divBack.append(bDiv);


const bDiv = document.createElement('div');
bDiv.style.width = '200px'; // Adjust the width and height to desired size
bDiv.style.height = '200px';
bDiv.style.borderRadius = '50%';
bDiv.style.border = '2px solid';
bDiv.style.display = 'flex';
bDiv.style.flexDirection = 'column';
bDiv.style.justifyContent = 'center';
bDiv.style.alignItems = 'center';

const gk = document.createElement('p');
gk.innerText = data.nameOfGroom + ' & ' + data.nameOfKala;
gk.style.margin = '0';
gk.style.fontSize = '24px'; // Adjust the font size to the desired value

const bDate = document.createElement('p');
bDate.innerText = pweddDateUpdated.textContent;
bDate.style.margin = '0';

divBack.style.display = 'flex';
divBack.style.flexDirection = 'column';
divBack.style.justifyContent = 'center';
divBack.style.alignItems = 'center';
bDiv.append(gk, bDate);

const bmazalTov=document.createElement('p');
bmazalTov.innerText='מזל טוב';
bmazalTov.style.marginTop='100px';
bmazalTov.style.fontSize='35px';
divBack.append(bDiv,bmazalTov);


if(data.type==='width')
{
  divfront.classList.add('width');
  divBack.classList.add('width');

}
else
{
  divBack.classList.add('height');
  divfront.classList.add('height');
}

