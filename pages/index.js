import { Stack, Box } from '@chakra-ui/react'
import Container from '../components/Container'
import Introduction from '../components/Introduction'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import AppHead from '../components/AppHead'

export default function Index() {
  return (
    <Container>
      <AppHead />
      <Stack
        as="main"
        spacing="180px"
        justifyContent="center"
        alignItems="flex-start"
        px={{ base: '5vw', md: '10vw' }}
        mt={{ base: '15vh', md: '22.5vh' }}
      >
        <Introduction />
        <Box id="projects" sx={{ marginTop: -140 }} />
        <Projects />
        <Contact />
      </Stack>
    </Container>
  )
}