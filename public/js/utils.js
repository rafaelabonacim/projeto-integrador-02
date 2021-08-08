const utils = {
    selectSearch: function (selectId, dbParameter) {
        const select = document.getElementById(selectId);
        
        for (let i = 0; i < select.length; i++) {
            if (dbParameter === select[i].value){
                select[i].setAttribute('selected', 'true');
            };
        };
    },
    selectSearchMultiple: function (selectId, dbParameter) {
        const select = document.getElementById(selectId);
        const dbArray = dbParameter.split(',')
        Array.isArray(dbArray) ? dbArray : [dbArray]
    
        for (let i = 0; i < select.length; i++) {
            for (let item of dbArray) {
                if (item == select[i].value){
                    select[i].setAttribute('selected', 'true');
                    break;
                };
            };
        };
    },
    formValidation: (function() {
        'use strict';
        window.addEventListener('load', function() {
          // Fetch all the forms we want to apply custom Bootstrap validation styles to
          var forms = document.getElementsByClassName('needs-validation');
          // Loop over them and prevent submission
          var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
              if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
              }
              form.classList.add('was-validated');
            }, false);
          });
        }, false);
    }),
    comparePasswords: (function() {
        document.addEventListener('DOMContentLoaded', function() {
            const password = document.getElementById("password");
            const confirmPassword = document.getElementById("confirmPassword");
            const confirmPasswordError = document.querySelector(".confirm-password");
            console.log(confirmPasswordError)
            
            confirmPassword.addEventListener("keyup", function (){
                console.log(password.value, confirmPassword.value)
                if (password.value  !== confirmPassword.value) {
                    confirmPassword.setAttribute("isvalid", "false");
                    confirmPassword.classList.add("invalid");
                    confirmPasswordError.style.display = "block"
                } else {
                    confirmPassword.setAttribute("isvalid", "true");
                    confirmPassword.classList.remove("invalid");
                    confirmPasswordError.style.display = "none"
                };
            });
        })
    }),
}