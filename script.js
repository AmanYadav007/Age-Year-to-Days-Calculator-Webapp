//challenge one
function ageInDays(){
var birthYear = prompt('What yer were you born... Good Friend : ');
var ageInDay = (2020 - birthYear) * 365;
var h1 = document.createElement('h1');
var textAnswer = document.createTextNode('You are ' + ageInDay + 'days old');
h1.setAttribute('id', 'ageInDays');
h1.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('ageInDays').remove();
}