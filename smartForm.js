var userData = {
    name: '',
    email: '',
    html: [],
    css: [],
    js: [],
    htmlSkill: null,
    cssSkill: null,
    jsSkill: null,
    position: "welcome"
};
var position = 0;
var positionArray = [false, false, false];
//validations
$(document).ready(function () {
    $("#start").click(function (event) {
        $("#q1").show();
        $(this).hide();
        $("#welcome").hide();
    });
    function validateName(name) {
        var re = /^[A-z ]+$/;
        return re.test(name);
    }

    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    $('#qNext').click(function (event) {
        var name = $('#name').val();
        var email = $('#exampleInputEmail1').val();

        if (name.length == 0) {
            $('#head').text("* All fields are mandatory *");
            $('#name').focus();
            return false;
        }

        else if (!validateName(name) || name.length == 0) {
            alert("* Please use alphabets only *");
            $('#name').focus();
            $("#qNext").prop('disabled');
            return false;
        }
        else if (!validateEmail(email) || email.length == 0) {
            alert("* Please enter a valid email address *");
            $('#exampleInputEmail1').focus();
            $("#qNext").prop('disabled');
            return false;
        }
        else {
            userData.name = $("#name").val();
            userData.email = $("#exampleInputEmail1").val();
            console.log(JSON.stringify(userData));
            $("#q1").hide();
            $("#q2").show();
            $("#qNext").prop('enabled');
            return true;
        }
    });
    $("#exampleInputEmail1").on("change keyup", function () {
        console.log($(this).val());
        $("#qNext").prop('disabled', $("#name").val() == '' || $("#exampleInputEmail1").val() == '');
    });
    $("#name").on("change", function () {
        console.log($(this).val());
        $("#qNext").prop('disabled', $("#name").val() == '' || $("#exampleInputEmail1").val() == '');
    });

    $("#html").click(function () {
        $("#q2").hide();
        $("#q2a").show();
    });
    $("#css").click(function () {
        $("#q2").hide();
        $("#q2b").show();

    });
    $("#js").click(function () {
        $("#q2").hide();
        $("#q2c").show();

    });

    //HTML checkbox
    $("#q2a").click(function () {
        $(':checkbox[name=likesHTML]').click(function () {
            if (this.checked) {
                userData.html.push(this.value);
                userData.position = " html";
                console.log(JSON.stringify(userData));
            }
        });
        $("#htmlNext").click(function () {
            $("#q2a").hide();
            $("#q2").show();
            position = 0;
            positionArray[position] = true;
            console.log(position);
            if (positionArray[0] == true && positionArray[1] == true && positionArray[2] == true) {
                $("#q2").hide();
                $("#q2a").hide();
                $("#q3").show();
            }
            $("#html").prop('disabled', true);
        });
        $("#htmlPrev").click(function () {
            $("#q2a").hide();
            $("#q2").show();
        });
    });

    //CSS Checkbox
    $("#q2b").click(function () {
        $(':checkbox[name=likesCSS]').click(function () {
            if (this.checked) {
                userData.css.push(this.value);
                userData.position = " css";
                console.log(JSON.stringify(userData));
            }
        });
        $("#cssNext").click(function () {

            $("#q2b").hide();
            $("#q2").show();
            position = 1;
            positionArray[position] = true;
            console.log(position);
            if (positionArray[0] == true && positionArray[1] == true && positionArray[2] == true) {
                $("#q2").hide();
                $("#q2b").hide();
                $("#q3").show();
            }
            $("#css").prop('disabled', true);
        });
        $("#cssPrev").click(function () {
            $("#q2b").hide();
            $("#q2").show();
        });
    });
    //JS Checkbox
    $("#q2c").click(function () {
        $(':checkbox[name=likesJS]').click(function () {
            if (this.checked) {
                userData.js.push(this.value);
                userData.position = " js";
                console.log(JSON.stringify(userData));
            }
        });
        $("#jsNext").click(function () {
            $("#q2c").hide();
            $("#q2").show();
            position = 2;
            positionArray[position] = true;
            console.log(position);
            if (positionArray[0] == true && positionArray[1] == true && positionArray[2] == true) {
                $("#q2").hide();
                $("#q2c").hide();
                $("#q3").show();
            }
            $("#js").prop('disabled', true);
        });
        $("#jsPrev").click(function () {
            $("#q2c").hide();
            $("#q2").show();
        });
    });
    $("#q3").ready(function () {
        //
        var i = 0;
        var str = [false, false, false];
        $("#q3Next").prop('disabled', true);
        userData.position = "strength";
        $(':radio[name=htmlR]').click(function () {
            userData.htmlSkill = this.value;
            console.log(JSON.stringify(userData));
            i = 0;
            str[i] = true;
            if (str[0] == true && str[1] == true && str[2] == true) {
                $("#q3Next").prop('disabled', false);
            }
        });
        $(':radio[name=cssR]').click(function () {
            userData.cssSkill = this.value;
            console.log(JSON.stringify(userData));
            i = 1;
            str[i] = true;
            if (str[0] == true && str[1] == true && str[2] == true) {
                $("#q3Next").prop('disabled', false);
            }
        });
        $(':radio[name=jsR]').click(function () {
            userData.jsSkill = this.value;
            console.log(JSON.stringify(userData));
            i = 2;
            str[i] = true;
            if (str[0] == true && str[1] == true && str[2] == true) {
                $("#q3Next").prop('disabled', false);
            }
        });
        $("#q3Next").click(function () {
            $("#q3").hide();
            $("#thanks").show();
        });
        $("#q3Prev").click(function () {
            $("#q3").hide();
            $("#q2").show();
        });
    });
    $("#thanks").ready(function () {
        if (!localStorage.userData) {
            localStorage.userData = JSON.stringify([]);
        }
        var userD = JSON.parse(localStorage["userData"]);
        userD.push(userData);
        localStorage["userData"] = JSON.stringify(userData);
        $("#ans").click(function () {
            $("#show").show();
            $("#show").html(JSON.stringify(userData, null, 2));

        });
        $("#delAns").click(function () {
            localStorage.clear();
            $("#show").hide();
            $("#thanks").hide();
            $("#welcome").show();
        });
    });
});