const people=[
    {name:"Thamaraiselvi",age:20,mobno:9900000876,
    address:{city:"palladam",state:"TN",pincode:641664},
    hobbies:["reading","dancing","coding"]},
    {name:"Pavithra",age:20,mobno:9865849999,
    address:{city:"palladam",state:"TN",pincode:641664},
    hobbies:["reading","dancing","listening to music"]},
    {name:"Kiruthika",age:20,mobno:9865097590,
        address:{city:"palladam",state:"TN",pincode:641664},
        hobbies:["reading","dancing","cooking"]},
    {name:"Esther ruba",age:20,mobno:9865849043,
        address:{city:"palladam",state:"TN",pincode:641664},
        hobbies:["reading","dancing","playing"]},

];
people.map(person=>{
    let box=document.querySelector('#main');
    let con=document.createElement("div");
    con.className="Box";
    let name=document.createElement("h3");
    name.innerHTML=`name:${person.name}`;
    let age=document.createElement("h3");
    age.innerHTML=`age:${person.age}`;
     let btn=document.createElement("button");
     btn.innerHTML="delete";
     btn.className="btn";
     btn.addEventListener('click',function(){
      box.removeChild(con);   
     });
    con.appendChild(name);
    con.appendChild(age);
    con.appendChild(btn);
    box.appendChild(con);
    });
    let button=document.createElement("button");
    button.className="btn1";
    button.innerHTML="clear All";
    let body=document.querySelector("#m");
    body.appendChild(button);
    button.addEventListener('click',function(){
        body.remove();       
     });
   
   

    