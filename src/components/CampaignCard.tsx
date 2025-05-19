
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Campaign } from "../store/gameSlice";

interface CampaignCardProps {
  campaign: Campaign;
  onClick: () => void;
}

const CampaignCard = ({ campaign, onClick }: CampaignCardProps) => {
  const themeClasses = {
    "fantasy": "border-amber-600 bg-gradient-to-b from-fantasy-dark to-black",
    "sci-fi": "border-blue-500 bg-gradient-to-b from-blue-900 to-black",
    "horror": "border-red-800 bg-gradient-to-b from-gray-900 to-black",
    "western": "border-amber-700 bg-gradient-to-b from-amber-900 to-gray-900",
    "mystery": "border-purple-700 bg-gradient-to-b from-purple-900 to-black",
  };
  
  // Default to fantasy theme if theme isn't in our mapping
  const themeClass = themeClasses[campaign.theme as keyof typeof themeClasses] || themeClasses.fantasy;
  
  return (
    <Card 
      className={`${themeClass} hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-105 cursor-pointer border-2`}
      onClick={onClick}
    >
      <CardHeader>
        <CardTitle className="text-primary font-medieval">{campaign.title}</CardTitle>
        <CardDescription className="text-gray-300 font-scribe">
          {campaign.theme.charAt(0).toUpperCase() + campaign.theme.slice(1)} Adventure
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-200 font-scribe">{campaign.description}</p>
      </CardContent>
      <CardFooter>
        <Button 
          variant="default" 
          className="w-full bg-fantasy-purple hover:bg-fantasy-purple/80 text-white"
        >
          Play Campaign
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CampaignCard;
