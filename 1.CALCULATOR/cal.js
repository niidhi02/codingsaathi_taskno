let screen=document.getElementById('screen');
button=document.querySelectorAll('button');
let screenValue ='';
for(num of button){
    num.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
       console.log('button click, ', buttonText);
       if(buttonText=='*'){
        buttonText='*';
        screenValue += buttonText;
        screen.value = screenValue;
        }
        else if (buttonText== 'x'){
        screenValue = " ";
        screen.value = screenValue;
       }
        else if (buttonText == '=') {
        screen.value = eval(screenValue);
        }
        else {
        screenValue += buttonText;
        screen.value = screenValue;
        }

    })
}
