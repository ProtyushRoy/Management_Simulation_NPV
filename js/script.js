/*
function next(){
    for(let i=1;i<6;i++){
        var x= document.getElementById("screen"+(i).toString());
        if (x.style.display != "none"){
            var y = document.getElementById("screen"+(i+1).toString());
            x.style.display = "none";
            y.style.display = "block";
            break;
        }

    }
}
*/
function Nav(startDiv, endDiv) {
        document.getElementById("screen" + startDiv).style.display = "none";
        document.getElementById("screen" + endDiv).style.display = "block";
      }


function Calc_PtoF(){
    var p1 = document.getElementById("pv1").value;
    var i1 = document.getElementById("i1").value;
    i1 = i1/100;
    var n1 = document.getElementById("N1").value;
    var v = Number(i1) + 1;
    var w = Math.pow(v,n1);
    var f1 = Number(p1)*Number(w);
    document.getElementById("P_to_F_msg").innerHTML = "<p class='msg'>Future Cost = "+ f1 + "</p>";
}

function Calc_FtoP(){
    var f2 = document.getElementById("fv2").value;
    var i2 = document.getElementById("i2").value;
    i2 = i2/100;
    var n2 = document.getElementById("N2").value;
    var p = Number(i2) + 1;
    var q = Math.pow(p,n2);
    var p2 = Number(f2)/Number(q);
    document.getElementById("F_to_P_msg").innerHTML = "<p class='msg'>Present Cost = "+ p2 + "</p>";
}





function pv1(){
    var encf= document.getElementById("yr1").value;
    var DisRate = document.getElementById("i").value;
    var pv_1 = Number(encf)/(Number(DisRate) + 1);
    document.getElementById("pv_yr1").innerHTML = pv_1;

}

function pv2(){
    var encf= document.getElementById("yr2").value;
    var DisRate = document.getElementById("i").value;
    var pv_2 = Number(encf)/(Math.pow((Number(DisRate) + 1),2));
    document.getElementById("pv_yr2").innerHTML = pv_2;

}

function pv3(){
    var encf= document.getElementById("yr3").value;
    var DisRate = document.getElementById("i").value;
    var pv_3 = Number(encf)/(Math.pow((Number(DisRate) + 1),3));
    document.getElementById("pv_yr3").innerHTML = pv_3;
}

function pv4(){
    var encf= document.getElementById("yr4").value;
    var DisRate = document.getElementById("i").value;
    var pv_4 = Number(encf)/(Math.pow((Number(DisRate) + 1),4));
    document.getElementById("pv_yr4").innerHTML = pv_4;
}

function pv5(){
    var encf= document.getElementById("yr5").value;
    var DisRate = document.getElementById("i").value;
    var pv_5 = Number(encf)/(Math.pow((Number(DisRate) + 1),5));
    document.getElementById("pv_yr5").innerHTML = pv_5;
}

function totalENCF(){
    var a = document.getElementById("yr1").value;
    var b = document.getElementById("yr2").value;
    var c = document.getElementById("yr3").value;
    var d = document.getElementById("yr4").value;
    var e = document.getElementById("yr5").value;
    document.getElementById("totalENCF").innerHTML = Number(a)+Number(b)+Number(c)+Number(d)+Number(e);
}

function totalPV(){
    var a = document.getElementById("yr1").value;
    var b = document.getElementById("yr2").value;
    var c = document.getElementById("yr3").value;
    var d = document.getElementById("yr4").value;
    var e = document.getElementById("yr5").value;

    var DisRate = document.getElementById("i").value;

    var pv_1 = Number(a)/(Number(DisRate) + 1);
    var pv_2 = Number(b)/(Math.pow((Number(DisRate) + 1),2));
    var pv_3 = Number(c)/(Math.pow((Number(DisRate) + 1),3));
    var pv_4 = Number(d)/(Math.pow((Number(DisRate) + 1),4));
    var pv_5 = Number(e)/(Math.pow((Number(DisRate) + 1),5));

    var sum = Number(pv_1) + Number(pv_2) + Number(pv_3) + Number(pv_4) + Number(pv_5);
    
    document.getElementById("totalPV").innerHTML = sum;

}

