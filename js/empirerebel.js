var wookiee = true;

function toggleLanguage(){
    console.log('toggle')
    wookiee = !wookiee;
    nameSWAPI('Poe');
    nameSWAPI('BB8');
    nameSWAPI('R2');
    nameSWAPI('Leia');
    nameSWAPI('Han');
    nameSWAPI('Lando');
    nameSWAPI('Chew');
    nameSWAPI('C-3');
}

function nameSWAPI(id) {
    var request = new XMLHttpRequest();
    var swapi = 'https://swapi.co/api/people/';
    thisSwapi = swapi + '?search=' + id;
    if (wookiee) {
        thisSwapi += '&format=wookiee'
        request.open('GET', thisSwapi, true);
        request.onload = function () {
            var obj = JSON.parse(request.responseText.replace(/whhuanan/g, '"whhuanan"'));
            document.getElementById(id).innerHTML = obj.rcwochuanaoc[0].whrascwo
            return true;
        };
        request.send();

    } else {
        fetch(thisSwapi).then((obj) => {
            return obj.json();
        }).then((obj) => {
            document.getElementById(id).innerHTML = obj.results[0].name;
        })

    }
}