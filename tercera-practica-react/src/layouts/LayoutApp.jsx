import { Footer } from "../components/footer/Footer"
import { Header } from "../components/header/Header"

function LayoutApp( {children} ) {
    return (
     <>
     <Header /> 
     <main>
        {children}
     </main>
     <Footer />
     </>
    )
   }
   
   export default LayoutApp