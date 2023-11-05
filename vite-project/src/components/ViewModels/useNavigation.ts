import { useEffect, useState } from 'react';
import { BrandsItems } from '../modelsData/brandprops';
import { ContactItems } from '../modelsData/contactprops';
import { PrivacyItems } from '../modelsData/Privacyprops';
import { NavigationItems } from '../modelsData/navigationprops';


export const useNavigation= () => {
    const [navigationItems, setNavigationItems] = useState<NavigationItems[]>([]);
    const [privacyItems, setPrivacyItems] = useState<PrivacyItems []>([]);
    const [contactItens, setContactItems] = useState<ContactItems[]>([]);
    const [brandItems, setBrandItems] = useState<BrandsItems[]>([]);

  
    useEffect(() => {
      fetch('http://localhost:3001/footer/navigation')
        .then((response) => response.json())
        .then((data) => {
          setNavigationItems(data);
          console.log(data);
        });
    }, []);
  
    return navigationItems
}