/*
function CalcNPV(){
    var cost = document.getElementById("cop").value;

    var a = document.getElementById("yr1").value;
    var b = document.getElementById("yr2").value;
    var c = document.getElementById("yr3").value;
    var d = document.getElementById("yr4").value;
    var e = document.getElementById("yr5").value;

    var DisRate = document.getElementById("i").value;

    var pv_1 = Number(a)/(Number(DisRate) + 1);
    var pv_2 = Number(b)/(Math.pow((Number(DisRate) + 1),2));
    var pv_3 = Number(c)/(Math.pow((Number(DisRate) + 1),3));
    var pv_4 = Number(d)/(Math.pow((Number(DisRate) + 1),4));
    var pv_5 = Number(e)/(Math.pow((Number(DisRate) + 1),5));

    var sum = Number(pv_1) + Number(pv_2) + Number(pv_3) + Number(pv_4) + Number(pv_5);
    var npv = sum - Number(cost);
    document.getElementById("calcNPV").innerHTML = npv;
    if(npv>0){
        alert("As the Net present value (NPV) of the project is positive, you can expect profit. Hence you can consider taking up the project.");
    }
    if(npv<0){
        alert("As the Net Present Value (NPV) of the project is negative, you can expect net loss. Hence you should not consider taking up the project.");
    }
    if(npv===0){
        alert("As the Net Present Value (NPV) is 0, the project is not expected to give any siginificant gain or loss . Hence you can use non monetary factors such as intangible benefits to take the decision");
    }
}
*/

var npv
function CalcNPV_2(){
    

    var cop = document.getElementById("cop_2").value;
    var n = document.getElementById("n_2").value;
    var dis_rate = document.getElementById("i_2").value;
    dis_rate = dis_rate/100;
    var sum = 0

    for(let i=1;i<=Number(n);i++){
        sum += (document.getElementById("textbox"+i).value)/Math.pow(Number(dis_rate)+1,i);
    }
    npv = Number(sum) - Number(cop);
    npv = npv.toFixed(2);
    document.getElementById("display").innerHTML ="<p>Net Present Value = " + npv; + "</p>"
    document.getElementById("modal_NPV").innerHTML = npv;

    if(npv>0){
        document.getElementById("modal_decision").innerHTML = "<p style='color:rgb(14, 225, 21); text-align: left;'>As the Net present value (NPV) of the project is positive, you can expect profit. Hence you can consider taking up the project.</p>"
    }
    else if(npv<0){
        document.getElementById("modal_decision").innerHTML = "<p style='color:#cc0000; text-align: left;'>As the Net Present Value (NPV) of the project is negative, you can expect net loss. Hence you should not consider taking up the project.</p>"
    }
    else if(npv===0.00){
        document.getElementById("modal_decision"),innerHTML = "<p style='color:white; text-align: left;'>As the Net Present Value (NPV) is 0, the project is not expected to give any siginificant gain or loss . Hence you can use non monetary factors such as intangible benefits to take the decision</p>"
    }

    document.getElementById("modal").style.display = "block";

}


/*
function close(){

    document.getElementById("modal").style.display = "none";
}
*/


function newFunction() {
    return "none";
}

function NforInput(){
    var n =  document.getElementById("n_2").value;
    var input = document.getElementById("screen6_input_of_cash_inflow");

    for(let i=1;i<=Number(n);i++){
        var element = document.createElement("input");
        var break_line = document.createElement("br")
        element.setAttribute("id", "textbox"+i);
        element.setAttribute("placeholder", "Enter cash inflow of year"+i);

        
        
        input.appendChild(element);
        input.appendChild(break_line);
        
        
    }
    var btn = document.createElement("button");
    btn.className = "btn btn-info"
    btn.innerHTML = "Calculate";
    
    
    input.appendChild(btn);
    btn.onclick=CalcNPV_2;
}

function LevelChange(){
    for(let i = 1; i<8;i++){
    document.getElementById("l"+i).style.display="block"
    }
}

function Check(){
    var p2f = document.getElementById("P2F");
    var f2p = document.getElementById("F2P");
    
    var p2f_text = document.getElementsByClassName("present_to_future_value_entry");
    var f2p_text = document.getElementsByClassName("future_to_present_value_entry");
    
    if(p2f.checked==true){
        p2f_text[0].style.display = "block";
    }
    else{
        p2f_text[0].style.display="none";
    }
    
    if(f2p.checked==true){
        f2p_text[0].style.display = "block";
    }
    else{
        f2p_text[0].style.display="none";
    }
}
