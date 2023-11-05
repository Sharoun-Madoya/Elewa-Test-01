import { useEffect, useState } from 'react';
import { BrandsItems } from '../modelsData/brandprops';
import { ContactItems } from '../modelsData/contactprops';
import { PrivacyItems } from '../modelsData/Privacyprops';



export const usePrivacy= () => {
    const [privacyItems, setPrivacyItems] = useState<PrivacyItems []>([]);
  
    useEffect(() => {
      fetch('http://localhost:3001/footer/privacy')
        .then((response) => response.json())
        .then((data) => {
          setPrivacyItems(data);
          console.log(data);
        });
    }, []);
  
    return privacyItems
}