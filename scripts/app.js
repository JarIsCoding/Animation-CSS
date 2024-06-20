let themeBtn = document.getElementById('themeBtn')
let body = document.getElementById('bod')
let btn2anim = document.getElementById('buttonForAnim2')
let btnSilly = document.getElementById('btnClickGoHere')

let clickThemeBool = true;
let clickBtnBool = true;

themeBtn.onclick = () => {
    if (clickThemeBool){
        body.className = 'themeDark'
        clickThemeBool = false
    } else{
        body.className = 'themeLight'
        clickThemeBool = true
    }
}

btn2anim.onclick = () => {
    if (clickBtnBool){
        btnSilly.classList.add('bAnim')
        clickBtnBool = false
        setTimeout(() => {btnSilly.classList.remove('bAnim'); clickBtnBool = true}, 1000)
    }// else{
    //     btnSilly.classList.remove('bAnim')
    //     clickBtnBool = true
    // }
}