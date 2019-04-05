const { FIREBASEHOST } = process.env;
const admin = require('firebase-admin');
const serviceAccount = require('./firebase_keys.json');

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: FIREBASEHOST
});

const db = admin.database();
const ref = db.ref();

module.exports = ref;
