isOpened = false;

$(function () {
    $("#botframe").attr('src', 'webchat.html?s=50iDE7W97Es.FRq8otPg_IzsTae8141MyCXltm7DO6XrNETMOP3TEjc');
    $("#ProjTitle").text("Multiturn Conversation");
    $("#iconOpen").show();
    $("#iconClose").hide();
    $("#botframe").hide();
});

function chatOpen() {
    if (isOpened){
        isOpened = false;
        $("#iconOpen").show();
        $("#iconClose").hide();
        $("#botframe").hide();
        $('.bgImage').css('background-image', 'url(3.png)');

    }
    else{
        isOpened = true;
        $("#iconOpen").hide();
        $("#iconClose").show();
        $("#botframe").show();
        $('.bgImage').css('background-image', 'url(4.png)');
    }
}

