let obj={
    'uname':"Pradeep WS",
    'email':"pradeep@ws.com",
    contact:[54564564,45645646],
    25:50,
    address:{
        pinCode:645646,
        city:"Jodhpur",
        area:"bhaskar circle"
    },
    courseName:null
}

for(let objectKey in obj){
    if(typeof obj[objectKey]=="object"){

        if(obj[objectKey]){

              if( ! obj[objectKey].length>0){
                 console.log(objectKey,obj[objectKey]);
              }  
        }
    }
    else{

    }
    
}

if(null){
    
}

if(undefined){

}
if(false){

}
if(0){
    
}

//For in loop ->key
console.log(obj);
console.log(obj.courseName);
//Object get Data 
console.log(obj.uname);
// console.log(obj.25);
console.log(obj['uname']);
console.log(obj['25']);
console.log(obj.contact[0])
console.log(obj.contact[1]); //Array [54564564,45645646]
console.log(obj.address.city);
console.log(obj['address']['city']);


//Object New key with data add

obj['courseName']="Full Stack"
console.log(obj);

obj.courseName="Full Stack Dev"
console.log(obj);


obj.duration="5 Month" //Insert | Update
console.log(obj);



//Object Desturcturing

let {uname,email,...restData}=obj

console.log(uname,email); //
console.log(restData);



// let {uname,email,address:{city,pinCode}}=obj
// console.log(uname,email,city,pinCode);


