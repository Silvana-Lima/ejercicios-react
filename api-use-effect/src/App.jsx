import { useEffect, useState } from 'react'
import { Header } from './modules/Header'
import { Filters } from './modules/Filters';
import { Card, CardBody, Stack, Image, Heading } from '@chakra-ui/react'
import {
  List,
  ListItem
} from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import axios from 'axios'

function App() {
  
  const [characters, setCharacters] = useState([]);
  const [filter, setFilter] = useState({
    name: "",
    status: "",
    gender:""
 })
 const [error, setError]= useState(false)

  // /?name="${filter.name}&status=${filter.status}&gender=${filter.gender}"

  useEffect(()=>{
    setError(false)
    const getCharacters = async()=>{

      try{const { data } = await axios.get(`https://rickandmortyapi.com/api/character?name=${filter.name}&status=${filter.status}&gender=${filter.gender}`)

      setCharacters(data.results)} 
      catch (error){setError(true)}
      
    }

    getCharacters()
  }, [filter])

  const colorIconCircle =(status)=>{
    if(status === "Dead"){ 
      return "red.500"
    }else if(status === "Alive"){ 
      return "green"}
      return "white"
  }

  console.log(characters)
  return (
    <div>
      <Header />
      <Filters filter={filter} setFilter={setFilter} />
      {error && <p>Hubo un error</p> }
      {!error && characters?.map((character) => (
        <Card
          key={character.id}
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
          bg="gray.700"
          color="white"
          w={500}
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "200px" }}
            src={character.image}
            alt="Image of Character"
          />

          <Stack>
            <CardBody>
              <Heading size="md" mb={3}>{character.name} </Heading>

              <List spacing={3}>
                <ListItem>
                  <Icon viewBox="0 0 200 200" color={colorIconCircle(character.status)} mr={2}>
                    <path
                      fill="currentColor"
                      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                    />
                  </Icon>
                  {character.status} - {character.species}
                </ListItem>
                <ListItem>
                  Last know Location:
                </ListItem>
                <ListItem>
                {character.location.name}
                </ListItem>
              </List>
            </CardBody>
          </Stack>
        </Card>
      ))}
    
      
    </div>
  );
}

export default App
