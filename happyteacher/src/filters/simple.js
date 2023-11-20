 
import BAD_WORDS from "./badwords";
// import { word_sent } from "vntk";
var vntk = require('vntk');
var tokenizer = vntk.tokenizer();

function replaceBadWords() {
    const queue = [document.body];
    while (queue.length > 0) {
        const node = queue.pop();
        switch (node.nodeType) {
            case Node.TEXT_NODE:
                if (node.nodeValue) {
                    const nodeValue = node.nodeValue.toString();
                    console.log(word_sent(nodeValue));
                    if (nodeValue.includes("chửi như tó")) {
                        node.nodeValue = "hihihi";
                    }
                }
                break;
            case Node.ELEMENT_NODE:
                for(let i = 0; i < node.childNodes.length; i++) {
                    const obj = node.childNodes[i];
                    if (obj.tagName === "SCRIPT" || obj.tagName === "STYLE") {
                        continue;
                    }
                    queue.push(node.childNodes[i]);
                }
                break;
            default:
                break;
        }
    }

}

replaceBadWords();