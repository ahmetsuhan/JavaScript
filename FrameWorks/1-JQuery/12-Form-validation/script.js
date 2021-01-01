$(document).ready(function () {



    function isEmail(email) {
        var pattern = /^([0-9a-zA-Z]([-_\\.]+)*)@([0-9a-zA]([-_\\.]*[0-9a-zA-Z]+)*)[\\.]([a-zA-Z]{2,9})$/;
        return pattern.test(email);
    }


    $("#btn").click(function () {
        var errorMesage = "";
        $("#error").html("");
        if ($("#email").val() == "") {
            errorMesage += "<p>email is required!!!</p>";
        }
        if (isEmail($("#email").val()) == false) {
            errorMesage += "<p>email seems invalid!!!</p>";
        }


        if ($("#telephone").val() == "") {
            errorMesage += "<p>telephone is required!!!</p>";
        } else {
            if ($.isNumeric($("#telephone").val()) == false) {
                errorMesage += "<p>telephone number seems invalid!!!</p>";
            }
        }


        if ($("#password").val() == "") {
            errorMesage += "<p>password is required!!!</p>";
        }


        if ($("#confirmPassword").val() != $("#password").val()) {
            errorMesage += "<p>passwords not matching!!!</p>";
        }

        if (errorMesage != "") {
            $("#error").html(errorMesage);
        }
    });

});