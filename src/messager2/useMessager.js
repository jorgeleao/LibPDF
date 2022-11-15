import { useState, useEffect } from 'react';

let interval = undefined;

export function useMessager() {
    const [isActive, setIsActive] = useState(false);
    const [message, setMessage] = useState();
    const [progress, setProgress] = useState(100);
    
    useEffect(() => {
        if (isActive) {
            interval = setInterval(() => {
            setProgress((prev) => prev - 0.2);
            }, 10);
        } else {
            clearInterval(interval);
            setProgress(100);
        }
        }, [isActive]);

        useEffect(() => {
            if (progress <= 0) {
            setIsActive(false);
            setProgress(0);
            clearInterval(interval);
        }
    }, [progress]);

    const openMessager = (msg = 'Default message...') => {
        setMessage(msg)
        setProgress(100);
        setIsActive(true);
    }

    return { isActive, message, progress, openMessager }
}
