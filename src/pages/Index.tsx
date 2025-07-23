import { useState } from "react";
import Header from "@/components/Header";
import InicioTab from "@/components/InicioTab";
import FibraTab from "@/components/FibraTab";
import TerraplagemTab from "@/components/TerraplagemTab";

const Index = () => {
  const [activeTab, setActiveTab] = useState("inicio");

  const renderContent = () => {
    switch (activeTab) {
      case "inicio":
        return <InicioTab />;
      case "fibra":
        return <FibraTab />;
      case "terraplenagem":
        return <TerraplagemTab />;
      default:
        return <InicioTab />;
    }
  };

  return (
    <div className="min-h-screen bg-background font-arimo">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <main>
        {renderContent()}
      </main>
    </div>
  );
};

export default Index;
