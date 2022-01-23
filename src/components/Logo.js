import EdenLogo from "../assets/EdenLogo.PNG";
import "./Logo.css";

const Logo = () => {
    return (
        <div className="logo-container">
            <img className="logo" src={EdenLogo} alt="Logo"/>
            <h2>Eden</h2>
        </div>
    )
}

export default Logo;