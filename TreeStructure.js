//////////////////////////////////////////
/* ********************************* *//*
Following class creates an node object, that holds the attributes for
xposition, yposition, nodeColor and data. 

To use this class simply call the constructor:
node = new Node(xpos, ypos, colorNode, data);

To Access the attributes of object use the following:
node.xpos;
node.ypos;

To Delete an node object use the following:
node = null;

*//*********************************** */
///////////////////////////////////////////


class Node {
    constructor(xpos, ypos, nodeColorR, nodeColorG, nodeColorB, textColorR,
        textColorG, textColorB, textSize, width, height, rad, data) {
        this.xpos = xpos;
        this.ypos = ypos;
        this.nodeColorR = nodeColorR;
        this.nodeColorG = nodeColorG;
        this.nodeColorB = nodeColorB;
        this.textColorR = textColorR;
        this.textColorG = textColorG;
        this.textColorB = textColorB
        this.textSize = textSize;
        this.width = width;
        this.height = height;
        this.rad = rad;
        this.data = data;
    }
    getposition() {
        var current_position = []
        current_position[0] = this.xpos
        current_position[1] = this.ypos
        current_position[2] = this.width
        current_position[3] = this.height
        return current_position

    }

    changeNodeColor(nodeColorR, nodeColorG, nodeColorB) {
        if ((nodeColorR && nodeColorG && nodeColorB) >= 0 && 255) {
            this.nodeColorR = nodeColorR;
            this.nodeColorG = nodeColorG;
            this.nodeColorB = nodeColorB;
            return "Color Changed!";
        }
        return "Error in Input";
    }

    changeTextColor(textColorR, textColorG, textColorB) {
        if ((textColorR && textColorG && textColorB) >= 0 && 255) {
            this.textColorR = textColorR;
            this.textColorG = textColorG;
            this.textColorB = textColorB;
            return "Text Color Changed!";
        }
        return "Error in Input";
    }

    changeTextSize(textSize) {
        if (textSize > 5) {
            this.textSize = textSize;
            return "Text Size Changed!";
        }
        return "Error in Input";
    }

    changeSizeOfNode(width, height, rad) {
        if ((width && height && rad) >= 0) {
            this.width = width;
            this.height = height;
            this.rad = rad;
            return "Change Size of Node!";
        }
        return "Error in Input";
    }

}



/* ************************************* *//*
Follow class creates an Graphic handler object, that hold all the attributes and
methods for drawing Graphics.

To use use this class simply call the constructor:

To use the methods:
    - Drawing Nodes
        Graphic.drawNode(NodeObject Node); --> return string if successful
    - Writing Nodes
        Graphic.drawNode(NodeObject Node); --> return string if successful
    - Drawing Lines between Nodes
        Graphic.drawLine(NodeObject Node, NodeObject Node); --> return string if successful

*//* ************************************* */

//Class Defining the Tree Graphics

class TreeGraphics {
    constructor(lineStroke) {
        this.lineStroke = lineStroke;

    }

    drawNode(node) {
        if (node != null) {
            push();
            fill(node.nodeColorR, node.nodeColorG, node.nodeColorB);
            rect(node.xpos, node.ypos, node.width, node.height, node.rad);
            pop();
            return "Node Created";
        }
        return "Node is null"
    }

    writeNode(node) {
        if (node != null) {
            push();
            fill(node.textColorR, node.textColorG, node.textColorB);
            textSize(node.textSize);
            text(node.data, node.xpos + node.width / 3, node.ypos + node.height / 3);
            pop();
            return "Text Added";
        }
        return "Node is null"
    }

    drawLine(parent, node) {
        if (parent != null && node != null) {
            push();
            stroke(this.lineStroke);
            line(parent.xpos + (node.width / 2), parent.ypos + (node.height) / 2, node.xpos + (node.width / 2), node.ypos + (node.height / 2));
            pop();
            return "Line Created";
        }
        return "Parent or node is null"
    }

    changelineStroke(line) {
        if (line > 0) {
            this.lineStroke = line;
            return "Line Stroke Changed!";
        }
        return "Error in input";
    }
}


//////////////////////////////////////////
//////////////////////////////////////////
/* ********************************** *//*
The Cases for following Classes above
*//* *********************************** */
//////////////////////////////////////////
//////////////////////////////////////////

