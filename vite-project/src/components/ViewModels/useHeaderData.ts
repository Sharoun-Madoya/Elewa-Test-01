import { useEffect, useState } from 'react';
import { HeaderItems } from '../modelsData/header';


export const useHeaderItems = () => {
    const [headerItems, setHeaderItems] = useState<HeaderItems[]>([]);
  
    useEffect(() => {
      fetch('http://localhost:3001/headeritem')
        .then((response) => response.json())
        .then((data) => {
          setHeaderItems(data.headeritem as HeaderItems[]);
          console.log(data);
        });
    }, []);
  
    return headerItems
}