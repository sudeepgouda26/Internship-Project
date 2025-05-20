document.querySelector(".email").addEventListener("click", () => {
    document.querySelector(".login-form").style.display = "none";
    document.querySelector(".signup-form").style.display = "block";
});

document.querySelectorAll('.back-btn').forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector(".signup-form").style.display = "none";
        document.querySelector(".signin-form").style.display = "none";
        document.querySelector(".login-form").style.display = "block";
    });
});

document.querySelector("#LogInLink").addEventListener("click", () => {
    document.querySelector(".signup-form").style.display = "none";
    document.querySelector(".signin-form").style.display = "block";
});

document.querySelector("#SignUpLink").addEventListener("click", () => {
    document.querySelector(".signin-form").style.display = "none";
    document.querySelector(".signup-form").style.display = "block";
});


document.querySelectorAll(".input-group input").forEach(input => {
    input.addEventListener("input", function () {
        validateInput(this);
    });
});

function validateInput(input) {
    let isValid = true;

    if (input.type === "text") {
        isValid = input.value.trim().length >= 3;
    } else if (input.type === "email") {
        isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value);
    } else if (input.type === "password") {
        isValid = input.value.length >= 6;
    }

    input.classList.remove("valid", "invalid");

    if (isValid) {
        input.classList.add("valid");
    } else {
        input.classList.add("invalid");
    }
}