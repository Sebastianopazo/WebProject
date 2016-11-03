  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAt_5-XB3_KtoNA3dQGRavk9xNuMIHGajg",
    authDomain: "fecianalyst.firebaseapp.com",
    databaseURL: "https://fecianalyst.firebaseio.com",
    storageBucket: "fecianalyst.appspot.com",
    messagingSenderId: "395548199076"
  };
  firebase.initializeApp(config);
  var database = firebase.database();
//


//getting elements from html for login
  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignUp = document.getElementById('btnSignup');
  const btnLogout = document.getElementById('btnLogout');
  const txtEmail2 = document.getElementById('txtEmail2');
  const txtPass2 = document.getElementById('txtPass2');
  const loginInfo = document.getElementById('loginInfo');


//add login event
btnLogin.addEventListener('click', e => {
  //get email and password
  const email = txtEmail.value;
  const pass = txtPassword.value;
  const auth = firebase.auth();
  //sign in
  const promise = auth.signInWithEmailAndPassword(email, pass);
  promise.catch(e => console.log(e.message))
});

// Add signup event
btnSignUp.addEventListener('click', e => {
  //get email and password
  const Email2 = txtEmail2.value;
  const Pass2 = txtPass2.value;
  const auth = firebase.auth();
  //sign in
  const promise = auth.createUserWithEmailAndPassword(Email2, Pass2);
  promise.catch(e => console.log(e.message))
});
//sign out
btnLogout.addEventListener('click', e =>{
  firebase.auth().signOut();
  firebase.auth().onAuthStateChanged(firebaseUser =>{
    if (firebaseUser) {
    } else {
      window.location = 'index.html';
    }
  });
});

// add a realtime listener
firebase.auth().onAuthStateChanged(firebaseUser =>{
  if (firebaseUser) {
    console.log(firebaseUser);
    btnLogout.classList.remove('hide');
    loginInfo.classList.add('hide');

  } else {
    window.alert('Logged out');
    btnLogout.classList.add('hide');
    loginInfo.classList.remove('hide');
  }
});

//get patient list from server

//get elements from html
const patientList = document.getElementById('patientList');
//create references
const dbRefUsers = firebase.database().ref().child('users');
const dbRefSebastian = dbRefUsers.child('8txthHri2GPSV01e5LD36jnRIAw1');
const dbRefList = dbRefSebastian.child('patientList');
//sync changes in object
dbRefUsers.on('value', snap => {
  preUsers.innerText = JSON.stringify(snap.val(), null, 3);
});
//sync list when something is added
dbRefList.on('child_added', snap => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.innerText = snap.val();
    a.id = snap.key;
    li.appendChild(a);
    patientList.appendChild(li);
  });

//sync any changes on list items
dbRefList.on('child_changed', snap=> {
  const liChanged = document.getElementById(snap.key);
  liChanged.innerText = snap.val();
})
//sync any items removed from list
dbRefList.on('child_removed', snap=> {
  const liToRemove = document.getElementById(snap.key);
  liToRemove.innerText = snap.val();
  liToRemove.remove(snap.key);
})