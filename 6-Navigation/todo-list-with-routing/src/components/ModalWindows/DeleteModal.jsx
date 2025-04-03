import React from "react";
import styles from "./ModalWindow.module.css"

export default function DeleteModal({onNo, onYes, open}){
    return(
        <div className={`${styles.deleteModalOverlay} ${open ? "" : styles.deleteModalOverlayHidden}`}>
            <div className={styles.deleteModal}>
                <div className={styles.deleteModalTitle}>
                    <h3>
                        Вы действительно хотите удалить?
                    </h3>
                </div>
                <div className={styles.deleteModalButtons}>
                    <button onClick={onNo}>Нет</button>
                    <button onClick={onYes}>Да</button>
                </div>
            </div>
        </div>
    )
}