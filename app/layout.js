import Header from '@/components/Header'
import './globals.css'
import { ContextProvider } from '@/components/ContextProvider'
import StyledComponentsRegistry from './registry'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head />
  <ContextProvider>
      <body>
        <Header />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
  </ContextProvider>

    </html>
  )
}
