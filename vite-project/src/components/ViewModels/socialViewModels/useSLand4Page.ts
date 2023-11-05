//uses state and effect to fetch data from the Db.json regarding the page 4 of social impact

import { useEffect, useState } from 'react';
import { sLand4Items } from '../../modelsData/socialModels/s-Landing4Props';


export const useSLand4Page = () => {
    const [sLand4Page, setSLand4Page] = useState<sLand4Items[]>([]);
  
    useEffect(() => {
      fetch('http://localhost:3001/social-l4')
        .then((response) => response.json())
        .then((data) => {
          setSLand4Page(data);
          console.log(data);
        });
    }, []);
  
    return sLand4Page
}