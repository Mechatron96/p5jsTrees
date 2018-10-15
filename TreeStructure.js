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


class Node{
    constructor(xpos, ypos, nodeColorR, nodeColorG, nodeColorB, textColorR,
        textColorG, textColorB, textSize, width, height, rad, data){
        this.xpos = xpos;
        this.ypos = ypos;
        this.nodeColorR = nodeColorR;
        this.nodeColorG = nodeColorG;
        this.nodeColorB = nodeColorB;
        this.textColorR = textColorR;
        this.textColorG= textColorG;
        this.textColorB = textColorB
        this.textSize = textSize;
        this.width = width;
        this.height = height;
        this.rad = rad;
        this.data = data;
    }

    changeNodeColor(nodeColorR, nodeColorG, nodeColorB){
        if ((nodeColorR && nodeColorG && nodeColorB) >= 0 && 255){
            this.nodeColorR = nodeColorR;
            this.nodeColorG = nodeColorG;
            this.nodeColorB = nodeColorB;
            return "Color Changed!";
        }
        return "Error in Input";
    }

    changeTextColor(textColorR, textColorG, textColorB){
        if ((textColorR && textColorG && textColorB) >= 0 && 255){ 
            this.textColorR = textColorR;
            this.textColorG = textColorG;
            this.textColorB = textColorB;
            return "Text Color Changed!";
        }
        return "Error in Input";
    }

    changeTextSize(textSize){
        if (textSize > 5){
            this.textSize = textSize;
            return "Text Size Changed!";
        }
        return "Error in Input";
    }
    
    changeSizeOfNode(width, height, rad){
        if((width && height && rad) >= 0){
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

class TreeGraphics{
    constructor(lineStroke){
        this.lineStroke = lineStroke;

    }

    drawNode(node){
        if(node!=null){
            push();
            fill(node.nodeColorR, node.nodeColorG, node.nodeColorB);
            rect(node.xpos, node.ypos, node.width, node.height, node.rad);
            pop();
            return "Node Created";
        }
        return "Node is null"
    }

    writeNode(node){
        if(node != null){
            push();
            fill(node.textColorR, node.textColorG, node.textColorB);
            textSize(node.textSize);
            text(node.data, node.xpos + node.width/3, node.ypos + node.height/3);
            pop();
            return "Text Added";
        }
        return "Node is null"
    }
    
    drawLine(parent, node){
        if (parent != null && node != null){
            push();
            stroke(this.lineStroke);
            line(parent.xpos+(node.width/2), parent.ypos+(node.height)/2, node.xpos+(node.width/2), node.ypos+(node.height/2));
            pop();
            return "Line Created";
        }
        return "Parent or node is null"
    }

    changelineStroke(line){
        if (line > 0){
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


function setup(){
    createCanvas(windowWidth, windowHeight);
    background(75);
}

function draw(){
    /*  Create Nodes Test
    Node(x-position, y-position, colorNodeR, colorNodeG, colorNodeB
        textColorR, textColorG, textColorB, SizeText, Width, Height, Rad, TextinNode) */
    root = new Node(300, 50, 255, 255, 255, 0, 0, 0, 12, 200, 50, 5, "Root");
    node1 = new Node(150, 200, 255, 255, 255, 0, 0, 0, 12, 200, 50, 5, "Node1");
    node2 = new Node(450, 200, 255, 255, 255, 0, 0, 0, 12, 200, 50, 5, "Node2");
    node3 = new Node(100, 300, 255, 255, 255, 0, 0, 0, 12, 200, 50, 5, "Node3");
    node4 = new Node(500, 300, 255, 255, 255, 0, 0, 0, 12, 200, 50, 5, "Node4");
    Graphics = new TreeGraphics(255);
    console.log(Graphics.drawNode(root));

    /* Change properties Test
    changeNodeColor(colorNodeR, colorNodeG, colorNodeB)
    changeTextColor(textColorR, textColorG, colorNodeB)
    changeTextSize(Size) */

    console.log(node4.changeNodeColor(255, 44, 22));
    console.log(node4.changeTextColor(33, 255, 53));
    console.log(node4.changeTextSize(18));
    console.log(node4.changeSizeOfNode(250, 80, 0));

    /* Change stroke of lines text */

    //console.log(Graphics.changelineStroke(100));


    /* The order in which the graphic methods should be running */
    console.log(Graphics.drawLine(root, node1));
    console.log(Graphics.drawLine(root, node2));
    console.log(Graphics.drawLine(node1, node3));
    console.log(Graphics.drawLine(node2, node4));
    
    console.log(Graphics.drawNode(node1));
    console.log(Graphics.drawNode(node2));
    console.log(Graphics.drawNode(node3));
    console.log(Graphics.drawNode(node4));

    console.log(Graphics.writeNode(root));
    console.log(Graphics.writeNode(node1));
    console.log(Graphics.writeNode(node2));
    console.log(Graphics.writeNode(node3));
    console.log(Graphics.writeNode(node4));

}
