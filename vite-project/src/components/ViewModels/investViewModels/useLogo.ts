import { useEffect, useState } from 'react';
import { ElewaLogo } from '../../modelsData/investModels/LogoProps'; 


export const useElewaLogo = () => {
    const [elewaLogo, setElewaLogo] = useState<ElewaLogo[]>([]);
  
    useEffect(() => {
      fetch('http://localhost:3001/logo')
        .then((response) => response.json())
        .then((data) => {
          setElewaLogo(data);
          console.log(data);
        });
    }, []);
  
    return elewaLogo
}