import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import {zustandMMKVStorage} from './storage';

type AuthState = {
  isAuthenticated: boolean;
  isProfileComlete: boolean;
  skip: boolean;
  login: () => void;
  logout: () => void;
  setProfileComplete: (value: boolean) => void;
  setSkip: (value: boolean) => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    set => ({
      isAuthenticated: false,
      isProfileComlete: false,
      skip: false,
      login: () => set({isAuthenticated: true}),
      logout: () =>
        set({
          isAuthenticated: false,
          isProfileComlete: false,
          skip: false,
        }),
      setProfileComplete: value => set({isProfileComlete: value}),
      setSkip: value => set({skip: value}),
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => zustandMMKVStorage),
    },
  ),
);
