import React from "react";
import Navbar from "./component/Navbar";
import { Routes, Route } from "react-router-dom";
import ScrollToHash from "./component/ScrollToHash";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import PlasticPallets from "./pages/PlasticPallets";
import CableTrays from "./pages/CableTrays";
import WarehouseRacks from "./pages/WarehouseRacks";
import PlasticCrates from "./pages/PlasticCrates";
import IndustrialStorageCrates from "./pages/IndustrialStorageCrates";
import IndustrialPallets from "./pages/IndustrialPallets";
import StorageRacks from "./pages/StorageRacks";
import HeavyDutyRacks from "./pages/HeavyDutyRacks";
import VegetableCrates from "./pages/VegetableCrates";
import CableTrayFittings from "./pages/CableTrayFittings";
import PlasticDustbins from "./pages/PlasticDustbins";
import WorkPlatforms from "./pages/WorkPlatforms";
import WoodenPallets from "./pages/WoodenPallets";
import PalletRacks from "./pages/PalletRacks";
import StrutChannels from "./pages/StrutChannels";
import PrefabricatedSteelBuildings from "./pages/PrefabricatedSteelBuildings";
import GIThreadedRods from "./pages/GIThreadedRods";
import RecycledPlasticShutteringPallets from "./pages/RecycledPlasticShutteringPallets";
import CableDucts from "./pages/CableDucts";
import WorkerLockers from "./pages/WorkerLockers";
import ShutteringPlywood from "./pages/ShutteringPlywood";
import UsedPlasticPallets from "./pages/UsedPlasticPallets";
import ExportPallets from "./pages/ExportPallets";
import ShedStructures from "./pages/ShedStructures";
import HandPalletTrucks from "./pages/HandPalletTrucks";
import Raceways from "./pages/Raceways";
import JunctionBoxes from "./pages/JunctionBoxes";
import NewItems from "./pages/NewItems";



import Footer from "./component/footer";

const App = () => {
  return (
    <>
      <ScrollToHash />

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/plastic-pallets" element={<PlasticPallets />} />
        <Route path="/cable-trays" element={<CableTrays />} />
        <Route path="/warehouse-racks" element={<WarehouseRacks />} />
        <Route path="/plastic-crates" element={<PlasticCrates />} />
        <Route path="/industrial-storage-crates" element={<IndustrialStorageCrates />} />
        <Route path="/industrial-pallets" element={<IndustrialPallets />} />
        <Route path="/storage-racks" element={<StorageRacks />} />
        <Route path="/heavy-duty-racks" element={<HeavyDutyRacks />} />
        <Route path="/vegetable-crates" element={<VegetableCrates />} />
        <Route path="/cable-tray-fittings" element={<CableTrayFittings />} />
        <Route path="/plastic-dustbins" element={<PlasticDustbins />} />
        <Route path="/work-platforms" element={<WorkPlatforms />} />
        <Route path="/wooden-pallets" element={<WoodenPallets />} />
        <Route path="/pallet-racks" element={<PalletRacks />} />
        <Route path="/strut-channels" element={<StrutChannels />} />
        <Route path="/prefabricated-steel-buildings" element={<PrefabricatedSteelBuildings />} />
        <Route path="/gi-threaded-rods" element={<GIThreadedRods />} />
        <Route path="/recycled-plastic-shuttering-pallets" element={<RecycledPlasticShutteringPallets />} />
        <Route path="/cable-ducts" element={<CableDucts />} />
        <Route path="/worker-lockers" element={<WorkerLockers />} />
        <Route path="/shuttering-plywood" element={<ShutteringPlywood />} />
        <Route path="/used-plastic-pallets" element={<UsedPlasticPallets />} />
        <Route path="/export-pallets" element={<ExportPallets />} />
        <Route path="/shed-structures" element={<ShedStructures />} />
        <Route path="/hand-pallet-trucks" element={<HandPalletTrucks />} />
        <Route path="/raceways" element={<Raceways />} />
        <Route path="/junction-boxes" element={<JunctionBoxes />} />
        <Route path="/new-items" element={<NewItems />} />

      </Routes>

      <Footer />
    </>
  );
};

export default App;
