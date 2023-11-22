
// import BAD_WORDS from "./badwords";

// const addedComments = {};
let totalCmts = 0;
function replaceBadWords() {
    let data = [];

    const queue = [];
    queue.push(document.body);
    while (queue.length > 0) {
        const node = queue.pop();
        if (node?.xChecked) {
            continue;
        }
        switch (node.nodeType) {
            case Node.TEXT_NODE:
                const nodeValue = node.nodeValue.toString().trim();
                node.xChecked = true;
                if (nodeValue) {
                    data.push(nodeValue + "\n");
                }
                break;
        
            case Node.ELEMENT_NODE:
                if (node.childNodes.length > 0 && node.children.length === 0) {
                    if (node?.xChecked) {
                        node.xChecked = true;
                    }
                }
                for(let i = 0; i < node.childNodes.length; i++) {
                    const obj = node.childNodes[i];

                    if (obj.tagName === "SCRIPT" || obj.tagName === "STYLE") {
                        continue;
                    }

                    if (obj.tagName === "SPAN") {
                       
                        // const mobj = /View\smore\scomments/i;
                        // const isFb = window.location.host.includes('facebook');
                        // obj.click();
                        if (obj.children.length === 0) {
                            obj.xChecked = true;
                            data.push(obj.textContent);
                        }
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
    console.log("Page is fully loaded");
    check();
    const timer = setInterval(() => {
        check();
        if (totalCmts > 2000000) {
            createDownloadData();
            totalCmts = 0;
            clearInterval(timer);
        }
    }, 15000);
};


function check() {
    const key = getNewKey();
    const rows = replaceBadWords();
    if (rows.length > 0) {
        localStorage.setItem(key, JSON.stringify(rows));
    }
    
}

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
    let allRows = [];
    for (let [key, value] of Object.entries(localStorage)) {
        console.log(key);
        if (key.startsWith('data_x_')) {
            try {
                const rows = JSON.parse(value);
                for(let line of rows) {
                    allRows.push(line);
                }
            } catch (error) {
                console.log(error);
                localStorage.removeItem(key);
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