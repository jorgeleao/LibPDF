import { useState, useEffect } from 'react';

export function useMessager() {
    const [isActive, setIsActive] = useState(false);
    const [message, setMessage] = useState();
    
    useEffect(() => {
        if (isActive === true) {
            setTimeout(() => {setIsActive(false);} , 3000);
        }
    }, [isActive]);

    const openMessager = (msg = 'Something went wrong...') => {
        setMessage(msg)
        setIsActive(true);
    }

    return { isActive, message, openMessager }
}