import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Flex,
  Button,
} from "@chakra-ui/react";

export default function FormAlbum() {
  const sayHi = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const name = form.get("album-name");
    const artist = form.get("album-artist");
    const price = form.get("album-price");
    const cover = form.get("album-cover");
    const releaseYear = form.get("album-release-year");

    const newAlbum = {
      name,
      artist,
      price,
      cover,
      releaseYear,
    };
  };

  return (
    <Flex w="100%" align="center" justify="center">
      <Box as="form" w="50%" onSubmit={sayHi}>
        <FormControl py={2}>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input id="name" type="text" name="album-name" />
        </FormControl>
        <FormControl py={2}>
          <FormLabel htmlFor="artist">Artist</FormLabel>
          <Input id="artist" type="text" name="album-artist" />
        </FormControl>
        <FormControl py={2}>
          <FormLabel htmlFor="price">Price</FormLabel>
          <Input id="price" type="number" name="album-price" />
        </FormControl>
        <FormControl py={2}>
          <FormLabel htmlFor="cover">Cover (URL IMG)</FormLabel>
          <Input id="cover" type="text" name="album-cover" />
        </FormControl>
        <FormControl py={2}>
          <FormLabel htmlFor="release-year">Release Year</FormLabel>
          <Input id="release-year" type="number" name="album-release-year" />
        </FormControl>
        <FormControl py={2}>
          <Flex justify="center">
            <Button colorScheme="blue" type="submit">
              Submit
            </Button>
          </Flex>
        </FormControl>
      </Box>
    </Flex>
  );
}
