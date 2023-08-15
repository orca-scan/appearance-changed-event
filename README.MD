# appearance-changed-event

Adds `appearance-changed` event to the DOM to detect OS theme changes, using 1k of pure JavaScript.

## Usage

Add [appearance-changed-event.min.js](dist/appearance-changed-event.min.js) to your page and start listening for `appearance-changed` event.

```js
// fires every time the OS theme changes
window.addEventListener('appearance-changed', function(e) {
  console.log(e.detail); // `light`, `dark`
});
```

It also exposes `window.appearance` which you can use to detect the current OS theme:
```js
switch (window.appearance) {
    
    case 'light': {
       // do some light theme stuff
    } break;

    case 'dark': {
       // do some dark theme stuff
    } break;
}
```

### Development

The project includes a node server, run the following then visit [http://localhost:8080](http://localhost:8080):

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


## License

Licensed under [MIT License](LICENSE) &copy; Orca Scan, build a [Barcode Scanner app](https://orcascan.com) without code.