// Function to verify that the phone number is correct.
// Here, I validate for (12345), but you have to change that for a phone validation
// Tutorials on Regular expressions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
// https://flaviocopes.com/javascript-regular-expressions/
// Regular expressions can get complex, you can think in terms of a series of characters
// or numbers

function scroll(id){
    var go = document.getElementById(id);
    go.scrollIntoView();
}

function validateEmail(email) {
    var a = document.getElementById(email).value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    //var filter = /^(\([-+]?[0-9]+)\)$/;
    var filter = /\S+@\S+\.\S+/;
    if (filter.test(a) & a != 'xxxx@xxxx.xxxx') {
        return true;
    }
    else {
        return false;
    }
}


function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    //var filter = /^(\([-+]?[0-9]+)\)$/;
    var filter = /^[0-9]{10}$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

function validateCredit(credit){

    var a = document.getElementById(credit).value;

    var filter = /^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

function validateCVV(cvv){

    var a = document.getElementById(cvv).value;

    var filter = /^[0-9]{3}$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}



// Using date restrictions on datepicker
// Document of datepicker is here: https://api.jqueryui.com/datepicker/
// The following code shows how to set specific dates to exclude, as well as Sundays (Day 0)
// Make sure in your version that you associate Days to remove with Experts (e.g. John doesn't work Mondays)
var unavailableDates = ["06/29/2020","07/07/2020","07/10/2020"];
const setDateFormat = "mm/dd/yy";

function disableDates(date) {
    // Sunday is Day 0, disable all Sundays
    var tmp = document.getElementById("physician");
    var val = tmp.value;

    if (date.getDay() === 0 || date.getDay() === 6){
        return [false];
    }
    if (val == "Billy Bobby"){
        if (date.getDay() === 1 || date.getDay() === 3){
            return [false];
        }
    }
    else if(val == "Samantha Tamanna"){
        if (date.getDay() === 2 || date.getDay() === 4 ){
            return [false];
        }
    }
    else if(val == "Jonathan Bonovan"){
        if (date.getDay() === 5 ){
            return [false];
        }   
    }
    return [true];
    // var string = jQuery.datepicker.formatDate(setDateFormat, date);
    // return [ unavailableDates.indexOf(string) === -1 ]
}


// HERE, JQuery "LISTENING" starts
$(document).ready(function(){

    // phone validation, it calls validatePhone
    // and also some feedback as an Alert + putting a value in the input that shows the format required
    // the "addClass" will use the class "error" defined in style.css and add it to the phone input
    // The "error" class in style.css defines yellow background and red foreground
    $("#email").on("change", function(){
        if (!validateEmail("email")){
            alert("Please enter the a valid email address. (e.g. 'tiger@woods.ca')");
            $("#email").val("xxxx@xxxx.xxxx");
            $("#email").addClass("error_email");
        }
        else {
            $("#email").removeClass("error_email");
        }
    });

    $("#phone").on("change", function(){
        if (!validatePhone("phone")){
            alert("Please enter the a valid 10 digit Phone Number. (e.g. '4169990000')");
            $("#phone").val("xxxxxxxxxx");
            $("#phone").addClass("error");
        }
        else {
            $("#phone").removeClass("error");
        }
    });

    $("#cvv").on("change", function(){
        if (!validateCVV("cvv")){
            alert("Please enter the correct format for your cvv. (e.g. '000')");
            $("#cvv").val("xxx");
            $("#cvv").addClass("error_cvv");
        }
        else {
            $("#cvv").removeClass("error_cvv");
        }
    });
    
    $("#credit").on("change", function(){
        if (!validateCredit("credit")){
            alert("Please enter the correct format for your credit card. (e.g. '0000-0000-0000-0000')");
            $("#credit").val("xxxx-xxxx-xxxx-xxxx");
            $("#credit").addClass("error_credit");
        }
        else {
            $("#credit").removeClass("error_credit");
        }
    });

    $("#book").on("click", function(){

        if (!validateEmail("email")){
            alert("Please enter the a valid email address. (e.g. 'tiger@woods.ca')");
            $("#email").val("xxxx@xxxx.xxxx");
            $("#email").addClass("error_email");
        }
        else {
            $("#email").removeClass("error_email");
        }

        if (!validatePhone("phone")){
            alert("Please enter the correct format of your phone number. (e.g. '4169990000')");
            $("#phone").val("(xxxxxxxxxx)");
            $("#phone").addClass("error");
        }
        else {
            $("#phone").removeClass("error");
        }

        if (!validateCVV("cvv")){
            alert("Please enter the correct format of your cvv. (e.g. '000')");
            $("#cvv").val("xxx");
            $("#cvv").addClass("error_cvv");
        }
        else {
            $("#cvv").removeClass("error_cvv");
        }

        if (!validateCredit("credit")){
            alert("Please enter the correct format for your credit card. (e.g. '0000-0000-0000-0000')");
            $("#credit").val("xxxx-xxxx-xxxx-xxxx");
            $("#credit").addClass("error_credit");
        }
        else {
            $("#credit").removeClass("error_credit");
        }

        if (validatePhone("phone") & validateCVV("cvv") & validateCredit("credit") & validateEmail("email")){
            var confirm = "Thank you for booking an appointment! We will get email you confirmation once your credit card information has been processed and is successful \n \n"
            + "Your contact information: \n \n" + 
            "Name: " + document.getElementById("name").value + "\n" + 
            "Email: " + document.getElementById("email").value + "\n" + 
            "Phone Number: " + document.getElementById("phone").value + "\n" + 
            "Physician: " + document.getElementById("physician").value + "\n" +
            "Service: " + document.getElementById("serve").value + "\n" +
            "Date of appointment: " + document.getElementById("dateInput").value;

            alert(confirm);

        }
    });





    // To change the style of the calender, look in jqueryui.com, under Themes, in the ThemeRoller Gallery
    // You can try different themes (the names are under the calendars) / This is Excite Bike
    // To use a different theme you must include its css in your HTML file.
    // The one I included in my HTML is the Excite Bike, but you can try others

    // Also, here is a good tutorial for playing with the datepicker in https://webkul.com/blog/jquery-datepicker/
    // Datepicker is also documented as one of the widgets here: https://api.jqueryui.com/category/widgets/
    $( "#dateInput" ).datepicker(
        {
            dateFormat: setDateFormat,
            // no calendar before June 28th 2021
            minDate: new Date('06/01/2021'),
            maxDate: '+4M',
            // used to disable some dates
            beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: disableDates
        }
    );

    // Look at the different events on which an action can be performed
    // https://www.w3schools.com/jquery/jquery_events.asp
    // Here, we put
    $("#debit").on("mouseenter", function(){
        $("#debit").addClass("showInput");
    });

    $("#debit").on("mouseleave", function(){
        $("#debit").removeClass("showInput");
    });

    // https://jqueryui.com/tooltip/
    // The class "highlight" used here is predefined in JQuery UI
    // the message of the tooltip is encoded in the input (in the HTML file)
    $("#debit").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });


});
