import { createContext } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const NotificationContext = createContext()

export const NotificationProvider = ({ children }) => {


    const successAlert = (data) => {
        toast.success(`${data}`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    const errorAlert = (data) => {
        toast.error(`${data}`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    return (
        <NotificationContext.Provider value={{ successAlert, errorAlert }}>
            <ToastContainer />
            {children}
        </NotificationContext.Provider>
    )

}