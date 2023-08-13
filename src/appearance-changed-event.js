/*!
 * appearance-changed-event.js - v@version@
 * Cross-browser script that fires an `appearance-changed` event when system theme changes (also sets window.appearance)
 * https://github.com/orca-scan/appearance-changed-event
 */
(function (window, document) {

    'use strict';

    // exit if window.matchMedia and addEventListener are not supported
    if (typeof window.matchMedia !== 'function' || !('addEventListener' in window.matchMedia('screen'))) {
        console.warn('System appearance detection not supported in this browser');
        return;
    }

    var matchMediaDark = window.matchMedia('(prefers-color-scheme: dark)');
    var matchMediaLight = window.matchMedia('(prefers-color-scheme: light)');

    // listen for changes to the appearance preference
    matchMediaDark.addEventListener('change', function(e) {
        if (e.matches) {
            window.appearance = 'dark';
            dispatchCustomEvent(document, 'appearance-changed', 'dark', true);
        }
    });
    matchMediaLight.addEventListener('change', function(e) {
        if (e.matches) {
            window.appearance = 'light';
            dispatchCustomEvent(document, 'appearance-changed', 'light', true);
        }
    });

    // check initial appearance
    if (matchMediaDark.matches) {
        window.appearance = 'dark';
    }
    else if (matchMediaLight.matches) {
        window.appearance = 'light';
    }

    /**
     * Fires a custom event on an element
     * @param {HTMLElement|window|document} el - item to fire event on
     * @param {string} eventName - name of the event
     * @param {object} detail - optional event data to pass to handler
     * @param {boolean} bubbles - should the event bubble up the tree (default false)
     * @param {boolean} cancelable - can the event be canceled (default false)
     * @returns {boolean} false if the event should be canceled, otherwise true
     */
    function dispatchCustomEvent(el, eventName, detail, bubbles, cancelable) {

        // patch CustomEvent to allow constructor creation (IE/Chrome)
        if (typeof window.CustomEvent !== 'function') {

            window.CustomEvent = function (event, params) {

                params = params || { bubbles: false, cancelable: false, detail: undefined };

                var evt = document.createEvent('CustomEvent');
                evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
                return evt;
            };

            window.CustomEvent.prototype = window.Event.prototype;
        }

        if (el) {

            var eventParams = {};

            if (detail) eventParams.detail = detail;

            eventParams.bubbles = (bubbles === true);
            eventParams.cancelable = (cancelable === true);

            return el.dispatchEvent(new CustomEvent(eventName, eventParams));
        }

        return true;
    }

}(window, document));
