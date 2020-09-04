//get DPI
let dpi = window.devicePixelRatio;
//get cvs
let cvs = document.getElementById("ludo");
//get context
let ctx = cvs.getContext("2d");

function rollDice(number2) {
  const dice = [...document.querySelectorAll(".die-list")];
  dice.forEach(die => {
    toggleClasses(die);
    
    
    die.dataset.roll = number2;
    afterroll(number2);
        
    
    
    
  });
}

function toggleClasses(die) {
  die.classList.toggle("odd-roll");
  die.classList.toggle("even-roll");
}

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}




function fix_dpi() {

    let style_height = +getComputedStyle(cvs).getPropertyValue("height").slice(0, -2);
    //get CSS width
    let style_width = +getComputedStyle(cvs).getPropertyValue("width").slice(0, -2);
    //scale the canvas
    cvs.setAttribute('height', style_height * dpi);
    cvs.setAttribute('width', style_width * dpi);
    
}

//document.getElementById("roll").onclick = ;

function hidenumber(){
    document.getElementById("num1").style.display="none";
    document.getElementById("num2").style.display="none";
    document.getElementById("num3").style.display="none";
    document.getElementById("num4").style.display="none";
    document.getElementById("num5").style.display="none";
    document.getElementById("num6").style.display="none";
}

function shownumber(){
    document.getElementById("num1").style.display="inline";
    document.getElementById("num2").style.display="inline";
    document.getElementById("num3").style.display="inline";
    document.getElementById("num4").style.display="inline";
    document.getElementById("num5").style.display="inline";
    document.getElementById("num6").style.display="inline";
}

function randomcall(){
    
        
        number1 = Math.floor(Math.random()*6+1);
        rollDice(number1);
    
}

