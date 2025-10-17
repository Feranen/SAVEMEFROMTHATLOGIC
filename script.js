function check() {
    cont = document.getElementById('Pass').value;
    textBox = document.getElementById('result-text');


    let numbers = /\d/.test(cont)
    let specials = /[^A-Za-z0-9]/.test(cont);
    let big = /[A-Z]/.test(cont);
    let len = cont.length;


    console.log(big)
    console.log(numbers)
    console.log(specials)


    if (cont == null || cont == "") {
        textBox.innerText = "WPISZ HASŁO!";
        return;
    }
    console.log(len)
    if (len > 18 && numbers && specials && big){
        textBox.innerHTML = "BARDZO DOBRE";
    } else if (len >= 10 && len <= 17 && numbers) {
        textBox.innerHTML = "DOBRE";
        console.log("fsdfsdfsqdfsdafsdgdgfs")
    } else if (len >= 5 && len <= 9 && numbers) {
        textBox.innerHTML = "ŚREDNIE";
    } else {
       textBox.innerHTML = "SŁABE"; 
    }
}

checkBtn = document.getElementById('check');
checkBtn.addEventListener("click", check)
