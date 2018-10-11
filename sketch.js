/*
//Class of a Single Node
class Node{
    constructor(xpos, ypos, data){
        this.xpos = xpos;
        this.ypos = ypos;
        this.data = data;
        this.children = [];   
    }
}

//Class Defining the Tree Graphics
class TreeGraphics{
    constructor(nodeColor, textColor, textSize, lineStroke ,width, length, rad){
        this.nodeColor = nodeColor;
        this.textColor = textColor;
        this.textSize = textSize;
        this.lineStroke = lineStroke;
        this.width = width;
        this.length = length;
        this.rad = rad;
    }



    drawNode(node){
        fill(this.nodeColor);
        rect(node.xpos, node.ypos, this.width, this.length, this.rad);
        push();
        fill(this.textColor);
        textSize(this.textColor);
        text(node.data, this.xpos+10, this.ypos+15);
        pop();
        return "Node Created";
    }
    
    drawLine(parent, node){
        stroke(this.lineStroke);
        line((parent.xpos + this.width/2), (parent.ypos + this.height/2), (node.xpos + this.width/2), (node.ypos + this.height/2));
        return "Line Created";
    }


    changeNodeColor(nodeColor){
        return this.nodeColor = nodeColor;
    }
    changeNodeColor(textColor){
        return this.textColor = textColor;
    }
    changetextSize(Size){
        return this.textSize = Size;
    }
    changelineStroke(line){
        return this.lineStroke = line;
    }
    changeWidth(w){
        return this.width = w;
    }
    changeHeight(l){
        return this.length = l;
    }
    changeRad(r){
        return this.rad = r;
    }

 
}
*/

function setup(){
    createCanvas(1000, 500)
    background(75);
}
/*
function draw(){
    root = new Node(300, 400, "Root")
    Graphics = new TreeGraphics(255, 0, 12, 255, 200, 50, 5);
    console.log(Graphics.drawNode(root));
}
*/


//Demo Draw Function 
function draw(){
    //first box
    var xpos1 = 500;
    var ypos1 = 100;
    rect(xpos1, ypos1, 50, 25, 5);
    fill(255);
    push();
    fill(0);
    text("root", xpos1+20, ypos1+8, 50, 100);
    pop();

    //second box
    var xpos2 = 400;
    var ypos2 = 150;
    rect(xpos2,ypos2, 50, 25, 5);
    fill(255)

    //thrid box
    var xpos3 = 600;
    var ypos3 = 150;
    rect(xpos3, ypos3, 50, 25, 5);
    fill(255);
    
    
    //line from frist box to second box
    line(xpos1 + 25, ypos1 + 12, xpos2 + 25, ypos2 + 12);
    stroke(255);
    line(xpos1 + 25, ypos1 + 12, xpos3 + 25, ypos3 + 12);
    stroke(255); 
}


