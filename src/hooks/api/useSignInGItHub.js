import useAsync from '../useAsync';
import * as authApi from '../../services/authApi';

export default function useSignUpGitHub() {
  const {
    loading: signInGitHubLoading,
    error: signInGitHubError,
    act: signInGitHub
  } = useAsync(authApi.signInGitHub, false);
  
  return {
    signInGitHubLoading,
    signInGitHubError,
    signInGitHub
  };
}
