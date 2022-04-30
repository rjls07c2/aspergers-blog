import React from "react";
import { Link } from "react-router-dom";

export default function() {
    return (
        <div>
            <h2>PAGE NOT FOUND!</h2>
            <Link to="/">Return Home</Link>
        </div>
    );
}