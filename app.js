//VAR DECLARATION

var array = ["TREMO"];
var arrayAllCapital = [];
var selected = "";

//ARRAY FOR OBJECTS
var selectedObjArray = [];
var chosenObjArray = [];


//SPLITTED LETTERS ARRAYS
let arrayForSelected = [];
let arrayForChosen = [];

//ARRAYS FOR COLORS
let greenarray = [];
let redarray = [];
let yellowarray = [];

selectedObj1 = {name:"", value:"", color:"",status: "not checked"};
selectedObj2 = {name:"", value:"", color:"",status: "not checked"};
selectedObj3 = {name:"", value:"", color:"",status: "not checked"};
selectedObj4 = {name:"", value:"", color:"",status: "not checked"};
selectedObj5 = {name:"", value:"", color:"",status: "not checked"};


//ONLOAD FUNCTION START
window.onload = function (){
    // Section: CAPITALIZE every word of the Array
    for (let i = 0; i < array.length; i++) {
        arrayAllCapital.push(array[i].toLocaleUpperCase());
    }
   
    selected = arrayAllCapital[0];
    console.log("Selected word :", selected); // This is the SELECTED word that will be on the display
    arrayForSelected = selected.split("");
    console.log("Array for selected:" , arrayForSelected);

    selectedObj1.value = arrayForSelected[0];
    selectedObj2.value = arrayForSelected[1];
    selectedObj3.value = arrayForSelected[2];
    selectedObj4.value = arrayForSelected[3];
    selectedObj5.value = arrayForSelected[4];

    //ARRAY FOR OBJECTS
    selectedObjArray.push(selectedObj1, selectedObj2, selectedObj3, selectedObj4, selectedObj5);
    
  
} //ONLOAD FUNCTION ENDS HERE /////////////////////////////////////////////////////////////////

var div1 = document.getElementById("divdisplay1");
var div2 = document.getElementById("divdisplay2");
var div3 = document.getElementById("divdisplay3");
var div4 = document.getElementById("divdisplay4");
var div5 = document.getElementById("divdisplay5");
let chosenword = "";

let chosenObj1 = {name: div1, value:"", color:"",status: "not checked"};
let chosenObj2 = {name: div2, value:"", color:"",status: "not checked"};
let chosenObj3 = {name: div3, value:"", color:"",status: "not checked"};
let chosenObj4 = {name: div4, value:"", color:"",status: "not checked"};
let chosenObj5 = {name: div5, value:"", color:"",status: "not checked"};

chosenObjArray.push(chosenObj1, chosenObj2, chosenObj3, chosenObj4 ,chosenObj5);  

for (let i = 1; i < 27; i++) {
    let buttoninput = document.getElementById("divinput"+i);
    buttoninput.onclick = function (){
        if (div1.innerText == ""){
            div1.innerText = this.innerText;
            chosenObj1.value = this.innerText;
        }
        else if (div2.innerText == ""){
            div2.innerText = this.innerText;
            chosenObj2.value = this.innerText;
        }
        else if (div3.innerText == ""){
            div3.innerText = this.innerText;
            chosenObj3.value = this.innerText;
        }
        else if (div4.innerText == ""){
            div4.innerText = this.innerText;
            chosenObj4.value = this.innerText;
        }
        else if (div5.innerText == ""){
            div5.innerText = this.innerText;
            chosenObj5.value = this.innerText;
        }
        chosenword = div1.innerText + div2.innerText +div3.innerText +div4.innerText +div5.innerText;
    }
}// END OF FOR LOOP



