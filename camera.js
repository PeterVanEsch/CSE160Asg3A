class Camera{

    constructor(){
        this.fov = 60.0;
        this.eye = new Vector3 ([0,0,0]);
        this.at = new Vector3 ([0,0, -1]);
        this.up = new Vector3 ([0,1, 0]);
        this.viewMatrix=new Matrix4();
        this.viewMatrix.setLookAt(this.eye.elements[0], this.eye.elements[1], this.eye.elements[2],    this.at.elements[0], this.at.elements[1], this.at.elements[2],     this.up.elements[0], this.up.elements[1], this. up.elements[2]);
        this.projectionMatrix=new Matrix4();
        this.projectionMatrix.setPerspective(this.fov, canvas.width/canvas.height, 0.1, 1000);
    }

    forward(){
        var d = new Vector3 ([0,0,0]);
        d.elements[0] = this.at.elements[0] - this.eye.elements[0];
        d.elements[1] = this.at.elements[1] - this.eye.elements[1];
        d.elements[2] = this.at.elements[2] - this.eye.elements[2];
        
        var sum = Math.sqrt(( d.elements[0] * d.elements[0])  + (d.elements[1 ] * d.elements[1])  + ( d.elements[2] * d.elements[2])  )
        d.elements[0] = d.elements[0] / sum;
        d.elements[1] = d.elements[1] / sum;
        d.elements[2] = d.elements[2] / sum;
    
        this.eye.elements[0] += d.elements[0];
        this.eye.elements[1] += d.elements[1];
        this.eye.elements[2] += d.elements[2];
    
    
        this.at.elements[0] += d.elements[0];
        this.at.elements[1] += d.elements[1];
        this.at.elements[2] += d.elements[2]; 
        
    }
    
    backwards(){
        var d = new Vector3 ([0,0,0]);
        d.elements[0] = this.at.elements[0] - this.eye.elements[0];
        d.elements[1] = this.at.elements[1] - this.eye.elements[1];
        d.elements[2] = this.at.elements[2] - this.eye.elements[2];
        
        var sum = Math.sqrt(( d.elements[0] * d.elements[0])  + (d.elements[1 ] * d.elements[1])  + ( d.elements[2] * d.elements[2])  )
        d.elements[0] = d.elements[0] / sum;
        d.elements[1] = d.elements[1] / sum;
        d.elements[2] = d.elements[2] / sum;
    
        this.eye.elements[0] -= d.elements[0];
        this.eye.elements[1] -= d.elements[1];
        this.eye.elements[2] -= d.elements[2];
    
    
        this.at.elements[0] -= d.elements[0];
        this.at.elements[1] -= d.elements[1];
        this.at.elements[2] -= d.elements[2]; 
    }
    
    leftFunc(){
        var d = new Vector3 ([0,0,0]);
        var left = new Vector3 ([0,0,0]);
        d.elements[0] = this.at.elements[0] - this.eye.elements[0];
        d.elements[1] = this.at.elements[1] - this.eye.elements[1];
        d.elements[2] = this.at.elements[2] - this.eye.elements[2];
    
        var sum = Math.sqrt(( d.elements[0] * d.elements[0])  + (d.elements[1 ] * d.elements[1])  + ( d.elements[2] * d.elements[2])  )
        d.elements[0] = d.elements[0] / sum;
        d.elements[1] = d.elements[1] / sum;
        d.elements[2] = d.elements[2] / sum;
    
    
        left.elements[0]= (d.elements[1]* this.up.elements[2]) - (d.elements[2]* this.up.elements[1]);
        left.elements[1] = -((d.elements[0]* this.up.elements[2]) - (d.elements[2]*this.up.elements[0]));
        left.elements[2] = (d.elements[0]* this.up.elements[1]) - (d.elements[1]* this.up.elements[0]);
    
        this.eye.elements[0] -= left.elements[0];
        this.eye.elements[1] -= left.elements[1];
        this.eye.elements[2] -= left.elements[2];
    
        
        this.at.elements[0] -= left.elements[0];
        this.at.elements[1] -= left.elements[1];
        this.at.elements[2] -= left.elements[2]; 
    
    
    
    }
    
    rightFunc(){
        var d = new Vector3 ([0,0,0]);
        var right = new Vector3 ([0,0,0]);
        d.elements[0] = this.at.elements[0] - this.eye.elements[0];
        d.elements[1] = this.at.elements[1] - this.eye.elements[1];
        d.elements[2] = this.at.elements[2] - this.eye.elements[2];
    
        var sum = Math.sqrt(( d.elements[0] * d.elements[0])  + (d.elements[1 ] * d.elements[1])  + ( d.elements[2] * d.elements[2])  )
        d.elements[0] = d.elements[0] / sum;
        d.elements[1] = d.elements[1] / sum;
        d.elements[2] = d.elements[2] / sum;
    
        d.elements[0] = d.elements[0] * -1;
        d.elements[1] = d.elements[1] * -1;
        d.elements[2] = d.elements[2] * -1;
    
    
        right.elements[0]= (d.elements[1]* this.up.elements[2]) - (d.elements[2]* this.up.elements[1]);
        right.elements[1] = -((d.elements[0]* this.up.elements[2]) - (d.elements[2]*this.up.elements[0]));
        right.elements[2] = (d.elements[0]* this.up.elements[1]) - (d.elements[1]* this.up.elements[0]);
    
        this.eye.elements[0] -= right.elements[0];
        this.eye.elements[1] -= right.elements[1];
        this.eye.elements[2] -= right.elements[2];
    
        
        this.at.elements[0] -= right.elements[0];
        this.at.elements[1] -= right.elements[1];
        this.at.elements[2] -= right.elements[2];  
    }
    
    panLeft(){
        var d = new Vector3 ([0,0,0]);
        d.elements[0] = this.at.elements[0] - this.eye.elements[0];
        d.elements[1] = this.at.elements[1] - this.eye.elements[1];
        d.elements[2] = this.at.elements[2] - this.eye.elements[2];
    
        var sum = Math.sqrt(( d.elements[0] * d.elements[0])  + (d.elements[1 ] * d.elements[1])  + ( d.elements[2] * d.elements[2])  )
        d.elements[0] = d.elements[0] / sum;
        d.elements[1] = d.elements[1] / sum;
        d.elements[2] = d.elements[2] / sum;
    
        /*
        r = Math.sqrt(( d.elements[0] * d.elements[0])  + (d.elements[1 ] * d.elements[1]) + (d.elements[2 ] * d.elements[2]))
        theta = Math.atan2( d.elements[1], d.elements[0]);
    
        theta += 0.087266;
    
        var newX = r * Math.cos(theta);
        var newY = r * Math.sin(theta);
        var newZ = d.elements[2]; // Z component remains unchanged
    
        d.elements[0] = newX;
        d.elements[1] = newY;
    
        g_at.elements[0] = g_eye.elements[0] + d.elements[0];
        g_at.elements[1] = g_eye.elements[1] +d.elements[1];
        g_at.elements[2] =g_eye.elements[2] + newZ;
    */
        var  rotationAngle =  -5 * (Math.PI / 180); // Convert 5 degrees to radians
    
        // Calculate the new direction vector after rotating around the up vector
        var newX = d.elements[0] * Math.cos(rotationAngle) - d.elements[2] * Math.sin(rotationAngle);
        var newY = d.elements[1];
        var newZ = d.elements[0] * Math.sin(rotationAngle) + d.elements[2] * Math.cos(rotationAngle);
    
        d.elements[0] = newX;
        d.elements[1] = newY;
        d.elements[2] = newZ;
    
        // Update the 'at' point based on the new direction vector
        this.at.elements[0] = this.eye.elements[0] + d.elements[0];
        this.at.elements[1] = this.eye.elements[1] + d.elements[1];
        this.at.elements[2] = this.eye.elements[2] + d.elements[2];
    
    
    
    }
    
    
    panRight(){
        var d = new Vector3 ([0,0,0]);
        d.elements[0] = this.at.elements[0] - this.eye.elements[0];
        d.elements[1] = this.at.elements[1] - this.eye.elements[1];
        d.elements[2] = this.at.elements[2] - this.eye.elements[2];
    
        var sum = Math.sqrt(( d.elements[0] * d.elements[0])  + (d.elements[1 ] * d.elements[1])  + ( d.elements[2] * d.elements[2])  )
        d.elements[0] = d.elements[0] / sum;
        d.elements[1] = d.elements[1] / sum;
        d.elements[2] = d.elements[2] / sum;
    
        /*
        r = Math.sqrt(( d.elements[0] * d.elements[0])  + (d.elements[1 ] * d.elements[1]) + (d.elements[2 ] * d.elements[2]))
        theta = Math.atan2( d.elements[1], d.elements[0]);
    
        theta += 0.087266;
    
        var newX = r * Math.cos(theta);
        var newY = r * Math.sin(theta);
        var newZ = d.elements[2]; // Z component remains unchanged
    
        d.elements[0] = newX;
        d.elements[1] = newY;
    
        g_at.elements[0] = g_eye.elements[0] + d.elements[0];
        g_at.elements[1] = g_eye.elements[1] +d.elements[1];
        g_at.elements[2] =g_eye.elements[2] + newZ;
    */
        var  rotationAngle =  5 * (Math.PI / 180); // Convert 5 degrees to radians
    
        // Calculate the new direction vector after rotating around the up vector
        var newX = d.elements[0] * Math.cos(rotationAngle) - d.elements[2] * Math.sin(rotationAngle);
        var newY = d.elements[1];
        var newZ = d.elements[0] * Math.sin(rotationAngle) + d.elements[2] * Math.cos(rotationAngle);
    
        d.elements[0] = newX;
        d.elements[1] = newY;
        d.elements[2] = newZ;
    
        // Update the 'at' point based on the new direction vector
        this.at.elements[0] = this.eye.elements[0] + d.elements[0];
        this.at.elements[1] = this.eye.elements[1] + d.elements[1];
        this.at.elements[2] = this.eye.elements[2] + d.elements[2];
    
    
    
    }
    
}