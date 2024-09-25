import useGenres from "../hooks/useGenres";
import { Image, HStack, ListItem, List, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";
const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  return (
    <>
      {error && null}
      {isLoading && <GenreListSkeleton />}
      <List>
        {data.map((genre) => (
          <ListItem paddingY={1.5} key={genre.id}>
            <HStack>
              <Image
                borderRadius={8}
                boxSize="32px"
                src={getCroppedImageUrl(genre.image_background)}
              />

              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
