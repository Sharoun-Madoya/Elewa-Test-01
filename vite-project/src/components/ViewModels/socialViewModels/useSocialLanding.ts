import { useEffect, useState } from 'react';
import { socialLandingItems } from '../../modelsData/socialModels/socialLandingProps';


export const useSocialLandingPage = () => {
    const [sLandingPage, setSoLandingPage] = useState<socialLandingItems[]>([]);
  
    useEffect(() => {
      fetch('http://localhost:3001/social-l')
        .then((response) => response.json())
        .then((data) => {
          setSoLandingPage(data);
          console.log(data);
        });
    }, []);
  
    return sLandingPage
}