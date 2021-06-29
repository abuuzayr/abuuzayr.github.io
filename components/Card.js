import React from "react"
import {
  Text,
  Stack,
  Divider,
  Link,
  Icon,
  ScaleFade,
  Center,
  Tooltip
} from "@chakra-ui/react"
import {
  FaJs,
  FaCode,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa"
import {
  SiTypescript,
  SiNextDotJs,
  SiReact,
  SiPostgresql,
  SiNodeDotJs,
  SiGatsby,
  SiSpotify,
  SiItunes,
  SiOvercast
} from "react-icons/si"
import {
  IoLogoPwa
} from "react-icons/io5"

import Image from "./ChakraNextImage"

export default function Cards({
  img,
  title,
  description,
  github,
  url,
  tags,
}) {
  const getTag = (tag) => {
    let values = {}
    switch (tag) {
      case "react":
        values["color"] = "#61dbfb"
        values["icon"] = SiReact
        values["label"] = "React"
        break
      case "ts":
        values["color"] = "#007ACC"
        values["icon"] = SiTypescript
        values["label"] = "TypeScript"
        break
      case "postgresql":
        values["color"] = "#0064a5"
        values["icon"] = SiPostgresql
        values["label"] = "PostgreSQL"
        break
      case "js":
        values["color"] = "#F0DB4F"
        values["icon"] = FaJs
        values["label"] = "JavaScript"
        break
      case "gatsby":
        values["color"] = "#362066"
        values["icon"] = SiGatsby
        values["label"] = "Gatsby"
        break
      case "spotify":
        values["color"] = "#1DB954"
        values["icon"] = SiSpotify
        values["label"] = "Spotify"
        break
      case "itunes":
        values["color"] = "#EA4CC0"
        values["icon"] = SiItunes
        values["label"] = "iTunes"
        break
      case "next":
        values["color"] = "white"
        values["icon"] = SiNextDotJs
        values["label"] = "Next.js"
        break
      case "node":
        values["color"] = "#3C873A"
        values["icon"] = SiNodeDotJs
        values["label"] = "Node.js"
        break
      case "pwa":
        values["color"] = "#6500C3"
        values["icon"] = IoLogoPwa
        values["label"] = "Progressive Web App"
        break
      case "overcast":
        values["color"] = "#FE7200"
        values["icon"] = SiOvercast
        values["label"] = "Overcast"
        break
      default:
        values["color"] = "gray"
        values["icon"] = FaCode
        values["label"] = ""
    }
    return values
  }

  const Tags = tags.map((item) => {
    const tag = getTag(item)
    return <Tooltip label={tag.label} fontSize="md" key={tag.label}>
      <span>
        <Icon as={tag.icon} color={tag.color} fontSize={30} />
      </span>
    </Tooltip>
  })

  return (
    <Stack
      bg="secondary"
      borderRadius="10px"
      minH="320px"
      maxH="500px"
      border="1px"
      borderColor={{ base: "#333", md: "borderColor" }}
    >
      <ScaleFade in={true} transition={{ duration: 1 }}>
        <Center>
          <Image
            width={1250}
            height={600}
            w="auto"
            h="auto"
            src={img}
            transition="0.3s"
            borderRadius="10px 10px 0px 0px"
            alt="project image"
          ></Image>
        </Center>
        <Stack px={4} py={2}>
          <Stack isInline justifyContent="space-between" alignItems="center">
            <Text as="span" fontSize="2xl" color="white" fontWeight="semibold" position="relative" sx={{ zIndex: 1 }} _after={{
              content: "''",
              width: "full",
              height: "20%",
              position: "absolute",
              bottom: 1,
              left: 0,
              bg: "buff",
              zIndex: -1
            }}>
              {title}
            </Text>
            <Stack
              isInline
              justifyContent="flex-end"
              alignItems="center"
              spacing={4}
            >
              {github && (
                <Link
                  href={github}
                  color="white"
                  isExternal
                >
                  <FaGithub size={23} />
                </Link>
              )}
              {url && (
                <Link
                  href={url}
                  color="white"
                  isExternal
                >
                  <FaExternalLinkAlt size={20} />
                </Link>
              )}
            </Stack>
          </Stack>
          <Stack isInline>{Tags}</Stack>
          <Divider />
          <Text color="white" fontSize={["sm", "md"]}>
            {description}
          </Text>
        </Stack>
      </ScaleFade>
    </Stack>
  )
}
