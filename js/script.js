document.getElementById("auth-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const role = document.getElementById("role").value;
    const password = document.getElementById("password").value;
    const output = document.getElementById("output");

    const users = {
        "Department Head": "SiEsD3ptH34d",
        "Faculty": "SiEsF4cu1ty",
        "Student Officer": "#CCSOAko",
        "Student": "3SapatNa!"
    };

    if (users[role]) {
        if (users[role] === password) {
            console.log(`Success: Welcome ${role}!`);
            output.textContent = `✅ Access Granted: Welcome ${role}!`;
            output.style.color = "green";
        } else {
            console.error("Error: Invalid Password!");
            output.textContent = "❌ Error: Invalid Password!";
            output.style.color = "red";
        }
    } else {
        console.warn("Warning: Role not recognized!");
        output.textContent = "⚠️ Warning: Role not recognized!";
        output.style.color = "orange";
    }
});