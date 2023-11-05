//uses state and effect to fetch data from the Db.json regarding the Header


import { useEffect, useState } from 'react';
import { HeaderItems } from '../../modelsData/investModels/header';

export const useHeaderItems = () => {
    const [headerItems, setHeaderItems] = useState<HeaderItems[]>([]);
  
    useEffect(() => {
      fetch('http://localhost:3001/headeritem')
        .then((response) => response.json())
        .then((data) => {
          setHeaderItems(data);
          console.log(data);
        });
    }, []);
  
    return headerItems
}