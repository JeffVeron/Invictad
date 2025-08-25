/* import logo from './logo.svg'; */
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
 import Level_1 from './Level_1';
import Level_2 from './Level_2';
import Level_3 from './Level_3';
import Categories from './Categories';
import GeneralScience from './GeneralScience';
import SpaceAndAstrnomy from './SpaceAndAstronomy';
import Biology from './Biology';
import PhysicsAndChemistry from './PhysicsAndChemistry';
import EarthAndEnvironmentalScience from './EarthAndEnvironmentalScience';
import LabBasics from './LabBasics';  
import AtomicAlley from './AtomicAlley';
import CosmicCuriosities from './CosmicCuriosities';
import EarthExplorers from './EarthExplorers';
import NewtonsPlayground from './NewtonsPlayground';
import BiologyBasics from './BiologyBasics';
import EnvironmentalExplorers from './EnvironmentalExplorers'; 
import EcosystemExplorers from './EcosystemExplorers';
import TheSun from './TheSun'
import ThePlanets from './ThePlanets'
import TheStars from './TheStars'
import TheGalaxies from './TheGalaxies'
import InnerPlanets from './InnerPlanets'
import OuterPlanets from './OuterPlanets'
import AsteroidBelt from './AsteroidBelt'
import KuiperBelt from './KuiperBelt'
import OortCloud from './OortCloud'
import MilkyWay from './MilkyWay'
import MeteorsAndMeteorites from './MeteorsAndMeteorites'
import Comets from './Comets'
import BigBangTheory from './BigBangTheory'
import SolarSystem from './SolarSystem'
import TheUniverse from './TheUniverse'
import LivingCells from './LivingCells';
import Digestion from './Digestion';
import Housefly from './Housefly';
import AnimalProduction from './AnimalProduction';
import FarmingSystems from './FarmingSystems';
import ProkaryoticCells from './ProkaryoticCells';
import CarbonCycle from './CarbonCycle';
import Mosquito from './Mosquito';
import AnimalFeed from './AnimalFeed'; 
import Dentition from './Dentition';
import Ecosystem from './Ecosystem'; 
import SpecializedCells from './SpecializedCells';
import Grasshopper from './Grasshopper';




//import TheoryOfEverything from './TheoryOfEverything';







function App() {

 
  
  return (
    <div className="App">
         


     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/level_1" element={<Level_1 />} />
        <Route path="/level_2" element={<Level_2 />} />
        <Route path="/level_3" element={<Level_3 />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/generalScience" element={<GeneralScience/>} />
        <Route path="/spaceAndAstronomy" element={<SpaceAndAstrnomy/>} />
        <Route path="/biology" element={<Biology/>} />
        <Route path="/physicsAndChemistry" element={<PhysicsAndChemistry/>} />
        <Route path="/earthAndEnvironmentalScience" element={<EarthAndEnvironmentalScience/>} />
        <Route path="/labBasics" element={<LabBasics/>} />
         <Route path="/atomicAlley" element={<AtomicAlley/>} />
         <Route path= "/cosmicCuriosities" element={<CosmicCuriosities/>} />
         <Route path="/earthExplorers" element={<EarthExplorers/>} />
         <Route path="/newtonsPlayground" element={<NewtonsPlayground/>} />
         <Route path="/biologyBasics" element={<BiologyBasics/>} />
         <Route path="/environmentalExplorers" element={<EnvironmentalExplorers/>} />
         <Route path="/ecosystemExplorers" element={<EcosystemExplorers/>} />
          <Route path="/theSun" element={<TheSun/>} />
          <Route path="/thePlanets" element={<ThePlanets/>} />
          <Route path="/theStars " element={<TheStars/>} />
          <Route path="/theGalaxies" element={< TheGalaxies/>} />
          <Route path="/theInnerPlanets" element={<InnerPlanets/>} />
          <Route path="/theOuterPlanets" element={<OuterPlanets/>} />
          <Route path="/theAsteroidBelt" element={<AsteroidBelt/>} />
          <Route path="/theKuiperBelt" element={<KuiperBelt/>} />
          <Route path="/theOortCloud" element={<OortCloud/>} />
          <Route path="/milkyWayGalaxy" element={<MilkyWay/>} />
          <Route path="/meteorsAndMeteorites" element={<MeteorsAndMeteorites/>} />
          <Route path="/comets" element={<Comets/>} />
          <Route path="/bigBangTheory " element={< BigBangTheory/>} />
          <Route path="/solarSystem" element={<SolarSystem/>}/>
          <Route path="/theUniverse" element={<TheUniverse/>}/>
          <Route path="/plantAndAnimalCells" element={< LivingCells />}/>
           <Route path="/digestion" element={<Digestion /> }/>
          <Route path="/housefly " element={<Housefly />}/>
          <Route path="/animalProduction" element={<AnimalProduction />}/>
          <Route path="/farmingSystems" element={<FarmingSystems />}/>
          <Route path="/prokaryoticCells" element={<ProkaryoticCells />}/>
          <Route path="/carbonCycle" element={<CarbonCycle />}/>
          <Route path="/mosquito" element={<Mosquito />}/>
          <Route path="/animalFeed" element={<AnimalFeed />}/>
          <Route path="/dentition" element={<Dentition />}/>
          <Route path="/ecosystem" element={<Ecosystem />}/>
          <Route path="/specializedCells" element={<SpecializedCells />}/>
          <Route path="/grasshopper" element={<Grasshopper />}/>        



        {/* <Route path="/theoryOfEverything" element={<TheoryOfEverything/>} /> */}   
      </Routes>
       
    </div>
  );
}

export default App;

 

 
  


   