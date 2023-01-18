//  **************       Question1      *************

function Question1(){
    var d = new Date();
    var today = d.getDay();
    var hour = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();
    var days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    var s 

    if(min<10)
    min = '0'+min

    if(sec<10)
    sec = '0'+sec

    today = days[today-1];
    document.getElementById("day").innerText = today;
    if(hour<11){
        
    document.getElementById("time").innerText = hour+" AM: "+min+": "+sec;
    }
    else
    document.getElementById("time").innerText = hour+" PM:"+min+": "+sec;
    
}

// ***************** function Question2() ****************
function Question2(){
    window.print();
}

// ***************** function Question3() ****************
function Question3(){
    
    var d = new Date();
    var month = (d.getMonth()+1);
    var day = d.getDate();
    var year = d.getFullYear();

    
    if (month < 2) 
        month = '0' + month;
    if (day < 2) 
        day = '0' + day;
        
    document.getElementById("mm-dd-yyyy").innerText = month+"-"+day+"-"+year;
    document.getElementById("mm/dd/yyyy").innerText = month+"/"+day+"/"+year;
    document.getElementById("dd-mm-yyyy").innerText = day+"-"+month+"-"+year;
    document.getElementById("dd/mm/yyyy").innerText = day+"/"+month+"/"+year;
    
    console.log("working");
}

// ************** function Question4() ****************

        // formula  (1/2)*(b*h)
        // but we have 3 sides
        // we will use semiperimeter
        // area = sqrt(s(s-a)(s-b)(s-c))

    function Question4(){
        alert("Enter values and click button");
    }

    function Area(){
       // console.log("sdjkf");
        var s=0;                         // for semiperimeter
        var area;   
        console.log("sss");
        var side1= Number(document.getElementById("side1").value); 
        var side2 = Number(document.getElementById("side2").value);
        var side3 = Number(document.getElementById("side3").value);
        s=Number(s)
        s = (side1+side2+side3)/2
        area = Math.sqrt(s*(s-side1)*(s-side2)*(s-side3))
        area = area.toFixed(3);
        console.log(area);
        if(area===NaN){
            alert("enter valid number")
        }
        document.getElementById("Areatriangle").innerText = area
        
    }  
      

// ************** function Question5()   *****************

    function rotatestr(){
        alert("enter string and click button")
    }
    function Question5(){
        var str = document.getElementById("rotatetext").value;
        console.log(str);
        var str1=''
        var str2=''
        var str3=''
        for(i=str.length;i>0;i--){
            
        str1 =str.slice(i-1,i)
        str2 = str2+str1
        
        }
        for(i=0;i<str.length;i++){
            
            str1 =str.slice(i,i+1)
            
            str3 = str1+str3
            console.log(str3);
            }
        console.log(str2);
        console.log(str3);
        document.getElementById("given").innerText = str
        document.getElementById("rotate").innerText = str3
    }

// ********** Question6 **********

function Question6() {
    alert("enter year and click button")
}
function leapyear(){
    var y = document.getElementById("year").value;
    if(y%100==0 && y%400==0 || y%4==0){
        alert("leap year")
    }
    else
    alert(" Not leap year")
}

// *********** Question7() ********

function firstjan(){
    var arr = []
    var y =1
    for (var i = 2014; i <= 2050; i++)
    {
    var d = new Date(i, 0, 1);
    if ( d.getDay() === 0 ){
        // console.log(d);
       var p = document.createElement("p")
       p.textContent= d
       document.getElementById("output").appendChild(p)
    }
    }
    console.log(arr);
   document.getElementById("firstjan").innerText = "1st January is being a Sunday"
}

// ********* Question8 ************

function Question8(){
    alert("enter number and click");
}
function randomnum(){
    usernum = prompt("enter number between 0 and 10")
const num = Math.floor(Math.random() * 10);   
    // x = [0,1,2,3,4,5]
    // i=0
    // do{
    //     i++;
    // if(x[i]==usernum){
    //     alert("Good Work")
    // }else
    //     alert("Not matched")   
    // }while(i<5)
    document.getElementById("given").innerText = usernum;
    document.getElementById("randomout").innerText = num;
    if(usernum>10){
        alert("number is Greater than 10")}
        else
    if(num==usernum){
         document.getElementById("Greetings").innerText = "Good Work";
        }else
        document.getElementById("Greetings").innerText = "Not matched";
    
}

// ************* Question9()  **********
function Question9(){
today=new Date();
  var cmas=new Date(today.getFullYear(), 11, 25);
    if (today.getMonth()==12 && today.getDate()>25) 
    {
      cmas.setFullYear(cmas.getFullYear()+1); 
      console.log(cmas);    
    }  
    console.log(cmas);
    console.log(today);
}


// **************  Question10()  ****************

function Question10(){
    alert("enter numbers and give your choice")
}

function multiply(){
    
    var n1 = Number(document.getElementById("num1").value)
    var n2 = Number( document.getElementById("num2").value)
    var mul = n1*n2
    document.getElementById("mul").innerText = mul   
    console.log(n1+" "+n2);
            
    }
    
function divide(){
    
    var n1 = Number(document.getElementById("num1").value)
    var n2 = Number( document.getElementById("num2").value)
    var div = n1/n2
    document.getElementById("div").innerText = div
    console.log(n1+" "+n2 );
            
    }

// ***********  Question11  ***************

function Celsius(){
    
    var c = Number(document.getElementById("num1").value)
    var f = (c * 9/5) + 32
    document.getElementById("fa").innerText = f  
    
    console.log(f);
    }
    
function Fahrenheit(){
    
    // var n1 = Number(document.getElementById("num1").value)
    var f = Number( document.getElementById("num2").value)
     c = (f-32)*5/9
    document.getElementById("cel").innerText = c
    console.log(c);
            
    }

// c = (f-32)*5/9
// console.log(c);

// ***********  Question12()  ***********

function Question12(){
    var u = document.URL;
    console.log(u);
    document.getElementById("geturl").innerText = u
}

// *********** Question13()  ***********

function Question13(){

var var_name = 'test_var';
const n = 120;
this[var_name] = n;
alert("printing using this[var_name]: "+this[var_name]);
alert("printing using test_var: "+test_var);

}

// *********** Question14()   ***************
function Question14(){
// filename = "system.php"
// filename1 = "system.ts"
// var ext = filename.split('.')
// console.log(filename.split('.').pop());

var file = document.getElementById("file").value
var ext = file.split('.').pop()

console.log(file.split('.').length);

if(file.split('.').length <2){
    document.getElementById("ext").innerText = "enter extension"
}else
document.getElementById("ext").innerText = ext

}

// ************ Question15() *************

function Question15(){
        var num = document.getElementById("num").value
        console.log(num);
        if(num > 13){
            document.getElementById("numgl").innerText = " greater than 13"
            document.getElementById("diff").innerText = Math.abs(num-13)
            document.getElementById("doub").innerText = (num-13)*2
        }
        else {
        document.getElementById("numgl").innerText = " less than 13"
        document.getElementById("diff").innerText = Math.abs(num-13)
        document.getElementById("doub").innerText = ''
    }
}

// ************ Question16()

function Question16(){
    var num1 = Number( document.getElementById("num1").value)
    var num2 = Number( document.getElementById("num2").value)
    var sum = num1+num2
    if(num1 == num2){
        document.getElementById("sum").innerText = sum
        document.getElementById("eq").innerText = "same"
        document.getElementById("tri").innerText = sum*3
    }
    else {
    document.getElementById("sum").innerText = sum
    document.getElementById("eq").innerText = "are not same"
    document.getElementById("tri").innerText = ''
}

}

// ************** Question17()  ******************


function Question17(){
    var num1 = Number( document.getElementById("num1").value)
    
    var dif = Math.abs(num1 - 19)
    if(num1 >19){
        document.getElementById("diff").innerText = dif
        document.getElementById("eq").innerText = "greater than 19"
        document.getElementById("tri").innerText = dif*3
    }
    else {
    document.getElementById("diff").innerText = dif
    document.getElementById("eq").innerText = " less than 19"
    document.getElementById("tri").innerText = ''
}

// ************** Question18()  ******************

}
function Question18(){
    var num1 = Number( document.getElementById("num1").value)
    var num2 = Number( document.getElementById("num2").value)
    
    var sum = num1 + num2
    if(num1 == 50 || num2 == 50 || sum == 50 ){
        document.getElementById("sum").innerText = sum
        document.getElementById("eq").innerText = "true"
    }
    else {
        document.getElementById("sum").innerText = sum
        document.getElementById("eq").innerText = "false"
}

}

// ************* Question19()  **************

function Question19(){
    var n = Number( document.getElementById("num1").value)
        var x = (n -100)
        var y = (n -400)
        
     // 89 - 100 = -11  112 -100 = 12   11 - 100 = -89
    if(x>= -20 && x<=20)  {
    document.getElementById("eq").innerText = " within 20 of 100"
    }
    else if(y>= -20 && y<=20) {
    document.getElementById("eq").innerText =  " within 20 of 400"
    }
    else 
    document.getElementById("eq").innerText =  " not within 20 of 100 or 400"

}

// ************  Question20()  *************

function Question20(){
    var a = 20
    var b = -20
    var c = -10
    var d = 10
    if(a<0 || b<0 ){
        console.log(" is negative");
    }

    var n1 = Number( document.getElementById("num1").value)
    var n2 = Number( document.getElementById("num2").value)
    if (n1<0 && n2>=0) {
        // alert(n1 + " is negative"+n2+"positive")   
        document.getElementById("both ").innerText =  n1 + " is negative "+n2+" positive"
        document.getElementById("res").innerText = "true"
    } else
    if (n1>=0 && n2<0) {
        // alert(n2 + " is negative"+n1+"positive")
        document.getElementById("both ").innerText = n1 + " is positive "+n1+" negative"
        document.getElementById("res").innerText = "True"
    }
    else
    if (n1>=0 && n2 >=0) {
        // alert(n2 + " and "+n1+" both positive")
        document.getElementById("both ").innerText = n2 + " and "+n1+" both positive"
    }
    else{
        // alert(n2 + " and "+n1+" both negative")
        document.getElementById("both ").innerText = n2 + " and "+n1+" both negative"
    }
}

// *************  Question21()  ************

function Question21(){
    // var str = "example"
    // console.log(str);
    // if(str.charAt(0)!=="P")
    // var str = "Py".concat("example")
    
    // console.log(str);
    
    // if(str.charAt(0)!=="P")
    // var str = "Py".concat("example")
    // else
    // var str2 = str.split("y").pop()

    // console.log(str2);
    var str = document.getElementById("num1").value
    console.log(str);
    if(str.charAt(0)!=="P"){
    var str2 = "Py".concat(str)
    document.getElementById("both").innerText = str
    document.getElementById("res").innerText = str2
}
    else{
    var str2 = str.split("y").pop()
    document.getElementById("both").innerText = str
    document.getElementById("res").innerText = str2
    }
}

// ************** Question22()  ***************************

    // var str = "example"
    // pos = 3
    // console.log(str);
    // var str2 = str.slice(0,pos)
    // console.log(str2);
    // var str3 = str.substring(0,pos)
    // console.log(str3);

function Question22(){
    var str = document.getElementById("num1").value
    var pos = Number( document.getElementById("pos").value)
   // alert(typeof(pos))   
        if (str.length<1) {
            alert("enter string")
        }
    var str2,str3
    str2 = str.substring(0,pos-1)
    str3 = str.substring(pos,str.length)
    console.log(str3);
    document.getElementById("both").innerText = str
    document.getElementById("res").innerText = str2+str3
}

// ************** Question23()  ***************************

function Question23(){
    var str = document.getElementById("num1").value
   // alert(typeof(pos))   
       
    var fchar,lchar
    fchar = str.charAt(0)
    lchar = str.charAt(str.length-1)
    midstr  = str.slice(1,str.length-1)
    console.log(fchar);
    console.log(lchar);
    console.log(midstr);
    var res = lchar+midstr+fchar
    console.log(res);
    document.getElementById("both").innerText = str
    document.getElementById("res").innerText = res
}

 // ************** Question24()  ***************************

 function Question24(){
        // str = "ganesh"
        // fc = str.charAt(0)
        // str = fc+str+fc
        // console.log(str);
        var str = document.getElementById("num1").value
        fc = str.charAt(0)
        res = fc+str+fc
        if (str.length<1) {
            alert("enter string")
        }
        
    document.getElementById("both").innerText = str
    document.getElementById("res").innerText = res
 }
 
 // ************** Question25()  ***************************

