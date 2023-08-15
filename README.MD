# appearance-changed-event

Adds `appearance-changed` event to the DOM to detect OS theme changes, using 1k of pure JavaScript.

## Usage

Add [appearance-changed-event.min.js](dist/appearance-changed-event.min.js) to your page and start listening for `appearance-changed` event.

```js
window.addEventListener('appearance-changed', function(e) {
  console.log(e.detail); // `light`, `dark`
});
```

Also exposes `window.appearance` which you can check at any time to get current OS setting.

### Development

The project includesa node webserver. Run the following, then visit [http://localhost:8080](http://localhost:8080) in your browser.

```bash
git clone https://github.com/orca-scan/appearance-changed-event
cd appearance-changed-event
npm install
npm start
```

### Update .min files

To create a new version of the minified [appearance-changed-event.min.js](dist/appearance-changed-event.min.js) file from source, tweak the version number in `package.json` and run `npm run build`

## History

For change-log, check [releases](https://github.com/orca-scan/appearance-changed-event/releases).

