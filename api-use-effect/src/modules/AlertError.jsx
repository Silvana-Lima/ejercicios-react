import { Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react'

export const AlertError = () =>{
    return(
        <Alert status="error">
        <AlertIcon />
        <AlertTitle>Error!</AlertTitle>
        <AlertDescription>
          Characters not found .
        </AlertDescription>
      </Alert>
    )
}