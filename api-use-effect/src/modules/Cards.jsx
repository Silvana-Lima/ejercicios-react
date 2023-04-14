import { Card, CardBody, Stack, Image, Heading, List, ListItem } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'

export const Cards = ( {character} )=>{

    const colorIconCircle =(status)=>{
        if(status === "Dead"){ 
          return "red.500"
        }else if(status === "Alive"){ 
          return "green"}
          return "white"
      }

return (
    <Card
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="outline"
              bg="gray.700"
              color="white"
              w={480}
              key={character.id}
            >
              <Image
                objectFit="cover"
                maxW={{ base: "100%", sm: "200px" }}
                src={character.image}
                alt="Image of Character"
              />

              <Stack>
                <CardBody>
                  <Heading size="md" mb={3}>
                    {character.name}{" "}
                  </Heading>

                  <List spacing={3}>
                    <ListItem>
                      <Icon
                        viewBox="0 0 200 200"
                        color={colorIconCircle(character.status)}
                        mr={2}
                      >
                        <path
                          fill="currentColor"
                          d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                        />
                      </Icon>
                      {character.status} - {character.species}
                    </ListItem>
                    <ListItem>Last know Location:</ListItem>
                    <ListItem>{character.location.name}</ListItem>
                  </List>
                </CardBody>
              </Stack>
            </Card>
)
}