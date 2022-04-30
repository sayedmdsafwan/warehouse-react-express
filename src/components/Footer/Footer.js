import React from "react";

const Footer = () => {
    return (
        <div>
            <footer className="bg-dark text-white py-3">
                <p
                    className="mb-0 text-center"
                    style={{
                        color: "gray",
                    }}
                >
                    Copyright &copy; {new Date().getFullYear()} | All Rights
                    Reserved
                </p>
            </footer>
        </div>
    );
};

export default Footer;
