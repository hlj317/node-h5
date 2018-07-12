import hybrid from '@fe-base/hybrid';
import Clipboard from 'clipboard';
import {note} from '@fe-base/popup';
export const copyCode = (str) => {
    if (!isH5) {
        hybrid('copy').copy({
            data: JSON.stringify(str),
        }, (resp) => {
            /*
             * resp.data 安卓返回
             * resp.success ios返回
             * 返回字段不同的原因是: ios之前没有返回任何字段，为避免影响之前的代码，换了新的字段。
             * 贝贝7.5改版
             */
            if (resp.data || resp.success) {
                hybrid('showToast').showToast({
                    title: '复制成功',
                    long: false,
                });
            }
        });
    }
};

let clipboard;
export const copyCodeH5 = (inviteCode) => {
    const isClickCopy = document.queryCommandSupported && document.queryCommandSupported('copy');
    if (isClickCopy && typeof Clipboard === 'function') {
        clipboard = new Clipboard('.J_copy_btn', {
            text(trigger) {
                return inviteCode;
            },
        });
        clipboard.on('success', () => {
            note(`邀请码已复制成功`, {
                closeTime: 1000,
                position: 'center',
                mask: false,
            });
        });
        clipboard.on('error', () => {
            note(`长按并复制全部邀请码！`, {
                closeTime: 1000,
                position: 'center',
                mask: false,
            });
        });
    }
};