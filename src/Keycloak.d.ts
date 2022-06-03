import Keycloak from "keycloak-js";
export declare let keycloak: Keycloak.KeycloakInstance | undefined;
/**
 * Get keycloak instance
 *
 * @return an initiated keycloak instance or `undefined`
 * if keycloak isn't configured
 *
 */
export declare const setKeycloakInstance: () => Promise<void>;
/**
 * Initiate keycloak instance.
 *
 * Set keycloak to undefined if
 * keycloak isn't configured
 *
 */
export declare const init: () => Promise<void>;
/**
 * Use keycloak update token function to retrieve
 * keycloak token
 *
 * @return keycloak token or empty string if keycloak
 * isn't configured
 *
 */
export declare const getKeyCloakToken: () => Promise<string>;
/**
 * Use keycloak update token function to retrieve
 * keycloak token
 *
 * @return keycloak token or empty string if keycloak
 * isn't configured
 *
 */
export declare const getParsedKeyCloakToken: () => Promise<Keycloak.KeycloakTokenParsed>;
export declare const getUsername: () => Promise<string>;
/**
 * logout of keycloak, clear cache and offline store then redirect to
 * keycloak login page
 */
export declare const logout: () => Promise<void>;
