import { Button } from 'reactstrap';

const CampaignRunning = ({ onCloseDialogBox }) => {
  return (
    <>
      <h3>Campaigns are now running...</h3>
      <div className="h-100 w-100" style={{ marginTop: 40 }}>
        <br />
        <div style={{ height: 14, borderTop: '1px solid #eaeaea' }} />
        <Button color="secondary" onClick={onCloseDialogBox}>
          Close
        </Button>
      </div>
    </>
  );
};

export default CampaignRunning;
