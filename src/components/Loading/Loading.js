import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
    return (
        <div
            className="d-flex w-100 justify-content-center align-items-center"
            style={{ height: "700px" }}
        >
            <Spinner animation="border" variant="danger" />
        </div>
    );
};

export default Loading;