function afterroll(number){
    
    document.getElementById("roll").style.visibility="hidden";
    hidenumber();
    

    if(document.getElementById("top").innerHTML=="It's Blue's turn"){
        
        function blueturn(){
            if(currentblue==101){
                document.getElementById("top").innerHTML="It's Red's turn";
                if(currentblue1==100){
                    
                    if(number==6){
                        currentblue1=1;
                        draw();
                    }
                    
                }
                else if(currentblue1+number<=destination){
                    currentblue1+=number;
                    
                    if(currentblue1==destination){
                        currentblue1=102;
                        draw();
                        window.alert("HURRAY!!!! BLUE IS THE WINNER");
                        location.reload();
                    }
                }
                
            }
            else if(currentblue1==102){
                document.getElementById("top").innerHTML="It's Red's turn";
                if(currentblue==0){
                    if(number==6){
                        currentblue=1;
                        draw();
                    }
                    
                }
                else if(currentblue+number<=destination){
                    currentblue+=number;
                    if(currentblue==destination){
                        currentblue=101;
                        draw();
                        window.alert("HURRAY!!!! BLUE IS THE WINNER");
                        location.reload();
                    }
                }
            }
            else if(currentblue+number>destination && (currentblue1+number>destination && currentblue1!=100)){
                document.getElementById("top").innerHTML="It's Red's turn";
                draw();
                return;
            }
            else if(currentblue+number>destination){
                document.getElementById("top").innerHTML="It's Red's turn";
                if(currentblue1==100){
                    if(number==6){
                        currentblue1=1;
                        draw();
                    }
                    else{
                        draw();
                        return;
                    }
                }
                else{
                    currentblue1+=number;
                    if(currentblue1==destination){
                        currentblue1=102;
                        draw();
                    }
                }
            }
            else if(currentblue1+number>destination && currentblue1!=100){
                document.getElementById("top").innerHTML="It's Red's turn";
                if(currentblue==0){
                    if(number==6){
                        currentblue=1;
                        draw();
                    }
                    else{
                        draw();
                        return;
                    }
                }
                else{
                    currentblue+=number;
                    if(currentblue==destination){

                        currentblue=101;
                        draw();
                    }
                }
            }
            else if(currentblue==0&&currentblue1==100){
                if(number==6){
                    document.getElementById("roll").style.visibility="hidden";
                    hidenumber();
                    
                    cvs.addEventListener('click', thing);
                    function thing(e){
                        const mousePos = {
                            x: e.clientX - cvs.offsetLeft,
                            y: e.clientY - cvs.offsetTop
                        };
                        // get pixel under cursor
                        const pixel = ctx.getImageData(mousePos.x, mousePos.y, 1, 1).data;
                        
                        // create rgb color for that pixel
                        const color = `rgb(${pixel[0]},${pixel[1]},${pixel[2]})`;
                        console.log(color);
                        // find a circle with the same colour
                        if(color=="rgb(3,252,240)"){
                            console.log("hurray");
                            currentblue=1;
                            
                            document.getElementById("roll").style.visibility="visible";
                            shownumber();
                            
                            cvs.removeEventListener('click',thing);
                            if(blue[currentblue].x==red[currentred].x&&blue[currentblue].y==red[currentred].y){
                                currentred=0;
                            }
                            if(blue[currentblue].x==red[currentred1].x&&blue[currentblue].y==red[currentred1].y){
                                currentred1=100;
                            }
                            draw();
                            document.getElementById("top").innerHTML="It's Red's turn";

                            
                        }
                        else if(color=="rgb(5,245,233)"){
                            console.log("hurray1");
                            currentblue1=1;
                            
                            document.getElementById("roll").style.visibility="visible";
                            shownumber();
                            cvs.removeEventListener('click',thing);
                            if(blue[currentblue1].x==red[currentred].x&&blue[currentblue1].y==red[currentred].y){
                                currentred=0;
                            }
                            if(blue[currentblue1].x==red[currentred1].x&&blue[currentblue1].y==red[currentred1].y){
                                currentred1=100;
                            }
                            draw();
                            document.getElementById("top").innerHTML="It's Red's turn";
                            
                        }
                        
                        };
                    
                    
                    
                }
                else{
                    draw();
                    document.getElementById("top").innerHTML="It's Red's turn";
                }
            }
            else if(currentblue!=0 && currentblue1==100){
                if(number==6){
                    document.getElementById("roll").style.visibility="hidden";
                    hidenumber();
                    cvs.addEventListener('click', thing);
                    function thing(e){
                        const mousePos = {
                            x: e.clientX - cvs.offsetLeft,
                            y: e.clientY - cvs.offsetTop
                        };
                        // get pixel under cursor
                        const pixel = ctx.getImageData(mousePos.x, mousePos.y, 1, 1).data;
                        
                        // create rgb color for that pixel
                        const color = `rgb(${pixel[0]},${pixel[1]},${pixel[2]})`;
                        console.log(color);
                        // find a circle with the same colour
                        
                        if(color=="rgb(3,252,240)" && currentblue+number<=destination){
                            console.log("hurray");
                            
                            currentblue+=number;
                            if(currentblue==destination){
                                currentblue=101;
                            }

                            
                            
                            cvs.removeEventListener('click',thing);
                            document.getElementById("roll").style.visibility="visible";
                            shownumber();
                            if(blue[currentblue].x==red[currentred].x&&blue[currentblue].y==red[currentred].y){
                                currentred=0;
                            }
                            if(blue[currentblue].x==red[currentred1].x&&blue[currentblue].y==red[currentred1].y){
                                currentred1=100;
                            }
                            draw();
                            document.getElementById("top").innerHTML="It's Red's turn";

                            
                        } 
                        else if(color=="rgb(5,245,233)"){
                            console.log("hurray1");
                            currentblue1=1;
                            
                            cvs.removeEventListener('click',thing);
                            document.getElementById("roll").style.visibility="visible";
                            shownumber();
                            if(blue[currentblue1].x==red[currentred].x&&blue[currentblue1].y==red[currentred].y){
                                currentred=0;
                            }
                            if(blue[currentblue1].x==red[currentred1].x&&blue[currentblue1].y==red[currentred1].y){
                                currentred1=100;
                            }
                            draw();
                            document.getElementById("top").innerHTML="It's Red's turn";
                            
                        }
                        
                    };
                }
                else{
                    document.getElementById("top").innerHTML="It's Red's turn";
                    if(currentblue+number<=destination){
                        currentblue+=number;
                        if(blue[currentblue].x==red[currentred].x&&blue[currentblue].y==red[currentred].y){
                            currentred=0;
                        }
                        if(blue[currentblue].x==red[currentred1].x&&blue[currentblue].y==red[currentred1].y){
                            currentred1=100;
                        }
                        if(currentblue==destination){
                            currentblue=101;
                            
                        }
                        draw();
                        
                    }
                    draw();
                }
            }
            else if(currentblue==0&&currentblue1!=100){
                if(number==6){
                    document.getElementById("roll").style.visibility="hidden";
                    hidenumber();
                    cvs.addEventListener('click', thing);
                    function thing(e){
                        const mousePos = {
                            x: e.clientX - cvs.offsetLeft,
                            y: e.clientY - cvs.offsetTop
                        };
                        // get pixel under cursor
                        const pixel = ctx.getImageData(mousePos.x, mousePos.y, 1, 1).data;
                        
                        // create rgb color for that pixel
                        const color = `rgb(${pixel[0]},${pixel[1]},${pixel[2]})`;
                        console.log(color);
                        // find a circle with the same colour
                        if(color=="rgb(3,252,240)"){
                            console.log("hurray");
                            currentblue=1;
                            
                            cvs.removeEventListener('click',thing);
                            document.getElementById("roll").style.visibility="visible";
                            shownumber();
                            if(blue[currentblue].x==red[currentred].x&&blue[currentblue].y==red[currentred].y){
                                currentred=0;
                            }
                            if(blue[currentblue].x==red[currentred1].x&&blue[currentblue].y==red[currentred1].y){
                                currentred1=100;
                            }
                            draw();
                            document.getElementById("top").innerHTML="It's Red's turn";
                            

                            
                        }
                        else if(color=="rgb(5,245,233)"){
                            console.log("hurray1");
                            currentblue1+=number;
                            
                            cvs.removeEventListener('click',thing);
                            document.getElementById("roll").style.visibility="visible";
                            shownumber();
                            if(blue[currentblue1].x==red[currentred].x&&blue[currentblue1].y==red[currentred].y){
                                currentred=0;
                            }
                            if(blue[currentblue1].x==red[currentred1].x&&blue[currentblue1].y==red[currentred1].y){
                                currentred1=100;
                            }
                            draw();
                            document.getElementById("top").innerHTML="It's Red's turn";
                        }
                        
                        };
                }
                else{
                    
                    if(currentblue1+number<=destination){
                        currentblue1+=number;
                        if(blue[currentblue1].x==red[currentred].x&&blue[currentblue1].y==red[currentred].y){
                            currentred=0;
                        }
                        if(blue[currentblue1].x==red[currentred1].x&&blue[currentblue1].y==red[currentred1].y){
                            currentred1=100;
                        }
                        if(currentblue1==destination){
                            currentblue1=102;
                            
                        }
                        draw();
                        document.getElementById("top").innerHTML="It's Red's turn";
                        
                    }
                    draw();
                    document.getElementById("top").innerHTML="It's Red's turn";
                }
            }
            else if(currentblue!=0&&currentblue1!=100){
                    document.getElementById("roll").style.visibility="hidden";
                    hidenumber();
                    cvs.addEventListener('click', thing);
                    function thing(e){
                        const mousePos = {
                            x: e.clientX - cvs.offsetLeft,
                            y: e.clientY - cvs.offsetTop
                        };
                        // get pixel under cursor
                        const pixel = ctx.getImageData(mousePos.x, mousePos.y, 1, 1).data;
                        
                        // create rgb color for that pixel
                        const color = `rgb(${pixel[0]},${pixel[1]},${pixel[2]})`;
                        console.log(color);
                        // find a circle with the same colour
                        if(currentblue+number<=destination){
                            if(color=="rgb(3,252,240)"){
                                console.log("hurray");
                                currentblue+=number;
                                if(currentblue==destination){
                                    currentblue=101;
                                }
                                cvs.removeEventListener('click',thing);
                                document.getElementById("roll").style.visibility="visible";
                                shownumber();
                                if(blue[currentblue].x==red[currentred].x&&blue[currentblue].y==red[currentred].y){
                                    currentred=0;
                                }
                                if(blue[currentblue].x==red[currentred1].x&&blue[currentblue].y==red[currentred1].y){
                                    currentred1=100;
                                }
                                draw();
                                document.getElementById("top").innerHTML="It's Red's turn";
    
                                
                            }
                        }
                        if(currentblue1+number<=destination){
                            if(color=="rgb(5,245,233)"){
                                console.log("hurray1");
                                currentblue1+=number;
                                if(currentblue1==destination){
                                    currentblue1=102;
                                }
                                
                                cvs.removeEventListener('click',thing);
                                document.getElementById("roll").style.visibility="visible";
                                shownumber();
                                if(blue[currentblue1].x==red[currentred].x&&blue[currentblue1].y==red[currentred].y){
                                    currentred=0;
                                }
                                if(blue[currentblue1].x==red[currentred1].x&&blue[currentblue1].y==red[currentred1].y){
                                    currentred1=100;
                                }
                                draw();
                                document.getElementById("top").innerHTML="It's Red's turn";
                            }
                        }
                        
                        
                        
                        };
                
                
            }
            
            
            draw();
            
            
        }

        setTimeout(() => {
            shownumber();
            document.getElementById("roll").style.visibility="visible";
            blueturn();
        }, 1700);
        
        
    }
    else{
        
        function redturn(){
            if(currentred==101){
                document.getElementById("top").innerHTML="It's Blue's turn";
                if(currentred1==100){
                    if(number==6){
                        currentred1=1;
                        draw();
                    }
                    
                }
                else if(currentred1+number<=destination){
                    currentred1+=number;
                    if(currentred1==destination){
                        currentred1=102;
                        draw();
                        window.alert("HURRAY!!! RED wins");
                        location.reload();
                        
                    }
                }
                
            }
            else if(currentred1==102){
                document.getElementById("top").innerHTML="It's Blue's turn";
                if(currentred==0){
                    if(number==6){
                        currentred=1;
                        draw();
                    }
                    
                }
                else if(currentred+number<=destination){
                    currentred+=number;
                    if(currentred==destination){
                        currentred=101;
                        draw();
                        window.alert("HURRAY!!! RED wins");
                        location.reload();
                    }
                }
            }
            else if(currentred+number>destination && currentred1+number>destination && currentred1!=100){
                document.getElementById("top").innerHTML="It's Blue's turn";
                draw();
                return;
            }
            else if(currentred+number>destination){
                document.getElementById("top").innerHTML="It's Blue's turn";
                if(currentred1==100){
                    if(number==6){
                        currentred1=1;
                        draw();
                    }
                    else{
                        draw();
                        return;
                    }
                }
                else{
                    currentred1+=number;
                    if(currentred1==destination){
                        draw();
                        currentred1=102;
                    }
                }
            }
            else if(currentred1+number>destination&&currentred1!=100){
                document.getElementById("top").innerHTML="It's Blue's turn";
                if(currentred==0){
                    if(number==6){
                        
                        currentred=1;
                        draw();
                    }
                    else{
                        draw();
                        return;
                    }
                }
                else{
                    currentred+=number;
                    if(currentred==destination){
                        currentred=101;
                        draw();
                    }
                }
            }
            else if(currentred==0&&currentred1==100){
                
                if(number==6){
                    document.getElementById("roll").style.visibility="hidden";
                    hidenumber();
                    cvs.addEventListener('click', thing1);
                    function thing1(e){
                        const mousePos = {
                            x: e.clientX - cvs.offsetLeft,
                            y: e.clientY - cvs.offsetTop
                        };
                        // get pixel under cursor
                        const pixel = ctx.getImageData(mousePos.x, mousePos.y, 1, 1).data;
                        
                        // create rgb color for that pixel
                        const color = `rgb(${pixel[0]},${pixel[1]},${pixel[2]})`;
                        console.log(color);
                        // find a circle with the same colour
                        if(color=="rgb(233,36,66)"){
                            
                            console.log("hurray");
                            currentred=1;
                            
                            cvs.removeEventListener('click',thing1);
                            document.getElementById("roll").style.visibility="visible";
                            shownumber();
                            if(red[currentred].x==blue[currentblue].x&&red[currentred].y==blue[currentblue].y){
                                currentblue=0;
                            }
                            if(red[currentred].x==blue[currentblue1].x&&red[currentred].y==blue[currentblue1].y){
                                currentblue1=100;
                            }
                            
                            draw();
                            document.getElementById("top").innerHTML="It's Blue's turn";

                            
                        }
                        else if(color=="rgb(230,39,68)"){
                            console.log("hurray1");
                            currentred1=1;
                            
                            cvs.removeEventListener('click',thing1);
                            document.getElementById("roll").style.visibility="visible";
                            shownumber();
                            if(red[currentred1].x==blue[currentblue].x&&red[currentred1].y==blue[currentblue].y){
                                currentblue=0;
                            }
                            if(red[currentred1].x==blue[currentblue1].x&&red[currentred1].y==blue[currentblue1].y){
                                currentblue1=100;
                            }
                            draw();
                            document.getElementById("top").innerHTML="It's Blue's turn";
                        }
                        
                        };  
                }
                else{
                    document.getElementById("top").innerHTML="It's Blue's turn";
                    draw();
                }
                
            }
            else if(currentred!=0 && currentred1==100){
                if(number==6){
                    document.getElementById("roll").style.visibility="hidden";
                    hidenumber();
                    cvs.addEventListener('click', thing1);
                    function thing1(e){
                        const mousePos = {
                            x: e.clientX - cvs.offsetLeft,
                            y: e.clientY - cvs.offsetTop
                        };
                        // get pixel under cursor
                        const pixel = ctx.getImageData(mousePos.x, mousePos.y, 1, 1).data;
                        
                        // create rgb color for that pixel
                        const color = `rgb(${pixel[0]},${pixel[1]},${pixel[2]})`;
                        console.log(color);
                        // find a circle with the same colour
                        if(currentred+number<=destination){
                            if(color=="rgb(233,36,66)"){
                                console.log("hurray");
                                currentred+=number;
                                if(currentred==destination){
                                    currentred=101;
                                }
                                cvs.removeEventListener('click',thing1);
                                document.getElementById("roll").style.visibility="visible";
                                shownumber();
                                if(red[currentred].x==blue[currentblue].x&&red[currentred].y==blue[currentblue].y){
                                    currentblue=0;
                                }
                                if(red[currentred].x==blue[currentblue1].x&&red[currentred].y==blue[currentblue1].y){
                                    currentblue1=100;
                                }
                                draw();
                                document.getElementById("top").innerHTML="It's Blue's turn";
    
                                
                            }
                        }
                        if(color=="rgb(230,39,68)"){
                            console.log("hurray1");
                            currentred1=1;
                            
                            cvs.removeEventListener('click',thing1);
                            document.getElementById("roll").style.visibility="visible";
                            shownumber();
                            if(red[currentred1].x==blue[currentblue].x&&red[currentred1].y==blue[currentblue].y){
                                currentblue=0;
                            }
                            if(red[currentred1].x==blue[currentblue1].x&&red[currentred1].y==blue[currentblue1].y){
                                currentblue1=100;
                            }
                            draw();
                            document.getElementById("top").innerHTML="It's Blue's turn";
                        }
                        
                        };
                }
                else{
                    document.getElementById("top").innerHTML="It's Blue's turn";
                    if(currentred+number<=destination){
                        document.getElementById("top").innerHTML="It's Blue's turn";
                        currentred+=number;
                        if(red[currentred].x==blue[currentblue].x&&red[currentred].y==blue[currentblue].y){
                            currentblue=0;
                        }
                        if(red[currentred].x==blue[currentblue1].x&&red[currentred].y==blue[currentblue1].y){
                            currentblue1=100;
                        }
                        if(currentred==destination){
                            currentred=101;    
                        }
                        draw();
                        
                    }
                    draw();
                }
            }
            else if(currentred==0&&currentred1!=100){
                if(number==6){
                    document.getElementById("roll").style.visibility="hidden";
                    hidenumber();
                    cvs.addEventListener('click', thing1);
                    function thing1(e){
                        const mousePos = {
                            x: e.clientX - cvs.offsetLeft,
                            y: e.clientY - cvs.offsetTop
                        };
                        // get pixel under cursor
                        const pixel = ctx.getImageData(mousePos.x, mousePos.y, 1, 1).data;
                        
                        // create rgb color for that pixel
                        const color = `rgb(${pixel[0]},${pixel[1]},${pixel[2]})`;
                        console.log(color);
                        // find a circle with the same colour
                        if(color=="rgb(233,36,66)"){
                            console.log("hurray");
                            currentred=1;
                            
                            cvs.removeEventListener('click',thing1);
                            document.getElementById("roll").style.visibility="visible";
                            shownumber();
                            if(red[currentred].x==blue[currentblue].x&&red[currentred].y==blue[currentblue].y){
                                currentblue=0;
                            }
                            if(red[currentred].x==blue[currentblue1].x&&red[currentred].y==blue[currentblue1].y){
                                currentblue1=100;
                            }
                            draw();
                            document.getElementById("top").innerHTML="It's Blue's turn";
                            

                            
                        }
                        if(currentred1+number<=destination){
                            if(color=="rgb(230,39,68)"){
                                console.log("hurray1");
                                currentred1+=number;
                                if(currentred1==destination){
                                    currentred1=102;
                                }
                                cvs.removeEventListener('click',thing1);
                                document.getElementById("roll").style.visibility="visible";
                                shownumber();
                                if(red[currentred1].x==blue[currentblue].x&&red[currentred1].y==blue[currentblue].y){
                                    currentblue=0;
                                }
                                if(red[currentred1].x==blue[currentblue1].x&&red[currentred1].y==blue[currentblue1].y){
                                    currentblue1=100;
                                }
                                draw();
                                document.getElementById("top").innerHTML="It's Blue's turn";
                            }
                            
                        }
                        
                        };
                }
                else{
                    document.getElementById("top").innerHTML="It's Blue's turn";
                    if(currentred1+number<=destination){
                        document.getElementById("top").innerHTML="It's Blue's turn";
                        currentred1+=number;
                        if(red[currentred1].x==blue[currentblue].x&&red[currentred1].y==blue[currentblue].y){
                            currentblue=0;
                        }
                        if(red[currentred1].x==blue[currentblue1].x&&red[currentred1].y==blue[currentblue1].y){
                            currentblue1=100;
                        }
                        if(currentred1==destination){
                            currentred1=102;
                            
                        }
                        draw();
                        
                    }
                    draw();
                }
            }
            else if(currentred!=0&&currentred1!=100){
                document.getElementById("roll").style.visibility="hidden";
                hidenumber();
                    cvs.addEventListener('click', thing1);
                    function thing1(e){
                        const mousePos = {
                            x: e.clientX - cvs.offsetLeft,
                            y: e.clientY - cvs.offsetTop
                        };
                        // get pixel under cursor
                        const pixel = ctx.getImageData(mousePos.x, mousePos.y, 1, 1).data;
                        
                        // create rgb color for that pixel
                        const color = `rgb(${pixel[0]},${pixel[1]},${pixel[2]})`;
                        console.log(color);
                        // find a circle with the same colour
                        if(color=="rgb(233,36,66)" && currentred+number<=destination){
                            console.log("hurray");
                            currentred+=number;
                            if(currentred==destination){
                                currentred=101;
                            }
                            cvs.removeEventListener('click',thing1);
                            document.getElementById("roll").style.visibility="visible";
                            shownumber();
                            if(red[currentred].x==blue[currentblue].x&&red[currentred].y==blue[currentblue].y){
                                currentblue=0;
                            }
                            if(red[currentred].x==blue[currentblue1].x&&red[currentred].y==blue[currentblue1].y){
                                currentblue1=100;
                            }
                            draw();
                            document.getElementById("top").innerHTML="It's Blue's turn";

                            
                        }
                        else if(color=="rgb(230,39,68)" && currentred1+number<=destination){
                            console.log("hurray1");
                            currentred1+=number;
                            if(currentred1==destination){
                                currentred1=102;
                            }
                            cvs.removeEventListener('click',thing1);
                            document.getElementById("roll").style.visibility="visible";
                            shownumber();
                            if(red[currentred1].x==blue[currentblue].x&&red[currentred1].y==blue[currentblue].y){
                                currentblue=0;
                            }
                            if(red[currentred1].x==blue[currentblue1].x&&red[currentred1].y==blue[currentblue1].y){
                                currentblue1=100;
                            }
                            draw();
                            document.getElementById("top").innerHTML="It's Blue's turn";
                        }
                        
                        };
                
                
            }
            draw();
            
            
        }
        setTimeout(() => {
            shownumber();
            document.getElementById("roll").style.visibility="visible";
            redturn();
        }, 1700);
        
    }
    draw();

}


