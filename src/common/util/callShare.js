import hybrid from '@fe-base/hybrid';
export const callShare = (opt, callback) => {
    hybrid('share').share(opt, () => {
        callback && callback();
    });
}