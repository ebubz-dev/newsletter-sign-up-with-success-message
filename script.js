const container = document.getElementById('outer');
const success = document.getElementById('success');
const email = document.getElementById('email');
const error = document.getElementById('error');
const placeholder = document.getElementById('placeholder');
const image = document.getElementById('image');



function button(task) {
    if (task === 'submit') {
        if (isEmailValid(email.value)) {
            container.style.display = 'none';
            success.style.display = 'block';
            placeholder.innerText = email.value;
        } else {
            error.style.display = 'inline-block';
            email.style.color = 'hsl(4, 100%, 67%)';
            email.style.backgroundColor = 'hsl(4, 100%, 97%)';
            email.style.border = '1px solid hsl(4, 100%, 67%)';
        }
        function isEmailValid(email) {
            const regex = /^[a-zA-Z0-9._%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/i;
            return regex.test(email);
        }
    } else if (task === 'dismiss') {
        container.style.display = 'flex';
        success.style.display = 'none';
        email.value = '';
    }
}
