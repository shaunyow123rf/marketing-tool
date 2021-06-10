import { useEffect, useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const CreateCampaignComponent = () => {
  return (
    <section className="campaign-wrapper mx-auto">
      <h2>Create Campaign</h2>
      <div className="campaign-sub-wrapper">
        <Form>
          <FormGroup>
            <Label for="campaignId">Campaign Id:</Label>
            <Input
              type="text"
              name="campaignId"
              id="campaignId"
              placeholder="Enter Campaign Id"
            />
          </FormGroup>
          <br />
          <FormGroup>
            <Label for="campaignName">Campaign Name:</Label>
            <Input
              type="text"
              name="campaignName"
              id="campaignName"
              placeholder="Enter Campaign Name"
            />
          </FormGroup>
          <br />
          <FormGroup>
            <Label for="segmentName">Select Segment:</Label>
            <Input type="select" name="segmentName" id="segmentName">
              <option>Segment 1</option>
              <option>Segment 2</option>
              <option>Segment 3</option>
            </Input>
          </FormGroup>
        </Form>
        <br />
        <br />
        <Button color="primary">Submit Campaign</Button>
      </div>

      <style jsx>{`
        .campaign-wrapper {
          height: auto;
          width: 400px;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          background-color: #ffffff;
          box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.1);
          padding: 35px 30px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .campaign-sub-wrapper {
          height: 100%;
          width: 100%;
          margin-top: 40px;
        }
      `}</style>
    </section>
  );
};

export default CreateCampaignComponent;
