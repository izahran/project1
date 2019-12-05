$(document).ready(function(){
var array1 = [1, 2, 3, 4]
var array2 = [5, 6, 7, 8]
var array3 = [9, 10, 11, 12]
var array4 = [13, 14, 15, 16]
var counter = 0
$(".line1").on("click",function(){
    if(counter == 0){
        $("#e"+array1[0]).addClass("blue")
        array1.shift()
        counter=1
    }
    else if(counter == 1){
        $("#e"+array1[0]).addClass("green")
        array1.shift()
        counter=0
    }
    winner()
})
$(".line2").on("click",function(){
    if(counter == 0){
        $("#e"+array2[0]).addClass("blue")
        array2.shift()
        counter=1
    }
    else if(counter == 1){
        $("#e"+array2[0]).addClass("green")
        array2.shift()
        counter=0
    }
    winner()

})
$(".line3").on("click",function(){
    if(counter == 0){
        $("#e"+array3[0]).addClass("blue")
        array3.shift()
        counter=1
    }
    else if(counter == 1){
        $("#e"+array3[0]).addClass("green")
        array3.shift()
        counter=0
    }
    winner()

})
$(".line4").on("click",function(){
    if(counter == 0){
        $("#e"+array4[0]).addClass("blue")
        array4.shift()
        counter=1
    }
    else if(counter == 1){
        $("#e"+array4[0]).addClass("green")
        array4.shift()
        counter=0
    }
winner()
})
function winner(){
    for(let i=1; i<=10; i++)
    
    if($(".w"+i).not(".blue").length == 0){
        
        alert("Blue Wins")
        location.reload();
    
   
    }else if($(".w"+i).not(".green").length == 0){
        alert("Green Wins")
        location.reload();
    }
    if(($(".dot").not(".blue").length ==8)&&($(".dot").not(".green").length ==8)){
        alert("TIE")
        location.reload();
    }
 
    }

})

