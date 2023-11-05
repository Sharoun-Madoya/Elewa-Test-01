import { useEffect, useState } from 'react';
import { ContactItems } from '../modelsData/contactprops';




export const useContact= () => {
    const [contactItems, setContactItems] = useState<ContactItems[]>([]);

  
    useEffect(() => {
      fetch('http://localhost:3001/footer/contact')
        .then((response) => response.json())
        .then((data) => {
          setContactItems(data);
          console.log(data);
        });
    }, []);
  
    return contactItems
}