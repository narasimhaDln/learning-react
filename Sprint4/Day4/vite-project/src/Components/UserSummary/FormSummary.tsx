import { useContext } from "react"
import { FeedbackContext } from "./feedBackContext"
import {Text, Stack,Box,StackDivider,Card, CardHeader, CardBody, Heading } from '@chakra-ui/react'

function FormSummary() {
    const context=useContext(FeedbackContext)
    if(!context){
        throw new Error("form summary must bhe within a feedback provider")
    }
    const {formData}=context
  return (
    <Card>
  <CardHeader>
    <Heading size='md'>Form Summary</Heading>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
           Name
        </Heading>
        <Text pt='2' fontSize='sm'>
        {formData.name}
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Email
        </Heading>
        <Text pt='2' fontSize='sm'>
        {formData.email}
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Rating
        </Heading>
        <Text pt='2' fontSize='sm'>
          {formData.rating}
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Feed Back
        </Heading>
        <Text pt='2' fontSize='sm'>
          {formData.feedback}
        </Text>
      </Box>
    </Stack>
  </CardBody>
</Card>
  )
}

export default FormSummary