//uses state and effect to fetch data from the Db.json regarding the page 5 of social impact

import { useEffect, useState } from 'react';
import { sLand5Items } from '../../modelsData/socialModels/s-Landing5Props';
export const useSLand5Page = () => {
    const [sLand5Page, setSLand5Page] = useState<sLand5Items[]>([]);
  
    useEffect(() => {
      fetch('http://localhost:3001/social-l5')
        .then((response) => response.json())
        .then((data) => {
          setSLand5Page(data);
          console.log(data);
        });
    }, []);
  
    return sLand5Page
}