# appearance-changed-event

A 1k pure JS script that fires an `appearance-changed` event when system theme changes, it also sets global `window.appearance` to `light` or `dark`.

## Usage

Add [appearance-changed-event.min.js](dist/appearance-changed-event.min.js) to your page and start listening for `appearance-changed` event.

```js
window.addEventListener('appearance-changed', function(e) {
  console.log(e.detail); // `light`, `dark`
});
```

Check `window.appearance` at any time, to check current setting.

### Development

The project includes everything needed to tweak, including a node webserver. Run the following, then visit [http://localhost:8080](http://localhost:8080) in your browser.

_You can test on a desktop using [Device Mode](https://developers.google.com/web/tools/chrome-devtools/device-mode/) in Google Chrome._

```bash
git clone https://github.com/orca-scan/appearance-changed-event
cd appearance-changed-event
npm install
npm start
```

### Update .min files

To create a new version of the minified [appearance-changed-event.min.js](dist/appearance-changed-event.min.js) file from source, tweak the version number in `package.json` and run the following:

```bash
npm run build
```

## History

For change-log, check [releases](https://github.com/orca-scan/appearance-changed-event/releases).

