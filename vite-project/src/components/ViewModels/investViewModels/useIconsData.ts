//uses state and effect to fetch data from the Db.json regarding the icons


import { useEffect, useState } from 'react';
import { IconLogo } from '../../modelsData/investModels/iconProps';


export const useIconData = () => {
    const [iconLogo, setIconLogo] = useState<IconLogo[]>([]);
  
    useEffect(() => {
      fetch('http://localhost:3001/icons')
        .then((response) => response.json())
        .then((data) => {
          setIconLogo(data);
          console.log(data);
        });
    }, []);
  
    return iconLogo
}