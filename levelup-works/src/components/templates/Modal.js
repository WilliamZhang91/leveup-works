import ReactDOM from "react-dom";
import "../../styles/template/template.css";
import { Link } from "react-router-dom";

export const Modal = ({ toggleModal }) => {

    return ReactDOM.createPortal(
        <>
            <div data-testid="modal" className="overlay" onClick={toggleModal}></div>
            <div className="border">
                <Link to="/teacher_dashboard">
                    <button>Login</button>
                </Link>
            </div>
        </>,
        document.getElementById("portal")
    );
};