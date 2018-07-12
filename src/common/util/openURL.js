
import hybrid from '@fe-base/hybrid';
import {parse} from '@fe-base/httpurl';
import {isBeibei} from '@fe-base/env';
export const openURL = (url, callback, openNewWebview=true) => {
    let utmSource = parse(window.location.href).params.utm_source;
    let utmSourceFromUrl = parse(url).params.utm_source;
    if (utmSource && !utmSourceFromUrl) {
        url += /\?/i.test(url) ? `&utm_source=${utmSource}` : `?utm_source=${utmSource}`;
    }
    if (openNewWebview && isBeibei()) {
        hybrid('openURL').openURL({
            url: url
        }, function(error, result) {
            callback && callback(result, error);
        });
    }else{
        window.location.href = url;
    }
}