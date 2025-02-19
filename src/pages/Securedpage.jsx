import React from "react";
import { useKeycloak } from "@react-keycloak/web";

const Securedpage = () => {
    const { keycloak, initialized } = useKeycloak();

    if (!initialized) {
        return <div>Loading...</div>;
    }

    const tokenDataID = keycloak.idToken.split('.')[1];
    const decodedDataID = JSON.parse(atob(tokenDataID));

    const tokenDataRF = keycloak.refreshToken.split('.')[1];
    const decodedDataRF = JSON.parse(atob(tokenDataRF));



    return (
        <div style={{padding: "20px"}}>
            <h1>Secured Page</h1>

            <hr/>
            <h2>Access Token Details:</h2>
            <pre>{JSON.stringify(keycloak.tokenParsed, null, 2)}</pre>
            <p><strong>Token:</strong></p>
            <textarea style={{width: "100%", height: "150px"}} value={keycloak.token} readOnly/>

            <hr/>
            <h2>ID Token Details:</h2>
            <pre>{JSON.stringify(decodedDataID, null, 2)}</pre>
            <textarea style={{width: "100%", height: "150px"}} value={keycloak.idToken} readOnly/>

            <hr/>
            <h2>Refresh Token Details:</h2>
            <pre>{JSON.stringify(decodedDataRF, null, 2)}</pre>
            <textarea style={{width: "100%", height: "150px"}} value={keycloak.refreshToken} readOnly/>

        </div>
    );
};

export default Securedpage;
