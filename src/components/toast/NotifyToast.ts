import toast from 'react-hot-toast'
import { VariablesCSS } from '../../styles/VariablesCSS'

export const notifyUseToast = (message: string, whereUse: 'ENTER' | 'INVITE') => {
    if (whereUse === 'ENTER') {
        return toast(message, {
            duration: 3000,
            position: 'bottom-center',
            style: {
                color: VariablesCSS.light,
                background:
                    'linear-gradient(90deg, rgba(223, 207, 235, 0.4) 0%, rgba(201, 171, 202, 0.4) 100%)',
                borderRadius: '15px',
                fontFamily: 'KCC-Hanbit',
            },
        })
    } else if (whereUse === 'INVITE') {
        return toast(message, {
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
    }
}
