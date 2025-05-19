
import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useGame } from "../hooks/useGame";
import TypewriterText from "./TypewriterText";

const GamePlay = () => {
  const { activeCampaign, makeChoice } = useGame();
  const [showChoices, setShowChoices] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [typingKey, setTypingKey] = useState(0);
  
  const currentNode = activeCampaign?.currentStoryNode;
  
  useEffect(() => {
    // Reset state when story node changes
    setShowChoices(false);
    setAnimationComplete(false);
    setTypingKey(prev => prev + 1);
  }, [currentNode?.id]);
  
  const handleTextComplete = () => {
    setAnimationComplete(true);
    setTimeout(() => {
      setShowChoices(true);
    }, 500);
  };
  
  const handleChoice = (nextNodeId: string) => {
    makeChoice(nextNodeId);
  };
  
  // Skip animation if user clicks on the text
  const handleTextClick = () => {
    if (!animationComplete) {
      setAnimationComplete(true);
      setShowChoices(true);
    }
  };
  
  if (!activeCampaign || !currentNode) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-white text-xl">No active campaign selected</p>
      </div>
    );
  }
  
  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <Card className="parchment scroll-paper p-4 shadow-lg border-2 border-fantasy-gold bg-parchment-dark">
        <CardContent className="pt-4">
          <div 
            className="min-h-[200px] font-scribe text-lg space-y-4 cursor-pointer text-fantasy-dark"
            onClick={handleTextClick}
          >
            {!animationComplete ? (
              <TypewriterText 
                key={typingKey} 
                text={currentNode.content} 
                speed={30}
                className="font-scribe text-lg leading-relaxed text-black"
                onComplete={handleTextComplete}
              />
            ) : (
              <p className="font-scribe text-lg leading-relaxed text-black">{currentNode.content}</p>
            )}
          </div>
          
          {showChoices && currentNode.choices.length > 0 && (
            <>
              <Separator className="my-4 bg-fantasy-gold" />
              <div className="space-y-3">
                {currentNode.choices.map((choice) => (
                  <div 
                    key={choice.id} 
                    className="animate-fadeIn" 
                    style={{ animationDelay: `${currentNode.choices.indexOf(choice) * 150}ms` }}
                  >
                    <Button 
                      variant="outline"
                      className="w-full text-left justify-start border-fantasy-gold bg-fantasy-gold/10 hover:bg-fantasy-gold/30 text-black font-fantasy"
                      onClick={() => handleChoice(choice.nextNodeId)}
                    >
                      {choice.text}
                    </Button>
                  </div>
                ))}
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default GamePlay;
