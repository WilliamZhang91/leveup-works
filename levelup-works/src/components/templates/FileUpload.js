import { Axios } from 'axios';
import React, { useRef, useEffect } from 'react';
import submit from "../../images/pages/dashboard/submit.png"
import "../../styles/pages/homepage.css"

export const FileUpload = ({
    file,
    setFile,
    preview,
    setPreview
}) => {

    const fileInputRef = useRef();

    const onClickHandler = (e) => {
        e.preventDefault();
        fileInputRef.current.click();
    }

    const onChangeHandler = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFile(file)
        } else {
            setFile(null)
        }
    }

    const removeImage = () => {
        setFile(null)
    }

    useEffect(() => {
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            }
            reader.readAsDataURL(file);
        } else {
            setPreview(null);
        }
    }, [file]);

    return (
        <>
            <div className="file-card">
                <div className="input">
                    <form>
                        {preview ?
                            (
                                <>
                                    <button className="upload-button" onClick={onClickHandler}>
                                        <img src={preview}
                                            className="submissions-img"
                                            onClick={removeImage}
                                        />
                                    </button>
                                    <input
                                        type="file"
                                        style={{ display: "none" }}
                                        accept="image/*"
                                        ref={fileInputRef}
                                        onChange={onChangeHandler}
                                    />
                                </>
                            )
                            :
                            (
                                <>
                                    <button className="upload-button" onClick={onClickHandler}>
                                        <img src={submit} style={{ width: "20px", margin: "0 5px" }} />
                                        <div style={{ margin: "0 5px" }}>Add Image</div>
                                    </button>
                                    <input
                                        type="file"
                                        style={{ display: "none" }}
                                        accept="image/*"
                                        ref={fileInputRef}
                                        onChange={onChangeHandler}
                                    />
                                </>
                            )
                        }
                    </form>
                </div>
            </div>
        </>
    )
};
