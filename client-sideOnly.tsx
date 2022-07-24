import React, {useState,useEffect} from 'react';
interface Props{ 
  children?:React.ReactNode;
  delegated?:any;
}
export default function ClientSide ({children, ...delegated}:Props){
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
      setHasMounted(true);
    }, []);
  
    if (!hasMounted) {
      return null;
    }
  return(<div{...delegated}>{children}</div>)
}