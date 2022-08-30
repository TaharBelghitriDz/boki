import { Image } from "@chakra-ui/react";

export const SearchIcon = ({ size }: { size: number }) => (
  <Image h={size} w={size} src="/searchicon.svg" cursor="pointer" />
);
