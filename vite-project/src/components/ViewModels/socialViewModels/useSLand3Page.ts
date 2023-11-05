import { useEffect, useState } from 'react';
import { sLand3Items } from '../../modelsData/socialModels/s-Landing3Props';


export const useSocialLandingPage = () => {
    const [sLand3Page, setSLand3Page] = useState<sLand3Items[]>([]);
  
    useEffect(() => {
      fetch('http://localhost:3001/social-l3')
        .then((response) => response.json())
        .then((data) => {
          setSLand3Page(data);
          console.log(data);
        });
    }, []);
  
    return sLand3Page
}