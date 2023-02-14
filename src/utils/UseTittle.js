import  { useEffect } from 'react';

const UseTittle = (title) => {
    useEffect(()=>{
        document.title = title;
    },[title])
    return null
};

export default UseTittle;
