import {
  Box,
  HStack,
  List,
  ListItem,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";
import React from "react";

const GenreListSkeleton = () => {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  return (
    <List>
      {skeletons.map((skeleton) => (
        <ListItem paddingY={1.5} key={skeleton}>
          <Box>
            <HStack>
              <SkeletonCircle boxSize="32px" />
              <SkeletonText noOfLines={1} width={20} />
            </HStack>
          </Box>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreListSkeleton;