function submit(){
    console.log("this is selectedObjArray:", selectedObjArray);
    console.log("this is chosenObjArray:", chosenObjArray);
    
    let letterToFindInSelected;
    let letterTofindinChosen;

    for (let i = 0; i < chosenObjArray.length; i++){

        //CHECK HOW MANY SAME LETTERS FROM chosenObjArray ARE INSIDE selectedObjArray AND chosenObjArray
    
        letterToFindInSelected = selectedObjArray.filter(({value}) => value === chosenObjArray[i].value).length;
        letterTofindinChosen = chosenObjArray.filter(({value}) => value === chosenObjArray[i].value).length;
        
        console.log(letterToFindInSelected);
        console.log(letterTofindinChosen);

        //CONTROL FOR GREEN LETTERS (GREEN-COLOR)
        if (selectedObjArray[i].value === chosenObjArray[i].value){
        document.getElementById("divdisplay"+(i+1)).setAttribute("class", "correctLetter");
        chosenObjArray[i].status = "green-checked";
        chosenObjArray[i].color ="green";
        }
    
        //CONTROL FOR NON PRESENT LETTERS (RED-COLOR or GREY-COLOR)
        else if((selectedObjArray.filter(e => e.value === chosenObjArray[i].value).length == 0)){    
        document.getElementById("divdisplay"+(i+1)).setAttribute("class", "wrongLetter");    
        chosenObjArray[i].status = "miss-checked";    
        chosenObjArray[i].color ="red";    
        }

        //CONTROL FOR EVERY OTHER POSSIBILITY
        else {
        if((letterTofindinChosen == letterToFindInSelected) && (chosenObjArray[i].status == "not checked")){
            document.getElementById("divdisplay"+(i+1)).setAttribute("class", "maybeLetter");
            chosenObjArray[i].status = "checked";    
        }
        else if((letterTofindinChosen > letterToFindInSelected) && ((chosenObjArray[i].value) != (selectedObjArray[i].value)) &&
            (chosenObjArray[i].status == "not checked")){
            document.getElementById("divdisplay"+(i+1)).setAttribute("class", "maybeLetter");
            chosenObjArray[i].status = "checked";    
        }
        
        else if ((letterTofindinChosen > letterToFindInSelected) && (chosenObjArray[i].status != "green-checked") &&
        ((chosenObjArray[i].status) == "checked") ||((chosenObjArray[i].status) == "not checked")){
            document.getElementById("divdisplay"+(i+1)).setAttribute("class", "wrongLetter");
            chosenObjArray[i].status = "wrong place";
        }
        
        /*
            const values = [
            { name: 'someName1', color:'blue' },
            { name: 'someName2', color:'red' },
            { name: 'someName3', color:'grey' },
            { name: 'someName1', color:'blue' }
          ]
          
          const uniqueValues = new Set(values.map(v => v.name));
          const uniqueValues2 = new Set(values.map(v => v.color));
          
          if ((uniqueValues.size < values.length) && (uniqueValues2.size < values.length)){
            console.log('duplicates found');
            console.log(uniqueValues);
          }
        //else if

          
            (letterTofindinChosen > letterToFindInSelected) && ((chosenObjArray[i].value) != (selectedObjArray[i].value)) &&
            ( )
            ){ // se nell'array chosen c'è un altro elemento con lo stesso value (es. "E", "O", ) e lo status "CHECK"
            document.getElementById("divdisplay"+(i+1)).setAttribute("class", "wrongLetter"); 
            chosenObjArray[i].status = "already used";    
        } */       
    }

    }//LOOP ENDS HERE
}//SUBMIT ENDS HERE





// (OLD SUBMIT FUNCTIO) SUBMIT BUTTON
/*
function submit(){
    arrayForChosen = chosenword.split("");
    let control = [];

    for (let i = 0; i < arrayForChosen.length; i++){

        var arrayletterTofindinChosen = [];
        var letterToFindInSelected = [...selected].filter(l => l === arrayForChosen[i]).length;
        var letterTofindinChosen = [...chosenword].filter(l => l === arrayForChosen[i]).length;


        if (letterTofindinChosen > 1){
            arrayletterTofindinChosen.push(letterTofindinChosen);
            control.push(arrayForChosen[i]);
        }
        

        // SE LE LETTERE ALLA POSIZIONE "i" SONO IDENTICHE ==== V E R D E !!!
        if (arrayForChosen[i] == arrayForSelected[i]){
            greenarray.push(arrayForChosen[i]);
            document.getElementById("divdisplay"+(i+1)).setAttribute("class", "correctLetter");
        }

        //SE LA LETTERA ALLA POSIZIONE "i" NON C'E' DENTRO ALLA PAROLA SELECTED ==== ROSSO!
        else if (arrayForSelected.includes(arrayForChosen[i]) == false){
            redarray.push(arrayForChosen[i]);
            document.getElementById("divdisplay"+(i+1)).setAttribute("class", "wrongLetter");
        }

        //POSSIBILITA' DI LETTERE GIALLE
        else {
            if ((letterTofindinChosen > letterToFindInSelected) && (control.length == 1)){
                yellowarray.push(arrayForChosen[i]);
                document.getElementById("divdisplay"+(i+1)).setAttribute("class", "maybeLetter");        
            }
            else if ((letterTofindinChosen > letterToFindInSelected) && (control.length > 1)){
                redarray.push(arrayForChosen[i]);
                document.getElementById("divdisplay"+(i+1)).setAttribute("class", "wrongLetter");
            }
            else if ((letterTofindinChosen == letterToFindInSelected) && (arrayForChosen[i] != arrayForSelected[i])){
                yellowarray.push(arrayForChosen[i]);
                document.getElementById("divdisplay"+(i+1)).setAttribute("class", "maybeLetter");
            }
            else {
                yellowarray.push(arrayForChosen[i]);
                document.getElementById("divdisplay"+(i+1)).setAttribute("class", "maybeLetter");
            }
        }
    }
}}
*/