function Question25(){
    // var num = 27
    // if(num%3==0)
    // {
    //     alert("success");
    // }

    var num = document.getElementById("num1").value
    if(num<3)
    {alert("number is less than 3")}

 if(num%3==0 && num%7==0)  { 
     
    document.getElementById("both").innerText = num
    document.getElementById("res").innerText = "number is multiple of 3 & 7"

 }else
    if(num%3==0){    
        document.getElementById("both").innerText = num
        document.getElementById("res").innerText = "number is multiple of 3"
    }else
    if(num%7==0){
        document.getElementById("both").innerText = num
        document.getElementById("res").innerText = "number is multiple of 7 "
    }

    else {
        document.getElementById("both").innerText = num
        document.getElementById("res").innerText = "number is not multiple of 3 or 7 "
    }

}


 // **************   Question26()  ***************************

 function Question26(){
        // var str = "LAXMAN"
        // var str2 = str.substring(str.length-3,str.length)
        // console.log(str);
        // console.log(str2);
        var str = document.getElementById("num1").value
        document.getElementById("both").innerText = str
        if(str.length<3){
            alert("String length is less than 3")
        }else{
            var str2 = str.substring(str.length-3,str.length)
            var res = str2+str+str2
            document.getElementById("res").innerText = res
        }

 }

// **************   Question27()  ***************************

function Question27(){
        var strs = "Javascript"
        var str2 = strs.substring(0,4)
        console.log(str2);

        var str = document.getElementById("num1").value
        document.getElementById("both").innerText = str
        var sub = str.substring(0,4)
        if(sub==="Java"){
            document.getElementById("res").innerText = "True"
        }
        else
        document.getElementById("res").innerText = "False"

}

// **************   Question28()  ***************************

function Question28(){
    var a = document.getElementById("num1").value
    var b = document.getElementById("num2").value
    document.getElementById("both").innerText = "Numbers are "+a+" and "+ b
    
    if((a>=50 && a<=99) && (b>=50 && b<=99)){
        document.getElementById("res").innerText = 
            a+" and "+ b+" : both Numbers are in the range of 50..99"
    } else
    if (a>=50 && a<=99)  {
        document.getElementById("res").innerText = a+" : Number is in the range of 50..99"
    } else
    if(b>=50 && b<=99){
        document.getElementById("res").innerText = b+" : Number is in the range of 50..99"
    } 
    
    else
    document.getElementById("res").innerText = 
        a+" and "+ b+" : Numbers are not in the range of 50..99"
}

// **************   Question29()  ***************************

function Question29(){
    var a = document.getElementById("num1").value
    var b = document.getElementById("num2").value
    var c = document.getElementById("num3").value

    document.getElementById("both").innerText = "Numbers are "+a+" and "+ b+" and "+ c
    
    if((a>=50 && a<=99) && (b>=50 && b<=99) && (c>=50 && b<=99)){
        document.getElementById("res").innerText = 
            a+" and "+ b+" and "+ c+" : all Numbers are in the range of 50..99"
    } else
    if (a>=50 && a<=99)  {
        document.getElementById("res").innerText = a+" : Number is in the range of 50..99"
    } else
    if(b>=50 && b<=99){
        document.getElementById("res").innerText = b+" : Number is in the range of 50..99"
    } 
    else
    if(c>=50 && b<=99){
        document.getElementById("res").innerText = c+" : Number is in the range of 50..99"
    } 
    else
    document.getElementById("res").innerText = 
        a+" and "+ b+" and" +c+ " : Numbers are not in the range of 50..99"

}

// **************   Question30()  ***************************

function Question30(){
    // var strs = "JavaScriptis"
    // var str2 = strs.substring(4,10)
    // console.log(strs);
    // console.log(str2);
    // if (str2==="Script") {
    //     var rest = strs.substring(10,strs.length)
    //     var front = strs.substring(0,4)
    //     console.log(front+" "+rest);
    // }

    var str = document.getElementById("num1").value
    document.getElementById("both").innerText = str
    var sub = str.substring(4,10)
    if(sub==="Script"){
        var rest = str.substring(10,str.length)
        var front = str.substring(0,4)
        document.getElementById("res").innerText = front+rest
    }
    else
    document.getElementById("res").innerText = str

}

// ************** Question31() *****************

function Question31(){
    a=  document.getElementById("num1").value
    b=  document.getElementById("num2").value    
    c=  document.getElementById("num3").value
    document.getElementById("both").innerText = " "+a +" , "+b+" , "+c
    
    if((a>b)&&(a>c)){
            // alert(a+" is greater")
            document.getElementById("res").innerText = " "+ a+" is largest"
    } else
    if((b>a && b>c)){
            // alert(b+" is greater")
            document.getElementById("res").innerText = " "+ b+" is largest"
    }
    else{
        // alert(c+"is greater")
        document.getElementById("res").innerText = " "+ c+" is largest"
    }
}

// ************** Question32() *****************

    function Question32(){
    var a =  document.getElementById("num1").value
    var b =  document.getElementById("num2").value    
    console.log(a+b);
    document.getElementById("both").innerText = " "+a +" , "+b

    var d1 = Math.abs( 100-a)
    var d2 = Math.abs(100-b)
    if(d1==d2){
        document.getElementById("res").innerText = a+" and "+ b+" both nearest"
    } else
    if(d1<d2 ){
        document.getElementById("res").innerText = a+" is nearest"
    } else
        document.getElementById("res").innerText = b+" is nearest"
    }

// ************** Question33() *****************

function Question33(){
    var a =  document.getElementById("num1").value
    var b =  document.getElementById("num2").value    
    console.log(a+b);
    document.getElementById("both").innerText = " "+a +" , "+b
    
    if(((a>=40 && a<=60) || (a>=70 && a<=100) ) &&
                 ((b>=40 && b<=60) || (b>=70 && b<=100) ) )
    {
        document.getElementById("res").innerText = a+" and "+b+" both are in given range"
    } else
    if((a>=40 && a<=60) || (a>=70 && a<=100) ){
        document.getElementById("res").innerText = a+" is in given range"
    } else
    if((b>=40 && b<=60) || (b>=70 && b<=100) ) {
        document.getElementById("res").innerText = b+" is in given range"
    } else
        document.getElementById("res").innerText = a+" and "+b+" both are not given range"
}

// ************** Question34() *****************

function Question34(){
    var a =  document.getElementById("num1").value
    var b =  document.getElementById("num2").value    
    console.log(a+b);
    document.getElementById("both").innerText = " "+a +" , "+b
    
    if (a<0 && b<0) {
            alert("enter valid positive integers")
    }
    else{
    if ((a>=40 && a<=60) && (b>=40 && b<=60)) {
        if (a>b) {
           // alert(a+" is larger")
           document.getElementById("res").innerText = a+" is larger than "+b
        } else
        if (b>a) {
            document.getElementById("res").innerText = b+" is larger than "+a
        }
        else
        document.getElementById("res").innerText = a+" and "+b+" are same"
    } else{
      // alert("Numbers are not in the range")
      if ((!(a>=40 && a<=60)) && (!(b>=40 && b<=60))) {
        document.getElementById("res").innerText = a+" and "+ b+" are not in the range"
      } else
      if (!(a>=40 && a<=60)) {
        document.getElementById("res").innerText = a+" is not in the range"
      } else 
      if(!(b>=40 && b<=60)){
        document.getElementById("res").innerText = b+" is not in the range"
        } 
    }    
        
    }
}

// ************** Question35() *****************

function Question35(){
    // var str = "question"
    // var ch = "e"
    // var fc = str.indexOf(ch)
    // console.log(fc);
    var str =  document.getElementById("num1").value
    var ch =  document.getElementById("num2").value    
     // console.log(a+b);
    document.getElementById("both").innerText = "string: "+str +" and char: "+ch
    var pos = str.indexOf(ch)
    if(str.length<1){
        alert("Enter string")
    }
    if(ch.length<1 || ch.length>1){
        alert("Enter valid character")
    } else  
    if (str.indexOf(ch)<0) {
        console.log(str.indexOf(ch))
        alert("character not found in string")
    }
    else
    {
        if (pos>=1 && pos <4) {
            document.getElementById("res").innerText = 
                    "'"+ch+"' position in '"+str+"' is: "+Number(pos+1)
        }
        else
        document.getElementById("res").innerText = 
             " '"+ ch+"' not found at given position in '"+str+"' position is:"+Number(pos+1)
    }
}

// ************** Question36() *****************

function Question36(){
    a=  document.getElementById("num1").value
    b=  document.getElementById("num2").value    
    c=  document.getElementById("num3").value
    if(a%10 == b%10 && b%10 == c%10 )
    {
        alert("true")
    }
    else
        alert("false")

}

// ************** Question37() *****************

function Question37(){
    var str =  document.getElementById("num1").value  
    var upstr
    console.log(str);
    document.getElementById("both").innerText = " "+str 
    if (str.length<3) {
        upstr = str.toUpperCase()
        document.getElementById("res").innerText = upstr
    }
    else
    {
        var lowstr = str.substring(0,3)
        var res = str.substring(3,str.length)
        document.getElementById("res").innerText = lowstr.toUpperCase()+res
    }
}

// ************** Question38() *****************
function Question38(){
    
    var exam = document.getElementById('exam');
    var examsel = exam.options[exam.selectedIndex].value;
    var m1 = Number(document.getElementById("marks1").value)
    // var m2 = Number(document.getElementById("marks2").value)
    // var m3 = Number(document.getElementById("marks3").value)
    
    // console.log(examsel);
    // if (examsel!=="final") {
    //     alert("Select final exam")
    // } else {
    //     if ((m1<0 && m1>100) || (m2<0 && m2>100) || (m3<0 && m3>100)) {
    //         alert("enter valid marks")
    //     } else {
    //     var total = m1+m2+m3
    //         if(total>88){
    //             var grade = "A+"
    //         }
    // }
    // }

    var grade = ""
    if (examsel!=="final") {
        alert("Select final exam")
    } else {
        if(m1>=90 && m1<=100){
            grade="A+"
            alert("Congrates!! You got A+")
        }
        else
        alert("False")

    }
}

// ************** Question39() *****************

function Question39(){
    var a = Number( document.getElementById("num1").value)
    var b = Number( document.getElementById("num2").value)
    console.log(a+b);
    document.getElementById("both").innerText = " "+a +" , "+b
    var sum = Number(a+b)
    if((sum >= 50 && sum <= 80))
    {
        alert(65)
        document.getElementById("res").innerText = sum+" is in given range"
    } else{
        alert(80)
        document.getElementById("res").innerText = sum+" is not in given range"
    }
        
}

// ************** Question40() *****************

function Question40(){
    var a = Number( document.getElementById("num1").value)
    var b = Number( document.getElementById("num2").value)
    console.log(a+b);
    document.getElementById("both").innerText = " "+a +" , "+b
    var sum = Number(a+b)
    var dif = Math.abs(a-b)
    if(sum == 8 )
    {
        alert("sum of integers is 8")
    }
    else if(a ==8){
        alert("Number 1 of integers is 8")
    }
    else if(b ==8){
        alert("Number 2 of integers is 8")
    }
    else if(dif ==8){
        alert("difference 2 of integers is 8")
    }
     else{
        alert("False")
     }
     document.getElementById("res").innerText = "sum is : "+sum+" and difference is : "+dif
}

// ************** Question41() *****************

function Question41(){
    var a = Number( document.getElementById("num1").value)
    var b = Number( document.getElementById("num2").value)
    var c = Number( document.getElementById("num3").value)
    // var sum3 = a+b+c
    if (a<1 || b<1 || c <1) {
        alert("enter numbers")
    } else{
    if (a == b && b== c) {
        alert(30)
    }
    else 
        if (a == b || b == c || a == c) {
            alert(40)
        }
    else
    {   
        alert(20)
    }
}
    
}

// ************** Question42() *****************

function Question42(){
    var a = Number( document.getElementById("num1").value)
    var b = Number( document.getElementById("num2").value)
    var c = Number( document.getElementById("num3").value)
    document.getElementById("both").innerText = " "+a+" "+b+" "+c

    if (a<b && b<c) {
        alert("strict")
        document.getElementById("res").innerText = "strict Mode: "+a+" "+b+" "+c
    }
    else if (a<=b || a<=c ) {
        alert("soft mode")
        document.getElementById("res").innerText = "Soft Mode: "+a+" "+b+" "+c
    } else
    alert("false")
}

// ************** Question43() *****************

function Question43(){
    var a = Number( document.getElementById("num1").value)
    var b = Number( document.getElementById("num2").value)
    var c = Number( document.getElementById("num3").value)
    document.getElementById("both").innerText = " "+a+" "+b+" "+c
    if ((a%10 === b%10) || ( b%10 === c%10) ) {
        alert("true")
        document.getElementById("res").innerText = "True"
    }
    else{
        alert("false")
        document.getElementById("res").innerText = "False"
    }
}

