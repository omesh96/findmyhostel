import { Heading, Text } from '@chakra-ui/react'
import React from 'react'
import "../css/homepage.css"

const Homepage = () => {
  return (
    <div className='homepagediv'>
      <Heading as='h1'>π²πππΈβ―ππ π―β€ ππ π»πππππ </Heading>
      <Text fontSize='4xl' mt="30px" mb="30px" as="h2">π²πΎπΌπΏπ»π΄ππ΄ π»πΎπΆπΈπ½ πΏππΎπ²π΄ππ ππΎ πΏππΎπ²π΄π΄π³ π΅ππππ·π΄π</Text>
      <Text  as="h3" fontSize='3xl' mt="30px">βππππ€π πππ£π ππ π¦π£ π»ππππͺ πΈπ₯π₯πππππππ πππ πππ€π  πππ€π€ πΈπ§πππππππππ₯πͺ</Text>
      <Text fontSize='4xl' mt="30px" mb="30px" as="h4">π‘π π»πΆππ πΆ π’πππΉ ππΆπβ’ π π‘</Text>
    </div>
  )
}

export default Homepage