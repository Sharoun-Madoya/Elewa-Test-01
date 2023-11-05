# Elewa-Test-01

To begin  start by typing:

  cd vite-project
  pnpm run dev


json-server --watch db.json --port 3001


        fetch('http://localhost:3001/headerItem')
        .then((data)=>{
            setHeaderItems(data);
            console.log(data);
        })