import React from "react";
import { Card } from "react-bootstrap";

const Blogs = () => {
    return (
        <div className="w-75 mx-auto py-5">
            <h1 className="display-3 mb-4">Blogs</h1>
            <Card>
                <Card.Header>
                    <h2 className="text-capitalize">
                        <span className="text-danger">Q1: </span> Difference
                        Between javaScript and nodeJS
                    </h2>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        <span className="lead">
                            javaScript is a scripting language on the other hand
                            nodeJS is a javaScript runtime environment. <br />
                            javaScript works on the browsers only. NodeJS can
                            run outside browsers. <br />
                            javaScript mainly works for client side. Besides,
                            NodeJS mainly works for server side.
                        </span>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Header>
                    <h2 className="text-capitalize">
                        <span className="text-danger">Q2: </span> Difference
                        Between SQL and NOSQL databases
                    </h2>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        <span className="lead">
                            SQL means relational database on the other hand
                            NOSQL means nonrelational database <br />
                            SQL is not good for hierarchical data storage. NOSQL
                            is good for hierarchical data storage. <br />
                            SQL databases are vertically scalable. NOSQL
                            databases are horizontally scalable
                        </span>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Header>
                    <h2 className="text-capitalize">
                        <span className="text-danger">Q3: </span> What is the
                        purpose of jwt and how does it work
                    </h2>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        <span className="lead">
                            Purpose of jwt is stateless authentication. <br />
                            The mechanism is jwt verifies the owner of the data.{" "}
                            <br />
                            When a user logs in to the application, the
                            application assigns the user a JWT. Then send
                            requests from users will include the assigned JWT.
                            This is the JWT works
                        </span>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Blogs;
