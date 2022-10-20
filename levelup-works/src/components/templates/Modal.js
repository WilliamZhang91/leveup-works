import ReactDOM from "react-dom";
import "../../styles/template/template.css";
import { useSubmissions } from "../Hooks/useSubmissions";

export const Modal = ({ closeModal }) => {

    const { showModal } = useSubmissions();

    console.log({modal: showModal})

    return ReactDOM.createPortal(
        <>
            <div data-testid="modal" className="overlay" onClick={closeModal}></div>
            <div className="border">
                {
                    showModal.success ?
                        <h2>File Uploaded!</h2>
                        :
                        <h2>File Upload Failed!</h2>
                }
            </div>
        </>,
        document.getElementById("portal")
    );
};