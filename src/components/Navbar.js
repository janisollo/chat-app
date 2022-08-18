import React from 'react';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { SignInMethod } from 'firebase/auth';
import SingIn from './SingIn';

const style = {
  nav: `bg-gray-800 h-20 flex justify-between items-center p-4`,
  heading: `text-white text-3xl`,
};

const Navbar = () => {
  const [user] = useAuthState(auth);
  return (
    <div className={style.nav}>
      <h1 className={style.heading}>Chat app</h1>
      <SingIn />
    </div>
  );
};

export default Navbar;
