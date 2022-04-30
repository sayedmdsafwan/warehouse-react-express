import React from "react";
import auth from "../../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    return (
        <div>
            Login
            <button onClick={() => signInWithGoogle()}>Login Google</button>
        </div>
    );
};

export default Login;