// ************** Question44() *****************

function Question44(){
    var a = Number( document.getElementById("num1").value)
    var b = Number( document.getElementById("num2").value)
    var c = Number( document.getElementById("num3").value)
    document.getElementById("both").innerText = " "+a+" "+b+" "+c
    if (a<20 && b <20 & c<20) {
        alert("all numbers less than 20")
    } else{
        if( ((a>=20) && (a<b || a<c) )|| ( (b>=20) && (b<a || b<c)) 
                    || ( (c>=20) && (c<b || c<a))) {
            alert("True")
         } 
         else
         alert("false")
    }
}

// ************** Question45() *****************

function Question45(){
    var a = Number( document.getElementById("num1").value)
    var b = Number( document.getElementById("num2").value)
    console.log(a+b);
    document.getElementById("both").innerText = " "+a +" , "+b
    var sum = Number(a+b)
    var dif = Math.abs(a-b)
    if(sum == 15 )
    {
        alert("sum of integers is 15")
    }
    else if(a ==15){
        alert("Number 1 of integers is 15")
    }
    else if(b ==15){
        alert("Number 2 of integers is 15")
    }
    else if(dif ==15){
        alert("difference 2 of integers is 15")
    }
     else{
        alert("False")
     }
     document.getElementById("res").innerText = "sum is : "+sum+" and difference is : "+dif
}

// ************** Question46() *****************

function Question46(){
    // var num = 27
    // if(num%3==0)
    // {
    //     alert("success");
    // }

    var num1 = document.getElementById("num1").value
    var num2 = document.getElementById("num2").value

    if(num1<7 || num2<7){
        alert("enter number greater than 7")
    }
    else {
        if((num1%7===0 || num1%11===0) && (num2%7===0 || num2%11===0))  { 
             alert("'False:- 'both numbers multiple of 7 or 11")
     } else 
        {
            if ((num1%7===0 || num1%11===0) || (num2%7===0 || num2%11===0)){
                alert("'True:- 'one numbers is multiple of 11 or 7")
                }      
            else
                if ((num1%7!==0 || num1%11!==0) || (num2%7!==0 || num2%11!==0))
                    {
                        alert("'False:- 'both numbers not multiple of 11 and 7")
                    }
        }
    } 
}

// *************  Question47   ********************

function Question47(){
    var a = document.getElementById("num1").value

    document.getElementById("both").innerText = "Numbers is "+a
    if(a==""){
        alert("enter number")
    } else
    if((a>=40 && a<=10000) ){
        document.getElementById("res").innerText = 
            a+" : is present in the range of 50..99"
    } else
    document.getElementById("res").innerText = 
        a+" is not present in the range of 50..99"
}

// *************  Question48   ********************

function Question48(){
    var str = document.getElementById("input").value
    var ch = ""
    var rev = ""
    document.getElementById("both").innerText = str   
    if (str.length<1) {
        alert("enter string ")
    }   else  
    for (let i = 0; i < str.length; i++) 
        {      
            ch = str.charAt(i)
            rev = ch+rev;            
    }
    document.getElementById("res").innerText = rev
}

// *************  Question49()   ********************

function Question49(){
    var str = document.getElementById("input").value
    var newstr = ''
    let char = 0
    let ind = ''
    
for (var i = 0; i < str.length; i++) {
    
    // alert(str[i])
    // alert(str[i].charCodeAt(0))
    // alert(String.fromCharCode(1 + str[i].charCodeAt(0)))
    if(str.length<1)
    {
        alert("enter string")
    } else
        {   
            if (str[i] == 'z') {
                str[i] = 'a'
            } else 
            if (str[i] == 'Z') {
                str[i] = 'A'
            } else if(str[i] !== 'z' || str[i] !== 'Z' ){
            str[i] = String.fromCharCode(1 + str[i].charCodeAt(0))
            newstr = newstr+ String.fromCharCode(1 + str[i].charCodeAt(0))
            // alert(newstr)
            }
        }
        
        // if conditions not working for 
}
        document.getElementById("res").innerText = str+"  "+newstr
}

// *************  Question50()   ********************

function Question50(){
    var str = document.getElementById("input").value
    
    var spstr = str.split(" ")
    document.getElementById("both").innerText  = str
    var upstr =""
    var newstr = ""
  //  alert(spstr)
  if(str.length<1){
    alert("enter string")
  } else {
    console.log(spstr);
    for(i=0;i<spstr.length;i++){
            upstr = spstr[i]
           // console.log(upstr);
            upstr = upstr[0].toUpperCase()+upstr.substring(1,upstr.length)
           // console.log(upstr);   
            newstr = newstr+" "+upstr 
    }
    // alert(str)
    // alert(newstr)
   
    document.getElementById("res").innerText = newstr
}
}
// *************  Question51()   ********************

function Question51(){
    // var num = 155   2 : 35
    // var hr  
    // var min = num % 60
    //     hr = Math.floor(num/60)
    // console.log(hr+" : "+ min );
    var num = document.getElementById("input").value    
     // var spstr = str.split(" ")
    document.getElementById("both").innerText  = num
    var hr  
    var min = num % 60
    if(min<10){
        console.log("inside if")
        min = "0"+min
    }
        hr = Math.floor(num/60)
    console.log(hr+" : "+ min );
    document.getElementById("res").innerText = "time conversion: "+ hr+" : "+ min
}

// *************  Question52()   ********************

function Question52(){
       
        var str = document.getElementById("input").value    
            // var spstr = str.split(" ")
         document.getElementById("both").innerText  = str 
         if(str.length<1){
            alert("enter string")
         }
         else {
        var strspl = str.split("")
        console.log(strspl)
        var strsort = strspl.sort()
        console.log(strsort+"  length: "+strsort.length)
        var res = strsort.join()
        console.log(res);
        res= ''
        for(let i=0;i<strsort.length;i++){
            console.log(strsort[i]);
            res = res+strsort[i]
        }
        console.log(res);
        document.getElementById("res").innerText = res
    }
}

// *************  Question53()   ********************

function Question53(){
    var str = document.getElementById("input").value    
    
    document.getElementById("both").innerText  = str 
    if (str.length<1) {
        alert("please enter string")
    }
    else 
    {  
        for(i=0;i<str.length;i++){
            console.log(str);
            // console.log(typeof( str[i]));
            if('a'==str[i]){
               // console.log(str[i+4]);
                if('b'==str[i+4]){
                    console.log("true");
                    console.log(str[i+4]);
                   
                    document.getElementById("res").innerText = 
                            "b is found at exactly 3 places from a"
                            break
                } else
                console.log(str[i]);
            }
            else
            if('b'===str[i]) {
                if('a'==str[i+4]){
                    console.log("true");
                    console.log(str[i+4]);
                    document.getElementById("res").innerText = 
                            "a is found at exactly 3 places from b"
                            break
                }
            }
            else
                document.getElementById("res").innerText = 
                    "a and b not found at given palces"
        }
    }
}

// *************  Question54()   ********************

function Question54(){
    var str = document.getElementById("input").value    
    
    document.getElementById("both").innerText  = str 

   // var str = "slfjapwjisdlkma;awawq"
    var count = 0
    if (str.length<1) {
        alert("please enter string")
    }
    else 
    { 
    for(i=0;i<str.length;i++){
        if ('a'==str[i] || 'e' == str[i] || 'o' == str[i]
                    || 'i' == str[i] || 'u' == str[i]) {
            count++
        }
    }
    console.log(str);
    console.log(count);
    document.getElementById("res").innerText = "vowels in given strings are :"+count
}
}

// *************  Question55()   ********************

function Question55(){
    var str = document.getElementById("input").value    
    // str = "slkdftptjotpttritt"
    document.getElementById("both").innerText  = str 
    var pc = 0
    var tc = 0
    if (str.length<1) {
        alert("please enter string")
    }
    else 
    { 
    for(i=0;i<str.length;i++){
        if('p' == str[i]){
                pc++
                console.log(pc+" pc");
        }
        if('t' == str[i]){
            tc++
            console.log(tc+" tc");
    }
    }
    if(tc === pc){
        document.getElementById("res").innerText = 
                " True : count of tc: "+tc+" and : count of pc: "+pc
    }
    else{
        document.getElementById("res").innerText = 
                " False : count of tc: "+tc+" and : count of pc: "+pc
    }
}
}

// *************  Question56()   ********************

function Question56(){
    var num1 = document.getElementById("num1").value
    var num2 = document.getElementById("num2").value

    var div = Math.round(num1/num2).toString()
    console.log(div);
   // Math.round(n1 / n2).toString(), result_array = div.split("");
    var strdiv = div.split("")
    console.log(strdiv);
    if(div>1000){
    
    for(var i=div.length-3; i>0; i-=3){
        strdiv.splice(i,0,'.')
    }
    alert(strdiv)
}
}

// *************  Question57()   ********************

function Question57(){
    var num1 = document.getElementById("num1").value
    var num2 = document.getElementById("num2").value
    var str=""
    document.getElementById("both").innerText = num1
    if(num2<0){
        alert("enter valid number to copied")
    }
    if(num1.length<1){
        alert("enter valid string")    

    }
    else{
        while(num2>0){
            str = str+num1
            num2--
        }
    }
    document.getElementById("res").innerText = str       
}

// *************  Question58()   ********************

function Question58(){
    var str = document.getElementById("num1").value
    //  var num2 = document.getElementById("num2").value
    // var str="laxman"
    var copy = ""
    var newstr = ""
    document.getElementById("both").innerText = str
    if(str.length<4){
        alert("enter string whose length atlest 4")
    }
    else
    {
         copy = str.substring(str.length-3,str.length)
            for(i=1;i<5;i++){
                console.log(i);
                newstr = newstr+copy
            }
             console.log(newstr);
    }
    document.getElementById("res").innerText = newstr  
}

// *************  Question59()   ********************

function Question59(){
    var str = document.getElementById("num1").value
    //  var num2 = document.getElementById("num2").value
    // var str="laxman"
    var copy = ""
    var newstr = ""
    document.getElementById("both").innerText = str
    if(str.length%2 !=0 || str.length<1){
        alert("string length is ODD")
    }
    else {
        copy = str.substring(0,str.length/2)
        console.log(copy);
        document.getElementById("res").innerText = copy
    }

}

// *************  Question60()   ********************

function Question60(){
    var str = document.getElementById("num1").value
    var str="laxman"
    var copy = ""
    var newstr = ""
    document.getElementById("both").innerText = str
    if(str.length<1){
        alert("please enter string")
    }
    else {
            copy = str.slice(1,copy.length-1)
            // copy = str.slice(copy.length)
            document.getElementById("res").innerText = copy
            console.log(copy);
    }
}

// *************  Question61()   ********************

function Question61(){
    var str1 = document.getElementById("num1").value
    var str2 = document.getElementById("num2").value

    // var str1 ="laxman"
    // var str2 ="dgore"
    var copy = ""
    var newstr = ""
    document.getElementById("both").innerText = " string 1: "+str1+""+" string 2: "+str2
        if(str1.length<1 || str2.length<1){
        alert("please enter valid string")
    }
    else {
        copy = str1.substring(1)
        newstr = str2.substring(1)
        document.getElementById("res").innerText = copy+" "+newstr
    }
}

// *************  Question62()   ********************

function Question62(){
    var str = document.getElementById("num1").value
   // var str="laxmangore"
    var copy = ""
    var newstr = ""
    document.getElementById("both").innerText = str
    if(str.length<4){
        alert("please enter valid string - length shuold be above 4")
    }
    else {
        copy = str.substring(str.length-3)
        newstr = str.substring(0,str.length-3)
        console.log(copy);
        console.log(newstr);
        document.getElementById("res").innerText = copy+""+newstr
    }
}

// *************  Question63()   ********************

function Question63(){
    var str = document.getElementById("num1").value
   // var str="laxmangore"
    var copy = ""
    var newstr = ""
    document.getElementById("both").innerText = str
    if(str.length<3){
        alert("please enter valid string - length shuold be above 3")
    }
    
    else
    if (str.length%2 == 0) {
        console.log(str.length%2);
        alert("please enter valid string - length shuold be odd")
    } {
        var len  = Math.round(str.length/2)
        console.log(len);
        copy = str.substring(len-2,len+1)
        console.log(copy);
        console.log(newstr);
        document.getElementById("res").innerText = copy
    }
}

// *************  Question64()   ********************

