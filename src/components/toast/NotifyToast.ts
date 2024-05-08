import toast from 'react-hot-toast'
import { VariablesCSS } from '../../styles/VariablesCSS'

export const notifyUseToast = (message: string) =>
    toast(message, {
        duration: 3000,
        position: 'bottom-center',
        style: {
            color: VariablesCSS.night,
            background: 'linear-gradient(118.95deg, #dfcfeb 0%, #c9abca 100%)',
            border: '3px solid #ffffff',
            borderRadius: '15px',
            fontFamily: 'KCC-Hanbit',
        },
    })
