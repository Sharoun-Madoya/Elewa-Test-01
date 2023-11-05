// viewModels/BrandsViewModel.ts
//Intermideary between Brand of footer in Views and BrandItem in ModelData
import { useEffect, useState } from 'react';
import { HeadquatersItems } from '../modelsData/HeadquatersProps';


export const useHeadQuaters= () => {
    const [headquaterItems, setheadquaterItems] = useState<HeadquatersItems[]>([]);

  
    useEffect(() => {
      fetch('http://localhost:3001/headquaters')
        .then((response) => response.json())
        .then((data) => {
          setheadquaterItems(data);
          console.log(data);
        });
    }, []);
  
    return headquaterItems
}