//get all the id,class 
const weight = document.querySelector('#weight'); 
const height = document.querySelector('#height'); 
const Form = document.querySelector('form'); 
let  result = document.querySelector('#rslt'); 
const calculateBtn = document.querySelector('.cal'); 
const resetbtn = document.querySelector('.rst');
let resultText = document.querySelector("#resultText");  

//originalContent 
let originalContent = result.innerHTML;
let originalText = resultText.innerHTML ; 




//step - 1  calculate the bmi 
function CalculateBMI(){
    const w = weight.value; 
    const h = height.value; 
    let meter = (h*0.0254); 

    let bmi = w/(meter*meter); 
    let BMI = bmi.toFixed(2)
    console.log(bmi)
    result.innerHTML = `Your BMI Is: ${BMI} kg/m-2`; 

    if(BMI < 25.00){
        resultText.innerHTML = "নরমাল (স্বাভাবিক)"
        resultText.style.color = "green";
    }else if(BMI < 29.9){
        resultText.innerHTML = "ওভারওয়েট ( প্রি ওবিজ)";
        resultText.style.color = "red";
    }else if(BMI < 34.9){
        resultText.innerHTML = "ওবিজ ক্লাস ১";
        resultText.style.color = "red";
    }else if (BMI < 39.9){
        resultText.innerHTML = "ওবিজ ক্লাস ২";
        resultText.style.color = "red";
    }else if(BMI >= 40.00){
        resultText.innerHTML = "ওবিজ ক্লাস ৩"; 
        resultText.style.color = "red";
    }

}


//step - reset all 
function Reset(){
    weight.value = ""
    height.value = ""
    result.innerHTML = originalContent; 
    resultText.innerHTML = originalText; 


}


//step - 3 call the button click to execute the functions 
calculateBtn.addEventListener('click',CalculateBMI); 
resetbtn.addEventListener('click',Reset); 

