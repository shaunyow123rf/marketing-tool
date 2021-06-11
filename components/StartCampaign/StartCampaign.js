import { useState } from 'react';
import Router from 'next/router';

import UploadCampaigns from './UploadCampaigns';
import LoadingSpinner from '../LoadingSpinner';
import SelectCampaign from './SelectCampaign';
import CampaignRunning from './CampaignRunning';

const StartCampaign = () => {
  const [loading, setLoading] = useState(false);
  const [csvUploaded, setCsvUploaded] = useState(false);
  const [campaignStarted, setCampaignStarted] = useState(false);

  const onUploadNewCampaigns = () => {
    setCsvUploaded(false);
    setCampaignStarted(false);
  };

  const onCloseDialogBox = () => {
    Router.push('/');
  };

  return (
    <section className="campaign-wrapper mx-auto">
      {loading && <LoadingSpinner />}
      {!csvUploaded && (
        <UploadCampaigns
          setLoading={setLoading}
          setCsvUploaded={setCsvUploaded}
          onCloseDialogBox={onCloseDialogBox}
        />
      )}
      {csvUploaded && !campaignStarted && (
        <SelectCampaign
          setLoading={setLoading}
          setCampaignStarted={setCampaignStarted}
          onUploadNewCampaigns={onUploadNewCampaigns}
          onCloseDialogBox={onCloseDialogBox}
        />
      )}
      {csvUploaded && campaignStarted && (
        <CampaignRunning
          onUploadNewCampaigns={onUploadNewCampaigns}
          onCloseDialogBox={onCloseDialogBox}
        />
      )}

      <style jsx>{`
        .campaign-wrapper {
          height: auto;
          width: 500px;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          background-color: #ffffff;
          box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.1);
          padding: 40px 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      `}</style>
    </section>
  );
};

export default StartCampaign;
