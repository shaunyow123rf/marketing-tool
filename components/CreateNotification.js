import { useEffect, useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const CreateNotificationComponent = () => {
  return (
    <section className="campaign-wrapper mx-auto">
      <h2>Create Notification</h2>
      <div className="campaign-sub-wrapper">
        <Form>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />
              Single Notification
              <FormGroup>
                <br />
                <Label for="campaignName">Select Campaign Name:</Label>
                <Input type="select" name="campaignName" id="campaignName">
                  <option>House Campaign</option>
                  <option>Beach Campaign</option>
                  <option>Business Campaign</option>
                </Input>
              </FormGroup>
              <br />
              <FormGroup>
                <Label for="notificationContent">Notification Content:</Label>
                <Input type="textarea" name="text" id="exampleText" />
              </FormGroup>
              <br />
              <FormGroup>
                <Label for="exampleFile">Image, Video or Sound </Label>
                <Input type="file" name="file" id="exampleFile" />
                <FormText color="muted">(Maximum file size: 4MB)</FormText>
              </FormGroup>
              <br />
              <FormGroup>
                <Label for="dateTime">Send Notification On:</Label>
                <Input
                  type="datetime-local"
                  name="dateTime"
                  id="dateTime"
                  //   placeholder="Enter Campaign Name"
                />
              </FormGroup>
              <br />
              <FormGroup>
                <Label for="notificationType">Type of Notification:</Label>
                <Input
                  type="select"
                  name="notificationType"
                  id="notificationType"
                >
                  <option>Email Notification</option>
                  <option>Push Notification</option>
                </Input>
              </FormGroup>
            </Label>
          </FormGroup>
          <br />
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />
              Upload CSV File
              <FormGroup>
                {/* <Label for="exampleFile"></Label> */}
                <br />
                <Input type="file" name="file" id="exampleFile" />
                <FormText color="muted">(Maximum file size: 4MB)</FormText>
              </FormGroup>
            </Label>
          </FormGroup>
        </Form>
        <br />
        <br />
        <Button color="primary">Send Notification</Button>
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

export default CreateNotificationComponent;
