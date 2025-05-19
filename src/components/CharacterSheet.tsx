
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
    <Card className="bg-parchment-dark border-2 border-fantasy-gold shadow-lg max-w-md mx-auto">
      <CardHeader className="border-b-2 border-fantasy-gold">
        <CardTitle className="flex justify-between items-center">
          <span className="font-medieval text-2xl text-black">Character Sheet</span>
          <Button 
            variant="outline" 
            className="border-fantasy-gold bg-fantasy-gold/10 text-black hover:bg-fantasy-gold/30" 
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
          <Label htmlFor="name" className="font-scribe text-black font-bold">Name</Label>
          {editMode ? (
            <Input 
              id="name" 
              value={editedCharacter.name} 
              onChange={(e) => handleChange('name', e.target.value)}
              className="bg-parchment-light border-fantasy-gold/70 text-black"
            />
          ) : (
            <p className="font-fantasy text-lg text-black">{character.name}</p>
          )}
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="class" className="font-scribe text-black font-bold">Class</Label>
            {editMode ? (
              <Input 
                id="class" 
                value={editedCharacter.class} 
                onChange={(e) => handleChange('class', e.target.value)}
                className="bg-parchment-light border-fantasy-gold/70 text-black"
              />
            ) : (
              <p className="font-fantasy text-black">{character.class}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="race" className="font-scribe text-black font-bold">Race</Label>
            {editMode ? (
              <Input 
                id="race" 
                value={editedCharacter.race} 
                onChange={(e) => handleChange('race', e.target.value)}
                className="bg-parchment-light border-fantasy-gold/70 text-black"
              />
            ) : (
              <p className="font-fantasy text-black">{character.race}</p>
            )}
          </div>
        </div>
        
        <div className="space-y-2">
          <Label className="font-medieval text-xl text-black">Stats</Label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Object.entries(character.stats).map(([stat, value]) => (
              <div key={stat} className="text-center border border-fantasy-gold bg-fantasy-gold/10 p-2 rounded-md">
                <p className="font-scribe text-sm capitalize text-black font-bold">{stat}</p>
                {editMode ? (
                  <Input 
                    type="number" 
                    value={editedCharacter.stats[stat as keyof Character['stats']]} 
                    onChange={(e) => handleStatChange(
                      stat as keyof Character['stats'],
                      parseInt(e.target.value)
                    )}
                    className="bg-parchment-light border-fantasy-gold/70 text-center text-black"
                    min={1}
                    max={20}
                  />
                ) : (
                  <p className="font-fantasy text-lg text-black">{value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <Separator className="bg-fantasy-gold" />
        
        <div className="space-y-2">
          <Label className="font-medieval text-xl text-black">Inventory</Label>
          <div className="border border-fantasy-gold p-2 min-h-[100px] rounded-md bg-fantasy-gold/5">
            <ul className="list-disc list-inside font-scribe text-black">
              {character.inventory.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="flex justify-between items-center bg-fantasy-gold/10 p-3 rounded-md border border-fantasy-gold">
          <div>
            <Label className="font-scribe text-sm text-black font-bold">Health</Label>
            <p className="font-fantasy text-black">
              {character.health} / {character.maxHealth}
            </p>
          </div>
          
          <div>
            <Label className="font-scribe text-sm text-black font-bold">Level</Label>
            <p className="font-fantasy text-black">{character.level}</p>
          </div>
          
          <div>
            <Label className="font-scribe text-sm text-black font-bold">Experience</Label>
            <p className="font-fantasy text-black">{character.experience} XP</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CharacterSheet;
