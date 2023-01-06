import React, { useContext } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

import useSignUpGitHub from '../../hooks/api/useSignUpGitHub';
import { toast } from 'react-toastify';
import { signInGitHub } from '../../services/authApi';
import UserContext from '../../contexts/UserContext';

import { useNavigate } from 'react-router-dom';

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

export default function SignInGitHub() {
  const { signUpGitHub } = useSignUpGitHub();
  const { setUserData } = useContext(UserContext);
  const navigate = useNavigate();

  const uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccessWithAuthResult: (data) => {
        const promise = signUpGitHub(data.user.email);

        promise.then(() => {
          toast('Usuário cadastrado com sucesso!');

          const userData = signInGitHub(data.user.email);

          userData.then((data) => {
            setUserData(data);
            toast('Login realizado com sucesso!');
            navigate('/dashboard');
          });

          userData.catch((error) => {
            toast('O cadastro foi concluído, mas não foi possível fazer login');
          });
        });

        promise.catch((error) => {
          if(error.response.status === 409) {
            const userData =  signInGitHub(data.user.email);

            userData.then((data) => {
              setUserData(data);
              toast('Login realizado com sucesso!');
              navigate('/dashboard');
            });

            userData.catch((error) => {
              toast('Não foi possível fazer login!');
            });
          }
        });
        return false;
      }
    }
  };

  return (
    <div>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
};
