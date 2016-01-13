'use strict';



var ACCESS_TOKEN = 'JNDzfN0Pz8mshV6DHISeFTRHJy00p1LvLoKjsnSUpz0krIeYGX';

var responseContainer = document.querySelector('.yoda-response');


function onDone(response) {
    responseContainer.innerText = response;
}


function createRequest(url, callback) {
    var probaRequest = new XMLHttpRequest()
    probaRequest.open('GET', url);
    probaRequest.setRequestHeader('X-Mashape-Key', ACCESS_TOKEN);
    probaRequest.send();
    probaRequest.onreadystatechange = function() {
        if (probaRequest.readyState === 4) {
            callback(probaRequest.response);
        }
    }
}
var yodaButton = document.querySelector('.yoda-button');
var yodaInput = document.querySelector('.yoda-input');

yodaButton.addEventListener('click', function() {

    var url = 'https://yoda.p.mashape.com/yoda';
    var mondat = yodaInput.value;
    var urlWithParams = url + '?sentence=' + encodeURIComponent(mondat);
    responseContainer.innerText = 'loading....';
    createRequest(urlWithParams, onDone);
})







