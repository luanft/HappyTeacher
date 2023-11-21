
// import BAD_WORDS from "./badwords";

// const addedComments = {};
let dataKeys = [];
let totalCmts = 0;
function replaceBadWords() {
    let data = [];

    const queue = [];
    queue.push(document.body);
    while (queue.length > 0) {
        const node = queue.pop();
        switch (node.nodeType) {
            case Node.TEXT_NODE:
                
                const nodeValue = node.nodeValue.toString().trim();
                if (nodeValue) {
                    data.push(nodeValue + "\n");
                }
                break;
        
            case Node.ELEMENT_NODE:
                if (node.childNodes.length > 0 && node.children.length === 0) {
                    if (node?.setAttribute) {
                        node?.setAttribute('data-x-checked', true);
                    }
                }
                for(let i = 0; i < node.childNodes.length; i++) {
                    const obj = node.childNodes[i];

                    if (obj.tagName === "SCRIPT" || obj.tagName === "STYLE") {
                        continue;
                    }

                    if (obj?.getAttribute('data-x-checked')) {
                        console.log("Ignored checked node");
                        continue;
                    }

                    if (obj.tagName === "SPAN") {
                        obj?.setAttribute('data-x-checked', true);
                    }
                    queue.push(obj);
                }
                break;
            default:
                break;
        }
    }
    totalCmts += data.length;
    console.log(`Done! write ${data.length} rows of data. Total: ${totalCmts}`);
    return data;
}

window.onload = () => {
    console.log("page is fully loaded");
    const key = getNewKey();
    dataKeys.push(key);
    localStorage.setItem(key, JSON.stringify(replaceBadWords()));
    setInterval(() => {
        const key = getNewKey();
        dataKeys.push(key);
        localStorage.setItem(key, JSON.stringify(replaceBadWords()));
    }, 10000);
};



function getNewKey() {
    const currentdate = new Date();
    const key = 'data_x_' + currentdate.getDate() + ""
        + (currentdate.getMonth() + 1) + ""
        + currentdate.getFullYear() + ""
        + currentdate.getHours() + ""
        + currentdate.getMinutes() + ""
        + currentdate.getSeconds();
    return key;
}

function createDownloadData() {
    console.log("Create download data...");
    const processed = {};
    let allRows = [];
    for(let key of dataKeys) {
        console.log(key);
        if (key.startsWith('data_x_')) {
            const rows = JSON.parse(localStorage.getItem(key));
            for(let line of rows) {
                if (processed[line]) {
                    continue;
                }
                processed[line] = true;
                allRows.push(line);
            }
        }
        
    }

    const currentdate = new Date();
    const filename = 'data_cmt_' + currentdate.getDate() + ""
        + (currentdate.getMonth()+1)  + ""
        + currentdate.getFullYear() + ""
        + currentdate.getHours() + ""
        + currentdate.getMinutes() + ""
        + currentdate.getSeconds() + ".txt";
    
        downloadFile(filename, allRows);

}

function downloadFile(name, contents) {
    const blob = new Blob(contents, {type: 'text/plain;charset=utf-8'});
    const dlink = document.createElement('a');
    dlink.download = name;
    dlink.href = window.URL.createObjectURL(blob);
    dlink.onclick = function() {
        // revokeObjectURL needs a delay to work properly
        var that = this;
        setTimeout(function() {
            window.URL.revokeObjectURL(that.href);
        }, 1500);
    };
    dlink.click();
    dlink.remove();
}

chrome.runtime.onMessage.addListener(
(request, sender, sendResponse) => {
    console.log(request);
    if (request.action === "download") {
        createDownloadData();
    }
});