
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { 
  createCampaign, 
  selectCampaign, 
  navigateToStoryNode,
  updateCharacter,
  addStoryNode,
  updateStoryNode,
  Campaign,
  Character,
  StoryNode
} from '../store/gameSlice';

export const useGame = () => {
  const dispatch = useDispatch();
  const gameState = useSelector((state: RootState) => state.game);
  
  const createNewCampaign = (title: string, theme: string, description: string) => {
    dispatch(createCampaign({ title, theme, description }));
  };
  
  const loadCampaign = (campaignId: string) => {
    dispatch(selectCampaign(campaignId));
  };
  
  const makeChoice = (choiceNodeId: string) => {
    dispatch(navigateToStoryNode(choiceNodeId));
  };
  
  const updatePlayerCharacter = (character: Character) => {
    dispatch(updateCharacter(character));
  };
  
  const addNewStoryNode = (node: StoryNode) => {
    dispatch(addStoryNode(node));
  };
  
  const updateExistingStoryNode = (node: StoryNode) => {
    dispatch(updateStoryNode(node));
  };
  
  return {
    campaigns: gameState.campaigns,
    activeCampaign: gameState.activeCampaign,
    loading: gameState.loading,
    error: gameState.error,
    createNewCampaign,
    loadCampaign,
    makeChoice,
    updatePlayerCharacter,
    addNewStoryNode,
    updateExistingStoryNode
  };
};
