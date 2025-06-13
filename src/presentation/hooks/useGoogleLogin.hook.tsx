// src/hooks/useGoogleLogin.ts
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '@/src/infrastructure/auth/firebase/firebase-client';

export const loginWithGoogle = async (): Promise<string> => {
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  const result = await signInWithPopup(auth, provider);
  const idToken = await result.user.getIdToken();
  return idToken;
};