function Question64(){
    var str1 = document.getElementById("input1").value
    var str2 = document.getElementById("input2").value
   // var str="laxmangore"
    var copy = ""
    var newstr = ""
    document.getElementById("both").innerText = "string 1: "+str1 +"string 1: "+ str2
    if(str1.length<1 || str2.length<1){
        alert("please enter valid string ")
    } else {
        if (str1.length == str2.length) {
            newstr = str1+str2
        } else
        if (str1.length>str2.length) {
            copy = str1.slice(0,str2.length)
            // console.log(str1);
            // console.log(str2);
            // console.log(copy);
            newstr = copy+str2
            console.log(newstr);
            document.getElementById("res").innerText = newstr
        }
        else
        if (str1.length<str2.length) {
            copy = str2.slice(0,str1.length)
            newstr = str1+copy
            console.log(newstr);
            document.getElementById("res").innerText = newstr
    }
    else
    newstr = str1 + str2
    document.getElementById("res").innerText = newstr

}
}

// *************   Question65()   ***************

function Question65(){
    var str = document.getElementById("input1").value
    // var str="laxmangore"
    var copy = ""
    var newstr = ""
    document.getElementById("both").innerText = str
    if(str.length<3){
        alert("please enter valid string - length shuold be above 3")
        
    }
    else {
       //  console.log(str.slice(str.length-6,str.length));
        copy = str.slice(str.length-6,str.length)
        if (copy === "Script") {
            alert("True : string end with Script")
            document.getElementById("res").innerText = str
        }
        else
        alert("True : string not end with Script")
    }
    
}

// *************   Question66()   ***************

function Question66(){
    var str = document.getElementById("input1").value
    // var str="laxmangore"
    var copy = ""
    var newstr = ""
    document.getElementById("both").innerText = str
    if(str.length<3){
                alert("please enter valid string")
    } else {
        if (str.slice(0,3)=="Los" || str.slice(0,3)=="New") {
            alert("true")
            document.getElementById("res").innerText = str 
        }
        else {
            alert("city not begins with 'Los' or 'New'")
            document.getElementById("res").innerText = ""
        }
    }
}

// *************   Question67()   ***************

function Question67(){
    var str = document.getElementById("input1").value
     // var str="Plaxmangore"
    var copy = ""
    var newstr = ""
    document.getElementById("both").innerText = str
    if(str.length<1){
        alert("please enter valid string")
    } else {
            if(str[0]=='P' || str[str.length == 'P']){
                    alert("True")
                    copy = str.slice(1,str.length-1)
                    console.log(copy);
                    document.getElementById("res").innerText = copy
            }
            else {
                alert("string not begins with 'P' or end with 'P'")
                document.getElementById("res").innerText = str
            }
    }
}

// *************   Question68()   ***************

function Question68(){
    var str = document.getElementById("input1").value
    var n = Number( document.getElementById("input2").value)
    // var str="getElementById"
     // n=4
    var copy = ""
    var newstr = ""
    document.getElementById("both").innerText = str
    
    if(str.length<1){
        alert("please enter valid string")
    } else {
        if (n<1) {
            alert("please enter valid number")
        } else
        if (str.length<n) {
            alert("please enter valid number : above or equal to number of chars")  
        }
        else {
            copy = str.substring(0,n)
            newstr = str.substring(str.length-n,str.length)
            console.log(copy);
            console.log(newstr);
            newstr = copy+newstr
            console.log(newstr);
        }
        document.getElementById("res").innerText = newstr
    }
    }
    
// *************   Question69()   ***************

function Question69(){
    var arr =  document.getElementById("input1").value
    // var n = Number( document.getElementById("input2").value)
    var narr = arr.split(',')
    
    
    console.log(narr);
    if (narr.length != 3) {
        alert("enter exact 3 numbers seprate by , ")
    } else {
        document.getElementById("both").innerText = narr[0]+", "+ narr[1]+", "+narr[2]
        var sum = Number(narr[0]) + Number(narr[1]) + Number(narr[2])
        document.getElementById("res").innerText = sum
    }
}

// *************   Question70()   ***************

function Question70(){
    var arr =  document.getElementById("input1").value
    // var n = Number( document.getElementById("input2").value)
    var narr = arr.split(',')
    var swap
    
    console.log(narr);
    if (narr.length != 3) {
        alert("enter exact 3 numbers seprate by , ")
    } else {
        document.getElementById("both").innerText = narr[0]+", "+ narr[1]+", "+narr[2]
        var sum = Number(narr[0]) + Number(narr[1]) + Number(narr[2])
        swap = narr[0]
        narr[0] = narr[1]
        narr[1] = narr[2]
        narr[2] = swap
        document.getElementById("res").innerText = narr[0]+", "+ narr[1]+", "+narr[2]
    }
}

// *************   Question71()   ***************

function Question71(){
    var arr =  document.getElementById("input1").value
    // var n = Number( document.getElementById("input2").value)
    var narr = arr.split(',')
    var swap
    
    console.log(narr);
    if (narr.length < 1) {
        alert("enter atleast 2 numbers seprate by ' ,' ")
    } else {
        document.getElementById("both").innerText = narr
        // for(i=0; i<narr.length; i++){
        // if (narr[]) {
            
        // }
        if( narr[0] == 1 || narr[narr.length-1] == 1){
                alert("1 appears at first or last")
        }
        else
        alert("1 not appears at first or last")
    }
}

// *************   Question72()   ***************

function Question72(){
    var arr1 = []
    var arr =  document.getElementById("input1").value
    // var n = Number( document.getElementById("input2").value)
    // var narr = arr.split(',')
    var swap
    arr1.push(arr)
    console.log(arr1);
    // if (narr.length != 3) {
    //     alert("enter exact 3 numbers seprate by  ' , ' ")
    // } else {
    //     document.getElementById("both").innerText = narr[0]+", "+ narr[1]+", "+narr[2]
    //     var sum = Number(narr[0]) + Number(narr[1]) + Number(narr[2])
    //     if (Number(narr[0]) ==  Number(narr[2])) {
    //         alert("first and last lements are same")
    //         document.getElementById("res").innerText = narr[0]+", and " +narr[2]    
    //     } else {
    //         alert("first and last elements are not same")
    //     document.getElementById("res").innerText = narr[0]+", and " +narr[2]        
    // }
    // }
}

// *************   Question73()   ***************

function Question73(){
    var arr =  document.getElementById("input1").value
    // var n = Number( document.getElementById("input2").value)
    var narr = arr.split(',')
    var revarr = []
    var swap
    
    console.log(narr);
    if (narr.length != 3) {
        alert("enter exact 3 numbers seprate by  ' , ' ")
    } else {
        document.getElementById("both").innerText = narr[0]+", "+ narr[1]+", "+narr[2]
        
        // Using array function reverse()
        // var sarr = narr.reverse()
        // console.log(sarr);

        // without array function reverse()  ==> manual for less elements
        // swap = narr[0]
        // narr[0] = narr[2]
        // narr[2] = swap

        // without array function reverse()  ==> manual for large elements
        // Using loop
        console.log(narr.length);
        for( i = narr.length-1; i>=0; i--){
            revarr.push(narr[i])
        }

        console.log(narr);
        console.log(revarr);
        document.getElementById("res").innerText = revarr[0]+" "+ revarr[1]+" "+revarr[2]        
    }
}

// ********************** Question74()  **********************

function Question74(){
    var arr =  document.getElementById("input1").value
    // var n = Number( document.getElementById("input2").value)
    var narr = arr.split(',')
    var swap
    
    console.log(narr);
    if (narr.length < 3) {
        alert("enter array of numbers more than 2 elements seprated by  ' , ' ")
    } else {
        document.getElementById("both").innerText = narr.join(",")
        if (narr[0]==narr[narr.length-1]) {
            alert("first and last same")
            // for( i=0;i<narr.length;i++){
            //     narr[i] = narr[0]
            // }
            document.getElementById("res").innerText = narr.join(",")
        }
        else 
        if(narr[0] > narr[narr.length-1]){
            alert("first is larger")
            for( i=0;i<narr.length;i++){
                narr[i] = narr[0]
            }
            document.getElementById("res").innerText = narr.join(",")
        }
        else{
            alert("last is larger")
            for( i=0;i<narr.length;i++){
                narr[i] = narr[narr.length-1]
            }
            document.getElementById("res").innerText = narr.join(",")
        }
        
    }
}

// ********************** Question75()  **********************

function Question75(){
    var arr1 =  document.getElementById("input1").value
    var arr2 =  document.getElementById("input2").value
    // var n = Number( document.getElementById("input2").value)
    var narr1 = arr1.split(',')
    var narr2 = arr2.split(',')
    var res = []
    
    console.log(narr1);
    console.log(narr2);
    if (narr1.length != 3 || narr2.length != 3) {
        alert("enter array of numbers exact elements seprated by  ' , ' ")
    } else {
        document.getElementById("both").innerText = narr1.join(",")
        document.getElementById("both1").innerText = narr2.join(",")
        res[0] =  narr1[1]
        res[1] =  narr2[1]
        document.getElementById("res").innerText = res.join(",")
    }
}

// ********************** Question76()  **********************

function Question76(){
    var arr =  document.getElementById("input1").value
    // var n = Number( document.getElementById("input2").value)
    var narr = arr.split(',')
    var swap = []
    
    console.log(narr);
    if (narr.length < 1) {
        alert("enter array of numbers more than 1 element seprated by  ' , ' ")
    } else {
        document.getElementById("both").innerText = narr.join(",")
        swap[0] = narr[0]
        swap[1] = narr[narr.length-1]
        document.getElementById("res").innerText = swap.join(",")
    }
}

// ********************** Question77()  **********************

function Question77(){
    var arr =  document.getElementById("input1").value
    // var n = Number( document.getElementById("input2").value)
    var narr = arr.split(',')
    var swap = []
    
    console.log(narr);
    if (narr.length != 2) {
        alert("enter array of numbers exact element seprated by  ' , ' ")
    } else {
        document.getElementById("both").innerText = narr.join(",")
        if ((narr[0] == 1 || narr[1] == 1) && (narr[0] == 3 || narr[1] == 3)) {
            alert("array contains both '1' and '3'")
            document.getElementById("res").innerText = narr.join(",")
        } else
        if (narr[0] == 1 || narr[1] == 1) {
            alert("array contains '1'")
            document.getElementById("res").innerText = narr.join(",")
        } else
        if (narr[0] == 3 || narr[1] == 3) {
            alert("array contains '3'")
            document.getElementById("res").innerText = narr.join(",")
        } else {
            alert("array does not contains '1' or '3'")
            document.getElementById("res").innerText = narr.join(",")
        }
        
    }
}

// ********************** Question78()  **********************

function Question78(){
    var arr =  document.getElementById("input1").value
    // var n = Number( document.getElementById("input2").value)
    var narr = arr.split(',')
    var swap = []
    
    console.log(narr);
    if (narr.length != 2) {
        alert("enter array of numbers exact element seprated by  ' , ' ")
    } else {
        document.getElementById("both").innerText = narr.join(",")
        if ((narr[0] == 1 || narr[1] == 1) && (narr[0] == 3 || narr[1] == 3)) {
            alert("array contains both '1' and '3'")
            document.getElementById("res").innerText = narr.join(",")
        } else
        if (narr[0] == 1 || narr[1] == 1) {
            alert("array contains '1'")
            document.getElementById("res").innerText = narr.join(",")
        } else
        if (narr[0] == 3 || narr[1] == 3) {
            alert("array contains '3'")
            document.getElementById("res").innerText = narr.join(",")
        } else {
            alert("array does not contains '1' or '3'")
            document.getElementById("res").innerText = narr.join(",")
        }
        
    }
}

// ********************** Question79()  **********************

function Question79(){
    var arr =  document.getElementById("input1").value
    // var n = Number( document.getElementById("input2").value)
    var narr = arr.split(',')
    var swap = []
    
    console.log(narr);
    if (narr.length != 2) {
        alert("enter array of numbers exact element seprated by  ' , ' ")
    } else {
        document.getElementById("both").innerText = narr.join(",")
        if (narr[0] == 30 && narr[1] == 30) {
            alert("array contains '30' twice")
            document.getElementById("res").innerText = narr.join(",")
        } else
        if (narr[0] == 40 && narr[1] == 40) {
            alert("array contains '40' twice")
            document.getElementById("res").innerText = narr.join(",")
        } else {
            alert("array does not contains '30' or '40' twice")
            document.getElementById("res").innerText = narr.join(",")
        }
        
    }
}

// ********************** Question80()  **********************

