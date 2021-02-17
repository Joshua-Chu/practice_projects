const h1 = document.querySelector('.container h1');


const buttons  = document.querySelectorAll('button');
let total = Number(h1.textContent);


function colorPicker(){
    if (total < 0){
        h1.style.color ='lightcoral';
    }else if (total > 0){
        h1.style.color ='mediumspringgreen';
    }else{
        h1.style.color ='gray';
    }
}

buttons.forEach(button =>{
    button.addEventListener('click', e=>{
        if(e.target.id ==='increase'){
            total++;
        }else if(e.target.id ==='decrease'){
            total--;
        }else{
            total = 0;
        }

        colorPicker();
        h1.textContent = total;
    })
})