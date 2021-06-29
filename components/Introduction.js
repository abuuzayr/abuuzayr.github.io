import React, { useState, useLayoutEffect } from "react"
import {
  Link,
  Text,
  Stack,
  Heading,
  Box,
  Button,
  SlideFade,
  useBreakpointValue,
  Icon,
} from "@chakra-ui/react"
import { FaEnvelope, FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa"
import {
  SiTypescript,
  SiReact,
  SiNodeDotJs,
} from "react-icons/si"

const BlitzLogo = () => (
  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="25px" height="25px">
    <path d="M5.59067 15.9955H10.8818C12.8953 15.9955 14.7918 16.9419 16.0025 18.5507L21.2218 25.4867C21.3204 25.6178 21.3353 25.7938 21.26 25.9396L18.2515 31.7687C18.1071 32.0484 17.7202 32.0813 17.5307 31.83L5.59067 15.9955Z" />
    <path d="M26.4093 16.0045H21.1182C19.1047 16.0045 17.2082 15.0581 15.9975 13.4493L10.7782 6.51327C10.6796 6.38219 10.6647 6.20621 10.74 6.06044L13.7485 0.231313C13.8929 -0.0483593 14.2798 -0.0812562 14.4693 0.170035L26.4093 16.0045Z" />
  </svg>

)

export default function Introduction() {
  const [opacityToRemove, setOpacityToRemove] = useState(0)
  const buttonSize = useBreakpointValue(["lg", "md", "sm"])
  const buttonVariant = useBreakpointValue(["ghost", "solid"])

  useLayoutEffect(() => {
    if (typeof window === "undefined") return
    window.addEventListener("scroll", () => setOpacityToRemove(window.scrollY))
    return () => {
      window.removeEventListener("scroll", () => setOpacityToRemove(window.scrollY))
    }
  }, [])

  return (
    <Stack spacing={4} justifyContent="flex-start" alignItems="flex-start" position="relative">
      <SlideFade
        direction="top"
        in={true}
        transition={{ enter: { duration: 0.4, delay: 0.6 } }}
      >
        <Box position="relative">
          <Text
            color="buff"
            fontSize={["xl", "2xl"]}
            fontWeight="semibold"
            position="relative"
            zIndex={1}
          >
            @abuuzayr / builtforfifty 🇸🇬
          </Text>
        </Box>
      </SlideFade>

      <SlideFade
        direction="top"
        in={true}
        transition={{ enter: { duration: 0.4, delay: 0.7 } }}
      >
        <Heading
          color="white"
          fontSize={["5xl", "7xl"]}
          lineHeight={"95%"}
          letterSpacing={{ sm: "-1.2px", md: "-1.8px" }}
          position="relative"
          zIndex={1}
        >
          Muhammad Fawwaz
        </Heading>
      </SlideFade>

      <SlideFade
        direction="top"
        in={true}
        transition={{ enter: { duration: 0.4, delay: 0.8 } }}
      >
        <Heading
          color="white"
          fontSize="2xl"
          fontWeight="semibold"
          whiteSpace="pre-wrap"
          letterSpacing="-1.6px"
        >
          <Box color="white" as="span">
            <Box mr={1} as="span">🍔</Box> Full Stack Engineer.
          </Box>{" "}
          <Box color="gray" as="span" display="inline-block">
            <Box display={["block", "flex"]}>
              React <Icon as={SiReact} /> / Node <Icon as={SiNodeDotJs} /> / TypeScript <Icon as={SiTypescript} /> / Blitz.js <Icon as={BlitzLogo} />
            </Box>
          </Box>
        </Heading>
      </SlideFade>

      <SlideFade
        direction="top"
        in={true}
        transition={{ enter: { duration: 0.4, delay: 0.9 } }}
      >
        <Text display="inline-block" verticalAlign="middle" color="white">
          Budding maker, author, founder, OSS contributor, full stack engineer with experience in tech and finance
        </Text>
      </SlideFade>
      <Box w="full">
        <SlideFade
          direction="top"
          in={true}
          transition={{ enter: { duration: 0.4, delay: 1.0 } }}
        >
          <Stack isInline spacing={4} justify={["center", "start"]}>
            <Link href="https://github.com/abuuzayr" isExternal>
              <Button
                leftIcon={<Box fontSize={["2xl", "lg"]}><FaGithub color="#F3BE00" /></Box>}
                position="static"
                size={buttonSize}
                color="white"
                variant={buttonVariant}
              >
                <Text display={["none", "block"]}>GitHub</Text>
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/muhammadfawwaz" isExternal>
              <Button
                leftIcon={<Box fontSize={["2xl", "lg"]}><FaLinkedin color="#F3BE00" /></Box>}
                position="static"
                size={buttonSize}
                color="white"
                variant={buttonVariant}
              >
                <Text display={["none", "block"]}>LinkedIn</Text>
              </Button>
            </Link>
            <Link href="mailto:abu.uzayr@builtforfifty.com" isExternal>
              <Button
                leftIcon={<Box fontSize={["2xl", "lg"]}><FaEnvelope fill="#F3BE00" /></Box>}
                transition="0.3s"
                position="static"
                size={buttonSize}
                color="white"
                variant={buttonVariant}
              >
                <Text display={["none", "block"]}>Email</Text>
              </Button>
            </Link>
          </Stack>
        </SlideFade>
      </Box>
      <Icon as={FaArrowDown} position="fixed" color="yellow.100" w={10} h={10} sx={{
        bottom: 10,
        left: "50%",
        marginLeft: -20,
        opacity: (0.1 - opacityToRemove / 2000)
      }} className="bounce" />
    </Stack>
  )
}
