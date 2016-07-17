# Ember Data Twitch

This addon provides Ember-Data abstractions for the [Twitch API v3](https://github.com/justintv/Twitch-API).

## Usage


### Configuration

#### Registering your app to use the Twitch API

Some requests to the Twitch API require authentication (TODO: which). In order for `ember-data-twitch` to perform these, you'll

[need to make sure you've authenticated through the `twitch-session` service.]

In order to use this addon, you'll need to acquire the following items for your application an :

* Access Token:
* Client ID:
* redirectURI:

client_id=[your client ID]
&client_secret=[your client secret]
&grant_type=authorization_code
&redirect_uri=[your registered redirect URI]
&code=[code received from redirect URI]
&state=[your provided unique token]


The [Twitch API Authentication Guide](https://github.com/justintv/Twitch-API/blob/master/authentication.md) covers these
steps and more.


#### Environment Options
Once you've acquired the items above, you'll need to let `ember-data-twitch` discover them by setting them on the `ember-data-twitch` property of your app's configuration export in `config/environment.js`:

```javascript
// config/environment.js
ENV['ember-data-twitch'] = {
  clientId:
  redirectURI:
  scope:
};
```

#### Authorizing ember-data-twitch

The final step is to ...?

## Contributing

This section outlines the details of collaborating on this Ember addon.

### Installation

* `git clone git@github.com:elwayman02/ember-data-twitch.git`
* `cd ember-data-twitch/`
* `npm install`
* `bower install`

### Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

### Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
