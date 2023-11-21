
import BAD_WORDS from "./badwords";


function replaceBadWords() {
    let data = [];
    const queue = [document.body];
    while (queue.length > 0) {
        const node = queue.pop();
        switch (node.nodeType) {
            case Node.TEXT_NODE:
                const nodeValue = node.nodeValue.toString().trim();
                if (nodeValue) {
                    // console.log(word_sent(nodeValue));
                    // if (nodeValue.includes("chửi như tó")) {
                    //     node.nodeValue = "hihihi";
                    // }
                    data.push(nodeValue);
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
    return data.filter((value, index, self) =>
        index === self.findIndex((t) => (
        t === value
        ))
    );
}

window.onload = (event) => {
    console.log("page is fully loaded");
    var currentdate = new Date();
    var key = 'data_x_' + currentdate.getDate() + ""
                    + (currentdate.getMonth()+1)  + ""
                    + currentdate.getFullYear() + ""
                    + currentdate.getHours() + ""
                    + currentdate.getMinutes() + ""
                    + currentdate.getSeconds();
    localStorage.setItem(key, replaceBadWords());
    console.log("Done! write data");
};
