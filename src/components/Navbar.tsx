import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Button from './Button';
import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, Providers } from "../config/firebase";

export default function Navbar() {
    const [isVisible, setIsVisible] = useState(false)
    const [loggedIn, setIsLoggedIn] = useState(false);

    const signOutOnClick = () => {
        signOut(auth)
        location.reload();
    }

    const signInOnClick = async () => {
        const response = await signInWithPopup(auth, Providers.google);
        if ( response.user ) {
            location.reload();
        }
    }

    const dropDown = () => {
        setIsVisible(!isVisible)
    }

    const clicked = () => {
        setIsVisible(false)
    }

    return (
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
            <Link to="/" className="font-semibold text-xl tracking-tight">Digit</Link>
        </div>
        <div className="block">
            <button onClick={dropDown} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
        </div>
        { isVisible ? (
        <div className="w-full block flex-grow items-center">
            <div className="text-sm lg:flex-grow">
            <Button className="p-3 m-5 bg-teal-400 justify-center">
                <div>
                <Link to="/" onClick={ clicked } 
                className="flex place-items-center mt-4 lg:inline-block lg:mt-0
                 text-teal-200 hover:text-white mr-4">
                    Home
                </Link>
                </div>
            </Button>
            <Button className="p-3 m-5 bg-teal-400 justify-center">
                <div>
                <Link to="/about" onClick={ clicked } className="flex place-items-center mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                    About
                </Link>
                </div>
            </Button>
            <Button className="p-3 m-5 bg-teal-400 justify-center">
                <div>
                <Link to="/contact" onClick={ clicked } className="flex place-items-center mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                    Contact
                </Link>
                </div>
            </Button>
            <Button className="p-3 m-5 bg-teal-400 justify-center">
                <div>
                <Link to="/dashboard" onClick={ clicked } className="flex place-items-center mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                    Dashboard
                </Link>
                </div>
            </Button>
            { !auth.currentUser ? 
            <Button className="p-3 m-5 bg-teal-400 justify-center">
                <div>
                    
                <Link to="/" onClick={ () => signInOnClick() } className="flex place-items-center mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                    Login
                </Link>
                </div>
            </Button>
             :
             <Button className="p-3 m-5 bg-teal-400 justify-center">
                <div>
                <Link to="/" onClick={ () => signOutOnClick() } className="flex place-items-center mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                    Sign Out
                </Link>
                </div>
            </Button> }
            </div>
        </div> ) : (
            <></>
        ) }
        </nav>
    );
}




