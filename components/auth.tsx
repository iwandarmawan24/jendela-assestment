// components/withAuth.tsx
import { redirect } from 'next/navigation'
import { useEffect } from 'react';
import { isLoggedIn } from '@/lib/localstorage';

interface WithAuthProps {
    children: React.ReactNode;
  }
  
  const withAuth = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
    const Wrapper: React.FC<P & WithAuthProps> = (props) => {
  
      useEffect(() => {
        if (typeof window !== 'undefined') {
          // Client-side-only code
          if (!isLoggedIn()) {
            redirect('/login'); 
          }
        }
      }, []);
  
      return <WrappedComponent {...props} />;
    };
  
    return Wrapper;
  };
  
  export default withAuth;