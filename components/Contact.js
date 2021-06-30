import React from "react"
import { Link, Button, Heading, Stack, Text, useBreakpointValue, Box } from "@chakra-ui/react"
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa"
import SlideUpWhenVisible from "../hook/SlideUpWhenVisible"

export default function ContactMe() {
  const buttonSize = useBreakpointValue([null, "md", "sm"])
  return (
    <>
      <Stack
        spacing={10}
        h="70vh"
        w="100%"
        alignItems="center"
        justifyContent="center"
      >
        <SlideUpWhenVisible>
          <Heading fontSize={{ base: "4xl", md: "5xl" }} textAlign="center">
            Let&apos;s talk
          </Heading>
        </SlideUpWhenVisible>

        <SlideUpWhenVisible>
          <Text fontSize="md" color="white" textAlign="center">
            I&apos;m currently looking out for a remote work opportunity.
            <Text as="span" display={["none", "inline"]}><br /></Text> Or if you have cool ideas in mind, let&apos;s get in touch!
          </Text>
        </SlideUpWhenVisible>

        <SlideUpWhenVisible>

          <Stack isInline spacing={4} justify={["center", "start"]}>
            <Link href="https://github.com/abuuzayr" isExternal>
              <Button
                leftIcon={<Box fontSize={["2xl", "lg"]}><FaGithub color="#F3BE00" /></Box>}
                position="static"
                size={buttonSize}
                color="white"
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
              >
                <Text display={["none", "block"]}>Email</Text>
              </Button>
            </Link>
          </Stack>
        </SlideUpWhenVisible>
      </Stack>
    </>
  )
}
