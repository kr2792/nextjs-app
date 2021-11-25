import { useKeycloak } from "@react-keycloak/ssr";
import type { KeycloakInstance, KeycloakTokenParsed } from "keycloak-js";

import { Layout } from "../components/Layout";

type ParsedToken = KeycloakTokenParsed & {
  email?: string;

  preferred_username?: string;

  given_name?: string;

  family_name?: string;

  name?: string;

  date_of_birth?: string;

  personal_identity_number?: string;
};

const IndexPage = () => {
  const { keycloak } = useKeycloak<KeycloakInstance>();
  const parsedToken: ParsedToken | undefined = keycloak?.tokenParsed;

  const loggedinState = keycloak?.authenticated ? (
    <span className="text-success">logged in</span>
  ) : (
    <span className="text-danger">NOT logged in</span>
  );

  console.log("parsedToken", parsedToken);
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1 className="mt-5">Hello Next.js + Keycloak 👋</h1>
      <div className="mb-5 lead text-muted">
        This is an example of a Next.js site using Keycloak.
      </div>

      <p>You are: {loggedinState}</p>
      {keycloak?.authenticated && (
        <div>
          <h2>User profile </h2>
          <ol>
            <li>Username: {parsedToken?.preferred_username}</li>
            <li>Fist name: {parsedToken?.given_name}</li>
            <li>Last name: {parsedToken?.family_name}</li>
            <li>Name: {parsedToken?.name}</li>
            <li>Føðingardagur: {parsedToken?.date_of_birth}</li>
            <li>P-tal: {parsedToken?.personal_identity_number}</li>
          </ol>
        </div>
      )}
    </Layout>
  );
};

export default IndexPage;
