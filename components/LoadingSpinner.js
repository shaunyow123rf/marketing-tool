function LoadingSpinner() {
  return (
    <div className="loading-wrapper">
      <div className="loading-ring">
        <div />
        <div />
        <div />
        <div />
      </div>

      <style jsx>
        {`
          .loading-wrapper {
            width: 100vw;
            height: 100vh;
            background-color: rgba(255, 255, 255, 0.2);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 99999;
            position: fixed;
            top: 0;
            left: 0;
          }
          .loading-ring {
            display: inline-block;
            position: relative;
            width: 170px;
            height: 170px;
          }
          .loading-ring div {
            box-sizing: border-box;
            display: block;
            position: absolute;
            width: 100px;
            height: 100px;
            margin: 8px;
            border: 12px solid #45aaf2;
            border-radius: 50%;
            animation: loading-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
            border-color: #45aaf2 transparent transparent transparent;
          }
          .loading-ring div:nth-child(1) {
            animation-delay: -0.35s;
          }
          .loading-ring div:nth-child(2) {
            animation-delay: -0.2s;
          }
          .loading-ring div:nth-child(3) {
            animation-delay: -0.05s;
          }
          @keyframes loading-ring {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
}

export default LoadingSpinner;
