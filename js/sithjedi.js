var wookiee = true;


nameSWAPI('Qui');

function nameSWAPI(id) {
    var request = new XMLHttpRequest();
    var swapi = 'https://swapi.co/api/people/';
    thisSwapi = swapi + '?search=' + id;
    if (wookiee) {
        thisSwapi += '&format=wookiee'
        request.open('GET', thisSwapi, true);
        request.onload = function () {
            var data = JSON.parse(request.responseText);
            console.log(data.whrascwo)
            document.getElementById(id).innerHTML = data.whrascwo;
            return true;
        };
        request.send();
    } else {
        request.open('GET', thisSwapi, true);
        var data = JSON.parse(request.responseText);
        document.getElementById(id).innerHTML = data.name;

        request.send();
    }
}