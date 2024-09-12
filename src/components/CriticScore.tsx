import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  function getColorbyScore(score: number) {
    if (score <= 100 && score >= 80) return "green";
    else if (score <= 79 && score >= 50) return "yellow";
    else return "red";
  }
  return (
    <Badge
      fontSize="14px"
      paddingInline={1.5}
      borderRadius="4px"
      colorScheme={getColorbyScore(score)}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
