import { useEffect, useState } from 'react';
import { BrandsItems } from '../modelsData/brandprops';



export const useBrandItems= () => {
    const [brandItems, setBrandItems] = useState<BrandsItems[]>([]); 
    useEffect(() => {
      fetch('http://localhost:3001/footer/brands')
        .then((response) => response.json())
        .then((data) => {
          setBrandItems(data);
          console.log(data);
        });
    }, []);
  
    return brandItems
}