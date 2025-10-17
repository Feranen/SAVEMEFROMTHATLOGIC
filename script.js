function check() {
    cont = document.getElementById('Pass').value;
    textBox = document.getElementById('result-text');


    let numbers = /\d/.test(cont)
    let specials = /[^A-za-z0-9]/.test(cont);
    let big = /[A-Z]/.test(cont);
    let lenght = cont.length


    console.log(big)
    console.log(numbers)
    console.log(specials)


    if (cont == null) {
        textBox.innerText = "WPISZ HASŁO!";
        return;
    }
    console.log(lenght)
    if (cont.length > 18 && numbers && specials && big){
        textBox.innerHTML = "BARDZO DOBRE";
    } else if (cont.lenght > 10 && cont.lenght < 17 && numbers) {
        textBox.innerHTML = "DOBRE";
        console.log("fsdfsdfsqdfsdafsdgdgfs")
    } else if (5 < cont.length && 9 > cont.length && numbers) {
        textBox.innerHTML = "ŚREDNIE";
    } else {
       textBox.innerHTML = "SŁABE"; 
    }
}

checkBtn = document.getElementById('check');
checkBtn.addEventListener("click", check)
