$(document).ready(function () {
    $("#send-email").click(function () {
        if (check_form()) {
            $("#send-email").attr("disabled", true);
            $("#send-email").html("Sending...");
            $('#contact-me-form').submit();
        }
    });

    $('#contact-me-form').submit(function(){
        var required = $('[required="required"]'); // change to [required] if not using true option as part of the attribute as it is not really needed.
        var error = false;


        for(var i = 0; i <= (required.length - 1); i++) {
            if(required[i].value == '') { // tests that each required value does not equal blank, you could put in more stringent checks here if you wish.
                console.log("EXTRA JQUERY FOR "  + required[i])
                required[i].style.borderColor = 'rgb(255,155,155)';
                error = true; // if any inputs fail validation then the error variable will be set to true;
            }
        }

        if(error) { // if error is true;
            return false; // stop the form from being submitted.
        }
    });

    function check_form(){
        var flag = true;

        if ($("#name").val().trim().length == 0){
            console.log("NAME NOT FILLED")
            flag =  false;
        }
        if ($("#email").val().trim().length == 0){
            console.log("EMAIL NOT FILLED")
            flag =  false;
        }

        if ($('#message').val().trim().length == 0) {
            console.log("MSG NOT FILLED")
            flag =  false;
        }

        return flag;
    }
});