let box=50;
let n =12;

//images
const redpawn = new Image();
redpawn.src = "image/redpawn.png";

//initialising  blue and red arrays

//blue bottom left corner
let blue = [];
blue[101]={
    x:(n-4.5)*box, 
    y:(n-3.5)*box
}
blue[102]={
    x:(n-4.5)*box, 
    y:(n-2.5)*box
}
blue[0]={
    x:1.65*box, 
    y:(n-2.38)*box
}
blue[100]={
    x:2.8*box, 
    y:(n-2.38)*box
}
let bluecount=1;
for(let i=0;i<n;i++){
    blue[bluecount]={
        x:0*box,
        y:((n-1)-i)*box
    }
    bluecount++;
}
for(let i=1;i<n;i++){
    blue[bluecount]={
        x:i*box,
        y:0*box
    }
    bluecount++;
}
for(let i=1;i<n;i++){
    blue[bluecount]={
        x:(n-1)*box,
        y:i*box
    }
    bluecount++;
}
for(let i=1;i<n-1;i++){
    blue[bluecount]={
        x:(n-1-i)*box,
        y:(n-1)*box
    }
    bluecount++;
}
let destination = bluecount-1;
console.log(destination);

//red top right corner
let red = [];
red[101]={
    x:(n-3.3)*box, 
    y:(n-3.5)*box
}
red[102]={
    x:(n-3.3)*box, 
    y:(n-2.5)*box
}
red[0]={
    x:(n-3.85)*box, 
    y:1.61*box 
}
red[100]={
    x:(n-2.65)*box, 
    y:1.61*box 
}
let redcount=1;
for(let i=0;i<n;i++){
    red[redcount]={
        x:(n-1)*box,
        y:i*box
    }
    redcount++;
    
}
for(let i=1;i<n;i++){
    red[redcount]={
        x:(n-1-i)*box,
        y:(n-1)*box
    }
    redcount++;
    
}
for(let i=1;i<n;i++){
    red[redcount]={
        x:0*box,
        y:((n-1)-i)*box
    }
    redcount++;
}
for(let i=1;i<n-1;i++){
    red[redcount]={
        x:i*box,
        y:0*box
    }
    redcount++;
}
console.log(red);


