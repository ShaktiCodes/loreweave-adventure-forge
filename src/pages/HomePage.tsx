
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-4 text-center">
        <motion.h1 
          className="text-5xl md:text-6xl lg:text-7xl font-medieval text-primary mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          LoreWeaver AI
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl mb-8 max-w-2xl text-gray-300 font-scribe"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Craft epic adventures with AI-powered storytelling. 
          Create, play, and share immersive text-based campaigns.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link to="/create">
            <Button className="text-lg px-8 py-6 bg-fantasy-purple hover:bg-fantasy-purple/80">
              Create Campaign
            </Button>
          </Link>
          <Link to="/campaigns">
            <Button variant="outline" className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary/10">
              Explore Campaigns
            </Button>
          </Link>
        </motion.div>
      </div>
      
      <div className="w-full py-16 px-4 md:px-8 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-medieval text-primary text-center mb-12 decorated-header">
            Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-morphism p-6 rounded-lg">
              <h3 className="text-xl font-medieval text-primary mb-3">Game Creator</h3>
              <p className="text-gray-300">Design your own worlds with themes, characters, and quests using powerful AI generation.</p>
            </div>
            
            <div className="glass-morphism p-6 rounded-lg">
              <h3 className="text-xl font-medieval text-primary mb-3">Live Gameplay</h3>
              <p className="text-gray-300">Immersive text-based adventures with dynamic story progression and meaningful choices.</p>
            </div>
            
            <div className="glass-morphism p-6 rounded-lg">
              <h3 className="text-xl font-medieval text-primary mb-3">Character Development</h3>
              <p className="text-gray-300">Create and customize characters with detailed stats, inventory, and progression systems.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
