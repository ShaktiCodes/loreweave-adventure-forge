
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useGame } from "../hooks/useGame";

const CreateCampaignForm = () => {
  const navigate = useNavigate();
  const { createNewCampaign } = useGame();
  const [title, setTitle] = useState("");
  const [theme, setTheme] = useState("fantasy");
  const [description, setDescription] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && theme && description) {
      createNewCampaign(title, theme, description);
      navigate('/play');
    }
  };
  
  return (
    <Card className="glass-morphism max-w-md w-full mx-auto">
      <CardHeader>
        <CardTitle className="text-primary font-medieval text-2xl text-center">Create New Campaign</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title" className="text-gray-200">Campaign Title</Label>
            <Input
              id="title"
              placeholder="Enter a title for your adventure..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="glass-morphism"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="theme" className="text-gray-200">Theme</Label>
            <Select value={theme} onValueChange={setTheme}>
              <SelectTrigger className="glass-morphism">
                <SelectValue placeholder="Select a theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fantasy">Fantasy</SelectItem>
                <SelectItem value="sci-fi">Science Fiction</SelectItem>
                <SelectItem value="horror">Horror</SelectItem>
                <SelectItem value="western">Western</SelectItem>
                <SelectItem value="mystery">Mystery</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description" className="text-gray-200">Description</Label>
            <Textarea
              id="description"
              placeholder="Describe your adventure..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="glass-morphism min-h-[120px]"
              required
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            type="submit" 
            className="w-full bg-fantasy-purple hover:bg-fantasy-purple/80"
          >
            Create Campaign
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default CreateCampaignForm;
