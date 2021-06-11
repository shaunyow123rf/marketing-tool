import Link from 'next/link';

const Header = () => {
  return (
    <header className="header-wrapper">
      <div className="header-name">
        <Link href="/">
          <a className="d-flex align-items-center">
            <img src="/123rf-logo-white.png" height="32px" />
            <span style={{ marginLeft: 14 }}>Campaign Notification Tool</span>
          </a>
        </Link>
      </div>
      <div>
        <ul>
          <li>
            <Link href="/campaign">
              <a>Start Campaign</a>
            </Link>
          </li>
          <li>
            <a href="#about">Logout</a>
          </li>
        </ul>
      </div>

      <style jsx>{`
        .header-wrapper {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          background-color: rgba(0, 0, 0, 0.75);
          opacity: 0.8;
          padding: 0 16px 0 32px;
        }
        .header-name {
          color: #ffffff;
          font-weight: bolder;
          font-size: 24px;
        }
        .header-name a {
          color: #ffffff;
          text-decoration: none;
        }
        ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
          overflow: hidden;
        }
        li {
          float: left;
        }
        li a {
          display: block;
          color: #ffffff;
          font-weight: 600;
          text-align: center;
          padding: 20px;
          text-decoration: none;
        }
        li a:hover {
          background-color: #111111;
          text-decoration: underline;
        }
      `}</style>
    </header>
  );
};

export default Header;
