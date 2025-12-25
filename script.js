function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    let msg = document.getElementById("loginMsg");

    if (user === "" || pass === "") {
        msg.style.color = "red";
        msg.innerText = "Please fill all fields";
    } else {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "submit.html";
    }
}

function checkLogin() {
    if (localStorage.getItem("loggedIn") !== "true") {
        window.location.href = "index.html";
    }
}

function submitProblem() {
    let subject = document.getElementById("subject").value;
    let problem = document.getElementById("problem").value;
    let msg = document.getElementById("submitMsg");

    if (subject === "" || problem === "") {
        msg.style.color = "red";
        msg.innerText = "Select subject & write problem";
    } else {
        msg.style.color = "green";
        msg.innerText = "Problem submitted successfully!";
        document.getElementById("problem").value = "";
    }
}

function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "index.html";
}
