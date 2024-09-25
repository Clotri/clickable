// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app'

import { getAnalytics } from 'firebase/analytics'

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: 'AIzaSyDdqeM4rGmLzTEdaBeKFhlqryxdT5oEkME',

  authDomain: 'clickapp-9d16a.firebaseapp.com',

  projectId: 'clickapp-9d16a',

  storageBucket: 'clickapp-9d16a.appspot.com',

  messagingSenderId: '542150860030',

  appId: '1:542150860030:web:08fb9532548994d8fc99af',

  measurementId: 'G-QV13FCCBDW'
}

// Initialize Firebase

const app = initializeApp(firebaseConfig)

const analytics = getAnalytics(app)
