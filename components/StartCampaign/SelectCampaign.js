import { useState } from 'react';
import { Label, Button, Form, FormGroup, Input, FormText } from 'reactstrap';
// import { Button, CustomInput, Form, FormGroup, Label } from 'reactstrap';

import postCreateCampaign from 'endpoints/postCreateCampaign';

const SelectCampaign = (props) => {
  const { setLoading, setCampaignStarted, onCloseDialogBox } = props;

  const [selectedChannel, setSelectedChannel] = useState('push-notification');

  const campaignEvents = [
    {
      id: '001',
      country: 'USA',
      event: 'Independence Day',
      noOfUser: 4,
    },
    {
      id: '002',
      country: 'Global',
      event: 'Easter Day',
      noOfUser: 6,
    },
    {
      id: '003',
      country: 'MY, SG and ID',
      event: 'Eid-al-Fitri',
      noOfUser: 5,
    },
  ];

  const onStartCampaign = async () => {
    setLoading(true);
    const response = await postCreateCampaign({
      channel: selectedChannel,
    });
    if (response?.statusCode === 200) {
      setCampaignStarted(true);
    } else {
      alert('API responded an error, please try again...');
    }
    setLoading(false);
  };

  const handleChannelSelection = (selected) => {
    if (selected !== selectedChannel) setSelectedChannel(selected);
  };

  return (
    <>
      <h2>Campaign List</h2>
      <div className="h-100 w-100" style={{ marginTop: 20 }}>
        <Form>
          <FormGroup>
            <ul>
              {campaignEvents.map((o, i) => {
                return (
                  <FormGroup check key={o.id} style={{ marginTop: 6 }}>
                    <li
                      style={{ color: '#00008B', fontWeight: 500 }}
                    >{`${o.country}: ${o.event}`}</li>
                  </FormGroup>
                );
              })}
            </ul>
          </FormGroup>
          <br />
          <FormGroup>
            <Label for="pushNotif" style={{ fontWeight: 500 }}>
              Notification Channel:
            </Label>
            <FormGroup check style={{ marginTop: 6, marginLeft: 10 }}>
              <Label check>
                <Input
                  type="radio"
                  id="pushNotif"
                  name="pushNotif"
                  checked={selectedChannel === 'push-notification'}
                  onChange={() => handleChannelSelection('push-notification')}
                />
                Push Notification
              </Label>
            </FormGroup>
            <FormGroup check style={{ marginTop: 6, marginLeft: 10 }}>
              <Label check>
                <Input
                  type="radio"
                  id="emailNotif"
                  name="emailNotif"
                  checked={selectedChannel === 'email'}
                  onChange={() => handleChannelSelection('email')}
                />
                Email Notification
              </Label>
            </FormGroup>
          </FormGroup>
        </Form>
        <br />
        <br />
        <div style={{ height: 14, borderTop: '1px solid #eaeaea' }} />
        <Button color="primary" onClick={onStartCampaign}>
          Start Campaign
        </Button>
        <Button
          color="secondary"
          onClick={onCloseDialogBox}
          style={{ marginLeft: 10 }}
        >
          Close
        </Button>
      </div>

      <style jsx>{`
        .custom-control-label {
          margin-left: 10px;
        }
        ul {
          padding-left: 0px;
        }
      `}</style>
    </>
  );
};

export default SelectCampaign;
