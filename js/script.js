function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const calculateForm = document.getElementById('calc-form'),
calculateCm = document.getElementById('calc-cm'),
calculateKg = document.getElementById('calc-kg'),
calculateMsg = document.getElementById('calc-msg');

const calculateBmi = (e) =>{
    e.preventDefault();

    if(calculateCm.value == '' || calculateKg.value == ''){
        calculateMsg.classList.remove('color-green');
        calculateMsg.classList.remove('color-red');

        calculateMsg.textContent = 'Fill in the Height and Weight 🏋🏻';

        setTimeout(() =>{
            calculateMsg.textContent = '';
        }, 3000);
    } else {
        const cm = calculateCm.value / 100, 
        kg = calculateKg.value, 
        bmi = Math.round(kg / (cm * cm));

        if(bmi < 18.5){
            calculateMsg.classList.add('color-red');
            calculateMsg.textContent = `Your BMI is ${bmi} and you are Skinny 🫤`;
        } else if(bmi < 25){
            calculateMsg.classList.add('color-green');
            calculateMsg.textContent = `Your BMI is ${bmi} and you are Healthy 😄`;
        } else {
            calculateMsg.classList.add('color-red');
            calculateMsg.textContent = `Your BMI is ${bmi} and you are Overweight 😐`;
        }
    }
}

calculateForm.addEventListener('submit', calculateBmi);
