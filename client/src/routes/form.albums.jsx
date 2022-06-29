import { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Flex,
  Button,
} from "@chakra-ui/react";
import { httpPostNewAlbum } from "../http/albums.http";

export default function FormAlbum() {
  const [name, setName] = useState("");
  const [artist, setArtist] = useState("");
  const [price, setPrice] = useState(0);
  const [cover, setCover] = useState("");
  const [releaseYear, setReleaseYear] = useState(0);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleArtistChange = (event) => {
    setArtist(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleCoverChange = (event) => {
    setCover(event.target.value);
  };

  const handleReleaseYearChange = (event) => {
    setReleaseYear(event.target.value);
  };

  const postNewAlbum = (event) => {
    event.preventDefault();

    httpPostNewAlbum({
      name,
      artist,
      price,
      cover,
      releaseYear,
    });

    setName("");
    setArtist("");
    setPrice(0);
    setCover("");
    setReleaseYear(0);
  };
  return (
    <Flex w="100%" align="center" justify="center">
      <Box as="form" w="50%" onSubmit={postNewAlbum}>
        <FormControl py={2}>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input
            id="name"
            type="text"
            name="album-name"
            value={name}
            onInput={handleNameChange}
          />
        </FormControl>
        <FormControl py={2}>
          <FormLabel htmlFor="artist">Artist</FormLabel>
          <Input
            id="artist"
            value={artist}
            type="text"
            name="album-artist"
            onInput={handleArtistChange}
          />
        </FormControl>
        <FormControl py={2}>
          <FormLabel htmlFor="price">Price</FormLabel>
          <Input
            id="price"
            value={price}
            type="number"
            name="album-price"
            onInput={handlePriceChange}
          />
        </FormControl>
        <FormControl py={2}>
          <FormLabel htmlFor="cover">Cover (URL IMG)</FormLabel>
          <Input
            id="cover"
            value={cover}
            type="text"
            name="album-cover"
            onInput={handleCoverChange}
          />
        </FormControl>
        <FormControl py={2}>
          <FormLabel htmlFor="release-year">Release Year</FormLabel>
          <Input
            id="release-year"
            value={releaseYear}
            type="number"
            name="album-release-year"
            onInput={handleReleaseYearChange}
          />
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
