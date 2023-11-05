// viewModels/BrandsViewModel.ts
//Intermideary between Brand of footer in Views and BrandItem in ModelData
import { useEffect, useState } from 'react';
import { BrandsItems } from '../modelsData/brandprops';
import { ContactItems } from '../modelsData/contactprops';
import { PrivacyItems } from '../modelsData/Privacyprops';
import { NavigationItems } from '../modelsData/navigationprops';
import { HeadquatersItems } from '../modelsData/HeadquatersProps';


export const useHeadQuaters= () => {
    const [headquaterItems, setheadquaterItems] = useState<HeadquatersItems[]>([]);
    const [navigationItems, setNavgationItems] = useState<NavigationItems[]>([]);
    const [privacyItems, setPrivacyItems] = useState<PrivacyItems []>([]);
    const [contactItens, setContactItems] = useState<ContactItems[]>([]);
    const [brandItems, setBrandItems] = useState<BrandsItems[]>([]);

  
    useEffect(() => {
      fetch('http://localhost:3001/footer/headquaters')
        .then((response) => response.json())
        .then((data) => {
          setheadquaterItems(data);
          console.log(data);
        });
    }, []);
  
    return headquaterItems
}