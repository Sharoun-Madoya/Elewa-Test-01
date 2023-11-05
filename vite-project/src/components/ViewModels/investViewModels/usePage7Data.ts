import { Page7Items } from "../../modelsData/investModels/Page7Props";
import { useEffect, useState } from 'react';



export const usePage7Data = () => {
    const [page7, setPage7] = useState<Page7Items[]>([]);
  
    useEffect(() => {
      fetch('http://localhost:3001/page7')
        .then((response) => response.json())
        .then((data) => {
          setPage7(data);
          console.log(data);
        });
    }, []);
  
    return page7
}