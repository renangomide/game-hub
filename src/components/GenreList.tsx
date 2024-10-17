import useGenres from "../hooks/useGenres";
import {
  Image,
  HStack,
  ListItem,
  List,
  Text,
  Button,
  Heading,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";
import { Genre } from "../hooks/useGenres";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  return (
    <>
      {error && null}
      {isLoading && <GenreListSkeleton />}
      <Heading fontSize="2xl" marginY={3}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem paddingY={1.5} key={genre.id}>
            <HStack>
              <Image
                borderRadius={8}
                boxSize="32px"
                src={getCroppedImageUrl(genre.image_background)}
              />

              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                onClick={() => onSelectGenre(genre)}
                fontSize="lg"
                variant="link"
                overflow="hidden"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
