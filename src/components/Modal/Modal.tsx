import React from "react"

import "./Modal.scss"

interface Props {
    isOpen: boolean,
    onClose?: () => void
}

const Modal: React.FC<Props> = ({ onClose, isOpen, children }) => {

    if (isOpen) {
        window.document.body.style.overflow = "hidden"
    } 
    else {
        window.document.body.style.overflow = ""
    }

    return (
        <>
            {isOpen && (
                <div className="modal">
                    <div className="modal__content">
                        {children}
                    </div> 
                </div>
            )}
        </>
    )
}

export default Modal