document.getElementById('button1').addEventListener('click',

    function() {
        document.querySelector('.modal-project').style.display = 'flex';
    });
document.querySelector('.exit-project').addEventListener('click',
    function() {
        document.querySelector('.modal-project').style.display = 'none';
    });
document.getElementById('button2').addEventListener('click',

    function() {
        document.querySelector('.modal-project').style.display = 'flex';
    });
document.querySelector('.exit-project').addEventListener('click',
    function() {
        document.querySelector('.modal-project').style.display = 'none';
    });
document.getElementById('button3').addEventListener('click',

    function() {
        document.querySelector('.modal-project').style.display = 'flex';
    });
document.querySelector('.exit-project').addEventListener('click',
    function() {
        document.querySelector('.modal-project').style.display = 'none';
    });
document.getElementById('button4').addEventListener('click',

    function() {
        document.querySelector('.modal-project').style.display = 'flex';
    });
document.querySelector('.exit-project').addEventListener('click',
    function() {
        document.querySelector('.modal-project').style.display = 'none';
    });
document.getElementById('button5').addEventListener('click',

    function() {
        document.querySelector('.modal-project').style.display = 'flex';
    });
document.querySelector('.exit-project').addEventListener('click',
    function() {
        document.querySelector('.modal-project').style.display = 'none';
    });


$("#button6").click(function() {
    $(".modal-project").css("display", "flex");
});
$(".exit-project").click(function() {
    $(".modal-project").css("display", "none");
});

$(function() {
    $('.chart').easyPieChart({
        //your options goes here
    });
});


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCZLruPRlc6U5RDJSre61FFMusN0_e70RU",
    authDomain: "project1-26210.firebaseapp.com",
    databaseURL: "https://project1-26210.firebaseio.com",
    projectId: "project1-26210",
    storageBucket: "project1-26210.appspot.com",
    messagingSenderId: "533897092446",
    appId: "1:533897092446:web:78cbfc7cb5bc3f023bc3cf"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
var messagesRef = firebase.database().ref('myDatabase'); //setting name of database
function submitForm(e) {
    e.preventDefault();
    //get values
    var name = document.getElementById('name1').value;
    var email = document.getElementById('mail1').value;
    var phone = document.getElementById('phone1').value;
    var subject = document.getElementById('subject1').value;
    var message = document.getElementById('message1').value;
    //   var message=document.getElementById('textme').value;
    saveMessage(name, email, phone, subject, message);

}
document.getElementById('contact-form').addEventListener('submit', submitForm);

function saveMessage(name, email, phone, subject, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        phone: phone,
        subject: subject,
        message: message,
    });
}