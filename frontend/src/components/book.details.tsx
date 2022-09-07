import {
  Box,
  CloseButton,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  Text,
  VStack,
} from "@chakra-ui/react";
import { BooksList, SaveBook } from "./mini.components";

const BookDetails = ({
  isOpen,
  onClose,
  ...props
}: {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  img: string;
  subtitle: string;
  author: string;
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="full" motionPreset="scale">
      <ModalContent>
        <ModalBody
          bgImg={"url('" + props.img + "')"}
          bgPosition="center"
          bgSize="cover"
          pos="relative"
          zIndex={-2}
        >
          <Box
            pos="absolute"
            top="0"
            left="0"
            w="full"
            h="full"
            bg="rgb(0,0,0,70%)"
            backdropFilter="blur(100px)"
            zIndex={-1}
          />
          <VStack color="white" h="auto" alignItems="center">
            <VStack maxW="1000px" w="full" spacing="50px">
              <Image src={props.img} h="80vw" maxH="400px" rounded="10px" />
              <Text
                fontSize="30px"
                fontWeight="bold"
                maxW="200px"
                textAlign="center"
                lineHeight="30px"
              >
                {props.title}
              </Text>

              <SaveBook {...props} />

              <VStack alignItems="start" spacing="30px" maxW="600px">
                <CloseButton
                  pos="fixed"
                  top="10px"
                  right="30px"
                  h="40px"
                  w="40px"
                  bg="black"
                  rounded="10px"
                  cursor="pointer"
                  onClick={onClose}
                  zIndex={10}
                />

                <Text>
                  {props.subtitle
                    ? props.subtitle.split(" ").slice(0, 50).join(" ")
                    : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Nunc vulputate libero et velit
                  interdum, ac aliquet odio mattis. Class aptent taciti sociosqu
                  ad litora torquent per conubia nostra, per inceptos himenaeos.`}
                </Text>
                <Text fontSize="25px" fontWeight="bold">
                  author details :
                </Text>
                <Text color="yellow" fontWeight="bold">
                  {props.author || "some author name"}
                </Text>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Nunc vulputate libero et velit
                  interdum, ac aliquet odio mattis. Class aptent taciti sociosqu
                  ad litora torquent per conubia nostra, per inceptos himenaeos.
                </Text>
              </VStack>
              <VStack alignItems="start" w="full" spacing="50px">
                <Text fontSize="30px" fontWeight="bold">
                  related books
                </Text>
                <BooksList />

                <Text fontSize="30px" fontWeight="bold">
                  you may also like
                </Text>
                <BooksList />
              </VStack>
            </VStack>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
export default BookDetails;
