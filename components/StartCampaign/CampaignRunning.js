import { Button } from 'reactstrap';

const CampaignRunning = ({ onCloseDialogBox }) => {
  return (
    <>
      <h3>Campaign is now running...</h3>
      <div className="h-100 w-100" style={{ marginTop: 40 }}>
        <br />
        <br />
        <Button color="secondary" onClick={onCloseDialogBox}>
          Close
        </Button>
      </div>
    </>
  );
};

export default CampaignRunning;
