$(document).ready(function () {
    $("#send-email").click(function () {
        if (check_form()) {
            $("#send-email").attr("disabled", true);
            $("#send-email").html("Sending...");
            $('#contact-me-form').submit();
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