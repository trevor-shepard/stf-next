import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/firebase-database';
import 'firebase/firebase-storage';

import config from '../config/fbConfig';

if (!firebase.apps.length) {
	firebase.initializeApp(config);
}

export default firebase;
