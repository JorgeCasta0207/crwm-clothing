import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';


const SignIn = () => {

  useEffect(() => {
    const handleRedirectResponse = async() =>{
      const response = await getRedirectResult(auth);
      if(response){
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
    }
   handleRedirectResponse();
  }, [])

  
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  
  

  return (
    <div>
      <SignUpForm/>
    </div>
  );
};

export default SignIn;