/*
 * @Author: your name
 * @Date: 2020-12-25 15:07:48
 * @LastEditTime: 2020-12-28 11:55:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \chrome_extension\background.ts
 */

// chrome 的 TypeScript声明文件地址：https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/chrome
/// <reference path="./index.d.ts" />

chrome.tabs.query({currentWindow:true},function(tabs){
    console.log(tabs);
    // window.requestFileSystem()

})

// chrome.fileSystem.chooseEntry({type:'openDirectory'},function(Entry:any){
//     console.log(Entry);
//     Entry.getDirectory('new_folder',{create:true},function (subEntry:any) {
//         console.log(subEntry);
        
        
//     })
// })

// chrome.fileSystemProvider