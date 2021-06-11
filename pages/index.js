import PageLayout from '../components/PageLayout';

const Home = () => {
  return (
    <PageLayout>
      <div className="d-flex flex-column align-items-center">
        {/* <img src="/notification-white.png" height={60} width={51} /> */}
        <h1 className="welcomeMessage">Welcome to</h1>
        <h2 className="welcomeMessage welcomeMessage2">
          Campaign Notification Tool!
        </h2>
      </div>

      <style jsx>{`
        .welcomeMessage {
          color: #ffffff;
          background-color: rgba(0, 0, 0, 0.75);
          text-align: center;
          text-decoration: none;
          line-height: 60px;
          transform: rotate(-2deg);
          padding: 3px 40px;
          margin-top: 30px;
        }
        .welcomeMessage2 {
          transform: rotate(-4deg);
          margin-top: 30px;
        }
      `}</style>
    </PageLayout>
  );
};

export default Home;
