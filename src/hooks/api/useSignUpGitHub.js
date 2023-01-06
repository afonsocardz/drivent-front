import useAsync from '../useAsync';
import * as userApi from '../../services/userApi';

export default function useSignUpGitHub() {
  const {
    loading: signUpGitHubLoading,
    error: signUpGitHubError,
    act: signUpGitHub,
  } = useAsync(userApi.signUpGitHub, false);

  return {
    signUpGitHubLoading,
    signUpGitHubError,
    signUpGitHub,
  };
}
