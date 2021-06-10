import { useEffect, useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const CreateSegmentComponent = () => {
  return (
    <section className="campaign-wrapper mx-auto">
      <h2>Create Segment</h2>
      <div className="campaign-sub-wrapper">
        <Form>
          <FormGroup>
            <Label for="segmentId">Segment Id:</Label>
            <Input
              type="text"
              name="segmentId"
              id="segmentId"
              placeholder="Enter Segment Id"
            />
          </FormGroup>
          <br />
          <FormGroup>
            <Label for="segmentName">Segment Name:</Label>
            <Input
              type="text"
              name="segmentName"
              id="segmentName"
              placeholder="Enter Segment Name"
            />
          </FormGroup>
          <br />
          <FormGroup>
            <Label for="country">Select Country:</Label>
            <Input type="select" name="country" id="country">
              <option>Malaysia</option>
              <option>South Korea</option>
              <option>Japan</option>
            </Input>
          </FormGroup>
        </Form>
        <br />
        <br />
        <Button color="primary">Submit Segment</Button>
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

export default CreateSegmentComponent;