function Question80(){
    var arr =  document.getElementById("input1").value
    // var n = Number( document.getElementById("input2").value)
    var narr = arr.split(',')
    var swap = []
    
    console.log(narr);
    if (narr.length < 1) {
        alert("enter array of numbers more than 1 element seprated by  ' , ' ")
    } else {
        document.getElementById("both").innerText = narr.join(",")
        swap = narr[0]
        narr[0] = narr[narr.length-1]
        narr[narr.length-1] = swap
        document.getElementById("res").innerText = narr.join(",")
    }
}

// ********************** Question81()  **********************

function Question81(){
    var a =  document.getElementById("input1").value
    // var n = Number( document.getElementById("input2").value)
     // var a = 67
     if (a <100 && a>9) {
        document.getElementById("both").innerText = a
        console.log("a%10 = "+ a%10);
        console.log("a/10 = "+ Math.floor(a/10));
        var d1 = Number( a%10 )
        var d2 = Number ( Math.floor( a/10))
        var sum = Number( d1 + d2)
        console.log(sum);
        document.getElementById("res").innerText = sum
     }
     else
     {
        alert("enter number only two digit")
     }
}

// ********************** Question82()  **********************

function Question82(){
    var n1 = Number( document.getElementById("input1").value)
    var n2 = Number( document.getElementById("input2").value)
    // var n = Number( document.getElementById("input2").value)
     // var n1 = 67
    //   var n2 = 89
      // result = 46
      result = 0
     if ((n1 <100 && n1>9) && (n2 <100 && n2>9)) {
        document.getElementById("both").innerText = "number 1 :"+n1+" and number 2: "+ n2

        var result = 0,
        x = 1;
         while (n1 > 0 && n2 > 0) {
          //  result +=  ((n1 + n2) % 10);
           // console.log(result);
         //  console.log(n1);
          // console.log(n2);
            result += x* ((n1 + n2) % 10);
        //    console.log((n1 + n2) );
            console.log(result);
            n1 = Math.floor(n1 / 10);
            n2 = Math.floor(n2 / 10);
            x*= 10;
            
           // result += x * ((n1 + n2) % 10);
        }
        console.log(result);
        document.getElementById("res").innerText = result
    }
    else
    {
       alert("enter number only two digit")
    }
}

// ********************** Question83()  **********************

function Question83(){
    var str =  document.getElementById("input1").value
    // var n = Number( document.getElementById("input2").value)
     // var a = 67
     // find; longest ;string; from ;a; given; array; of ;strings
     var len = 0
     var longstr
     if(str.length <1){
        alert("enter string seprated by ' ; ' :-")
     }
     else {
        strarr = str.split(";")
        console.log(strarr);
        for(i=0;i < strarr.length;i++){
            // console.log(strarr[i].trim());
            if (strarr[i].length > len) {
                console.log("lentgth ="+strarr[i].length );
                len = strarr[i].length
                console.log("len="+len);
                longstr = strarr[i]
                console.log("i ="+i+" str = "+longstr);
            } 
            
        }
        console.log("final :"+ longstr);
        document.getElementById("res").innerText = 
                "longest string is '"+longstr+ "'of length : "+len
     }
}

// ******************** Question84() ************

function Question84(){
    var str = document.getElementById("input").value
    var newstr = ''
    let char = 0
    let ind = ''
    
for (var i = 0; i < str.length; i++) {
    
    // alert(str[i])
    // alert(str[i].charCodeAt(0))
    // alert(String.fromCharCode(1 + str[i].charCodeAt(0)))
    if(str.length<1)
    {
        alert("enter string")
    } else
        {   
            if (str[i] == 'z') {
                newstr = newstr+'a';
                console.log("for z");
            } else 
            if (str[i] == 'Z') {
                newstr = newstr+'A';
            } else if (str[i] !== 'z' || str[i] !== 'Z') {
                
            str[i] = String.fromCharCode(1 + str[i].charCodeAt(0))
            newstr = newstr+ String.fromCharCode(1 + str[i].charCodeAt(0))
            // alert(newstr)
        }
        
        // if conditions not working for 
}       
        document.getElementById("both").innerText = str
        document.getElementById("res").innerText = newstr

}
}

// ******************** Question85() ************

function Question85(){
    var arr = document.getElementById("input1").value
   var newarr = [1,2,3,4,5,6,7,8,9,10]
  // var newarr = Number(arr.split(';') )
   console.log(newarr);
   var arr1 = []
    var arr2 = []
    var j=0
    var k=0
    for (let i = 0; i < newarr.length; i++) {
       // console.log(i);
       // console.log(newarr[i]);
        if (i%2 == 0) {
            arr1[j] = Number( newarr[i])
            // console.log(arr1[j]); 
            j++;
        } else {
            arr2[k] =Number( newarr[i])
           //  console.log(arr2[k]); 
            k++;
        }

    }
    
    console.log(arr1);
    console.log(arr2);

    var sum1 = 0
    var sum2 = 0
    for(i=0;i<arr1.length;i++){
        sum1 += Number( arr1[i])
        sum2 += Number( arr2[i])

    }
    
    console.log(arr1);
    console.log(sum1);
    console.log(arr2);
    console.log( sum2);
   var sumarr = [sum1,sum2]
   console.log(sumarr);
   document.getElementById("res").innerText = "check console for accurate output :"
   
}

// ******************** Question86() ************

function Question86(){
    var ang = Number( document.getElementById("input1").value)
    document.getElementById("both").innerText = ang
    if (ang <0 || ang > 180) {
        alert("enter valid input between 0 to 180 in numbers")
    }
    else {

        if (ang >= 0 && ang <90) {
            alert("this is 'Acute angle'")
            document.getElementById("res").innerText = "this is 'Acute angle'"
        } else
        if (ang == 90) {
            alert("this is 'Right angle'")
            document.getElementById("res").innerText = "this is 'Right angle'"
        } else
        if (ang >90 && ang <180){
            alert("this is 'Obtuse angle'")
            document.getElementById("res").innerText = "this is 'Obtuse angle'"
        }
        else 
        if (ang == 180) {
            alert("this is 'straight angle'")
            document.getElementById("res").innerText = "this is 'straight angle'"
        }
    }
}

// ******************** Question87() ************

function Question87(){
    var arr1 = document.getElementById("input1").value
    var arr2 = document.getElementById("input2").value

    // arr1 = [1,2,3]
    // arr2 = [1,5,6]

    if (arr1.length != arr2.length) {
        alert("array length does not matched")
    } else {
        alert("array length are matched")
        for (let i = 0; i < arr1.length; i++) {
            console.log(i);
            if (arr1[i] !== arr2[i]) {
               // console.log(i);
                alert(i+" th array element not matched")
                break
            } 
            
        }
    }
}

// ******************** Question88() ************

function Question88(){
    var num1 = Number( document.getElementById("input1").value)
    var num2 = Number( document.getElementById("input2").value)
    var div =  Number( document.getElementById("input3").value)

    if (num1 <1 || num2 <1 || div <1) {
    alert("please enter valid numbers")
    }
    else {
        document.getElementById("both").innerText = 
            "number 1: "+num1+" , number 2: "+num2+" , divisor :"+div        

     if (num1 % div == 0 && num2 % div == 0) {
        alert("divisor divides both element")
        if (num1 % num2 == 0) {
            alert("number1 and number 2 are simillar")
            document.getElementById("res").innerText =
            "number 1: "+num1+" , number 2: "+num2+" , divisor :"+div  
        }
        else
         alert("number1 and number 2 are not simillar")
        } else {
            if (num1 % div == 0) {
                alert("divisor divides number1 ")  
                document.getElementById("res").innerText =
            "number 1: "+num1+" , number 2: "+num2+" , divisor :"+div  
            }
            else 
            if(num2 % div == 0){
                alert("divisor divides number2 ")  
                document.getElementById("res").innerText =
            "number 1: "+num1+" , number 2: "+num2+" , divisor :"+div  
            }
            else {
                alert("divisor does not divides any element")
                document.getElementById("res").innerText =
            "number 1: "+num1+" , number 2: "+num2+" , divisor :"+div  
            }
        }
    }
}

// ******************** Question89() ************

function Question89(){
    var x = Number( document.getElementById("input1").value)
    var y = Number( document.getElementById("input2").value)
    var z =  Number( document.getElementById("input3").value)

    if (x <1 || y <1 || z <1) {
    alert("please enter valid numbers")
    }
    else {
        document.getElementById("both").innerText = 
                "x $ y = z   i.e.   == >    "+ x +" $ "+y+" = "+z   
                if (x + y == z) {
                    document.getElementById("res").innerText = 
                        "$ replaced with +  == > "+x+" + "+y+" = "+z
                } else 
                if (x - y == z) {
                    document.getElementById("res").innerText = 
                        "$ replaced with -  == > "+x+" - "+y+" = "+z
                } else 
                if (x * y == z) {
                    document.getElementById("res").innerText = 
                        "$ replaced with *  == > "+x+" * "+y+" = "+z
                } else
                if (x / y == z) {
                    document.getElementById("res").innerText = 
                        "$ replaced with /  == > "+x+" / "+y+" = "+z
                }
                else{
                    document.getElementById("res").innerText = 
                        "$ can not replaced with any of above as not any result is correct"
                }
         
    }
}


// ******************** Question90() ************

function Question90(){
   var x =  document.getElementById("input1").value
    var k = document.getElementById("input2").value
    // arr = [10,203,4,32,4,5,3,5,55,3]
    var arr = x.split(',')
    for(i=0 ; i<arr.length;i++){
        arr[i] = Number(arr[i])
    }
    var sortarr = []
    console.log(arr);
    sortarr = arr.sort()
    var temp
    for (let i = 1; i < arr.length; i++) {
        console.log(typeof( arr[i]));
       if (arr[i-1] > arr[i]) {
            temp = arr[i-1]
            arr[i-1] = arr[i]
            arr[i] = temp
            typeof(temp)
            console.log("temp = "+temp);
       }  
       console.log(typeof (arr[i]));     
    }

    console.log(sortarr);
    sortarr.sort()
    console.log(sortarr);
}

// ******************** Question91() ************

function Question91(){
    var arr = document.getElementById("input1").value
    // var arr = [10,23,45,70,90]
    arr = arr.split(',')
    var sum = 0
    var max = 0

    for(i=1; i<arr.length-1; i++){
        sum = Math.abs(Number( arr[i]) + Number( arr[i+1]))
        console.log("temp "+sum);
        if (sum > max) {
            max = sum
        }
        console.log("max "+ max);
        alert("max "+ max)
    }

}

// ******************** Question92() ************

function Question92(){
    var arr = document.getElementById("input1").value
    // var arr = [10,23,45,70,90]
    arr = arr.split(',')
    var temp
    var max = 0

    for(i=0; i<arr.length-1; i++){
        temp = Math.abs( arr[i] - arr[i+1])
        console.log("temp "+temp);
        if (temp > max) {
            max = temp
        }
        console.log("max "+ max);
    }

    alert("maximum difference is : "+max);
}

// ******************** Question93() ************

function Question93(){
    var arr = document.getElementById("input1").value
    // var arr = [10,23,45,70,90]
    arr = arr.split(',')
    var temp = 0
    var max = 0

    for(i=0; i<arr.length-1; i++){
        for(j=1;j<arr.length;j++){
            temp = Math.abs( arr[j] - arr[i])
            console.log("temp "+temp);
            if (temp > max) {
                max = temp
            }
            console.log("max "+ max);
        }
    }

    alert("maximum difference is : "+max);
}

// ******************** Question94() ************

function Question94(){
    var arr = document.getElementById("input1").value
   // var arr = [2,3,4,5,5,5,5,6,6,6,6,6]
    var ctr = [],
    max = 0;

  for(var i = 0; i < 10; i++) {
    ctr.push(0);
    
  }
  console.log(ctr);
  for(var i = 0; i < arr.length; i++) {
    ctr[arr[i] - 1]++;
    // console.log("ctr: "+ctr[arr[i] - 1]+" arr: "+arr[i]);
    if(ctr[arr[i] - 1] > ctr[max]) {
      max = arr[i] - 1;
    }
  }
  console.log( max + 1);  
}

// ******************** Question95() ************

function Question95(){
    var arr = document.getElementById("input1").value
    var num = document.getElementById("input2").value
    var newarr = arr.split(',')
    console.log(newarr);
    console.log(num);
    var reparr =[]
    for(i=0; i<newarr.length; i++){
        if (num ==Number(arr[i])) {
            for(j=0; j<newarr.length;j++){
                reparr[j]= num
                newarr[j] = num
            }   
            document.getElementById("both").innerText = "found"    
            console.log("if");
            break
        }
    }    
    document.getElementById("res").innerText = reparr
    console.log(reparr);  
    console.log(newarr);  
}

