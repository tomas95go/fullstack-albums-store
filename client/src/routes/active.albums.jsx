import { useState, useCallback, useEffect } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
} from "@chakra-ui/react";
import { httpGetAllAlbums } from "../http/albums.http";
export default function ActiveAlbums() {
  const [albums, setAlbums] = useState([]);

  const alertMe = () => console.log(`Hola!`);

  const getAllAlbums = useCallback(async () => {
    const fetchedAlbums = await httpGetAllAlbums();
    setAlbums(fetchedAlbums);
  }, []);

  useEffect(() => {
    getAllAlbums();
  }, [getAllAlbums]);

  return (
    <TableContainer>
      {albums.length ? (
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Artist</Th>
              <Th>Price</Th>
              <Th>Cover (IMG URL)</Th>
              <Th>Release Year</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {albums.map((album) => {
              return (
                <Tr key={album.id}>
                  <Td>{album.name}</Td>
                  <Td>{album.name}</Td>
                  <Td>{album.name}</Td>
                  <Td>{album.name}</Td>
                  <Td>{album.name}</Td>
                  <Td>
                    <Button onClick={alertMe} colorScheme="blue">
                      Click
                    </Button>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      ) : (
        <p> No albums to display! </p>
      )}
    </TableContainer>
  );
}
