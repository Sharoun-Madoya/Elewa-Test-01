import { useEffect, useState } from 'react';
import { PrivacyItems } from '../../modelsData/investModels/Privacyprops';

export const usePrivacy= () => {
    const [privacyItems, setPrivacyItems] = useState<PrivacyItems []>([]);
  
    useEffect(() => {
      fetch('http://localhost:3001/privacy')
        .then((response) => response.json())
        .then((data) => {
          setPrivacyItems(data);
          console.log(data);
        });
    }, []);
  
    return privacyItems
}