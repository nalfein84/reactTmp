import { Linking } from 'react-native';
import { useEffect, useState } from 'react';

const useDeepLinking = (callback: (url: string) => void) => {
    const [url, setUrl] = useState<string>();

    const handleUrl = async (incomingUrl: string) => {
        callback(incomingUrl);
    }
    const getUrlAsync = async () => {
        const initialUrl = await Linking.getInitialURL();
        if (initialUrl != null) {
            setUrl(initialUrl);
            handleUrl(initialUrl);
        }
    }
    const handleUrlChange = (event: any) => {
        setUrl(event.url);
        handleUrl(event.url);
    }

    useEffect(() => {
        getUrlAsync();
        Linking.addEventListener('url', handleUrlChange);
        return () => {
            Linking.removeAllListeners
        };
    }, []);

    return url
}

export default useDeepLinking;
