let themeBtn = document.getElementById('themeBtn')
let body = document.getElementById('bod')

let clickBool = false;

themeBtn.onclick = () => {
    if (clickBool){
        body.className = 'themeDark'
        clickBool = false
    } else{
        body.className = 'themeLight'
        clickBool = true
    }
}