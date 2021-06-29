import React from "react"
import {
  Stack,
  Heading,
  Text,
  SimpleGrid,
} from "@chakra-ui/layout"
import Cards from "./Card"
import SlideUpWhenVisible from "../hook/SlideUpWhenVisible"

const projects = [
  {
    img: "https://media.builtforfifty.workers.dev/hyperlocal.png",
    title: "hyperlocal.sg",
    description: "Awesome apps, services, products and communities made by Singaporeans",
    github: "https://github.com/abuuzayr/hyperlocal",
    url: "https://hyperlocal.sg",
    tags: ["ts", "postgresql", "react", "next", "node", "pwa"],
  }, {
    img: "https://media.builtforfifty.workers.dev/techjobs.png",
    title: "techjobs.sg",
    description: "Search for your dream tech job on techjobs.sg, sourced from the top local job listing platforms",
    github: "https://github.com/abuuzayr/techjobs",
    url: "https://techjobs.sg",
    tags: ["ts", "postgresql", "react", "next", "node"],
  }, {
    img: "https://media.builtforfifty.workers.dev/jstalks.png",
    title: "JavaScript Talks",
    description: "JavaScript Talks / Conferences as Podcasts",
    github: "https://github.com/abuuzayr/js-talks",
    url: "https://js-talks.netlify.app",
    tags: ["js", "gatsby", "spotify", "itunes", "overcast"],
  }
]

export default function Projects() {

  return (
    <Stack spacing={8} w="full">
      <SlideUpWhenVisible threshold={0.1}>
        <Stack spacing={1}>
          <Stack
            isInline
            alignItems="center"
            justifyContent="space-between"
          >
            <Heading
              fontSize={{ base: "xl", md: "2xl" }}
              color="white"
            >
              Portfolio
              </Heading>
          </Stack>
          <Text fontSize={{ base: "md", md: "xl" }} color="white">
            Stuff that I built
            </Text>
        </Stack>
      </SlideUpWhenVisible>
      <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={16}>
        {projects.map(project => (
          <SlideUpWhenVisible key={project.title}>
            <Cards
              img={project.img}
              title={project.title}
              description={project.description}
              github={project.github}
              url={project.url}
              tags={project.tags}
            />
          </SlideUpWhenVisible>
        ))}
      </SimpleGrid>
    </Stack>
  )
}
