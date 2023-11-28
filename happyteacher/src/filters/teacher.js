
// const addedComments = {};
import BadWordTree from "./funnyFilter";

function replaceBadWords(rule) {
    const queue = [];
    queue.push(document.body);
    while (queue.length > 0) {
        const node = queue.pop();
        if (node?.xChecked) {
            continue;
        }
        switch (node.nodeType) {
            case Node.TEXT_NODE:
                const nodeValue = node.nodeValue.toString();
                node.xChecked = true;
                if (nodeValue) {
                    const { text, replaced } = rule.clean(nodeValue);
                    if (replaced) {
                        node.nodeValue = `[1fontWeight ] ${text}`;
                        node.style.fontWeight = '900';
                    }
                    // if (newValue !== nodeValue) {
                    //     node.nodeValue = `${nodeValue} => ${rule.clean(nodeValue)}`;
                    // } else {
                    //     node.nodeValue = `${nodeValue}`;
                    // }   
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
                        if (obj.children.length === 0) {
                            obj.xChecked = true;
                        }
                    }
                    queue.push(obj);
                }
                break;
            default:
                break;
        }
    }
    console.log(`Done! clean data`);
}

window.onload = () => {
    // console.clear();
    console.log("Page is fully loaded");
    replaceBadWords(BadWordTree);
    setInterval(() => {
        replaceBadWords(BadWordTree);
    }, 1000);
};


chrome.runtime.onMessage.addListener(
(request, sender, sendResponse) => {
    if (request.action === "download") {
        // createDownloadData();
    }
});