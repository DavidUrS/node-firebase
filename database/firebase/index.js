const firebase = require('./firebaseConfig');

const usersRef = firebase.child('users');
const rolesRef = firebase.child('roles');
const customRolesRef = firebase.child('customsRoles');

module.exports = { usersRef, rolesRef, customRolesRef };
