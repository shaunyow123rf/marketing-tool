import { useState } from 'react';
import { Label, Button, Form, FormGroup, Input, FormText } from 'reactstrap';
// import { Button, CustomInput, Form, FormGroup, Label } from 'reactstrap';

const SelectCampaign = (props) => {
  const { setLoading, setCampaignStarted, onCloseDialogBox } = props;

  const [selectedId, setSelectedId] = useState();

  const campaignEvents = [
    {
      id: '001',
      selected: true,
      country: 'Peru',
      event: 'Inti Raymi Festival',
      noOfUser: 4,
    },
    {
      id: '002',
      selected: false,
      country: 'Spain',
      event: 'Haro Wine Festival',
      noOfUser: 6,
    },
    {
      id: '003',
      selected: false,
      country: 'Canada',
      event: 'Calgary Stampede',
      noOfUser: 5,
    },
    {
      id: '004',
      selected: false,
      country: 'Mongolia',
      event: 'Naadam Festival',
      noOfUser: 2,
    },
    {
      id: '005',
      selected: false,
      country: 'South Korea',
      event: 'Boryeong Mud Festival',
      noOfUser: 7,
    },
    {
      id: '006',
      selected: false,
      country: 'Japan',
      event: 'Gion Matsuri',
      noOfUser: 8,
    },
  ];

  const onStartCampaign = () => {
    setLoading(true);
    // call api here
    setTimeout(() => {
      const response = { status: true };
      if (response.status) {
        setLoading(false);
        setCampaignStarted(true);
      }
    }, 3000);
  };
  const handleCampaignSelection = (e) => {
    setSelectedId(e.target.attributes[0].value);
  };

  return (
    <>
      <h2>Select Campaign</h2>
      <div className="h-100 w-100" style={{ marginTop: 40 }}>
        <Form>
          <FormGroup>
            <div>
              {campaignEvents.map((o, i) => {
                return (
                  <FormGroup check key={o.id} style={{ marginTop: 6 }}>
                    <Label check>
                      <Input
                        type="radio"
                        id={o.id}
                        name={o.id}
                        checked={selectedId === o.id}
                        onChange={handleCampaignSelection}
                      />
                      {`${o.country}: ${o.event} (${o.noOfUser} users)`}
                    </Label>
                  </FormGroup>
                );
              })}
            </div>
          </FormGroup>
        </Form>
        <br />
        <br />
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
      `}</style>
    </>
  );
};

export default SelectCampaign;
