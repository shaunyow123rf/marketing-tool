const Footer = () => {
  return (
    <footer className="footer">
      <span>All rights reserved. © Inmagine Lab Pte Ltd 2021.</span>
      <style jsx>{`
        .footer {
          width: 100%;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #ffffff;
          background-color: rgba(0, 0, 0, 0.75);
          opacity: 0.8;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
