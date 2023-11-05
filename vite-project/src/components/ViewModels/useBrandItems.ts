import { useEffect, useState } from 'react';
import { BrandsItems } from '../modelsData/investModels/brandprops';



export const useBrandItems= () => {
    const [brandItems, setBrandItems] = useState<BrandsItems[]>([]); 
    useEffect(() => {
      fetch('http://localhost:3001/brands')
        .then((response) => response.json())
        .then((data) => {
          setBrandItems(data);
          console.log(data);
        });
    }, []);
  
    return brandItems
}