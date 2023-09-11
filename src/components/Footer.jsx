import {} from "@mui/material";
import React, { useState } from "react";
import "./../styles/Footer.css";
const Footer = () => {
    const [clicked, setClicked] = useState(false);
    return (
        <div className="a_tagi">
            <a href="#s" className="a_tag" onClick={() => setClicked(!clicked)}>
                {"Need help signing in?"}
            </a>
            {clicked ? (
                <div>
                    <a href="#s" className="a_tag">
                        {"Forgot password?"}
                    </a>
                    <a href="#s" className="a_tag">
                        {"Unlock account?"}
                    </a>
                    <a href="#s" className="a_tag">
                        {"Help"}
                    </a>
                </div>
            ) : (
                ""
            )}
        </div>
    );
};

export default Footer;
