


import ToasterContext from "../context/TosterContext"
import NavigationBar from "./components/Navbar/page"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <ToasterContext/>
     <NavigationBar/>
        {children}
  
        </body>

    </html>
  )
}