import styles from './ConfirmDialog.module.css'
import { RiCloseLine } from "react-icons/ri";

const ConfirmDialog = ({ setIsOpen, onDelete }) => {

    return (
        <>
            <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
            <div className={styles.centered}>
                <div className={styles.modal}>
                    <div className={styles.modalHeader}>
                        <h5 className={styles.heading}>Delete </h5>
                    </div>
                    <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
                        <RiCloseLine style={{ marginBottom: "-3px" }} />
                    </button>
                    <div className={styles.modalContent}>
                        Are you sure you want to delete the item?
                    </div>
                    <div className={styles.modalActions}>
                        <div className={styles.actionsContainer}>
                            <button className={styles.cancelBtn} onClick={() => setIsOpen(false)} >
                                Cancel
                            </button>
                            <button
                                className={styles.deleteBtn}
                                onClick={onDelete}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default ConfirmDialog;