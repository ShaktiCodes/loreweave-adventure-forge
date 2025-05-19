
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Character } from "../store/gameSlice";
import { useGame } from "../hooks/useGame";

interface CharacterSheetProps {
  character: Character;
}

const CharacterSheet = ({ character }: CharacterSheetProps) => {
  const { updatePlayerCharacter } = useGame();
  const [editMode, setEditMode] = useState(false);
  const [editedCharacter, setEditedCharacter] = useState<Character>({ ...character });
  
  const handleChange = (field: keyof Character, value: any) => {
    setEditedCharacter(prev => ({
      ...prev,
      [field]: value
    }));
  };
  
  const handleStatChange = (stat: keyof Character['stats'], value: number) => {
    setEditedCharacter(prev => ({
      ...prev,
      stats: {
        ...prev.stats,
        [stat]: value
      }
    }));
  };
  
  const handleSave = () => {
    updatePlayerCharacter(editedCharacter);
    setEditMode(false);
  };
  
  return (
    <Card className="bg-parchment border-2 border-fantasy-gold shadow-lg max-w-md mx-auto">
      <CardHeader className="border-b-2 border-fantasy-gold/70">
        <CardTitle className="flex justify-between items-center">
          <span className="font-medieval text-2xl text-fantasy-dark">Character Sheet</span>
          <Button 
            variant="outline" 
            className="border-fantasy-gold text-fantasy-dark hover:bg-fantasy-gold/20" 
            onClick={() => {
              if (editMode) {
                handleSave();
              } else {
                setEditMode(true);
              }
            }}
          >
            {editMode ? "Save" : "Edit"}
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-4 space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="font-scribe text-fantasy-dark">Name</Label>
          {editMode ? (
            <Input 
              id="name" 
              value={editedCharacter.name} 
              onChange={(e) => handleChange('name', e.target.value)}
              className="bg-parchment-light border-fantasy-gold/70"
            />
          ) : (
            <p className="font-fantasy text-lg">{character.name}</p>
          )}
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="class" className="font-scribe text-fantasy-dark">Class</Label>
            {editMode ? (
              <Input 
                id="class" 
                value={editedCharacter.class} 
                onChange={(e) => handleChange('class', e.target.value)}
                className="bg-parchment-light border-fantasy-gold/70"
              />
            ) : (
              <p className="font-fantasy">{character.class}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="race" className="font-scribe text-fantasy-dark">Race</Label>
            {editMode ? (
              <Input 
                id="race" 
                value={editedCharacter.race} 
                onChange={(e) => handleChange('race', e.target.value)}
                className="bg-parchment-light border-fantasy-gold/70"
              />
            ) : (
              <p className="font-fantasy">{character.race}</p>
            )}
          </div>
        </div>
        
        <div className="space-y-2">
          <Label className="font-medieval text-xl text-fantasy-dark">Stats</Label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Object.entries(character.stats).map(([stat, value]) => (
              <div key={stat} className="text-center border border-fantasy-gold/50 p-2 rounded-md">
                <p className="font-scribe text-sm capitalize">{stat}</p>
                {editMode ? (
                  <Input 
                    type="number" 
                    value={editedCharacter.stats[stat as keyof Character['stats']]} 
                    onChange={(e) => handleStatChange(
                      stat as keyof Character['stats'],
                      parseInt(e.target.value)
                    )}
                    className="bg-parchment-light border-fantasy-gold/70 text-center"
                    min={1}
                    max={20}
                  />
                ) : (
                  <p className="font-fantasy text-lg">{value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <Separator className="bg-fantasy-gold/50" />
        
        <div className="space-y-2">
          <Label className="font-medieval text-xl text-fantasy-dark">Inventory</Label>
          <div className="border border-fantasy-gold/50 p-2 min-h-[100px] rounded-md bg-parchment-light">
            <ul className="list-disc list-inside font-scribe">
              {character.inventory.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <div>
            <Label className="font-scribe text-sm text-fantasy-dark">Health</Label>
            <p className="font-fantasy">
              {character.health} / {character.maxHealth}
            </p>
          </div>
          
          <div>
            <Label className="font-scribe text-sm text-fantasy-dark">Level</Label>
            <p className="font-fantasy">{character.level}</p>
          </div>
          
          <div>
            <Label className="font-scribe text-sm text-fantasy-dark">Experience</Label>
            <p className="font-fantasy">{character.experience} XP</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CharacterSheet;
