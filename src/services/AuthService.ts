import {useAuthStore} from '../store';

export const authService = {
  login: () => {
    useAuthStore.getState().login();
  },

  logout: () => {
    useAuthStore.getState().logout();
  },

  isAuthenticated: () => {
    return useAuthStore.getState().isAuthenticated;
  },

  isProfileComplete: () => {
    return useAuthStore.getState().isProfileComlete;
  },

  setProfileComplete: (value: boolean) => {
    useAuthStore.getState().setProfileComplete(value);
  },

  isSkipped: () => {
    return useAuthStore.getState().skip;
  },

  setSkip: (value: boolean) => {
    useAuthStore.getState().setSkip(value);
  },
};
