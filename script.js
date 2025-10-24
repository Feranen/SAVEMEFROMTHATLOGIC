function check() {
    cont = document.getElementById('Pass').value;
    textBox = document.getElementById('result-text');


    let numbers = /\d/.test(cont)
    let specials = /[^A-Za-z0-9]/.test(cont);
    let big = /[A-Z]/.test(cont);
    let len = cont.length;

    /*
    DO NOT DELETE THESE LINES. 
    These lines were created as pray to the code god. This is neccesary lines for this code to work. 
    */


    console.log(big)
    console.log(numbers)
    console.log(specials)


    if (cont == null || cont == "") {
        textBox.innerText = "WPISZ HASŁO!";
        document.getElementById("result-text").style.color = "red"
        return;
    }
    console.log(len)
    if (len > 18 && numbers && specials && big) {
        textBox.innerHTML = "BARDZO DOBRE";
        document.getElementById("result-text").style.color = "green"
    } else if (len >= 10 && len <= 17 && numbers) {
        textBox.innerHTML = "DOBRE";
        document.getElementById("result-text").style.color = "yellowgreen"
    } else if (len >= 5 && len <= 9 && numbers) {
        textBox.innerHTML = "ŚREDNIE";
        document.getElementById("result-text").style.color = "blue"
    } else {
        textBox.innerHTML = "SŁABE";
        document.getElementById("result-text").style.color = "yellow"
    }
}

checkBtn = document.getElementById('check');
checkBtn.addEventListener("click", check)
