import { Page6Items } from "../modelsData/investModels/Page6Props";
import { useEffect, useState } from 'react';



export const usePage6Data = () => {
    const [page6, setPage6] = useState<Page6Items[]>([]);
  
    useEffect(() => {
      fetch('http://localhost:3001/page6')
        .then((response) => response.json())
        .then((data) => {
          setPage6(data);
          console.log(data);
        });
    }, []);
  
    return page6
}