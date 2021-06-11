const postCreateCampaign = async ({ channel }) => {
  const requestBody = {
    channel: channel, // either "email" or "push-notification"
  };
  try {
    const res = await fetch(
      'https://qrvo82jhga.execute-api.us-east-1.amazonaws.com/apitest/pinpoint/createcampaign',
      {
        method: 'post',
        body: JSON.stringify(requestBody),
        timeout: 8000,
      }
    );
    return await res.json();
  } catch (error) {
    return null;
  }
};

export default postCreateCampaign;