// ******************** Question96() ************

function Question96(){
   var arr = document.getElementById("input1").value
    // var a = [2,3,4,5,6]
    a = arr.split(',')
   var diff = 0
   var sum = 0
   document.getElementById("both").innerText = arr
   // console.log( a[1] - a[0]); 
   for( i=0; i<a.length-1; i++){
        diff = Math.abs(a[i] - a[i+1])
        console.log(diff);
        sum = sum + diff
        console.log(sum);
   }
   document.getElementById("res").innerText = "Sum of abs diff :"+sum

}

// ******************** Question97() ************

// ******************** Question98() ************

function Question98(){
    var str = document.getElementById("input1").value
    // var str = 'Write'
    var ucount = 0
    var lcount = 0
    console.log(str);
    document.getElementById("both").innerText = str
   // console.log(str[0].toLowerCase());
    if (str.length<0) {
        alert("enter string")
    }
    for( i=0; i<str.length; i++){
        console.log("for");
        console.log(str[i]);

            if (str[i].toUpperCase() == str[i]) {
                ucount++
               // console.log("ucount :"+ucount);
            }
            else 
                if(str[i].toLowerCase() == str[i]){
                    lcount++
                    // console.log("lcount :"+lcount);
                }
    }
    if (ucount > lcount) {
        str = str.toUpperCase()

    } else
    str = str.toLowerCase()
    console.log(str);

    document.getElementById("res").innerText = str
}

// ******************** Question99() ************

function Question99(){
    // var str1 = "string"
    // var str2 = "igrtsn"
    var str1 = document.getElementById("input1").value
    var str2 = document.getElementById("input2").value
    
        document.getElementById("both").innerText = 
                "string 1 = "+str1+" , string 2 = "+str2

    var str1 = str1.split("")
    var str2 = str2.split("")
    var str3 = []
    console.log(str2);
    if (str1.length != str2.length) {
            alert("string lengths not same")
    } else {
        
    for(i=0; i<str1.length; i++){
        if (str2[i] != str1[i]) {
            console.log("first if");
            for(j=0; j<=Math.max( str1.length , str2.length) ; j++){
                if (str1[i] == str2[j]) {

                    str3[i] = str1[i]
                    // str3[i] = str1[i]
                    console.log(str3[i]+" str2[i] "+str1[i]+" str1[j]");
                    // console.log("str2 in j's if: "+str2);
                    // console.log("str2 in j's if: "+str3);
                }
            }            
        }
        else{
        str3[i] = str1[i] 
        console.log("else");
    }
    }
    console.log(str3);
    str2 = ""
    for(i=0; i<str3.length;i++){
        str2 += str3[i]
    }
   
    console.log(str2);
    document.getElementById("res").innerText = str2
            
}
}

// ******************** Question100() ************

function Question100() {
    // var arr1 = [1,2,3,4]
    // var arr2 = [9,5,6,7]
    var str1 = document.getElementById("input1").value
    var str2 = document.getElementById("input2").value
    var arr1 = str1.split(",")
    var arr2 = str2.split(",")
    var flag = false

    if (arr1.length <=0|| arr2.length <=0) {
        alert("enter array at least one element")
    } else {
        document.getElementById("both").innerText = 
                "array 1 : ["+arr1+"]  and array 2 : ["+arr2+"]"

    for( i =0; i<arr1.length; i++){
        for(j=0; j<arr2.length; j++){         
            if (arr1[i] == arr2[j]) {
            alert(arr1[i]+" is found simillar in both array")
            flag = true
        }
        }
    }
    
    if (!flag) {
        
        alert("No any element found in both array")
    }  else 
    document.getElementById("res").innerText = "True" 
}
}

// ******************** Question101() ************

function Question101() {
    
    var str1 = document.getElementById("input1").value
    // var str1 = "WiNdOw"
    var str2 = str1.split("")
    console.log(str2);
    var lflag = false
    var uflag = false
    if (str1.length <1) {
        alert("please enter string")
    }
    else
    {
        document.getElementById("both").innerText = str1
    for( i=0; i< str2.length-1 ; i++){

        if (str2[i].toUpperCase() == str2[i] && 
                str2[i+1].toUpperCase() == str2[i+1] ) {
            
           // alert(i+1+" and "+(i+2)+" ranked characters uppercase")
           uflag = true
        } else
        if (str2[i] == str2[i].toLowerCase() && 
                str2[i+1] == str2[i+1].toLowerCase()) {
            // alert(i+1+" and "+(i+2)+" ranked characters lowercase")
            lflag = true
        }
    }
    if (lflag) {
        document.getElementById("res").innerText = 
                    "False : lowecase adjacents found " 
    } else
    if (uflag) {
        document.getElementById("res").innerText = 
                    "False : uppercase adjacents found " 
    } else
    document.getElementById("res").innerText = "True" 
}
}

// ******************** Question102() ************

function Question102() {
    var arr = document.getElementById("input1").value
    
    // var a = [1,4,2,6,3,7,12]
    var a = arr.split(",")
    console.log(a);

    var inv1 = 0

    for(i=0 ; i<a.length; i++){
            if ((Number( a[i]) > Number( a[i+1]))) {
                inv1++;
            }
    }
    console.log(inv1);
    alert("inversions are "+ inv1)
}

// ******************** Question103() ************

// function Question103(){
//     var num = 234
//     var arr = [2,3,4]
//     var n = 0
//     var res = 0
//     // while(num){
//     //      arr.push( num%10 )
//     //      num = Math.floor( num/10)
//     // }
//     console.log(arr);
//     for(var i=0; i < arr.length; i++){
//         for(var  j= arr.length-1 ; j>= 0; j--){
//            if (j !== i) {
//             var x = arr[j]
//             n = Number(n*10+x*1)
//             console.log(n*10+x*1);
//            }
           
//         }
//         if (res<n) {
//             res = n
//         }
//     }
//     console.log(n+" "+res);
// }

// // 

// ******************** Question103() ************

function Question103(){
    var num4 = 204
    var num4 = document.getElementById("input1").value
    var numarr = []
    var n = 0
var res = 0
    while (num4) {
        numarr.push( num4%10 )
        num4 = Math.floor( num4/10)
    }
    console.log(numarr);
    for(i=0; i<numarr.length; i++){
        n = 0
        for(j=numarr.length-1; j>=0; j--){
            if (i!=j) {
                n= n*10+numarr[j]
                console.log("n "+n);
            }
        }
        if (n>res) {
            res= n;
        }
    }
    console.log(res);
}

// ******************** Question104() ************

function Question104(){
    console.log("working");
    var arr = [7,89,45,2]
    a = document.getElementById("input1").value
    arr = a.split(",")
    var n = 20
    var max = 0
    maxdiff = 0
    var temp
    console.log(arr);
    for(i=0; i<arr.length-1; i++){
        for(j=1;j<arr.length;j++){
            temp = Math.abs( arr[j] - arr[i])
             console.log("temp "+temp);
            if(temp<=n){
                if (maxdiff<temp) {
                    maxdiff = temp
                }
            }
            //console.log("max "+ max);
        }
    }
    console.log(maxdiff);
}

// ******************** Question105() ************

function Question105(){
    var num =1239
    var sum = 0
    var sum2 = 0
    var rem
    // looping:
    // while(num){
    //     rem = num%10
    //     num = Math.floor(num/10)
    //     sum = sum+rem
        
    // console.log(sum);
          
    // } 
    // if (sum>10) {
    //     sum = sumrem(sum)
    // // } 
    // function sumrem(num){
    //     while(num){
    //         rem = num%10
    //         num = Math.floor(num/10)
    //         sum = sum+rem
    //         console.log(sum);
         
    // }
    // if (sum>10) {
    //     sum = sumrem(sum)
    //  } 
    // if (sum>=10) {
    //     looping:
    //     while(sum){
            
    //         rem = sum%10
    //         sum = Math.floor(sum/10)
    //         sum2 = sum2+rem
    //         if (sum2>10)  continue looping
            
    //     }
    // }
    var digitSum = function() {

        var sum = 0;
        while (num) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }

        return sum;
    };

    var result = 0;

    while (num >= 10) {
        result += 1;
        num = digitSum(num);
    
    console.log(sum);
}
}

// ******************** Question106() ************

function Question106(){
    num = document.getElementById("input1").value
    d = document.getElementById("input2").value

    while (num % d === 0) {
        num /= d;
        console.log(num);
        }
        console.log("num :"+num+" d = "+d);
}

// ******************** Question107() ************

function Question107(){
    
    var a = document.getElementById("input1").value
    var result = 0;
    arr =  [2,4,16]
    arr = a.split(",")
    for (var i = 0; i < arr.length; i++)
        {
        for (var j = i + 1; j < arr.length; j++)
            {
              if (arr[i] % arr[j] === 0 || arr[j] % arr[i] === 0)
                {
                    console.log("pair is ("+arr[i]+","+arr[j]+")");
                result++;
                }
         }
      }
    console.log( result);
    document.getElementById("res").innerText = "check result in console"
}

// ******************** Question108() ************

function Question108(){
    var result = 0;
    var vec1 = [1,2,3]
    var vec2 = [1,2,3]
  for (var i = 0; i < vec1.length; i++) {
    result += vec1[i] * vec2[i];
  }
  console.log("sum of products :"+result);
}


// ******************** Question109() ************

function Question109(){
   var num = document.getElementById("input1").value
   var prime_num1 = [],
      prime_num2 = [];
  for (var i = 0; i <= num; i++) {
    prime_num2.push(true);
  }
  for (var i = 2; i <= num; i++) {
    if (prime_num2[i]) {
      prime_num1.push(i);
      for (var j = 1; i * j <= num; j++) {
        prime_num2[i * j] = false;
      }
    }
  }

  console.log( prime_num1);
  document.getElementById("res").innerText = prime_num1
}


// ******************** Question110() ************

function Question110(){
    var start = document.getElementById("input1").value
    var end = document.getElementById("input2").value
    var num = document.getElementById("input3").value
    var count = 0
    console.log(start,end,num);
    if (end<start ) {
        alert("enter valid start and number")
    }
    else {
    for(i=start; i<=end; i++){
        if (i==num) {
            break
        }
        if (i%2 == 0) {
            count++
        }
    }
    document.getElementById("res").innerText = "count of even numbers :"+count
    console.log("count of even numbers :"+count);
}
}

// ******************** Question111() ************

function Question111(){
    var num1 = document.getElementById("input1").value
    var num2 = document.getElementById("input2").value
    var num3 = document.getElementById("input3").value

    if( (num1!= num2) && (num1!= num3) && (num2!= num3)) {
        alert("Not any numbers are equal")
    } else {
        if (num1 == num2) {
            alert("number1 :"+num1+" and  number2: "+num2+"equal ")
            alert(" and  number 3 :"+num3+" is different")
        } else
        if (num1 == num3) {
            alert("number1 :"+num1+" and  number3: "+num3+"equal ")
            alert(" and  number 2 : "+num2+" is different")
        }
        else
        alert("number2 :"+num2+" and  number3: "+num3+"equal ")
            alert(" and  number 1 : "+num1+" is different")
    }
}

// ******************** Question112() ************

function Question112(){
        var num = 10
        var num = document.getElementById("input1").value
        var f = 1
        var count = 0
        for(i=1;i<=num;i++){
            f *= i
            }
            document.getElementById("both").innerText = "factorial is "+f
            console.log(f);
            while (f%10 == 0) {
                f = f/10
                count++
            }
            console.log(count);
            
            document.getElementById("res").innerText = "trailing zeros are "+count
 }
 
// ******************** Question113() ************

function Question113(){
    var num = 8
    var num = Number( document.getElementById("input1").value)
    var sum = 0

    if (num<0) {
        alert("ener positive number")
    } else {
    while (num > 0) {
        sum += num;
        num = Math.floor(num / 2);
    }
    console.log(sum);
}
}


// ******************** Question114() ************

function Question114(){
    var str = document.getElementById("input1").value
    var fc = str[0];
    var lc = str[str.length - 1];
    console.log(lc);
    if ((lc == ".") && (str[0] == str[0].toUpperCase())) {
        alert("sentence is valid")
    }  else
    alert("sentence is not valid")
}


// ******************** Question118() ************

function Question118(){
    var num1 = document.getElementById("input1").value
    var num2 = document.getElementById("input2").value
    var num3 = document.getElementById("input3").value
    num1 = parseInt(num1)
    num2 = parseInt(num2)
    num3 = parseInt(num3)

    console.log("num1 :"+num1+"num2 :"+num2+"num3 :"+num3);
    if (num3 >= num1 && num3 <= num2) {
        alert("number is in range")
        console.log("num1 :"+num1+"num2 :"+num2+"num3 :"+num3);
    }
    else {
        alert("number is not in range")
    }
}

