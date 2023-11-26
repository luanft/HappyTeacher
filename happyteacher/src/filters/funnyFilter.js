import { getBadSentences } from './badwords';
import { BWTree } from './bwtree';

function getBadWordTree() {
    const tree = new BWTree();
    for (const [badSentence, goodSentence] of getBadSentences()) {
        tree.train(badSentence, goodSentence);
    }
    return tree;
}
const BadWordTree = getBadWordTree();
// BadWordTree.clean("Mẹ đưa tin xàm cứ");
export default BadWordTree;


