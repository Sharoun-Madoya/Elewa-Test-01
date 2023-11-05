import { useEffect, useState } from 'react';
import { NavigationItems } from '../modelsData/navigationprops';


export const useNavigation= () => {
    const [navigationItems, setNavigationItems] = useState<NavigationItems[]>([]);

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