// ******************** Question119() ************

    function Question119(){
        var num1 = document.getElementById("input1").value
        var num = parseInt(num1)
        var sum = 0
        var rem = []
        while (num ) {
            rem.push(num%10)
            sum = num/10
        }
        console.log(rem);
}

// ******************** Question119a() ************

function Question119a(){
    var num1 = document.getElementById("input1").value
    var div = 0
    var rem = 0
    var arr = []
    while (num1) {
        rem = num1%10
        div = num1/10
        arr.push(rem)
    }
    console.log(arr);
}

// ***************** Question120()  ***************

function Question120(){
    console.log("working");
    var c = document.getElementById("input1").value
    c = c.split(",")
    x = parseInt( c[0]) 
    y = parseInt( c[1])

    var r = document.getElementById("input2").value
    r = parseInt(r)

    var p = document.getElementById("input3").value
    p = p.split(",")
    p1 = parseInt( p[0])
    p2 = parseInt( p[1])

    len = ((x - p1) * (x - p1)) + ((y - p2) * (y - p1)) - (r * r);

        if (len < 0){
            alert("point is inside circle")
        } else {
            alert("point is outside circle")
        }
}

// ***************** Question121()  ***************

function Question121(){
    r= prompt('enter number of rows')
    c = prompt('enter number of cols')
    var mat =[]
    var flag = true
    if (r != c) {
        alert("enter equal number of rows and cols for sq matrix")
    } else {
    for (var i=0; i<r; i++){
        mat[i] = [];                     // A
        for (var j=0; j<c; j++){
          mat[i][j]= prompt ('Enter a value for the cell ' + i + 'x' + j); // B
        }
      }
      console.log(mat);
    for (var i = 0; i < mat.length; i++) 
         {
        for (var j = 0; j < mat[0].length; j++) 
            {
                console.log("i,j ("+i+","+j+")");
            if (j > i && parseInt( mat[i][j]) !== 0){
              // alert("matrix is not lower triangular"+"i,j ("+i+","+j+")")
                flag=false
            }
        }
    } 
    if (flag == false) {
        alert("matrix is not lower triangular")
    } else
    {
        alert("matrix is lower triangular")
    }
    console.log(mat);

}
}

// ***************** Question122()  ***************

function Question122(){
    var n = prompt("enter number of array elements")
    var arr = []
    var iflag = true
    var dflag = true
    var nflag = false

    for( i=0;i<n; i++){
        arr[i] = parseInt( prompt("enter number"))
    }
    console.log(arr);
    for( i=0; i<arr.length; i++){
        if (arr[i] >arr[i+1]) {
            iflag = false
         } 
        else
        if (arr[i] <arr[i+1]) {
            dflag = false
        } 
    }
    console.log(iflag);
    if (iflag) {
        alert("array is strictly increasing")
    } else 
    if (dflag) {
        alert("array is strictly decreasing")
    }
    else
    alert("array is not strictly increasing or decreasing")
}

// ***************** Question123()  ***************

function Question123(){
    var size = prompt("enter size of the array you want to add")
    var arr = []
    var flag = true
    
    for (var i = 0; i < size; i++) {
        arr[i] = parseInt( prompt("enter number"))
    }
    var n = prompt("enter number to check permutation")
    for (var i = 0; i < n; i++) {
        if (arr.indexOf(i + 1) < 0) {
            // console.log("if");
            // console.log(arr.indexOf(i + 1) );
            // console.log(arr.indexOf(i) );
            
            flag= false;  
            break
        }   else {
            flag=true
            console.log("else");
        }
    }
    if (flag) {
        alert("true")
    } else {
        alert("false")
    }    
}

// ***************** Question124()  ***************

function Question124(){
    b1 = prompt("enter first boolean condition only in 'true' and 'false'")
    b2 = prompt("enter second boolean condition only in 'true' and 'false'")
    flag = true

    if (b1 == "true") {
        b1 = true
    } else
    if (b1 == "false") {
        b1 = false
    } else {
    alert("enter only true or false ")
    flag = false
}

    if (b2 == "true") {
        b2 = true
    } else
    if (b2 == "false") {
        b2 = false
    } else {
        flag = false
    alert("enter only true or false ")
}
    // console.log(typeof( b1)+" true "+typeof( true));
    if(flag){
    if (b1 == false && b2 == false) {
        alert("NOR is satisfied ==> 'true'")
    }
    else alert("NOR is not satisfied  ==> 'false'")
}
}

// ***************** Question125()  ***************

function Question125(){
    var n = prompt("enter number of elements to array of strings  ")
    var arrstr = []
    var long = -1
    var pos = 0
    
        for(i=0; i<n; i++){
            arrstr[i] = prompt("enter string")
        }  
        if (arrstr.length < 1) {
            alert("enter string")
        } else {
        for(i=0; i<n; i++){
                if (long < arrstr[i].length) {
                    long = arrstr[i].length
                    pos = i
                }
        }    
        alert("longest string is : "+arrstr[pos]+" \n"+long)
        console.log(arrstr);

    }
}

// ***************** Question126()  ***************

function Question126(){
    var n = prompt("enter number of elements to array  ")
    var arr = []
    var even = []
    var long = -1
    var pos = 0
    
        for(i=0; i<n; i++){
            arr[i] = prompt("enter number")
        }  
        if (arr.length < 2) {
            alert("enter array")
        } else {
            for(i=0; i<n; i++){
                if (arr[i] % 2 == 0) {
                    even.push(arr[i])
                }                
            }
            for(i=0; i<n; i++){
                if (long < even[i]) {
                    long = even[i]
                    pos = i
                }
        }
        alert("largest even number is : "+even[pos]+" \n"+long)
        console.log(arr);  
        }
    }
    
// ***************** Question127()  ***************

function Question127(){
    var n = 10 
    n = parseInt( prompt("enter number"))
    console.log(n.toString(2));
    var re
    let t = n.toString(2).split("");
    console.log(t)
    let len = t.length;
    for (let i = 0; i < 8 - len; i++) {
        t.unshift("0");
        console.log(t)
    }
    rev = t.reverse().join("")
    document.getElementById("both").innerText = n + " ==> " + t.join("")
    re = parseInt(t.reverse().join(""), 2)
    document.getElementById("res").innerText = 
             rev + " ==> " + parseInt(t.reverse().join(""), 2)
    // console.log( parseInt(t.reverse().join(""), 2));  
}

// ***************** Question128()  ***************

function Question128(){
    var n = 592
    n = parseInt( prompt("enter number :"))
    num = n
    while (num % 10) {
        num++;
    }
    console.log("nearest rounder :" +num+ " given number "+n);
    document.getElementById("both").innerText = " given number "+n
    document.getElementById("res").innerText = "nearest rounder :" +num
}

// ***************** Question129()  ***************

function Question129(){
    var n = 10
    n = parseInt( prompt("enter number :"))
    num = n+1
    var res
    flag = false
    while (flag==false) {
        for(i=2; i<=num/2; i++){
            if (num%i == 0) {
                num++;
                break
            } else {
                flag = true
                res = num 
            }
        }        
    }
   if (flag) {
        alert(num)
   }
}

// ***************** Question130()  ***************

function Question130(){
    var n = 2327
    n =  prompt("enter number :")
    num = parseInt(n)
    var rem
    var div
    var count = 0

    while (num > 0) {
        rem = num%10
        num = Math.floor( num/10)
            console.log("rem :"+rem+" and count :"+count);
            if (rem%2 == 0) {
                count++
            }    
    }
    alert("even digit count :"+count)
}


// ***************** Question131()  ***************

function Question131(){
        // var arr1 = [1,2,3,4,5]
        // var arr2 = [0,0,0,0,0]
        
         var a = parseInt( prompt("how many number array element"))
         var arr1 = []
         for(i=0; i<a; i++){
            arr1[i] = parseInt(  prompt("enter number"))
         }
         var arr2 = []
         for(i=0; i<a; i++){
            arr2[i] = 0
         }
        console.log(arr1);
        for(i=0; i<arr1.length; i++){
           for(j=0; j<i+1; j++){
            arr2[i] = arr2[i] + arr1[j]
           }
            console.log(arr2[i]);
        }       
        console.log(arr2);
}

// ***************** Question132()  ***************

function Question132(){
    var a = 160
    var arr = []
    var prime = []
    for( i=2; i<a; i++){
        if(a%i == 0){
            arr.push( parseInt(i))
        }
    }
    console.log(arr);
    
    for(i=0; i<arr.length; i++){
        if (arr[i] < 4) {
            prime.push(arr[i])
        }
        console.log(arr[i]); 
        for(j=2; j<=a; j++){
            //console.log(j);
           // console.log(arr[i]);  [2, 4, 5, 8, 10, 16, 20, 32, 40, 80]
            if(arr[i]%j !== 0) {
              //  console.log(arr[i]);
                if (!prime.includes( arr[i])) {
                    prime.push(arr[i])
                }            
        }        
    }
}
    console.log(prime);

}

// ************* Question133()  **************

function Question133(){
    var num1 = parseInt( prompt("enter number 1"))
    var num2 = parseInt( prompt("enter number 2"))
    var div
    if (num1 / num2 < 1) {
        alert("improper fraction")
    } else 
    alert("proper fraction")
}

// ************* Question134()  **************

function Question134(){
    var str1 = 'abcdzyxw'
    var result = [];
	for (var i = 0; i < str1.length; i++)
    {
		var char_order = str1.charCodeAt(i) - 'a'.charCodeAt(0),
			change_char = 25 - char_order + 'a'.charCodeAt(0);
            console.log("char_order :"+char_order);
            console.log("change_char :"+change_char);

		result.push(String.fromCharCode(change_char));
	}
	console.log( result.join(""));
}

// ************* Question135()  **************

function Question135(){
    var str = 'aabbcccccdddd'
    str = prompt("enter string")
    var strarr = str.split("")
    console.log(strarr);
    var res = []
    for(i=0; i<strarr.length; i++){
        if (res.includes(strarr[i])) {
            console.log("if");
            
        }   
        else res.push(strarr[i])
    }
    document.getElementById("both").innerText = str
    document.getElementById("res").innerText = res.join("")

    console.log(res);
    console.log(res.join(""));
}

// ************** Question136()  *************

function Question136() {
     str = prompt("enter string")
    str2 = str.replace(/[0-9]/, '$')
    // alert(str)
    // alert(str2)

    document.getElementById("both").innerText = str
    document.getElementById("res").innerText = str2

    if (str == str2) {
        alert("not digit used")
    }
  }
  
// ************** Question137()  *************

function Question137() {
    var num = prompt("enter string")
    document.getElementById("both").innerText = num
    if (num > 15) {
        document.getElementById("res").innerText = num  
    } else
    if (num < 15) {
        document.getElementById("res").innerHTML = 15
    } else
    document.getElementById("res").innerText = "number is "+15
}

// ************** Question138()  *************

function Question138() {
    var num= 12345
    var num = parseInt( prompt("enter number"))
    var result = 0;
	for (var i = 0; i < 16; i++) 
    {
		result = result * 2 + (num % 2);
		num = Math.floor(num / 2);
	}
	alert( result)
}

// ************** Question139()  *************

function Question139() {
    var n = prompt("enter size of array")
    arr = []
    for(i=0; i<n; i++){
        arr[i] = parseInt( prompt("enter number"))
    }
    document.getElementById("both").innerText = arr
    var round = 0
    for(i=0; i<n; i++){
        if (arr[i]%10 == 0) {
            round = arr[i]
        }
    }
    document.getElementById("res").innerText = round
}

// ************** Question140()  *************

function Question140() {
    var num = 222
    var num = prompt("enter number")
    var first = num % 10;
    flag = true
     while (num) {
        if (num % 10 !== first) 
        flag = false
        num = Math.floor(num / 10);
        }
        if (flag) {
            alert("all digits are same")
        } else
        alert("all digits are not same")
        
}

// ************** Question141()  *************

function Question141(){
    var arr1 = [10,20,30,40]
    var arr2 = [10,70,30,40]
    size1 = prompt("first array size")
    
    for(i=0; i<size1; i++){
        arr1[i] = prompt("enter number")
    }
        alert("now enter second array")
    size2 = prompt("second array size")
    for(i=0; i<size2; i++){
        arr2[i] = prompt("enter number")
    }
    // function enterKeyPressed(event) {
    //     if (event.keyCode == 13) {
    //        console.log("Enter key is pressed");
    //     } 
    // }
    var count = 0
    for(i=0; i<arr1.length; i++){
        for(j=0; j<arr2.length; j++){
            if (arr2[j] == arr1[i]) {
                count++
            }
        }
    }
    console.log(count);
    document.getElementById("both").innerText = 
            "\n array1 : ["+arr1 +"] \n array2: ["+arr2+"]"
    document.getElementById("res").innerText = 
            "number of common elments are :"+count
}

