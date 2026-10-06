class TrieNode {
  constructor() {
    this.children = {};   // char -> TrieNode
    this.isEnd = false;
  }
}

class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
      const root = new TrieNode();
      
      strs.forEach((word)=>{
        let node = root;
        for (const char of word){
          if (!node.children[char]){
              node.children[char] = new TrieNode();
          }
          node = node.children[char];
        }
        node.isEnd = true;
      })
      
    let node = root;
    let prefix = "";
    
    while (Object.keys(node.children).length === 1  && node.isEnd === false) {
      const char = Object.keys(node.children)[0];;
      prefix += char;
      node = node.children[char]
    }
    
    return prefix;
        
    }
}