//initialising elements
let currentred =0;
let currentblue =0;

let currentred1=100;
let currentblue1=100;

//drawing elements
draw();
function draw() {
    //fix_dpi();
    let color1 = "#e693bf";
    
    for(let i=0,j=0;j<n;j++){
        ctx.fillStyle = color1;
        ctx.fillRect( j*box, i*box  , box ,box );
        ctx.strokeStyle = "black";
        ctx.strokeRect(j*box,i*box,box,box);
    }  
    for(let i=0,j=0;i<n;i++){
        ctx.fillStyle = color1;
        ctx.fillRect( j*box, i*box  , box ,box );
        ctx.strokeStyle = "black";
        ctx.strokeRect(j*box,i*box,box,box);
    }
    for(let i=n-1,j=0;j<n;j++){
        ctx.fillStyle = color1;
        ctx.fillRect( j*box, i*box  , box ,box );
        ctx.strokeStyle = "black";
        ctx.strokeRect(j*box,i*box,box,box);
    }
    for(let i=0,j=n-1;i<n;i++){
        ctx.fillStyle = color1;
        ctx.fillRect( j*box, i*box  , box ,box );
        ctx.strokeStyle = "black";
        ctx.strokeRect(j*box,i*box,box,box);
    }

    ctx.fillStyle = "rgb(184, 19, 19)";
    ctx.fillRect( (n-1)*box, 0*box,box ,box );

    ctx.fillStyle = "#b85c5c";
    ctx.fillRect( (n-2)*box, 0*box,box ,box );

    

    ctx.fillStyle = "blue";
    ctx.fillRect( 0*box, (n-1)*box  , box ,box );
    ctx.strokeStyle = "black";
    ctx.strokeRect(0*box,(n-1)*box,box,box);

    ctx.fillStyle = "#6262cc";
    ctx.fillRect( 1*box, (n-1)*box  , box ,box );
    ctx.strokeStyle = "black";
    ctx.strokeRect(0*box,(n-1)*box,box,box);

    ctx.fillStyle = "blue";
    ctx.fillRect( 1.5*box, (n-2.5)*box  , 2.5*box ,1.2*box );
    ctx.strokeStyle = "black";
    ctx.strokeRect(0*box,(n-1)*box,box,box);

    

    ctx.fillStyle = "rgb(184, 19, 19)";
    ctx.fillRect( (n-4)*box, 1.5*box , 2.5*box ,1.2*box );
    ctx.strokeStyle = "black";
    ctx.strokeRect(0*box,(n-1)*box,box,box);

    ctx.fillStyle = " rgba(250, 247, 103, 0.3)";
    ctx.fillRect( (n-4.9)*box, (n-3.75)*box , 3*box ,2.5*box );
    ctx.strokeStyle = "black";
    ctx.strokeRect(0*box,(n-1)*box,box,box);

    if(currentblue==currentblue1){
        if(currentred!=currentred1){
            ctx.fillStyle = "#03fcf0";
            ctx.fillRect( blue[currentblue].x+0.1*box, blue[currentblue].y+0.3*box , 0.4*box ,0.4*box );
            ctx.strokeStyle = "black";
            ctx.strokeRect((n-1)*box,0*box,box,box);

            ctx.fillStyle = "#05f5e9";
            ctx.fillRect( blue[currentblue1].x+0.55*box, blue[currentblue1].y+0.3*box , 0.4*box ,0.4*box );
            ctx.strokeStyle = "black";
            ctx.strokeRect((n-1)*box,0*box,box,box);

            ctx.fillStyle = "#E92442";
            ctx.fillRect( red[currentred].x+.125*box, red[currentred].y+.125*box ,0.75* box ,0.75*box );
            ctx.strokeStyle = "black";
            ctx.strokeRect((n-1)*box,0*box,box,box);

            ctx.fillStyle = "#e62744";
            ctx.fillRect( red[currentred1].x+.125*box, red[currentred1].y+.125*box ,0.75* box ,0.75*box );
            ctx.strokeStyle = "black";
            ctx.strokeRect((n-1)*box,0*box,box,box);

        }
        else if(currentred==currentred1){
            ctx.fillStyle = "#E92442";
            ctx.fillRect( red[currentred].x+.1*box, red[currentred].y+.3*box ,0.4* box ,0.4*box );
            ctx.strokeStyle = "black";
            ctx.strokeRect((n-1)*box,0*box,box,box);

            ctx.fillStyle = "#e62744";
            ctx.fillRect( red[currentred1].x+.55*box, red[currentred1].y+.3*box ,0.4* box ,0.4*box );
            ctx.strokeStyle = "black";
            ctx.strokeRect((n-1)*box,0*box,box,box);
        }
    }
    else if(currentred==currentred1){
        ctx.fillStyle = "#E92442";
        ctx.fillRect( red[currentred].x+.1*box, red[currentred].y+.3*box ,0.4* box ,0.4*box );
        ctx.strokeStyle = "black";
        ctx.strokeRect((n-1)*box,0*box,box,box);

        ctx.fillStyle = "#e62744";
        ctx.fillRect( red[currentred1].x+.55*box, red[currentred1].y+.3*box ,0.4* box ,0.4*box );
        ctx.strokeStyle = "black";
        ctx.strokeRect((n-1)*box,0*box,box,box);

        ctx.fillStyle = "#03fcf0";
        ctx.fillRect( blue[currentblue].x+0.125*box, blue[currentblue].y+0.125*box , 0.75*box ,0.75*box );
        ctx.strokeStyle = "black";
        ctx.strokeRect((n-1)*box,0*box,box,box);

        ctx.fillStyle = "#05f5e9";
        ctx.fillRect( blue[currentblue1].x+0.125*box, blue[currentblue1].y+0.125*box , 0.75*box ,0.75*box );
        ctx.strokeStyle = "black";
        ctx.strokeRect((n-1)*box,0*box,box,box);
    }
    else{
        ctx.fillStyle = "#03fcf0";
        ctx.fillRect( blue[currentblue].x+0.125*box, blue[currentblue].y+0.125*box , 0.75*box ,0.75*box );
        ctx.strokeStyle = "black";
        ctx.strokeRect((n-1)*box,0*box,box,box);

        //ctx.drawImage(redpawn, red[currentred].x, red[currentred].y, box ,box);
        
        ctx.fillStyle = "#E92442";
        ctx.fillRect( red[currentred].x+.125*box, red[currentred].y+.125*box ,0.75* box ,0.75*box );
        ctx.strokeStyle = "black";
        ctx.strokeRect((n-1)*box,0*box,box,box);

        ctx.fillStyle = "#05f5e9";
        ctx.fillRect( blue[currentblue1].x+0.125*box, blue[currentblue1].y+0.125*box , 0.75*box ,0.75*box );
        ctx.strokeStyle = "black";
        ctx.strokeRect((n-1)*box,0*box,box,box);

        
        ctx.fillStyle = "#e62744";
        ctx.fillRect( red[currentred1].x+.125*box, red[currentred1].y+.125*box ,0.75* box ,0.75*box );
        ctx.strokeStyle = "black";
        ctx.strokeRect((n-1)*box,0*box,box,box);
    }



    
    ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
    ctx.font = "30px Changa one";
    ctx.fillText('WINNERS',(n-4.75)*box, (n-2.3)*box  );
    
    ctx.fillStyle = "rgba(255, 255, 255, 0.45)";
    ctx.font = "30px Changa one";
    ctx.fillText('HOME',(n-3.65)*box, 2.3*box);

    ctx.fillStyle = "rgba(255, 255, 255, 0.45)";
    ctx.font = "30px Changa one";
    ctx.fillText('HOME',1.85*box, (n-1.67)*box);
}