// ************ Question142()  *************

function simplify_path(main_path) {
    var parts = main_path.split('/'),
        new_path = [],
        length = 0;
    for (var i = 0; i < parts.length; i++) {
      var part = parts[i];
      if (part === '.' || part === '' || part === '..') {
        if (part === '..' && length > 0) {
          length--;
        }
        continue;
      }
      new_path[length++] = part;
    }
  
    if (length === 0) {
      return '/';
    }
  
    var result = '';
    for (var i = 0; i < length; i++) {
      result +=  '/'+new_path[i] ;
    }
  
    return result;
  }
  console.log(simplify_path("/home/var/./www/../html//sql/"));

// ************ Question143()  *************

function Question143(){
    var strarr = ['sort','strings','of','given','array','of'+'strings',"in",'order','of'
    ,'increasing','lengths']
    size1 = prompt("first array size")
    var strarr = []
    for(i=0; i<size1; i++){
        strarr[i] = prompt("enter string")
    }
    
    var incstr
    document.getElementById("both").innerText = strarr
    console.log(strarr);
    for(i=0; i<strarr.length; i++){
        for(j=i+1;j<strarr.length ;j++){
            if (strarr[i].length>strarr[j].length) {
                incstr = strarr[i]
                strarr[i] = strarr[j]
                strarr[j] = incstr
            }
        }
     }
     console.log(strarr);
     document.getElementById("res").innerText = strarr
}

// ************ Question144()  *************

function Question144(){

}

// ************ Question145()  *************

function Question145(){
    var num = parseInt( prompt("enter number"))
    var n = 0
    var res
    for(i=0; i<=num; i++){
        if (n<=num) {
            n += i
            res = i-1
        }
    } 
    alert(res)
}

// ************ Question146()  *************

function Question146(){
    var n = 5
    var sum = 0

    for(i=1; i<=n; i++){
        console.log("sum ="+sum+" and n*n*n = :"+i*i*i);
        console.log( );
        sum += i*i*i
    }
    console.log(sum);
    document.getElementById("both").innerText = n
    document.getElementById("res").innerText = sum
}

// ************ Question147()  ***************

function Question147(){
    var str = "sdklf345345"
    var str = prompt("enter string")
    var arr = str.split("")
    var num = []
    for(i=0; i<arr.length; i++){
        num[i] = parseInt(arr[i])
    }
    var sum  = 0
    for(i=0; i<arr.length; i++){
        if (num[i] >-1) {
            sum += num[i]
            console.log(num[i]);
        }
    }
    console.log(str);
    console.log(num);
    console.log(sum);
    document.getElementById("both").innerText = str
    document.getElementById("res").innerText = "sum ="+sum
}

// ************** Question148()  ************

function Question148(){
    var arr = [2,3,4,5,6,7]
    var size = prompt("enter array size in even")
    var arr = []
    if (size%2 !== 0) {
        alert("please enter array size in even numbers")
    } else {
    for(i=0; i<size;i++){
        arr[i] = prompt("enter number")
    }
    var res = []
    var ind = 0
    console.log(arr);
    for(i=arr.length/2; i<arr.length; i++){
        
        res.push(arr[i])
        ind++
    }
    for(i=0; i<arr.length/2; i++){
        res.push(arr[i])
        ind++
    }
    console.log(res);
    }
    document.getElementById("both").innerText = arr
    document.getElementById("res").innerText = res
}

// ************** Question149() *******************

function Question149(){
    var str = "change capitalization of all letters in a given string"
    str = prompt("enter string")
    var arrstr = str.split(" ")
    var temp = ""
    console.log(str);
    console.log(arrstr);
    for(i=0; i<arrstr.length; i++){
        arrstr[i] = arrstr[i][0].toUpperCase() + arrstr[i].substring(1)
    }

    console.log(arrstr);    
    document.getElementById("both").innerText = str
    document.getElementById("res").innerText = arrstr.join(" ")
}

// ************** Question150() *******************

function Question150(){
    var arr = 12344657   // [2,3,4,54,64,4,86,90,99]
    var arr = prompt("enter number")
    var swap = 0
    document.getElementById("both").innerText = arr

    var str = arr.toString()
    console.log(arr)
    console.log(str)
    arr = str.split("")
    console.log(arr);
    for(i=0; i<arr.length; i++){
            // swap = arr[i]
            // arr[i] = arr[i+1]
            // arr[i+1] = swap   
            if (i%2==0) {
                swap = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = swap
            }   
        console.log( arr[i]);
        }
    console.log(arr);
    document.getElementById("res").innerText = arr.join("")
}

// ************** Question151() *******************

function Question151(){
    var n1 = parseInt( prompt("enter number 1"))
    var n2 = parseInt( prompt("enter number 2"))

    document.getElementById("both").innerText = 
                "number 1 is: '"+n1+"' and number 2 is: '"+n2+"'"

    if (n1==NaN || n2==NaN) {
        alert("enter valid numbers")
    } else
    if (n1==n2) {
        alert("both numbers are same")
    } else 
    if (n1>n2) {
        document.getElementById("res").innerText = n1+" is larger"
    } else 
    if (n1<n2) {
        document.getElementById("res").innerText = "'"+n2+"' is larger"
    } else
        alert("enter valid numbers")
}

// ************** Question152() *******************

function Question152(){
    var num1 = parseInt( prompt("enter number 1"))
    var num2 = parseInt( prompt("enter number 2"))
    var num3 = parseInt( prompt("enter number 3"))
    var mul = num1 * num2 * num3
    document.getElementById("res").innerText  = mul
    if (mul<0) {
        alert("The sign is -")
    } else
        alert("The sign is +")
}

// ************** Question153() *******************

function Question153(){
    var num1 = parseInt( prompt("enter number 1"))
    var num2 = parseInt( prompt("enter number 2"))
    var num3 = parseInt( prompt("enter number 3"))
    if (num1 > num2 && num1 > num3) {
        if (num2>num3) {
            alert(num1+" , "+num2+" , "+num3)
        } else 
        alert(num1+" , "+num3+" , "+num2)
    } else 
    if (num2 > num1 && num2 > num3) {
        if (num1>num3) {
            alert(num2+" , "+num1+" , "+num3)
        } else 
        alert(num2+" , "+num3+" , "+num1)
    } else 
    {
        if (num2>num1) {
            alert(num3+" , "+num2+" , "+num1)
        } else 
        alert(num3+" , "+num1+" , "+num2)
    }
}

// ************** Question154() *******************

function Question154(){
    var num1 = parseInt( prompt("enter number 1"))
    var num2 = parseInt( prompt("enter number 2"))
    var num3 = parseInt( prompt("enter number 3"))
    var num4 = parseInt( prompt("enter number 4"))
    var num5 = parseInt( prompt("enter number 5"))
    document.getElementById("both").innerText = num1+","+num2+","+num3+","+num4+","+num5

    if (num1>num2 && num1> num3 && num1> num4 && num1>num5) {
        alert(num1+" is largest")
        document.getElementById("res").innerText = num1
    } else
    if (num2>num1 && num2> num3 && num2> num4 && num2>num5) {
        alert(num2+" is largest")
        document.getElementById("res").innerText = num2
    } else
    if (num3>num2 && num3> num1 && num3> num4 && num3>num5) {
        alert(num3+" is largest")
        document.getElementById("res").innerText = num3
    } else
    if (num4>num2 && num4> num3 && num4> num4 && num4>num5) {
        alert(num4+" is largest")
        document.getElementById("res").innerText = num4
    } else
    if (num5>num2 && num5> num3 && num5> num4 && num5>num1) {
        alert(num5+" is largest")
        document.getElementById("res").innerText = num5
    } 
}

// ************** Question155() *******************

function Question155(){
    for(i=0; i<=15; i++){
        if (i%2 == 0) {
            console.log('"'+i+'is even"');
            document.getElementById("res").innerHTML = 
                '<br><p id="res">'+i+'is even </p>'
        } else
        console.log('"'+i+'is odd"');
    }
}

// ************** Question156() *******************

function Question156(){
    var sname = prompt("enter student name")
    var marks = parseInt( prompt("enter marks"))
    var grade 
    var range

    var table = document.getElementById("table")
    var tbody = document.createElement("tbody")

    table.appendChild(tbody)

    var row = document.createElement("tr")
    var td1 = document.createElement("td")
    var td2 = document.createElement("td")
    var td3 = document.createElement("td")
    var td4 = document.createElement("td")
if (marks <0 || marks > 100) {
        alert("enter valid marks between")
} else
    {
    if(marks>90){
        td1.innerText = sname
        td2.innerText = marks       
        td3.innerText = "range <100"
        td4.innerText = "A"

        row.appendChild(td1)
        row.appendChild(td2)
        row.appendChild(td3)
        row.appendChild(td4)
        tbody.appendChild(row)

    } else
    if(marks>80 && marks<=90){
        td1.innerText = sname
        td2.innerText = marks       
        td3.innerText = "range <90"
        td4.innerText = "B"

        row.appendChild(td1)
        row.appendChild(td2)
        row.appendChild(td3)
        row.appendChild(td4)
        tbody.appendChild(row)

    } else
    if(marks>70 && marks<=80){
        td1.innerText = sname
        td2.innerText = marks       
        td3.innerText = "range <80"
        td4.innerText = "C"

        row.appendChild(td1)
        row.appendChild(td2)
        row.appendChild(td3)
        row.appendChild(td4)
        tbody.appendChild(row)

    } else
    if(marks>60 && marks<=70){
        td1.innerText = sname
        td2.innerText = marks       
        td3.innerText = "range <70"
        td4.innerText = "D"

        row.appendChild(td1)
        row.appendChild(td2)
        row.appendChild(td3)
        row.appendChild(td4)
        tbody.appendChild(row)

    } else
    if(marks<60){
        td1.innerText = sname
        td2.innerText = marks       
        td3.innerText = "range <70"
        td4.innerText = "F"

        row.appendChild(td1)
        row.appendChild(td2)
        row.appendChild(td3)
        row.appendChild(td4)
        tbody.appendChild(row)

    }
}
}

// ************** Question157() *******************

function Question157(){

    alert("check console for Your answer")
    for ( var i = 1; i <= 100; i++ )
{
  if ( i%3 === 0 && i%5 === 0 )
  {
    console.log( i + " FizzBuzz" );
  }
  else if ( i%3 === 0 ) 
  {
    console.log(i+ " Fizz" );
  }
  else if ( i%5 === 0 ) 
  {
    console.log(i+ " Buzz" );
  }
  else
  {
    console.log(i);
  }
}

    document.getElementById("res").innerText = "check console for Your answer"
}

// ************** Question158() *******************

function Question158(){

}

// ************** Question159() *******************

function Question159(){
    var arm = []
    for(i=100; i<1000; i++){
        var num = i
        var rem 
        var sum = 0
        var num1 = num
        while (num>0) {
            rem = num%10
            sum = sum+ (rem*rem*rem)
            num = Math.floor( num/10)
        }
        if (sum == num1) {
            // alert("armstrong")
            arm.push(num1)
        } 
        // alert("not armstrong ="+sum)
    }
    console.log(arm);
    document.getElementById("res").innerHTML = arm
}

// ************** Question160() *******************

function Question160(){
    var n = 5
    var n = parseInt( prompt("enter rows you want to display"))
    var ch = ''
    for(i=1;i<=n;i++){
        for(j=1;j<=i;j++){
            ch+= "*"
        }
        console.log(ch);
        ch = ''
    }
}

// ************** Question161() *******************

function Question161(){
   a = 36
   b = 60
   if (a>b) {
    
    while (a!=b){
	    if (a>b){
		    a = a -b;
	    } else {
		    b = b - a;
	            } 
            }
            gcd = a
        }
         else {    
    while (b!=a){
	    if (b>a){
		    b = b -a;
	    } else {
		a = a - b;
	    }
    }
    gcd = b
    }
    console.log("gcd :"+gcd);
}

// ************** Question162() *******************

function Question162(){
        var sum = 0

        for(i=1; i<=100; i++){
            if (i%3 == 0 && i%5 == 0) {
                sum = sum + i
               // console.log(sum+" and "+i);
            }
        }
        console.log(sum);
}