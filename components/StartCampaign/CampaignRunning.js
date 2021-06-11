import { Button } from 'reactstrap';

const CampaignRunning = ({ onUploadNewCampaigns, onCloseDialogBox }) => {
  return (
    <>
      <h3 style={{ color: '#00008B' }}>Campaigns are now running...</h3>
      <div className="h-100 w-100" style={{ marginTop: 40 }}>
        <br />
        <div style={{ height: 14, borderTop: '1px solid #eaeaea' }} />
        <Button color="primary" onClick={onUploadNewCampaigns}>
          Upload New Campaigns
        </Button>
        <Button
          color="secondary"
          onClick={onCloseDialogBox}
          style={{ marginLeft: 10 }}
        >
          Close
        </Button>
      </div>
    </>
  );
};

export default CampaignRunning;
