
import CreateCampaignForm from "../components/CreateCampaignForm";

const CreatePage = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-medieval text-primary mb-8 text-center decorated-header">
        Create New Campaign
      </h1>
      <CreateCampaignForm />
    </div>
  );
};

export default CreatePage;
