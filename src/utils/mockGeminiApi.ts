
// This is a mock implementation of Gemini API
// In a real implementation, we would connect to the actual Gemini API

/**
 * Mock function to generate story content based on a prompt
 */
export const generateStory = async (prompt: string): Promise<string> => {
  console.log("Generating story based on prompt:", prompt);
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Mock responses based on keyword detection
  if (prompt.includes("dungeon")) {
    return "You descend into the dark, damp dungeon. Torches flicker along the moss-covered walls, casting eerie shadows. The sound of dripping water echoes from somewhere deep within, and you can't shake the feeling that you're being watched.";
  } else if (prompt.includes("forest")) {
    return "The ancient forest envelops you in its verdant embrace. Sunlight filters through the canopy, creating dappled patterns on the forest floor. Birds sing mysterious melodies from the branches above, while the undergrowth rustles with unseen creatures.";
  } else if (prompt.includes("castle")) {
    return "The magnificent castle towers before you, its stone walls weathered by centuries of history. Banners flutter from the battlements, and guards in gleaming armor stand at attention by the massive wooden gates. The air carries the distant sounds of courtly music and the aroma of a feast being prepared.";
  }
  
  // Default response
  return "Your journey continues as you explore the unknown lands. What dangers and wonders await in this mysterious realm? Only time will tell as you forge ahead, driven by courage and curiosity.";
};

/**
 * Mock function to generate character description
 */
export const generateCharacter = async (traits: string[]): Promise<any> => {
  console.log("Generating character based on traits:", traits);
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Mock character generation
  const character = {
    name: getRandomName(),
    description: "A mysterious adventurer with a troubled past and unique abilities.",
    background: "Born in a small village that was destroyed by dark forces, they've been wandering the realm seeking both revenge and redemption.",
    quirks: ["Speaks to invisible companions", "Collects unusual trinkets", "Afraid of chickens"],
    motivation: "To discover the truth about their mysterious heritage and fulfill an ancient prophecy."
  };
  
  return character;
};

// Helper function for mock data
const getRandomName = () => {
  const firstNames = ["Galen", "Lyra", "Thorne", "Ember", "Orion", "Seraphina", "Caspian", "Aria"];
  const lastNames = ["Stormborn", "Nightshade", "Winterheart", "Flamekeep", "Starweaver", "Moonshadow"];
  
  return `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`;
};

/**
 * Mock function to generate AI choices based on story context
 */
export const generateChoices = async (context: string): Promise<any[]> => {
  console.log("Generating choices based on context:", context);
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Default choices for simple mock
  return [
    {
      id: `choice-${Math.random().toString(36).substring(2, 9)}`,
      text: "Proceed cautiously, staying alert for signs of danger",
      nextNodeId: `node-${Math.random().toString(36).substring(2, 9)}`
    },
    {
      id: `choice-${Math.random().toString(36).substring(2, 9)}`,
      text: "Investigate the unusual markings on the nearby wall",
      nextNodeId: `node-${Math.random().toString(36).substring(2, 9)}`
    },
    {
      id: `choice-${Math.random().toString(36).substring(2, 9)}`,
      text: "Call out to see if anyone is nearby",
      nextNodeId: `node-${Math.random().toString(36).substring(2, 9)}`
    }
  ];
};
