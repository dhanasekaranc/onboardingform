import Signup from "./Signup";
import "./Onboarding.css";
import { DataContext } from "./DataProvider";
import { useContext } from "react";

const SuccessPage = () => {

    const {data} = useContext(DataContext);

    return (
        <Signup stage={4}>
            <div className="tick">
               <div className="tick-mark"></div>
            </div>
            <div className="title">Congratulations, {data.displayName}!</div>
            <div className="sub-title">You have completed onboarding. You can start using Eden.</div>     
            <div>
                <button className="button">
                    Launch Eden
                </button>
            </div>
        </Signup>
    )
}

export default SuccessPage;