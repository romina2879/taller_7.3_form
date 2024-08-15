function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}
 
document.getElementById('registrationForm').addEventListener('submit', function(event){
        event.preventDefault(); 

        const name = document.getElementById('nombre').value.trim();
        const lastName = document.getElementById('apellido').value.trim();
        const mail = document.getElementById('email').value.trim();
        const password = document.getElementById('password1').value.trim();
        const repeatPassword = document.getElementById('password2').value.trim();
        const termsAccepted = document.getElementById('terminos').checked;

            
            if (!name || !lastName || !mail || !password || !repeatPassword || (password.length < 6) || (password !== repeatPassword) || !termsAccepted) {
                showAlertError();
            } else {
                showAlertSuccess();
            };
        });