var campers = [];
var team1 = [];
var team2 = [];
var team3 = [];
var team4 = [];
var team5 = [];
var team6 = [];

var first = true;
var second = false;
var third = false;

function appendCamper(){
    var camperName = document.getElementById("name").value;
    var level = document.getElementById("level").value;
    var line = camperName + ", " + level;
    var node = document.createElement("li");
    var textNode = document.createTextNode(line);
    node.appendChild(textNode);
    document.getElementById("campers").appendChild(node);
    var camper = {camperName, level};
    campers.push(camper);
}

function displayCampers(){
    for(var i = 0; i< campers.length; i++)
    {
        var camperName = campers[i].camperName
        var level = campers[i].level;
        var line = camperName + ", " + level;
        var node = document.createElement("li");
        var textNode = document.createTextNode(line);
        node.appendChild(textNode);
        document.getElementById("campers").appendChild(node);
    }
}

function clearLatest(){
    var list = document.getElementById("campers");
    list.removeChild(list.childNodes[list.childNodes.length-1]);
    campers.splice(campers.length-1, 1);
}

function generateTeams(){
    document.getElementById("scram").disabled = false;
    document.getElementById("gen").disabled = true;
    document.getElementById("gen2").disabled = true;
    campers.sort(compare);

    var counter = 1;

    for(var i = 0; i< campers.length; i++)
    {
        if(counter == 1)
            team1.push(campers[i]);
        else if(counter == 2)
            team2.push(campers[i]);
        else if(counter == 3)
            team3.push(campers[i]);
        else if(counter == 4)
            team4.push(campers[i]);

        counter++;

        if(counter == 5)
            counter = 1;
    }

    displayTeams();
}

function generateTeamsSix(){
    document.getElementById("gen").disabled = true;
    document.getElementById("gen2").disabled = true;
    document.getElementById("scram").disabled = true;
    campers.sort(compare);

    var counter = 1;

    for(var i = 0; i< campers.length; i++)
    {
        if(counter == 1)
            team1.push(campers[i]);
        else if(counter == 2)
            team2.push(campers[i]);
        else if(counter == 3)
            team3.push(campers[i]);
        else if(counter == 4)
            team4.push(campers[i]);
        else if(counter == 5)
            team5.push(campers[i]);
        else if(counter == 6)
            team6.push(campers[i]);

        counter++;

        if(counter == 7)
            counter = 1;
    }

    displaySixTeams();
}

function compare(a, b){
    return b.level - a.level;
}

function clearTeamLists(){
    clearList(document.getElementById("team1"));
    clearList(document.getElementById("team2"));
    clearList(document.getElementById("team3"));
    clearList(document.getElementById("team4"));
}

function clearList(list){
    for(var i = 0; i< team4.length; i++){
        list.removeChild(list.childNodes[list.childNodes.length-1]);
    }
}

function displayTeams(){
    displayTeam(team1, document.getElementById("team1"));
    displayTeam(team2, document.getElementById("team2"));
    displayTeam(team3, document.getElementById("team3"));
    displayTeam(team4, document.getElementById("team4"));
}

function displaySixTeams(){
    displayTeam(team1, document.getElementById("team1"));
    displayTeam(team2, document.getElementById("team2"));
    displayTeam(team3, document.getElementById("team3"));
    displayTeam(team4, document.getElementById("team4"));
    displayTeam(team5, document.getElementById("team5"));
    displayTeam(team6, document.getElementById("team6"));
}

function displayTeam(team, list){
    for(var i = 0; i < team.length; i++){
        var line = team[i].camperName + ", " + team[i].level;
        var node = document.createElement("li");
        var textNode = document.createTextNode(line);
        node.appendChild(textNode);
        list.appendChild(node);
    }
}

function rescramble(){
    var num1 = campers.length / 4;
    var num = Math.floor(num1);

    var oneAndFour = true;
    var counter = 0;

    var isFirst;
    var isSecond;
    var isThird;
        
    if(first){
        isFirst = true;
        isSecond = false;
        isThird = false;
    }
    else if(second){
        isFirst = false;
        isSecond = true;
        isThird = false;
    }
    else if(third){
        isFirst = false;
        isSecond = false;
        isThird = true;
    }

    for(var i = 0; i< num; i++){
        if(first){
            var temp = team1[i];
            team1[i] = team4[i];
            team4[i] = temp;

            var temp2 = team2[i];
            team2[i] = team3[i];
            team3[i] = temp2;

            first = false;
            second = true;
        }
        else if(second){
            var temp = team1[i];
            team1[i] = team2[i];
            team2[i] = temp;

            var temp2 = team3[i];
            team3[i] = team4[i];
            team4[i] = temp2;

            second = false;
            third = true;
            }
        else if(third){
            var temp = team1[i];
            team1[i] = team3[i];
            team3[i] = temp;

            var temp2 = team2[i];
            team2[i] = team4[i];
            team4[i] = temp2;

            third = false;
            first = true;
        }
    }

    clearTeamLists();
    displayTeams();

    if(isFirst){
        first = false;
        second = true;
        third = false;
    }
    else if(isSecond){
        first = false;
        second = false;
        third = true;
    }
    else if(isThird){
        first = true;
        second = false;
        third = false;
    }
}

function clearTeams(){
    var num1 = document.getElementById("team1");
    num1.innerHTML = '';
    team1 = [];

    var num2 = document.getElementById("team2");
    num2.innerHTML = '';
    team2 = [];

    var num3 = document.getElementById("team3");
    num3.innerHTML = '';
    team3 = [];

    var num4 = document.getElementById("team4");
    num4.innerHTML = '';
    team4 = [];

    var num5 = document.getElementById("team5");
    num5.innerHTML = '';
    team5 = [];

    var num6 = document.getElementById("team6");
    num6.innerHTML = '';
    team6 = [];
    
    document.getElementById("gen").disabled = false;
    document.getElementById("gen2").disabled = false;
    document.getElementById("scram").disabled = false;
}

function fillMallard(){
    var password = window.prompt("Enter Password: ");
    if(password == "quack"){
       campers[0] = {camperName: "Tommy", level: 2};
        campers[1] = {camperName: "Dotts", level: 3};
        campers[2] = {camperName: "James", level: 2};
        campers[3] = {camperName: "Scott", level: 2};
        campers[4] = {camperName: "Will", level: 3};
        campers[5] = {camperName: "Joey", level: 2};
        campers[6] = {camperName: "Cash", level: 3};
        campers[7] = {camperName: "Dan", level: 2};
        campers[8] = {camperName: "Joe", level: 2};
        campers[9] = {camperName: "Malakai", level: 2};
        campers[10] = {camperName: "Fogel", level: 2};
        campers[11] = {camperName: "Becker", level: 1};
        campers[12] = {camperName: "Chris", level: 3};
        campers[13] = {camperName: "Noah", level: 2};
        campers[14] = {camperName: "Mark", level: 1};
        campers[15] = {camperName: "Simon", level: 2};
        campers[16] = {camperName: "Dubs", level: 2};
        campers[17] = {camperName: "Oscar", level: 1};
        campers[18] = {camperName: "Benji", level: 1};
        campers[19] = {camperName: "George", level: 2};
        campers[20] = {camperName: "Jackson", level: 2};
        campers[21] = {camperName: "Liam", level: 3};
        campers[22] = {camperName: "Packy", level: 1};
        campers[23] = {camperName: "Ben", level: 2};

        displayCampers(); 
    }
}



