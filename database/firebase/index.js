const firebase = require('./firebaseConfig');

const usersRef = firebase.child('users');
const rolesRef = firebase.child('roles');
const customRolesRef = firebase.child('customRoles');

module.exports = { usersRef, rolesRef, customRolesRef };
