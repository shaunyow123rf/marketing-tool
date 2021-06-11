import Header from './Header';
import Footer from './Footer';

const PageLayout = (props) => {
  return (
    <div className="page-container">
      <Header />
      {props.children}
      <Footer />
      <style jsx>{`
        .page-container {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 100vw;
          height: 100vh;
          min-height: 805px;
          background-color: #ccebe9;
          background-position: top center;
          background-size: cover;
          background-image: url('/144596889.jpg');
          background-repeat: no-repeat;
        }
      `}</style>
    </div>
  );
};

export default PageLayout;
