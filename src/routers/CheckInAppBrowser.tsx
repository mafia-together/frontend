import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';

import { notifyUseToast } from '../components/toast/NotifyToast';

interface propsType {
  children: React.ReactNode;
}

export default function CheckInAppBrowser({ children }: propsType) {
  useEffect(() => {
    if (navigator.userAgent.indexOf('KAKAOTALK') >= 0) {
      notifyUseToast(
        '카카오톡안에서 튕기면 재접속할 수  없습니다.\n\n⋮ 을 눌러 다른 브라우저로 열어주세요.',
        'WARNING',
      );
    }
  }, []);

  return (
    <>
      <Toaster />
      {children}
    </>
  );
}
