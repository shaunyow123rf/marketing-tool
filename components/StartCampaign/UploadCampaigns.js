import { useEffect, useState } from 'react';
import { Button, Form, FormGroup, Input, FormText } from 'reactstrap';

const UploadCampaigns = (props) => {
  const { setLoading, setCsvUploaded } = props;

  const [csvFileName, setCsvFileName] = useState('');

  const onUploadCSVFile = async () => {
    setLoading(true);
    console.log('csvFileName', csvFileName);
    // call upload api here
    const response = { status: true };
    if (response.status) {
      setLoading(false);
      setCsvUploaded(true);
    }
  };

  const onChooseCSVFile = (e) => {
    const file = e.target.files[0];
    setCsvFileName(file.name);
  };

  return (
    <>
      <h2>Upload Campaigns</h2>
      <div className="h-100 w-100" style={{ marginTop: 40 }}>
        <Form>
          <FormGroup className="d-flex flex-column">
            <Input
              type="file"
              name="csvFileName"
              id="csvFileName"
              accept=".csv"
              onChange={onChooseCSVFile}
            />
            <FormText color="muted">
              (Upload list of suggested campaigns in CSV format file. Maximum
              file size is 4MB)
            </FormText>
          </FormGroup>
        </Form>
        <br />
        <br />
        <Button color="primary" onClick={onUploadCSVFile}>
          Upload CSV File
        </Button>
      </div>
    </>
  );
};

export default UploadCampaigns;
