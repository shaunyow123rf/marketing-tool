import PageLayout from '../components/PageLayout';

const Home = () => {
  return (
    <PageLayout>
      <h1 className="welcomeMessage mx-auto">
        Welcome to
        <br /> Push Notification Tool!
      </h1>
      <style jsx>{`
        .welcomeMessage {
          color: #333333;
          text-align: center;
          text-decoration: none;
          line-height: 60px;
        }
      `}</style>
    </PageLayout>
  );
};

export default Home;
