import React from "react"
import {
  Button,
  Flex,
  Box,
  Icon,
  Text
} from "@chakra-ui/react"
import NextLink from "next/link"
import Image from "next/image"
import { CgWorkAlt } from "react-icons/cg"

export default function Navbar() {
  return (
    <Box>
      <Flex
        as="nav"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        px="3vw"
        py="3"
        borderBottom="0.5px solid #1e2029"
      >
        <NextLink href="/" passHref>
          <a>
            <Image src="/small.png" width={50} height={38} />
          </a>
        </NextLink>
        <Box color="white">
          <NextLink href="#projects">
            <Button as="a" variant="ghost" p={[0, 4]} ml="3vw" fontSize="16px" cursor="pointer">
              <Icon as={CgWorkAlt} w={[10, 6]} h={[10, 6]} mr={[0, 2]} />
              <Text display={["none", "block"]}>Projects</Text>
            </Button>
          </NextLink>
        </Box>
      </Flex>
    </Box>
  )
}
