// שם משתמש ניווט עליון
const users=JSON.parse(localStorage.getItem('users')) ;
const user=JSON.parse(sessionStorage.getItem('user')) ;

if(user!=null)
{
    let userNav=document.getElementById('userNav');
    userNav.innerText=users[user]?.name; 
}

const navPage=document.getElementById('nav-page') ;

if(users[user]?.name==='adm'&&users[user]?.password==='123')
{
    console.log(users[user].name+" "+users[user].password);
   const li=document.createElement('li');
   li.id='admUsers';
   const a=document.createElement('a');
   a.href='./admUser.html';
   a.classList=("gold link text_size_s");
   a.innerHTML='הצגת משתמשים';
   li.appendChild(a);
   navPage.appendChild(li);
}
// else
// {
//     if(document.getElementById('admUsers'))
//     {
//         // navPage.removeChild(document.getElementById('admUsers'));
//     }
// }

// timer
const sec=document.getElementById('sec');
const min=document.getElementById('min');
const hou=document.getElementById('hou');
const da=document.getElementById('da');

var display = document.getElementById("timer");

const startDate=new Date();
const d =  users[user]?.dateOfWedding;
const endDate=new Date(d);

var timeDifference = endDate.getTime() - startDate.getTime(); // מחשב את ההפרש בין התאריכים במילישניות
var seconds = Math.floor(timeDifference / 1000); // מחשב את ההפרש בשניות

var days = Math.floor(seconds / (24 * 60 * 60)); // מחשב את מספר הימים בהפרש
seconds -= days * 24 * 60 * 60;

var hours = Math.floor(seconds / (60 * 60)); // מחשב את מספר השעות בהפרש
seconds -= hours * 60 * 60;

var minutes = Math.floor(seconds / 60); // מחשב את מספר הדקות בהפרש
seconds -= minutes * 60;

seconds=Math.floor(seconds);

startTimer(days, hours, minutes,seconds, display); 

function startTimer(days, hours, minutes,second, display) {
    var totalSeconds = (days * 24 * 60 * 60) + (hours * 60 * 60) + (minutes * 60)+(second);
    var timer = totalSeconds, remainingDays, remainingHours, remainingMinutes, seconds;
    setInterval(function () {
        remainingDays = Math.floor(timer / (24 * 60 * 60));
        remainingHours = Math.floor((timer % (24 * 60 * 60)) / (60 * 60));
        remainingMinutes = Math.floor((timer % (60 * 60)) / 60);
        seconds =Math.floor(timer % 60); 

        remainingDays = remainingDays < 10 ? "0" + remainingDays : remainingDays;
        remainingHours = remainingHours < 10 ? "0" + remainingHours : remainingHours;
        remainingMinutes = remainingMinutes < 10 ? "0" + remainingMinutes : remainingMinutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        sec.innerHTML = seconds?seconds:'';
        min.innerHTML =remainingMinutes?remainingMinutes:'';
        hou.innerHTML=remainingHours?remainingHours:'';
        da.innerHTML=remainingDays?remainingDays:'';

        if (--timer < 0) {
            timer = 0;
        }
    }, 1000);
}

const emailButton = document.getElementById('emailButton');

emailButton.addEventListener('click', function() {
  const recipient = 'c0556728176@gmail.com,t8472959@gmail.com'; // Replace with the recipient's email address
  const subject = 'Hello'; // Replace with the desired subject
  const body = 'This is the message body.'; // Replace with the desired email body

const mailtoURL = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(recipient)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

// const isGmailOpen = navigator.userAgent.includes('Gmail');
// const isOutlookOpen = navigator.userAgent.includes('Outlook');

// if (isGmailOpen || isOutlookOpen) 
// {
//     window.location.href = mailtoURL; // Open new message window in the existing email client
// } 
window.open(mailtoURL, '_blank');
// else 
// {
//     window.open(mailtoURL); // Open new window with the email client
// }
});

const audio=document.createElement('audio');
audio.id="music";
audio.src="./assest/pictures/אבי אילסון - זמן חופה.mp3"?"../assest/pictures/אבי אילסון - זמן חופה.mp3":"../assest/pictures/אבי אילסון - זמן חופה.mp3";
audio.loop=true;
audio.autoplay=true;
document.body.appendChild(audio);

window.addEventListener("load", () => {

  const music = document.getElementById("music");
  
  if (sessionStorage.getItem("audioPosition")) {
    music.currentTime = parseFloat(sessionStorage.getItem("audioPosition"));
  }
    
  music.addEventListener("timeupdate", () => {
    sessionStorage.setItem("audioPosition", music.currentTime);
  });
  
  music.play();
  
});

  



const usernametop=document.getElementById('user-name-top');
usernametop?.addEventListener('click',function(){
   location.href="./connected.html";

})
usernametop?.addEventListener('mouseover', function() {
    usernametop.style.cursor="pointer";
})
const logoImg=document.getElementById('title');
logoImg.addEventListener('click',function(){
    location.href="../index.html";
})
logoImg?.addEventListener('mouseover',function(){
    logoImg.style.cursor="pointer";
})
const linkPhotographers=document.getElementById('photographersLink');
linkPhotographers.onclick = function() {
    const url = "https://tekno-art.com/";
    window.open(url, '_blank');
};

linkPhotographers?.addEventListener('mouseover', function() {              
    linkPhotographers.style.cursor="pointer";
});



