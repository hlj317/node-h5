import hybrid from "@fe-base/hybrid";
import { parse } from '@fe-base/httpurl';
import { isBeibei } from '@fe-base/env';
export const openURL = (url, callback, openNewWebview = true) => {
    let utmSource = parse(window.location.href).params.utm_source;
    let utmSourceFromUrl = parse(url).params.utm_source;
    if (utmSource && !utmSourceFromUrl) {
        url += /\?/i.test(url) ? `&utm_source=${utmSource}` : `?utm_source=${utmSource}`;
    }
    if (openNewWebview && isBeibei()) {
        console.log('openURL', isBeibei())
        hybrid('openURL').openURL({
            url: url
        }, function (error, result) {
            callback && callback(result, error);
        });
    } else {
        window.location.href = url;
    }
}

// 加载动画的操作
export const handleLoading = (type) => {
    if (type === 'hide') {
        hybrid('dismissLoading').dismissLoading();
    } else if (type === 'show') {
        hybrid('showLoading').showLoading();
    }
}

// 分享按钮隐藏
export const hideShare = () => {
    hybrid('customNavBarRightBtn').customNavBarRightBtn({
        hidden: true
    });
}
// 右上角按钮设置
export const setNavigatorRightBtn = ({ title, targetUrl, callback }) => {
    hybrid('customNavBarRightBtn').customNavBarRightBtn({
        title: title
    }, () => {
        callback && callback();
        targetUrl && openURL(targetUrl, () => {
            setNavigatorRightBtn({ title, targetUrl });
        });
    });
}

// export const openURLHiddenTopNav = (url, callback) => {
//     let utmSource = httpurl.uri.params.utm_source;
//     if (utmSource) {
//         url += /\?/i.test(url) ? `&utm_source=${utmSource}` : `?utm_source=${utmSource}`;
//     }
//     if (hybrid.version.gte('1.0.0')) {
//         hybrid && hybrid.config({
//             jsApiList: {
//                 openURL: 'optional'
//             }
//         }, function (error, result) {
//             if (error) {
//                 return;
//             }
//             if (isHighVersion) {
//                 hybrid.openURL({
//                     url: 'http://m.beibei.com?beibeiapp_info=' + encodeURIComponent('{"target":"bb/base/webview","url":"' + url + '","navigationBarHidden":"true","statusBarHidden":"true"}')
//                 }, function (error, result) {
//                     callback && callback(result, error);
//                 });
//             } else {
//                 hybrid.openURL({ url })
//             }

//         });
//     } else {
//         window.location.href = url + '?beibeiapp_info={"target":"' + encodeURIComponent(url) + '","navigationBarHidden":"true","statusBarHidden":"true"}';
//     }
// }
export const callShare = (opt, callback) => {
    hybrid('share').share(opt, () => {
        callback && callback();

    });
}
export const close = (callback) => {
    hybrid('close').close({}, () => {
        callback && callback();
    });
}