
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGame } from "../hooks/useGame";
import CampaignCard from "../components/CampaignCard";

const CampaignsPage = () => {
  const { campaigns, loadCampaign } = useGame();
  const navigate = useNavigate();
  
  const handleSelectCampaign = (campaignId: string) => {
    loadCampaign(campaignId);
    navigate("/play");
  };
  
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-medieval text-primary mb-8 text-center decorated-header">
        Your Campaigns
      </h1>
      
      {campaigns.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaigns.map(campaign => (
            <CampaignCard 
              key={campaign.id} 
              campaign={campaign} 
              onClick={() => handleSelectCampaign(campaign.id)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-xl text-gray-400 mb-6">You haven't created any campaigns yet</p>
          <button 
            onClick={() => navigate("/create")}
            className="px-6 py-3 bg-fantasy-purple hover:bg-fantasy-purple/80 rounded-lg text-white"
          >
            Create Your First Campaign
          </button>
        </div>
      )}
    </div>
  );
};

export default CampaignsPage;
