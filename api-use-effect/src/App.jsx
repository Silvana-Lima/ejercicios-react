import { useEffect, useState } from 'react'
import { Box, Spinner } from '@chakra-ui/react'
import axios from 'axios'
import { Header } from './modules/Header'
import { Filters } from './modules/Filters'
import { Cards } from './modules/Cards'
import { AlertError } from './modules/AlertError'
import { Paginated } from './modules/Paginated'

function App() {
  
  const [characters, setCharacters] = useState([]);
  const [filter, setFilter] = useState({
    name: "",
    status: "",
    gender: "",
  });
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState("");
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(()=>{
    setError(false)
    setShowSpinner(true)
    const getCharacters = async()=>{

      try{const { data } = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}&name=${filter.name}&status=${filter.status}&gender=${filter.gender}`)

      setCharacters(data.results)
      setTotalPages(data.info.pages)} 
      catch (error){setError(true)}
      finally{setShowSpinner(false)}
      
    }

    getCharacters()
  }, [filter, page])

  return (
    <>
      <Header />

      <main>

      <Filters filter={filter} setFilter={setFilter} />

      {showSpinner && 
         <Box display={"flex"}  justifyContent={"center"} w={"100%"}> <Spinner size="xl"/> 
         </Box>}

      <Box className="container-cards" display={"flex"} flexWrap={"wrap"} justifyContent={"center"} gap={5} p={2}>
        
        {error && <AlertError /> }
        
        {!error && characters?.map((character) => (
           <Cards key={character.id} character={character} />
            
          ))}
      </Box>

      < Paginated setPage={setPage} page={page} totalPages={totalPages} /> 

      </main>
     
    </>
  );
}

export default App
