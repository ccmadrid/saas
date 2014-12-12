    function confirmEmail() {
        var email = document.getElementById("email").value
        var confemail = document.getElementById("confemail").value
        if(email != confemail) {
            alert('Emails Do Not Match!');
            location.reload()
        }
    }
