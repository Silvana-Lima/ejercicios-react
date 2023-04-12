import { VStack, Heading } from "@chakra-ui/react"

export const Header = ()=>{
    return(
        <VStack p={"10"} bg={"gray.800"} color={"white"}>
            <Heading as="h1" size={"3xl"} >Práctica UseEffect</Heading>
            <Heading as="h2">Rick and Morty API </Heading>
        </VStack>
    )
}