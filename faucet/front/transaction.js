var userAddress = document.getElementById("address");
userAddress.value = "MonAdresse";
var form = document.querySelector("form");

form.addEventListener("submit", function (e) {

    const req = new XMLHttpRequest();
    const amount = 50;

    req.open('POST', 'http://localhost:3000/transactions/sendtx', false);
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    req.send("to="+userAddress.value+"&amount="+amount);

    if (req.status === 200) {
        console.log("Réponse reçue: %s", req.responseText);
    } else {
        console.log("Status de la réponse: %d (%s)", req.status, req.statusText);
    }
    e.preventDefault();
});
