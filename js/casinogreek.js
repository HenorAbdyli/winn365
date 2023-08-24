
var eventMethod = window.addEventListener ? 'addEventListener' : 'attachEvent';
var eventer = window[eventMethod];
var messageEvent = eventMethod == 'attachEvent' ? 'onmessage' : 'message';
eventer(messageEvent, function (e) {

    if (e.data.setHeight) {
        jQuery('#groupga').height(e.data.setHeight);
    }

    if (e.data.openLogin) {
        document.querySelector("#login").click();
    }

    if (e.data.getParentUrl) {
        var url = window.location.href;

        var puData = {
            parentURL: url
        };
        sendMessageToFrame(puData);
    }
    if (e.data.gameOpen) {
        $('#groupga').css('height', '0px');
    }
    if (e.data.checkLogin) {
        var URL = "https://365ecco365.co/vbetcasinohandler";

        $.get(URL, function (data) {
            var lgData = {
                loginStatus: data
            };
            sendMessageToFrame(lgData);
        });
    }

}, false);

function sendMessageToFrame(data) {
    jQuery("#groupga").get(0).contentWindow.postMessage(data, '*');
}
