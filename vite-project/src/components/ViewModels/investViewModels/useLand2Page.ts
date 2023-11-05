import { useEffect, useState } from 'react';
import { Land2Items } from '../../modelsData/investModels/Land2Props';


export const useLand2Page = () => {
    const [land2Page, setLand2Page] = useState<Land2Items[]>([]);
  
    useEffect(() => {
      fetch('http://localhost:3001/land2page')
        .then((response) => response.json())
        .then((data) => {
          setLand2Page(data);
          console.log(data);
        });
    }, []);
  
    return land2Page
}