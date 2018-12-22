const {readFile,readFileSync} = require('fs');
const path = require('path');
setImmediate(()=> console.log('[阶段3.immediate] immediate 回调1'+'@4'));
setImmediate(()=> console.log('[阶段3.immediate] immediate 回调2'+'@5'));
setImmediate(()=> console.log('[阶段3.immediate] immediate 回调3'+'@6'));

Promise.resolve().then(()=>{
    console.log('[...带切入下一阶段] promise 回调1'+'@1');
    setImmediate(()=>{
        console.log('[阶段3.immediate] promise 回调1 增加的immediate 回调4'+'@7');
        setImmediate(()=>{
            console.log('[阶段3.immediate] promise 回调1 增加的immediate 回调4'+'@18');
        })
    })
})

readFile('../package.json','utf-8',data => {
    console.log('[阶段2...IO 回调] 读文件回调1'+'@2');
    readFile('../package.json','utf-8',data => {
        console.log('[阶段2...IO 回调] 读文件回调2'+'@13');
        setTimeout(()=>{
            console.log('[阶段3.immediate] promise 回调2 增加的immediate 回调4'+'@14');
        },0);
        readFile('../package.json','utf-8',data => {
            console.log('[阶段2...IO 回调] 读文件回调2'+'@19');
        })
    })
    setImmediate(()=>{
        console.log('[阶段3.immediate] immediate 回调5'+'@8');
        Promise.resolve().then(()=>{
            console.log('[...带切入下一阶段] promise 回调2'+'@15');
            process.nextTick(()=>{
                console.log('[...待切入下一阶段] promise 回调2增加的nextTick回调5'+'@17');
            })
        }).then(()=>{
            console.log('[...带切入下一阶段] promise 回调3'+'@16');
        })
    })
    setImmediate(()=>{
        console.log('[阶段3.immediate] immediate 回调6'+'@9');
        process.nextTick(()=>{
            console.log('[...待切入下一阶段] promise 回调5增加的nextTick回调6'+'@11');
        })
        console.log('[...待切入下一阶段] 这块正在同步阻塞的读一大文件'+'@10');
        const video = readFileSync(path.join(__dirname, './1.jpg'),'utf-8');
        process.nextTick(()=>{
            console.log('[...待切入下一阶段] promise 回调5增加的nextTick回调7'+'@12');
        })
        readFile('../package.json','utf-8',data => {
            console.log('[阶段2...IO 回调] 读文件回调2'+'@20');
            setImmediate(()=>{
                console.log('[阶段3.immediate] 读文件回调2 增加的 immediate 回调6'+'@22');
            });
            setTimeout(()=>{
                console.log('[阶段1...定时器] 定时器回调8'+'@21');
            },0);
        });
    });
    process.nextTick(()=>{
        console.log('[...待切入下一阶段] promise 回调5增加的nextTick回调7'+'@3');
    })
})