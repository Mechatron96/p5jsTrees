class Node{
    constructor(xpos, ypos, data){
        this.xpos = xpos;
        this.ypos = ypos;
        this.data = data;
        this.children = [];
    }
    drawNode(){
        //Draw Default Node
        console.log("Drawing Node at: " + this.xpos + " - " + this.ypos);
    }
}

class Tree{
    constructor(){
        this.root = null;
    }

    findBFS(finddata){
        var queue = [this.root];
        while(queue.length){
            var node = queue.shift();
            console.log(node.data);
            if(node.data === finddata) {
                return node;
            }
            for (var i = 0; i < node.children.length; i++){
                queue.push(node.children[i]);
            }
        }
        return null;
    }

    /* Following Function Determines Whether or Not Node is in Tree */
    contains(data){
        return this.findBFS(data) ? true : false;
    }

    add(xpos, ypos, data, toNodeData=null){
        var node = new Node(xpos, ypos, data).drawNode();
        //Return parent of the node being added
        var parent = toNodeData ? this.findBFS(toNodeData) : null;
        if (parent){
            parent.children.push(node);
        } else {
            if(!this.root){
                this.root = node;
            } else {
                console.log("Root node is already assigned");
            }
        }

    }


    /* Following Function Removes Nodes */
    remove(data){
        if(this.root.data == data){
            this.root = null;
        }
        var queue = [this.root];
        while(queue.length){
            var node = queue.shift();
            for(var i = 0; i< node.children.length; i++){
                if(node.children[i].data == data){
                    node.children.splice(i,1);
                } else {
                    queue.push(node.children[i]);
                }
            }
     
        }
    }

}

/* *********************** */
/* Test Code Belongs Here */
/* *********************** */

var tree = new Tree();
tree.add(200, 400, 'ceo', '');
tree.add(400, 500, 'cto', 'ceo');
tree.add('dev1', 'cto');
tree.add('dev2', 'cto');
tree.add('dev3', 'cto');
tree.add('cfo', 'ceo');
tree.add('accountant', 'cfo');
tree.add('cmo', 'ceo');