import Image from "next/image";
import HeroSection from "./components/HeroSection";
import RoomDetails from "./components/RoomDetails";
import KeyFeatures from "./components/KeyFeatures";
import LocationAndAddress from "./components/LocationAndAddress";
import YoutubeUrl from "./components/YoutubeUrl";
import { PropertyRent } from "./components/PropertyRent";
import { PropertyDesc } from "./components/PropertyDesc";
import Preferences from "./components/Preferences";
import Relation from "./components/Relation";
import { Package } from "./components/Package";
import Footer from "./components/Footer";
import CalenderContent from "./components/CalenderContent";

export default function Home() {
  return (
    <>
      <div className="container mx-auto ">
        <HeroSection />

        {/* Room Details */}
        <RoomDetails />

        {/* Key Features */}
        <KeyFeatures />
        {/* location and address */}
        <LocationAndAddress />
        {/* Youtube url */}
        <YoutubeUrl />

        {/* property Rent */}
        <PropertyRent />
        <PropertyDesc />

        {/* Preferences */}
        <Preferences />

        <Relation />

        <CalenderContent />
        {/* package */}

        <Package />

        {/* footer */}
      </div>

      <Footer />
    </>
  );
}
