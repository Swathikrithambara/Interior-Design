// import { motion } from "framer-motion";
import ServiceCard from "../Components/ServiceCard";

import About from "./About";
import Contactus from "./Contactus";
import Hero from "./Hero";
import Blog from "./Blog";
import Experiencestats from "./Experiencestats";

export default function Home() {
  return (
    <main className="pt-24 overflow-hidden">
      
      {/* HERO SECTION */}
     
<Hero/>
     {/* WHAT WE PROVIDE */}

    
   
    
 
<About/>
<Experiencestats/>
<Blog/>
<Contactus/>
    </main>
  );
}
