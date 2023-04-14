import { Button, HStack } from '@chakra-ui/react'

export const Paginated = ( {setPage, page, totalPages} )=>{

      const handleNextPage = () => {
        setPage(page < Number(totalPages) && page + 1);
      };

      const handlePrevPage = () => {
        setPage(page > 1 && page - 1);
      };
    return (
        <HStack justifyContent={"center"}>
        <Button
          bg={"gray.500"}
          name="prev"
          onClick={handlePrevPage}
          isDisabled={page === 1 && true}
        >
          Prev
        </Button>
        <Button
          bg={"gray.500"}
          name="next"
          onClick={handleNextPage}
          isDisabled={page === Number(totalPages) && true}
        >
          Next
        </Button>
      </HStack>
    )
}