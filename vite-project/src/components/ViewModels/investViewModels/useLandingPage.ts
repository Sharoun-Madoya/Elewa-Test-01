//uses state and effect to fetch data from the Db.json regarding the Landing page in invest


import { useEffect, useState } from 'react';
import { LandingItems } from '../../modelsData/investModels/LandingPageprops';


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