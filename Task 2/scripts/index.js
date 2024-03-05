$(document).ready(function(){
    function generateRandomString(length, characters) {
        var result = '';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    $("#generateBtn").click(function(){
        var length = parseInt($("#lengthInput").val());
        var allowDigits = $("#digitsCheckbox").prop('checked');
        var allowUpper = $("#upperCheckbox").prop('checked');
        var allowLower = $("#lowerCheckbox").prop('checked');

        var characters = '';
        if (allowDigits) characters += '0123456789';
        if (allowUpper) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (allowLower) characters += 'abcdefghijklmnopqrstuvwxyz';

        var randomString = generateRandomString(length, characters);
        $("#resultTextarea").val(randomString);
    });
});