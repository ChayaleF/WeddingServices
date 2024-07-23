const dom={
    name:document.getElementById('name'),
    phoneNumber:document.getElementById('phoneNumber')
}
    const email = document.createElement('input');
    const wish = document.getElementById('wish');
    const date = new Date();
    const hour = date.getHours();
    
    const inputname = document.getElementById('demo-name');
    const inputpass = document.getElementById('demo-password');
    const submit = document.getElementById('submit');
    const newUser = document.getElementById('newUser');
    // const form = document.getElementById('newUser');
    
    const container = document.getElementById('wrapper');
    
    if (hour > 19 && hour < 23 || hour < 6)
        wish.innerHTML = '!לילה טוב';
    else if (hour >= 6 && hour <= 12)
        wish.innerHTML = '!בוקר טוב';
    else if (hour <= 17)
        wish.innerHTML = '!צהרים טובים';
    else if (hour <= 19)
        wish.innerHTML = '!ערב טוב';
    
    inputname.onkeypress = (event) => {
        if (!((event.key >= 'a' && event.key <= 'z') || (event.key >= 'A' && event.key <= 'Z') || (event.key >= 'א' && event.key <= 'ת') || event.key === ' '))
            event.preventDefault();
    }
    
    const ThisUser = (name, password) => {
        let users = JSON.parse(localStorage.getItem('users'));
        if (users === null) {
            users = [];
            localStorage.setItem('users', JSON.stringify(users));
            return null;
        }
        else {
            for (let i = 0; i < users.length; i++) {
                if (users[i].name === name && users[i].password === password)
                    return i;
            }
            return null;
        }
    }
    
    
    submit.onclick = (event) => {
        event.preventDefault();
        if (inputname.value === '' || inputpass.value === '' ) {
            alert('חובה למלא את כל השדות');
        }
        else
        if (ThisUser(inputname.value, inputpass.value) === null) {//משתמש חדש
            

            console.log(inputname.value);
            newUser.innerHTML = ' : זוהה משתמש חדש , יש להשלים רישום'

            const divflex2 = document.createElement('div');
            divflex2.classList='flexForm';

            const confirmPass = document.createElement('input');
            confirmPass.type = 'password';
            confirmPass.placeholder = 'אימות סיסמה';
            confirmPass.classList='inputForm';
    
           
            email.type = 'email';
            email.placeholder = 'אימייל';
            email.classList='inputForm';

            divflex2.append(email);
            divflex2.append(confirmPass);
    
            const divflex3 = document.createElement('div');
            divflex3.classList='flexForm';

            const dateOfWedding = document.createElement('input');
            dateOfWedding.type='date';
            dateOfWedding.classList='inputForm';

            dateOfWedding.onclick=() => {
                divflex3.removeChild(p);
            }

            const p=document.createElement('h5');
            p.classList='buttonForm';
            p.id='labelDate';
            p.innerText='תאריך החתונה'
    
            const tel = document.createElement('input');
            tel.type = 'tel';
            tel.placeholder = 'טלפון';
            tel.classList='inputForm';

            divflex3.append(p);
            divflex3.append(tel);
            divflex3.append(dateOfWedding);
            divflex3.style.position='relative';
           
            const br = document.createElement('br');
            container.append(br);
            container.append(divflex2);
            container.append(br);
            container.append( divflex3);
    
            tel.onkeypress = (event) => {
                if (!(event.key >= 0 && event.key <= 9))
                    event.preventDefault();
            }
            submit.onclick = (event) => {
                event.preventDefault();
                
                if (inputname.value === '' || inputpass.value === '' || tel.value === '' || email.value === '' || dateOfWedding.value === '') {
                    alert('חובה למלא את כל השדות');
                    return
                }
                if (inputpass.value != confirmPass.value) {
                    alert('יש להכניס את הסיסמה שבחרתם לשני המקומות')
                    return;
                }
    
                if (tel.value.length > 10 || tel.value.length < 9) {
                    alert('יש להכניס מספר טלפון תקין בן 9 או 10 ספרות');
                    return;
                }
                const d=new Date(dateOfWedding.value);
                if(d.getTime()<date.getTime())
                {
                    alert('הכנס תאריך תקין')
                    return;
                }
                
    
                let p = {
                    name: document.getElementById('demo-name').value,
                    password: document.getElementById('demo-password').value,
                    email: email.value,
                    dateOfWedding: dateOfWedding.value,
                    phone: tel.value,
                    cart: [],
                }
                let users = JSON.parse(localStorage.getItem('users'));
                users.push(p);
                sessionStorage.setItem('user', (users.length - 1));
                localStorage.setItem('users', JSON.stringify(users));
    
                location.href = (sessionStorage.getItem('prevUrl'));
            }
        }
    
        else {
            sessionStorage.setItem('user', JSON.stringify(ThisUser(inputname.value, inputpass.value)));
            sessionStorage.setItem('password',JSON.stringify(ThisUser(inputname.value, inputpass.value)))
            location.href = (sessionStorage.getItem('prevUrl'));
           
        }
    }
    const returnC=document.getElementById('return');

    returnC.onclick=function(){

        location.href = (sessionStorage.getItem('prevUrl'));
    }

   