import Headers from '@/componets/Headers'
import './globals.css'
import Providers from '@/app/Providers'
import Navbar from '@/componets/Navbar'

export const metadata = {
  title: 'IMDB Clone App',
  description: 'MY Imdb clone app',
}

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
     
      <body>
    <Providers >

      < Headers />
      <Navbar />
        <main > {children} </main>
    </Providers>

      </body>
    </html>
  )
}
