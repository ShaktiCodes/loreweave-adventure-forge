
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GamePlay from "../components/GamePlay";
import CharacterSheet from "../components/CharacterSheet";
import { useGame } from "../hooks/useGame";

const GamePage = () => {
  const { activeCampaign } = useGame();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("story");
  
  if (!activeCampaign) {
    return (
      <div className="container mx-auto py-16 px-4 text-center">
        <h2 className="text-2xl font-medieval text-primary mb-6">No Active Campaign</h2>
        <p className="text-gray-400 mb-8">Please select or create a campaign to start playing.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => navigate("/campaigns")}
            variant="default"
          >
            View Campaigns
          </Button>
          <Button 
            onClick={() => navigate("/create")}
            variant="outline"
          >
            Create New Campaign
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
        <h1 className="text-3xl font-medieval text-primary">{activeCampaign.title}</h1>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => navigate("/campaigns")}>
            Change Campaign
          </Button>
        </div>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="w-full max-w-md mx-auto mb-6 bg-black/30">
          <TabsTrigger value="story" className="flex-1">Story</TabsTrigger>
          <TabsTrigger value="character" className="flex-1">Character</TabsTrigger>
        </TabsList>
        
        <TabsContent value="story" className="mt-0">
          <GamePlay />
        </TabsContent>
        
        <TabsContent value="character" className="mt-0">
          {activeCampaign.characters.length > 0 ? (
            <CharacterSheet character={activeCampaign.characters[0]} />
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-400">No characters available</p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default GamePage;
