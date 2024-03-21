import React, { useEffect, useState } from 'react';
import './Login.css';
import close_popup from '../../assets/close.png';
import toast from 'react-hot-toast';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, Timestamp, collection, onSnapshot, query, where  } from 'firebase/firestore';
import { auth, fireDB } from '../../Firebase/FirebaseConfig';


function Login({ setShowLogin }) {

    const [currentState, setCurrentState] = useState("Login");
    const [loading, setLoading] = useState(false);

    const [signup, setSignup] = useState({
        name: '',
        email: '',
        password: ''
    });

    const getSignUp = async () => {
        if (signup.name === "" || signup.email === "" || signup.password === "") {
            return toast.error('All fields are required');
        }
        try {
            setLoading(true);
            const userCredential = await createUserWithEmailAndPassword(auth, signup.email, signup.password);
            const user = userCredential.user;

            await setDoc(doc(fireDB, 'users', user.uid), {
                name: signup.name,
                email: signup.email,
                time: Timestamp.now(),
                date: new Date().toLocaleString(
                    "en-US",{
                        month:'short',
                        day:'2-digit',
                        year:"numeric"
                    }
                )
            });

            setSignup({ name: '', email: '', password: '' });

            toast.success('Account created successfully!');
        } catch (error) {
            console.error('Error creating account:', error.message);
            toast.error('Failed to create account. Please try again.');
        }
        finally{
            setLoading(false);
            setShowLogin(false);
        }
    };

    const [userLogin, setUserLogin] = useState({
        email: '',
        password: ''
    });

    const getLogin = async () => {
        if (userLogin.email === "" || userLogin.password === "") {
            return toast.error('Email and password are required');
        }
        
        try {
            setLoading(true);
            const userCredential = await signInWithEmailAndPassword(auth, userLogin.email, userLogin.password);
            
                const q = query(
                collection(fireDB, "users"),
                where('uid', '==', userCredential.user.uid)
            );
            
            const querySnapshot = await getDocs(q);
            
            querySnapshot.forEach((doc) => {
                let user = doc.data();
                localStorage.setItem("users", JSON.stringify(user));
            });

            setUserLogin({
                email: "",
                password: ""
            });

            toast.success("Logged in successfully");
        } catch (error) {
            console.error('Error logging in:', error.message);
            toast.error('Failed to log in. Please check your credentials and try again.');
        } finally {
            setLoading(false);
            setShowLogin(false);
        }
    };

    return (
        <div className='login-popup'>
            <form className="login-popup-container">
                <div className='login-popup-title'>
                    <h2>{currentState}</h2>
                    <img onClick={() => setShowLogin(false)} src={close_popup} className='close-img' alt="" />
                </div>
                <div className='login-popup-inputs'>
                    {currentState === "Login" ? <></> :
                        <input type="text" placeholder='Your Name' required value={signup.name} onChange={(e) => setSignup({ ...signup, name: e.target.value })} />
                    }
                    <input type="email" placeholder='Your Email' required value={signup.email} onChange={(e) => setSignup({ ...signup, email: e.target.value })} />
                    <input type="password" placeholder='Password' required value={signup.password} onChange={(e) => setSignup({ ...signup, password: e.target.value })} />
                </div>
        
                <button onClick={() => currentState === "Sign Up" ? getSignUp() : getLogin()} disabled={loading}>{currentState === "Sign Up" ? "Create account" : "Login"}</button>
                {loading && <div className="loader">Loading...</div>}
                <div className='login-popup-condition'>
                    <input type="checkbox" required />
                    <p>By continuing, I agree to the terms of use & privacy policy</p>
                </div>
                {currentState === 'Login' ?
                    <p>Create a new account? <span onClick={() => setCurrentState('Sign Up')}>Click here</span></p> :
                    <p>Already have an account? <span onClick={() => setCurrentState('Login')}>Login here</span></p>
                }
            </form>
        </div>
    );
}

export default Login;
