function next(){
    for(let i=1;i<5;i++){
        var x= document.getElementById("screen"+(i).toString());
        if (x.style.display != "none"){
            var y = document.getElementById("screen"+(i+1).toString());
            x.style.display = "none";
            y.style.display = "block";
            break;
        }

    }
}


function Calc_PtoF(){
    var p1 = document.getElementById("pv1").value;
    var i1 = document.getElementById("i1").value;
    var n1 = document.getElementById("N1").value;
    var v = Number(i1) + 1;
    var w = Math.pow(v,n1);
    var f1 = Number(p1)*Number(w);
    document.getElementById("P_to_F_msg").innerHTML = "<p class='msg'>Future Cost = "+ f1 + "</p>";
}

function Calc_FtoP(){
    var f2 = document.getElementById("fv2").value;
    var i2 = document.getElementById("i2").value;
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

}