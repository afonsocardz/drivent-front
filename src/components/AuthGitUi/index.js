import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyBVoR_aT-aUH4BM5_4B1YoITVcDylL6BAU',
  authDomain: 'drivent-70828.firebaseapp.com',
  projectId: 'drivent-70828',
  storageBucket: 'drivent-70828.appspot.com',
  messagingSenderId: '365782829595',
  appId: '1:365782829595:web:62e24dc09e7951558906be',
  measurementId: 'G-J8DG45C9Q2'
};
firebase.initializeApp(config);

const uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: '/enroll',
  signInOptions: [
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    signInSuccess: (item) => console.log(item)
  }
};

export default function SignInGitHub() {
  return (
    <div>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
    </div>
  );
};
