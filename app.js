const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('cpassword');

confirmPasswordInput.addEventListener('input', () => {
	if (passwordInput.value == confirmPasswordInput.value) {
		passwordInput.classList.remove('error');
		confirmPasswordInput.classList.remove('error');
		passwordInput.classList.add('success');
		confirmPasswordInput.classList.add('success');
	} else {
		passwordInput.classList.add('error');
		confirmPasswordInput.classList.add('error');
		passwordInput.classList.remove('success');
		confirmPasswordInput.classList.remove('success');
	}
});
