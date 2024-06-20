let  dateValid = false, firstnameValid=false,lastNameValid=false,emailValid = false, feedbackValid = false;

function dateValidation() {
    const date = document.getElementById('date').value;
    const dateError = document.getElementById('dateError');
    if (!/^(0?[1-9]|[12][0-9]|3[01])[\-](0?[1-9]|1[012])[\-]\d{4}$/.test(date)) {
        dateError.textContent = 'Date should be in  DD-MM-YYYY format.';
        dateError.style.visibility = 'visible';
        dateValid = false
    } else {
        dateValid = true
        dateError.textContent = '';
        dateError.style.visibility = 'hidden';
    }
}
function firstNameValidation() {
    const firstname = document.getElementById('firstname').value;
    const firstnameError = document.getElementById('firstnameError');
    if (!/[a-zA-Z0-9]{3,16}$/gi.test(firstname)) {     
        
        firstnameError.textContent = 'firstname must be 3-16 characters long and contain only letters, numbers, and underscores.';
        firstnameError.style.visibility = 'visible';
        firstnameValid = false
    } else {
        firstnameValid = true
        firstnameError.textContent = ''        
        firstnameError.style.visibility = 'hidden';
    }
}
function LastnameValidation() {
    const lastname = document.getElementById('lastname').value;  
    const lastnameError = document.getElementById('lastnameError');
    if (!/^[a-zA-Z0-9_]{3,16}$/.test(lastname)) {
        lastnameError.textContent = 'Lastname must be 3-16 characters long and contain only letters, numbers, and underscores.';
        lastnameError.style.visibility = 'visible';
        lastNameValid = false
    } else {    
        lastNameValid = true    
        lastnameError.textContent = ''  
        lastnameError.style.visibility = 'hidden';
    }
}
function emailValidation() {
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        emailError.textContent = 'Invalid email format.';
        emailError.style.visibility = 'visible';
        emailValid =false
    } else {
        emailValid = true
        emailError.textContent = '';
        emailError.style.visibility = 'hidden';
    }
}
function textareaValidation() {
    const textarea = document.getElementById('textarea').value;
    const textareaError = document.getElementById('textareaError');
    if (!/[a-zA-Z0-9]{3,300}$/gi.test(textarea)) {
        textareaError.textContent = 'Survey content must not contain any special characters.';
        textareaError.style.visibility = 'visible';
        feedbackValid = false
    } else {
        feedbackValid = true
        textareaError.textContent = '';
        textareaError.style.visibility = 'hidden';
    }
}
function rating(rate){
    console.log(rate);
    const stars = document.querySelectorAll('.ph-star');
    stars.forEach((star, index) => {
        if (index < rate) {
            star.classList.add('ph-fill');
        } else {
            star.classList.remove('ph-fill');
        }
    });
}

document.getElementById('registrationForm').addEventListener('submit', function(event) {

    event.preventDefault();    

    dateValidation();
    firstNameValidation();
    LastnameValidation();
    
    emailValidation();
    textareaValidation();    
    
    if (dateValid&&firstnameValid&&lastNameValid&&emailValid&&feedbackValid) {
        document.getElementById('successMessage').textContent = 'Registration successful!';
        document.getElementById('successMessage').style = 'display: block; color: green';
    } else {
        document.getElementById('successMessage').textContent = '';
        document.getElementById('successMessage').style.visibility = 'hidden';
    }
});