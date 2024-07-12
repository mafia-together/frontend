import { Job } from '../../type';

type PropsType = {
  job?: Job;
  size: 'small' | 'default' | 'big';
};

const sizeNumber = {
  small: '20',
  default: '40',
  big: '80',
};

export default function JobIcon(props: PropsType) {
  const { job, size } = props;

  switch (job) {
    case 'MAFIA':
      return (
        <svg
          width={sizeNumber[size]}
          height={sizeNumber[size]}
          viewBox="0 0 40 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.0145 7.98713H40V15.2599H38.1884V17.078H27.3188C26.8384 17.078 26.3776 17.2696 26.0379 17.6106C25.6981 17.9515 25.5072 18.414 25.5072 18.8962V20.7144C25.5072 21.6788 25.1255 22.6037 24.446 23.2857C23.7666 23.9676 22.845 24.3508 21.8841 24.3508H15.7609C15.0725 24.3508 14.4384 24.7508 14.1304 25.3689L9.69203 34.2599C9.38406 34.878 8.76812 35.2599 8.07971 35.2599H1.95652C1.95652 35.2599 -3.47826 35.2599 3.76812 24.3508C3.76812 24.3508 9.2029 17.078 1.95652 17.078V7.98713H3.76812L4.67391 6.16895H10.1087L11.0145 7.98713ZM23.6957 20.7144V18.8962C23.6957 18.414 23.5048 17.9515 23.165 17.6106C22.8253 17.2696 22.3645 17.078 21.8841 17.078H20.0725C20.0725 17.078 18.2609 18.8962 20.0725 20.7144C19.1115 20.7144 18.19 20.3313 17.5105 19.6493C16.831 18.9674 16.4493 18.0425 16.4493 17.078C15.9688 17.078 15.508 17.2696 15.1683 17.6106C14.8285 17.9515 14.6377 18.414 14.6377 18.8962V20.7144C14.6377 21.1966 14.8285 21.6591 15.1683 22C15.508 22.341 15.9688 22.5326 16.4493 22.5326H21.8841C22.3645 22.5326 22.8253 22.341 23.165 22C23.5048 21.6591 23.6957 21.1966 23.6957 20.7144Z"
            fill="currentColor"
          />
        </svg>
      );

    case 'DOCTOR':
      return (
        <svg
          width={sizeNumber[size]}
          height={sizeNumber[size]}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 20C22.7202 20 25.3289 18.9464 27.2524 17.0711C29.1758 15.1957 30.2564 12.6522 30.2564 10C30.2564 7.34784 29.1758 4.8043 27.2524 2.92893C25.3289 1.05357 22.7202 0 20 0C17.2798 0 14.6711 1.05357 12.7476 2.92893C10.8242 4.8043 9.74358 7.34784 9.74358 10C9.74358 12.6522 10.8242 15.1957 12.7476 17.0711C14.6711 18.9464 17.2798 20 20 20ZM12.3077 24.3125C6.37819 26.0078 2.05127 31.3516 2.05127 37.6797C2.05127 38.9609 3.11697 40 4.43108 40H35.5689C36.883 40 37.9487 38.9609 37.9487 37.6797C37.9487 31.3516 33.6218 26.0078 27.6923 24.3125V28.2812C29.9038 28.8359 31.5384 30.7969 31.5384 33.125V36.25C31.5384 36.9375 30.9615 37.5 30.2564 37.5H28.9743C28.2692 37.5 27.6923 36.9375 27.6923 36.25C27.6923 35.5625 28.2692 35 28.9743 35V33.125C28.9743 31.7422 27.8285 30.625 26.4102 30.625C24.992 30.625 23.8461 31.7422 23.8461 33.125V35C24.5513 35 25.1282 35.5625 25.1282 36.25C25.1282 36.9375 24.5513 37.5 23.8461 37.5H22.5641C21.859 37.5 21.282 36.9375 21.282 36.25V33.125C21.282 30.7969 22.9167 28.8359 25.1282 28.2812V23.8203C24.6474 23.7734 24.1586 23.75 23.6618 23.75H16.3381C15.8413 23.75 15.3526 23.7734 14.8718 23.8203V28.9297C16.7227 29.4688 18.0769 31.1406 18.0769 33.125C18.0769 35.5391 16.0657 37.5 13.5897 37.5C11.1138 37.5 9.10255 35.5391 9.10255 33.125C9.10255 31.1406 10.4567 29.4688 12.3077 28.9297V24.3125ZM13.5897 35C14.0998 35 14.5889 34.8025 14.9496 34.4508C15.3102 34.0992 15.5128 33.6223 15.5128 33.125C15.5128 32.6277 15.3102 32.1508 14.9496 31.7992C14.5889 31.4475 14.0998 31.25 13.5897 31.25C13.0797 31.25 12.5906 31.4475 12.2299 31.7992C11.8693 32.1508 11.6667 32.6277 11.6667 33.125C11.6667 33.6223 11.8693 34.0992 12.2299 34.4508C12.5906 34.8025 13.0797 35 13.5897 35Z"
            fill="currentColor"
          />
        </svg>
      );

    case 'POLICE':
      return (
        <svg
          width={sizeNumber[size]}
          height={sizeNumber[size]}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.4318 27.2L20 23L25.4687 27.2L23.3807 20.4L28.9488 16H22.1875L20 9.2L17.8125 16H11.0511L16.5199 20.4L14.4318 27.2ZM20 40C15.393 38.8333 11.59 36.1747 8.59117 32.024C5.5923 27.8733 4.09221 23.2653 4.09088 18.2V6L20 0L35.9091 6V18.2C35.9091 23.2667 34.4096 27.8753 31.4108 32.026C28.4119 36.1767 24.6083 38.8347 20 40Z"
            fill="currentColor"
          />
        </svg>
      );
    default:
      return (
        <svg
          width={sizeNumber[size]}
          height={sizeNumber[size]}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 20C17.25 20 14.8958 19.0208 12.9375 17.0625C10.9792 15.1042 10 12.75 10 10C10 7.25 10.9792 4.89583 12.9375 2.9375C14.8958 0.979167 17.25 0 20 0C22.75 0 25.1042 0.979167 27.0625 2.9375C29.0208 4.89583 30 7.25 30 10C30 12.75 29.0208 15.1042 27.0625 17.0625C25.1042 19.0208 22.75 20 20 20ZM0 40V33C0 31.5833 0.365 30.2817 1.095 29.095C1.825 27.9083 2.79333 27.0017 4 26.375C6.58333 25.0833 9.20833 24.115 11.875 23.47C14.5417 22.825 17.25 22.5017 20 22.5C22.75 22.5 25.4583 22.8233 28.125 23.47C30.7917 24.1167 33.4167 25.085 36 26.375C37.2083 27 38.1775 27.9067 38.9075 29.095C39.6375 30.2833 40.0017 31.585 40 33V40H0Z"
            fill="currentColor"
          />
        </svg>
      );
  }
}
