import Header from '@/components/Header'
import './globals.css'
import { ContextProvider } from '@/components/ContextProvider'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
  <ContextProvider>
      <body>
        <Header />
        {children}
      </body>
  </ContextProvider>

    </html>
  )
}
