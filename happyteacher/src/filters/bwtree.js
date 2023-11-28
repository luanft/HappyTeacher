
// import md5 from 'md5';
const md5 = require('md5');

class Node {
    constructor(token) {
        this.token = token;
        this.childs = {};
        this.hash = token ? md5(token) : '';
        this.replacement = null;
    }

    getId() {
        return this.hash;
    }

    match(token) {
        const tokenHash = md5(token.toLowerCase());
        const next = this.childs[tokenHash];
        if (next) {
            return [true, next];
        }
        return [false, null];
    }

    addChild(token) {
        const tokenHash = md5(token);
        if (!this.childs[tokenHash]) {
            this.childs[tokenHash] = new Node(token);
        }
        return this.childs[tokenHash];
    }
    
    setReplacement(text) {
        this.replacement = text;
    }


    /**
     * 
     * @param {String} badWord 
     * @param {String} goodWord 
     */
    addReplacement(badWord, goodWord) {
        const tokens = badWord.toLowerCase().split(" ").reverse();

        const first = tokens.pop();
        if (!first) {
            return;
        }
        let node = this.getRoot(first);
        while (tokens.length > 0) {
            const next = tokens.pop();
            if (!next) {
                continue;
            }
            node = node.addChild(next);
        }
        node.setReplacement(goodWord);
    }

    getRoot(token) {
        const tokenHash = md5(token.toLowerCase());
        if (!this.childs[tokenHash]) {
            this.childs[tokenHash] = new Node(token);
        }
        return this.childs[tokenHash];
    }
}

export class BWTree {
    constructor() {
        this.root = new Node(null);
    }

    train(badSentence, goodSentence) {
        this.root.addReplacement(badSentence, goodSentence);
    }

    preprocessString(rawString) {
        const  specialCharacters = `!"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~`;
        const newString = Array.from(rawString).map(c => specialCharacters.indexOf(c) > -1 ? ` ${c} `: c);
        return newString.join('');
    }

    postProcessingString(rawString) {
        const tokens = rawString.split(' ').filter(obj => obj !== '');
        const endSentenceChars = `!+,-.:;?`;
        const allChars = `!"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~`;
        return tokens.reduce((newStr, tok) => {
            tok = tok.trim()
            if (endSentenceChars.indexOf(tok) > -1) {
                return newStr + tok;
            }

            if (allChars.indexOf(tok) > -1) {
                return newStr + tok;    
            }

            return newStr + ' ' + tok;
        }, "");
    }

    processCharacter(c) {
        c = c.trim();
        const specialCharacters = `,.:;<=`;
        if (specialCharacters.indexOf(c) > -1) {
            return `${c} `;
        }
        return c;
    }

    /**
     * 
     * @param {String} rawStr 
     */
    clean(rawStr) {
        rawStr = this.preprocessString(rawStr);
        const newStrings = [];
        const tokens = rawStr.split(" ").reverse();
        let [matched, node] = [false, this.root];
        let matchedNodes = [];
        let replaced = false;
        while(tokens.length > 0) {
            const word = tokens.pop();
            if (!word) {
                continue;
            }
            [matched, node] = node.match(word);
            if (matched) {
                matchedNodes.push(node);
            }else {
                replaced = replaced || this.processMatchedNode(matchedNodes, newStrings);
                matchedNodes = [];
                [matched, node] = [false, this.root];
                newStrings.push(word);
            }
        }
        replaced = replaced || this.processMatchedNode(matchedNodes, newStrings);
        const cleanText = newStrings.map(obj => obj.trim()).join(" ");
        return { text: this.postProcessingString(cleanText), replaced };

    }

    

    processMatchedNode(matchedNodes, newStrings) {
        if (matchedNodes.length > 0) {
            const lastNode = matchedNodes[matchedNodes.length - 1];
            if (lastNode.replacement) {
                newStrings.push(lastNode.replacement);
                return true;
            } else {
                newStrings.push(...matchedNodes.map((obj) => obj.token));
                return false;

            }
        }
        return false;
    }
}
