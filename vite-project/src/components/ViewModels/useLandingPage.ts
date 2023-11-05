import { useEffect, useState } from 'react';
import { LandingItems } from '../modelsData/LandingPageprops';


export const useLandingPage = () => {
    const [landingPage, setLandingPage] = useState<LandingItems[]>([]);
  
    useEffect(() => {
      fetch('http://localhost:3001/landingpage')
        .then((response) => response.json())
        .then((data) => {
          setLandingPage(data);
          console.log(data);
        });
    }, []);
  
    return landingPage
}