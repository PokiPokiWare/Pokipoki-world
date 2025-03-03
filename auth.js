document.addEventListener("DOMContentLoaded", function () {
    const auth = firebase.auth();

    const signupForm = document.getElementById("signup-form");
    if (signupForm) {
        signupForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const email = document.getElementById("signup-email").value;
            const password = document.getElementById("signup-password").value;

            auth.createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    alert("Signup successful! Redirecting...");
                    window.location.href = "index.html";
                })
                .catch((error) => {
                    alert("Signup failed: " + error.message);
                });
        });
    }

    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const email = document.getElementById("login-email").value;
            const password = document.getElementById("login-password").value;

            auth.signInWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    alert("Login successful! Redirecting...");
                    window.location.href = "index.html";
                })
                .catch((error) => {
                    alert("Login failed: " + error.message);
                });
        });
    }
});