var allaround ;
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(75);
    allaround =0;
}
function auto_tree(root, tree_size, space, height) {
    node_data = root.getposition();
    width = node_data[2];
    total_size_of_node = node_data[2] * tree_size + 50 * (tree_size - 1);
    mid_point = node_data[0] + node_data[2] / 2;
    starting_point = mid_point - (total_size_of_node / 2)
    var node1 = [];
    var i = 0;
    for (i = 0; i < tree_size; i++) {
        node1[i] = new Node(starting_point, height, 255, 255, 255, 0, 0, 0, 12, 200, 50, 5, "Node1");
        starting_point = starting_point + width + space;

    }

    return node1;
}
//function executes when ever mouse is pressed 
function mousePressed(){


    //checks whether point was inside the area when clicked
    if(collidePointRect(mouseX,mouseY,windowWidth / 2 - 100, 50, 200, 50)==true){
        allaround = allaround^1;
    }
}
function draw() {
    /*  Create Nodes Test
    Node(x-position, y-position, colorNodeR, colorNodeG, colorNodeB
        textColorR, textColorG, textColorB, SizeText, Width, Height, Rad, TextinNode) */
    createCanvas(windowWidth, windowHeight);
    background(75);
    //allaround =0;
    root = new Node(windowWidth / 2 - 100, 50, 255, 255, 255, 0, 0, 0, 12, 200, 50, 5, "Click To veiw");
    var node1 = [];
    var node2 = [];
    var tree_size = 10;
    node1 = auto_tree(root, tree_size, 100, 500);
    /*node1[0] = new Node(150, 200, 255, 255, 255, 0, 0, 0, 12, 200, 50, 5, "Node1");
    node1[1] = new Node(450, 200, 255, 255, 255, 0, 0, 0, 12, 200, 50, 5, "Node2");
    node1[2] = new Node(100, 300, 255, 255, 255, 0, 0, 0, 12, 200, 50, 5, "Node3");
    node1[3] = new Node(500, 300, 255, 255, 255, 0, 0, 0, 12, 200, 50, 5, "Node4");*/
    node2 = auto_tree(node1[3], 5, 50, 600);

    Graphics = new TreeGraphics(255);
    console.log(Graphics.drawNode(root));
    console.log(collidePointRect(mouseX,mouseY,windowWidth / 2 - 100, 50, 200, 50));
    console.log(Graphics.writeNode(root));
    /* Change properties Test
    changeNodeColor(colorNodeR, colorNodeG, colorNodeB)
    changeTextColor(textColorR, textColorG, colorNodeB)
    changeTextSize(Size) */

    /*console.log(node1[3].changeNodeColor(255, 44, 22));
    console.log(node1[3].changeTextColor(33, 255, 53));
    console.log(node1[3].changeTextSize(18));
    console.log(node1[3].changeSizeOfNode(250, 80, 0));
*/
    /* Change stroke of lines text */

    //console.log(Graphics.changelineStroke(100));


    /* The order in which the graphic methods should be running */
    var i = 0;
    if (allaround==1){
        
    for (i = 0; i < tree_size; i++) {
        console.log(Graphics.drawLine(root, node1[i]));
    }
    for (i = 0; i < tree_size; i++) {
        console.log(Graphics.drawLine(node1[3], node2[i]));
    }
    for (i = 0; i < tree_size; i++) {
        console.log(Graphics.drawNode(node1[i]));
    }
    for (i = 0; i < tree_size; i++) {
        console.log(Graphics.drawNode(node2[i]));
    }
    
    for (i = 0; i < tree_size; i++) {
        console.log(Graphics.writeNode(node1[i]));
    }
    for (i = 0; i < tree_size; i++) {
        console.log(Graphics.writeNode(node2[i]));
    }


    }
    




    /*console.log(Graphics.drawLine(root, node1[0]));
    console.log(Graphics.drawLine(root, node1[1]));
    console.log(Graphics.drawLine(node1[0], node1[2]));
    console.log(Graphics.drawLine(node1[1], node1[3]));
    
    console.log(Graphics.drawNode(node1[0]));
    console.log(Graphics.drawNode(node1[1]));
    console.log(Graphics.drawNode(node1[2]));
    console.log(Graphics.drawNode(node1[3]));

    console.log(Graphics.writeNode(root));
    console.log(Graphics.writeNode(node1[0]));
    console.log(Graphics.writeNode(node1[1]));
    console.log(Graphics.writeNode(node1[2]));
    console.log(Graphics.writeNode(node1[3]));*/

}
