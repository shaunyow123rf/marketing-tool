import { useEffect, useState } from 'react';

import UploadCampaigns from './UploadCampaigns';
import LoadingSpinner from '../LoadingSpinner';
import SelectCampaign from './SelectCampaign';

const StartCampaign = () => {
  const [loading, setLoading] = useState(false);
  const [csvUploaded, setCsvUploaded] = useState(false);
  const [campaignStarted, setCampaignStarted] = useState(false);

  // if (loading) return <LoadingSpinner />;
  return (
    <section className="campaign-wrapper mx-auto">
      {loading && <LoadingSpinner />}
      {!csvUploaded && (
        <UploadCampaigns
          setLoading={setLoading}
          setCsvUploaded={setCsvUploaded}
        />
      )}
      {csvUploaded && campaignStarted && (
        <SelectCampaign
          setLoading={setLoading}
          setCampaignStarted={setCampaignStarted}
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
