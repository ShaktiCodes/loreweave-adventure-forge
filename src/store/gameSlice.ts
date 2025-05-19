
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define interfaces for our game state
export interface Character {
  id: string;
  name: string;
  class: string;
  race: string;
  stats: {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
  };
  inventory: string[];
  health: number;
  maxHealth: number;
  level: number;
  experience: number;
}

export interface Campaign {
  id: string;
  title: string;
  theme: string;
  description: string;
  creator: string;
  characters: Character[];
  currentStoryNode: StoryNode;
  storyNodes: { [key: string]: StoryNode };
}

export interface StoryNode {
  id: string;
  content: string;
  choices: {
    id: string;
    text: string;
    nextNodeId: string;
  }[];
}

export interface GameState {
  campaigns: Campaign[];
  activeCampaign: Campaign | null;
  loading: boolean;
  error: string | null;
}

const initialCharacter: Character = {
  id: "default-character",
  name: "Adventurer",
  class: "Warrior",
  race: "Human",
  stats: {
    strength: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10
  },
  inventory: ["Basic Sword", "Shield", "Healing Potion"],
  health: 20,
  maxHealth: 20,
  level: 1,
  experience: 0
};

// Initial story node for new campaigns
const initialStoryNode: StoryNode = {
  id: "start",
  content: "Welcome to your adventure. You stand at the entrance of a mysterious dungeon. The air is thick with magic and danger.",
  choices: [
    {
      id: "choice1",
      text: "Enter the dungeon",
      nextNodeId: "dungeon-entrance"
    },
    {
      id: "choice2",
      text: "Explore the surrounding area first",
      nextNodeId: "surroundings"
    }
  ]
};

// Some predefined story nodes for demonstration
const presetStoryNodes = {
  "start": initialStoryNode,
  "dungeon-entrance": {
    id: "dungeon-entrance",
    content: "You step into the dark dungeon. Torches flicker on the walls, casting eerie shadows. You hear distant sounds echoing through the halls.",
    choices: [
      {
        id: "choice1",
        text: "Follow the left passage",
        nextNodeId: "left-passage"
      },
      {
        id: "choice2",
        text: "Take the right corridor",
        nextNodeId: "right-corridor"
      },
      {
        id: "choice3",
        text: "Examine the strange markings on the floor",
        nextNodeId: "floor-markings"
      }
    ]
  },
  "surroundings": {
    id: "surroundings",
    content: "You decide to scout the area before entering. The dungeon is built into the side of a mountain. You find tracks of various creatures and signs of recent activity.",
    choices: [
      {
        id: "choice1",
        text: "Follow the tracks",
        nextNodeId: "follow-tracks"
      },
      {
        id: "choice2",
        text: "Return to the dungeon entrance",
        nextNodeId: "dungeon-entrance"
      }
    ]
  },
  "left-passage": {
    id: "left-passage",
    content: "The left passage leads to a chamber filled with ancient artifacts. A mysterious glow emanates from a pedestal in the center.",
    choices: [
      {
        id: "choice1",
        text: "Examine the glowing pedestal",
        nextNodeId: "pedestal"
      },
      {
        id: "choice2",
        text: "Look around for traps",
        nextNodeId: "check-traps"
      }
    ]
  },
  "right-corridor": {
    id: "right-corridor",
    content: "The right corridor is dark and silent. You sense movement in the shadows ahead.",
    choices: [
      {
        id: "choice1",
        text: "Advance carefully",
        nextNodeId: "advance"
      },
      {
        id: "choice2",
        text: "Retreat to the entrance",
        nextNodeId: "dungeon-entrance"
      }
    ]
  },
  // Limited number of nodes for demonstration
  "pedestal": {
    id: "pedestal",
    content: "As you approach the pedestal, the glow intensifies. It's a magical artifact of great power!",
    choices: [
      {
        id: "choice1",
        text: "Take the artifact",
        nextNodeId: "take-artifact"
      },
      {
        id: "choice2",
        text: "Leave it alone",
        nextNodeId: "leave-artifact"
      }
    ]
  }
};

// Define the initial state
const initialState: GameState = {
  campaigns: [],
  activeCampaign: null,
  loading: false,
  error: null,
};

// Create the game slice
const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    createCampaign: (state, action: PayloadAction<{ title: string, theme: string, description: string }>) => {
      const newCampaign: Campaign = {
        id: `campaign-${Date.now()}`,
        title: action.payload.title,
        theme: action.payload.theme,
        description: action.payload.description,
        creator: "Player",
        characters: [initialCharacter],
        currentStoryNode: initialStoryNode,
        storyNodes: presetStoryNodes
      };
      
      state.campaigns.push(newCampaign);
      state.activeCampaign = newCampaign;
    },
    
    selectCampaign: (state, action: PayloadAction<string>) => {
      const campaign = state.campaigns.find(c => c.id === action.payload);
      if (campaign) {
        state.activeCampaign = campaign;
      }
    },
    
    navigateToStoryNode: (state, action: PayloadAction<string>) => {
      if (state.activeCampaign) {
        const nextNode = state.activeCampaign.storyNodes[action.payload];
        if (nextNode) {
          state.activeCampaign.currentStoryNode = nextNode;
        }
      }
    },
    
    updateCharacter: (state, action: PayloadAction<Character>) => {
      if (state.activeCampaign) {
        const index = state.activeCampaign.characters.findIndex(
          c => c.id === action.payload.id
        );
        
        if (index !== -1) {
          state.activeCampaign.characters[index] = action.payload;
        }
      }
    },
    
    addStoryNode: (state, action: PayloadAction<StoryNode>) => {
      if (state.activeCampaign) {
        state.activeCampaign.storyNodes[action.payload.id] = action.payload;
      }
    },
    
    updateStoryNode: (state, action: PayloadAction<StoryNode>) => {
      if (state.activeCampaign) {
        state.activeCampaign.storyNodes[action.payload.id] = action.payload;
      }
    }
  }
});

export const { 
  createCampaign, 
  selectCampaign, 
  navigateToStoryNode, 
  updateCharacter,
  addStoryNode,
  updateStoryNode
} = gameSlice.actions;

export default gameSlice.reducer;
