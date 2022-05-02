import React from "react";
import { Button, Form } from "react-bootstrap";
import {
    useCreateUserWithEmailAndPassword,
    useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const SignUp = () => {
    const [createUserWithEmailAndPassword, user, loading, error] =
        useCreateUserWithEmailAndPassword(auth, {
            sendEmailVerification: true,
        });
    const [updateProfile, updating, errorUpdate] = useUpdateProfile(auth);

    let errorElement;
    if (error || errorUpdate) {
        errorElement = (
            <div>
                <p className="text-danger">Error: {error?.message}</p>
            </div>
        );
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const displayName = event.target.name.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName });
        toast("Check Your Email To Verify");
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
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control
                        type="text"
                        name="name"
                        placeholder="Your Name"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                    />
                </Form.Group>

                <p>
                    Already have an account? <Link to="/login">Click here</Link>{" "}
                    to login
                </p>
                {errorElement}

                <Button variant="danger" className="w-100" type="submit">
                    SignUP
                </Button>
            </Form>
        </div>
    );
};

export default SignUp;
