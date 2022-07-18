const form = document.querySelector('form');
const email=document.querySelector('input[type=email]')
const passeord=document.querySelector('input[type=password]')

form.addEventListener('submit',()=>{
    if(email.value==="" || passeord.value==="")
    {alert("Please Enter Email and Password")
    return false}
    
})

    function preventBack() {
        window.history.forward(-2); 
    }
      
    setTimeout("preventBack()", 0);
      
    window.onunload = function () { null };