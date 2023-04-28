//@ts-nocheck
class TreeNode {
    constructor(name, content = [], prev, type) {
      this.name = name
      this.content = content
      this.prev = prev
      this.type = type
    }
  }
  
    export function findNodeName(tree, targetName) {
        if (tree.name === targetName) {
            return tree
        }
        for (const child of tree.content) {
            const result = findNodeName(child, targetName)
            if (result) {
                return result
            }
        }
    
        return null
  }

  export function findNodeInDir (tree, targetName){
    for(let i = 0; i < tree?.content?.length; i++){
        if(tree?.content[i].name == targetName){
            return tree?.content[i]
        }
    }
    return null
}

export default TreeNode