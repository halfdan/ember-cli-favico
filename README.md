# Ember-cli-favico

This Ember addon wraps [favico.js](http://lab.ejci.net/favico.js/) into a Ember service and makes it easy to use and access across your ember apps.

## Usage

You can inject the `favico` service anywhere in your app:

```
...
favico: Ember.inject.service('favico');
...
```

And then use the service to set properties on the `favico.js` instance:

```
this.get('favico').setProperty('badge', 12);
```

For other possible properties check out the [favico.js documentation](http://lab.ejci.net/favico.js/).

## Contributing

This rest of this README outlines the details of collaborating on this Ember addon.

### Installation

* `git clone <repository-url>` this repository
* `cd ember-cli-favico`
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
