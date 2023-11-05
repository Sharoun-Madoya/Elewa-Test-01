import { useEffect, useState } from 'react';
import { NavigationItems } from '../modelsData/investModels/navigationprops';


export const useNavigationItem= () => {
    const [navigationItems, setNavigationItems] = useState<NavigationItems[]>([]);

    useEffect(() => {
      fetch('http://localhost:3001/navigation')
        .then((response) => response.json())
        .then((data) => {
          setNavigationItems(data);
          console.log(data);
        });
    }, []);
  
    return navigationItems
}