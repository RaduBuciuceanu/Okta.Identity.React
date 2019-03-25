import OktaAuth from '@okta/okta-auth-js'
import {from} from 'rxjs';
import {tap} from 'rxjs/operators';

export default class UserRepository {
    #oktaConfigurtion = {
        issuer: 'https://dev-896128.okta.com/oauth2/default',
        clientId: '0oadijnbocsI5cyAd356',
        redirectUrl: `${window.location.origin}/implicit/callback`,
        loginUrl: 'https://dev-896128.okta.com',
        url: 'https://dev-896128.okta.com'
    };

    #okta = new OktaAuth(this.#oktaConfigurtion);

    login(credentials) {
        return from(this.#okta.signIn(credentials))
            .pipe(tap((response) => console.log(response)));
    }
}
