
import Amplify, { Auth } from "aws-amplify";
import { withAuthenticator } from '@aws-amplify/ui-react'
import awsExports from "src/aws-exports";
import 'bootstrap/dist/css/bootstrap.css';

Amplify.configure(awsExports);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default withAuthenticator(MyApp);
