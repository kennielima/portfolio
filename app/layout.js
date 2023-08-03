import Header from '@/components/Header'
import './globals.css'
import { ContextProvider } from '@/components/ContextProvider'
import StyledComponentsRegistry from './registry'
import Head from './head'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head />
      <ContextProvider>
      <body>
        <Header />
        <StyledComponentsRegistry>
          {children}
          </StyledComponentsRegistry>
      </body>
      </ContextProvider>

    </html>
  )
}
