import React from "react";
import auth from "../../firebase.init";
import {
    useSignInWithEmailAndPassword,
    useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] =
        useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();

    let errorElement;
    if (error) {
        errorElement = (
            <div>
                <p className="text-danger">Error: {error?.message}</p>
            </div>
        );
    }

    if (user) {
        navigate("/");
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        await signInWithEmailAndPassword(email, password);
    };

    return (
        <div
            className="w-25 mx-auto py-5"
            style={{
                height: "100vh",
            }}
        >
            <h3 className="text-center text-danger">Fruits NINJA</h3>
            <h2 className="text-center display-6 mb-3">Create an account</h2>

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="BasicEmail">
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="BasicPassword">
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                    />
                </Form.Group>

                <p>
                    New to FruitsNINJA? <Link to="/signup">Click here</Link> to
                    SignUp
                </p>
                {errorElement}

                <Button variant="danger" className="w-100" type="submit">
                    Login
                </Button>
            </Form>
        </div>
    );
};

export default Login;
