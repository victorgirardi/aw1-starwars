var wookiee = true;

function toggleLanguage(){
    console.log('toggle')
    wookiee = !wookiee;
    nameSWAPI('Qui');
    nameSWAPI('Obi');
    nameSWAPI('Anakin');
    nameSWAPI('Luke');
    nameSWAPI('Yoda');
    nameSWAPI('Maul');
    nameSWAPI('Dooku');
    nameSWAPI('Palpatine');
    nameSWAPI('Vader');
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