//uses state and effect to fetch data from the Db.json regarding the page 4 on invest


import { Page4Items } from "../../modelsData/investModels/Page4Props";
import { useEffect, useState } from 'react';

export const usePage4Data = () => {
    const [page4, setPage4] = useState<Page4Items[]>([]);
  
    useEffect(() => {
      fetch('http://localhost:3001/page4')
        .then((response) => response.json())
        .then((data) => {
          setPage4(data);
          console.log(data);
        });
    }, []);
  
    return page4
}