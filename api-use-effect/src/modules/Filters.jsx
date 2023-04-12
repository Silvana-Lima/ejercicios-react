import {
    FormControl,
    FormErrorMessage,
    Input,
    Select,
    InputGroup,
    InputRightElement,
  } from '@chakra-ui/react'
  import { SearchIcon } from '@chakra-ui/icons';
import { useState } from 'react';

export const Filters = ({filter, setFilter})=>{

    // const [filter, setFilter] = useState({
    //     name: "",
    //     status: "",
    //     gender:""
    //  })

const handleFilters = (e)=>{
    e.preventDefault()
    setFilter({
        ...filter,
        [e.target.name]: e.target.value
    })
    console.log(filter)
}

    return(
        <FormControl
        display={"flex"}
        flexDirection={["column", "row"]}
        gap={5}
        p={5}
      >
        <InputGroup>
          <InputRightElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
          <Input type="tel" placeholder="Search by name..." name="name" onChange={handleFilters}/>
        </InputGroup>

        <Select name="status" onChange={handleFilters}>
          <option value="">Status - all</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </Select>

        <Select name="gender" onChange={handleFilters}>
          <option value="">Gender - all</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </Select>
      </FormControl>
    )
}