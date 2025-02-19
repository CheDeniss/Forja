import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
 url: 'http://localhost:8080',
 realm: 'forja',
 clientId: 'forja-frontend'
});

export default keycloak;