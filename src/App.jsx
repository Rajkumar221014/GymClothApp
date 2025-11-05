import Best from "./pages/Best"
import Category from "./pages/Category"
import Footer from "./pages/Footer"
import Hero from "./pages/Hero"
import Navbar from "./pages/Navbar"
import Policy from "./pages/Policy"
import Recommend from "./pages/Recommend"
import Sale from "./pages/Sale"


function App() {
  

  return (
    <div className="bg-[#121927] w-full h-screen">
<Navbar/>
<Hero/>
<Recommend/>
<Category/>
<Best/>
<Sale/>
<Policy/>
<Footer/>
    </div>
    
  )
}

export default App
