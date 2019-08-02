// Initialize Firebase
$('#overlay').show();
var config = {
    apiKey: 'AIzaSyAt_5-XB3_KtoNA3dQGRavk9xNuMIHGajg',
    authDomain: 'fecianalyst.firebaseapp.com',
    databaseURL: 'https://fecianalyst.firebaseio.com',
    storageBucket: 'fecianalyst.appspot.com',
    messagingSenderId: '395548199076'
};
firebase.initializeApp(config);
var database = firebase.database();

//Login!=====================================================================

//getting global elements from html for login
const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnLogout = document.getElementById('btnLogout');
const signupInfo = document.getElementById('signupInfo');


//login bubble login by pressing enter

$('#txtPassword').keypress(function(e) {
    if (e.keyCode == 13) {
        document.getElementById('btnLogin').click();
        return false;
    }
});

//add login event to login button
btnLogin.addEventListener('click', e => {
    //get email and password
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    //sign in
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
    $('#txtPassword').val('');
    $('#txtEmail').val('');
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            window.location = 'dashboard.html';
        }
    });
});

//Log out with logout button

btnLogout.addEventListener('click', e => {
    $('#logoutBubble').fadeOut('fast');
    firebase.auth().signOut();
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {

        } else {
            window.location = 'index.html';
        }
    });
});

//Sign Up!=====================================================================

//get info from SignUp Form
const signupEmail = document.getElementById('signupEmail');
const signupName = document.getElementById('signupName');
const signupLastName = document.getElementById('signupLastName');
const signupSecondLastName = document.getElementById('signupSecondLastName');
const signupSupervisor = document.getElementById('signupSupervisor');
const signupPassword = document.getElementById('signupPassword');
const signupPassword2 = document.getElementById('signupPassword2');
const signupCode = document.getElementById('signupCode');
const signupProgram = document.getElementById('signupProgram');
const btnSignUp = document.getElementById('btnSignUp');

//create user and password on submit click
btnSignUp.addEventListener('click', e => {
    //get email and password
    const email = signupEmail.value;
    const pass = signupPassword.value;
    const name = signupName.value;
    const lastName = signupLastName.value;
    const secondLastName = signupSecondLastName.value;
    const supervisor = signupSupervisor.value;
    const program = signupProgram.value;
    const auth = firebase.auth();
    //Create user on firebase AUTH
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => window.alert(e.message));
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            //get uid from new user
            newUserUID = firebaseUser.uid;
            //Push New user to database
            const postRefNewUser = firebase.database().ref('users').child(newUserUID);
            //upload user object to firebase
            postRefNewUser.set({
                email: email,
                name: name,
                lastName: lastName,
                secondLastName: secondLastName,
                supervisor: supervisor,
                program: program,
                uid: newUserUID,
                profilePic: ""
            });
            //redirect to dashboard when ready
            window.location = 'dashboard.html';
        }
    });
});


//get Current user name and lastname from server and put it on the logout bubble and page title
firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        $('#signupInfo').hide();
        $('#loginLi').fadeOut('fast');
        $('#logoutLi').fadeIn('fast');
        $('#loginBubble').fadeOut('fast');
        //get current user UID
        var currentUserUID = firebaseUser.uid;
        //get current user stored data with uid
        const dbRefUserName = firebase.database().ref('users').child(currentUserUID).child('name');
        // Show User name on page title
        dbRefUserName.on('value', function(nameSnapshot) {
            var space = document.createTextNode("\u00A0");
            var name = JSON.stringify(nameSnapshot.val()).replace(/^"(.*)"$/, '$1');
            $('#titleName').empty();
            $('#titleName').append(name, space);
            $('.name').empty();
            $('.name').append(name);
        }, function(error) {
            window.alert(error);
        });
        //Show user lastName on page title
        const dbRefUserLastName = firebase.database().ref('users').child(currentUserUID).child('lastName');
        dbRefUserLastName.on('value', function(lastNameSnapshot) {
            var lastName = JSON.stringify(lastNameSnapshot.val()).replace(/^"(.*)"$/, '$1');
            $('#titleLastName').empty();
            $('.lastName').empty();
            $('.lastName').append(lastName);
            $('#titleLastName').append(lastName);
        }, function(error) {
            window.alert(error);
        });


        //Get profile Image and put it on HTML.
        $(document).ready(function() {
            var storage = firebase.storage();
            var gsReference = storage.refFromURL('gs://fecianalyst.appspot.com/');
            //reference to image keys on user data
            const profileImgKeyRef = firebase.database().ref('users').child(currentUserUID).child('profilePic');
            profileImgKeyRef.on('value', function(imageSnapshot) {
                var imagePath = imageSnapshot.val();
                if (imagePath === "") {
                    var defaultImg = 'https://sebastianopazo.github.io/WebProject/images/default-user.png';
                    $('#profileImage').attr('src', defaultImg);
                    $('#profileImage2').attr('src', defaultImg);
                    $('#profileImage3').attr('src', defaultImg);
                } else {
                    var currentPic = gsReference.child(currentUserUID).child('profilePic').child(imagePath).getDownloadURL().then(function(url) {
                        $('#profileImage').attr('src', url);
                        $('#profileImage2').attr('src', url);
                        $('#profileImage3').attr('src', url);
                    }).catch(function(error) {
                        window.alert(error);
                    });
                }
            });
        });
    } else {
        $('#loginInfo').fadeIn('fast');
        $('#loginLi').fadeIn('fast');
        $('#logoutLi').fadeOut('fast');
    }
    $('#overlay').fadeOut('slow');
});
