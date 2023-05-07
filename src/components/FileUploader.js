import React, { useState } from 'react';
import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';

function FileUploader() {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');

  function handleFileUpload(event) {
    setFile(event.target.files[0]);
    setFileName(event.target.files[0].name);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(file);
    console.log(fileName);
  }

  return (
    <Center h="100vh" bg="#F5F5F5">
      <VStack spacing={6} w="xl" p={8} bg="white" boxShadow="lg" rounded="xl">
        <Box w="100%">
          <Heading size="lg" textAlign="center" fontFamily="Montserrat" fontWeight="bold">
            Upload Images
          </Heading>
        </Box>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <FormControl>
            <FormLabel fontFamily="Montserrat" fontWeight="bold">Select an image:</FormLabel>
            <Input type="file" onChange={handleFileUpload} mb={4} />
          </FormControl>
          <Button
            type="submit"
            disabled={!file}
            w="24vw"
            bg="#008CBA"
            color="white"
            _hover={{ bg: '#007A9D' }}
            rounded="full"
            fontFamily="Montserrat"
            fontWeight="bold"
            fontSize="md"
            p={4}
          >
            Upload
          </Button>
        </form>
        {fileName && (
          <Box w="100%" bg="#EDEDED" p={6} rounded="xl">
            <Text fontSize="sm" fontWeight="bold" mb={2}>
              Selected file:
            </Text>
            <Text fontSize="md" fontFamily="Montserrat">
              {fileName}
            </Text>
          </Box>
        )}
      </VStack>
    </Center>
  );
}

export default FileUploader;
