import React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import customTheme from "../styles/theme"
import { Global, css } from "@emotion/react"
const GlobalStyle = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          @-moz-keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              -moz-transform: translateY(0);
              transform: translateY(0);
            }
            40% {
              -moz-transform: translateY(-30px);
              transform: translateY(-30px);
            }
            60% {
              -moz-transform: translateY(-15px);
              transform: translateY(-15px);
            }
          }
          @-webkit-keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              -webkit-transform: translateY(0);
              transform: translateY(0);
            }
            40% {
              -webkit-transform: translateY(-30px);
              transform: translateY(-30px);
            }
            60% {
              -webkit-transform: translateY(-15px);
              transform: translateY(-15px);
            }
          }
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              -moz-transform: translateY(0);
              -ms-transform: translateY(0);
              -webkit-transform: translateY(0);
              transform: translateY(0);
            }
            40% {
              -moz-transform: translateY(-30px);
              -ms-transform: translateY(-30px);
              -webkit-transform: translateY(-30px);
              transform: translateY(-30px);
            }
            60% {
              -moz-transform: translateY(-15px);
              -ms-transform: translateY(-15px);
              -webkit-transform: translateY(-15px);
              transform: translateY(-15px);
            }
          }
          .bounce {
            -moz-animation: bounce 2s infinite;
            -webkit-animation: bounce 2s infinite;
            animation: bounce 2s infinite;
          }

        `}
      />
      {children}
    </>
  )
}

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <GlobalStyle>
        <Component {...pageProps} />
      </GlobalStyle>
    </ChakraProvider>
  )
}
export default MyApp
