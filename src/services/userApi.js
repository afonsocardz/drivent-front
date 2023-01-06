import api from './api';

export async function signUp(email, password) {
  const response = await api.post('/users', { email, password });
  return response.data;
}

export async function signUpGitHub(email) {
  const response = await api.post('/users/sign-up-git', { email });
  return response.data;
}
//
