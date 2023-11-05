import { Page5Items } from "../../modelsData/investModels/Page5Props";
import { useEffect, useState } from 'react';



export const usePage5Data = () => {
    const [page5, setPage5] = useState<Page5Items[]>([]);
  
    useEffect(() => {
      fetch('http://localhost:3001/page5')
        .then((response) => response.json())
        .then((data) => {
          setPage5(data);
          console.log(data);
        });
    }, []);
  
    return page5
}