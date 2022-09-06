//cleaned up code for onclick, but for the heroes, the alert box doesn't pop up when
//clicking on their names. Must fix.

let heroes = document.querySelector('.ladies');
heroes.addEventListener('click', function(e) {
    if (e.target.className == 'lead-md') {
        alert('Eliza, leader of this group of Heralds and a Class 5 Herald descended from Zeus.')
    } else if (e.target.className == 'princess-md') {
        alert('Akiko, the oldest Herald of the group and a Class 3 Herald descended from Gaia.')
    } else if (e.target.className == 'kwon-md') {
        alert('Jenine, childhood friend of Aeni and a Class 4 Herald descended from Amaterasu.')
    } else if (e.target.className == 'baby-md') {
        alert('Aeni, Eliza\'s adopted sister and a Class 3 Herald descended from Odin.')
    }
});

/*      ATTEMPTED SWITCHING TO SWITCH STATEMENT FROM IF/ELSE!
heroes.addEventListener('click', function(e) {
    

    switch (heroes) {
        case document.querySelector(".lead-md"):
            alert('Eliza, leader of this group of Heralds and a Class 5 Herald descended from Zeus.')
            break;
        case document.querySelector(".princess-md"):
            alert('Akiko, the oldest Herald of the group and a Class 3 Herald descended from Gaia.')
            break;
        default:
            alert("Try again");
    }
}); */

function myProdigy() {
    alert("April, the first Herald to ascend to Stage 2 and a Class 4 Herald descended from Prometheus.");
}

function mySaber() {
    alert("Vesper, childhood friend of April and a Class 3 Herald descended from Apollo.");
}

/*          DOESN'T WORK ALTHOUGH THE ABOVE CODE DOES WORK FOR THE HEROE'S SIDE!
let bad = document.querySelector('.enemies');
bad.addEventListener('click', function(d) {
    if (d.target.className == 'lupei-md') {
        alert("April, the first Herald to ascend to Stage 2 and a Class 4 Herald descended from Prometheus.")
    } else (d.target.className == 'vesper-md') {
        alert("Vesper, childhood friend of April and a Class 3 Herald descended from Apollo.")
    }
}); */


