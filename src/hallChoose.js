
const idHall=sessionStorage.getItem('idHall');

const loadPictures = () => {
    let p = $.ajax({
      
        method: 'GET',
        url: './halls.json',
        
        success: (data) => {
            printPictures(data);
  
        }
    });
  
}
const body=document.getElementById('body');
const printPictures=(data)=>{

    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        console.log("gygy  "+element.id);
        if(element.id===idHall)
        {
            console.log("gygy  "+element.id);

            const div=document.createElement('div');
            div.classList='div-picture';
            div.id=element.id;
            const h1=document.createElement('h1');
            h1.classList='title';
            h1.innerText=element.name;
            const img=document.createElement('img');
            img.src=element.img;
            img.id=chooseImg;
            const p=document.createElement('p');
            p.classList='description';
            p.innerText=element.hallShortDescription;
            const numOfChairs=document.createElement('p');
            numOfChairs.innerText=element.numOfChairs;
            const hallLengthDescription=document.createElement('p');
            hallLengthDescription.innerText=element.hallLengthDescription;
            hallLengthDescription.id='hallLengthDescription';
            const iframe=document.createElement('iframe');
            iframe.src=element.map;
            iframe.classList='maps';
            div.append(h1,img,p,numOfChairs,hallLengthDescription,iframe);
            body.appendChild(div);
            break;

        }
    }
}
loadPictures();