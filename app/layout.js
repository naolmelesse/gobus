'use client';
import './globals.css';
import { Inter } from 'next/font/google';
import Nav from './components/nav';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Provider, createClient } from "urql";
import { cacheExchange, fetchExchange } from '@urql/core'
import Footer from './components/footer';
import { UserProvider } from '@auth0/nextjs-auth0/client';

const inter = Inter({ subsets: ['latin'] })


const client = createClient({ url: "http://localhost:1337/graphql",
exchanges: [cacheExchange, fetchExchange],})

export default function RootLayout({ children }) {
  return (
    <UserProvider>
      <Provider value={client}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <html lang="en">
            <body className={inter.className}>
              <Nav/>
              {children}
              <Footer/>
            </body>
          </html>
        </LocalizationProvider>
      </Provider>
    </UserProvider>
  )
}
