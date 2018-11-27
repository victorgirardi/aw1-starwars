var wookiee = true;

function startPage(){
    wookiee = true;
}

function toggleLanguageSithJedi(){
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
    var thisSwapi = swapi + '?search=' + id;
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
//-----------------------------------------------------------------------------------------------------------------------------
function toggleLanguagePlanets(){
    wookiee = !wookiee;
    planetsSWAPI('Tatooine');
    planetsSWAPI('Hoth');
    planetsSWAPI('Endor');
    planetsSWAPI('Coruscant');
    planetsSWAPI('Mustafar');
}

function planetsSWAPI(id){
    var request = new XMLHttpRequest();
    var swapi = 'https://swapi.co/api/planets/';
    var thisSwapi = swapi + '?search=' + id;
    if(wookiee){
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