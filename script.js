      function toggleForms() {
            const signupForm = document.querySelector('.signup');
            const signinForm = document.querySelector('.signin');
            if (signupForm.style.display === "none") {
                signupForm.style.display = "block";
                signinForm.style.display = "none";
            } else {
                signupForm.style.display = "none";
                signinForm.style.display = "block";
            }
        }