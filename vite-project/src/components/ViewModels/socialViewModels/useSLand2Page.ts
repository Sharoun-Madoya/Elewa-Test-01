import { useEffect, useState } from 'react';
import { sLand2Items } from '../../modelsData/socialModels/s-Landing2Props';


export const useSocialLand2Page = () => {
    const [sLand2Page, setSLand2Page] = useState<sLand2Items[]>([]);
  
    useEffect(() => {
      fetch('http://localhost:3001/social-l2')
        .then((response) => response.json())
        .then((data) => {
          setSLand2Page(data);
          console.log(data);
        });
    }, []);
  
    return sLand2Page
}