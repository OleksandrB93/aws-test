import logo from "./logo.svg";
import "./App.css";
import { withAuthenticator } from "@aws-amplify/ui-react";

function App({ signOut, user }) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="bg-red-300 text-black mb-4 px-4 py-1 rounded-lg underline">
          {user.attributes.email}
        </p>
        <button className="bg-red-500 px-4 rounded-lg" onClick={signOut}>
          Sign Out
        </button>
      </header>
    </div>
  );
}

export default withAuthenticator(App, {
  socialProviders: ["google"], 
});
