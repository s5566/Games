

const entervalue=()=>
{
    // var inputVal = document.getElementById("inputval").value;
   
    let user= document.getElementById("inputval").value;
    //console.log(user);
   
 return new Promise((resolve,reject) =>
 {
  let user= document.getElementById("inputval").value;
  //const user=Number(window.prompt("enter number"));
 //alert(user);
 const random= Math.floor(Math.random() * 6 + 1);
 if (isNaN(user)) {
    reject(new Error("Wrong Input Type")); 
  }

  if (user == random) {
 
    resolve({
      points: 2,
      random,
      user,
    });
  } else if (
    user == random - 1 ||
    user == random + 1
  ) {
    
    resolve({
      points: 1,
      random, 
      user,
    });
  } else {
    // Else return 0 points
    resolve({
      points: 0,
      random,
      user,
    });
  }
});
    
  
};


const start = async() =>
{
  
    try{
    const result = await entervalue();
    //alert(result.user);
    if(result.user== "")
    {
      alert("Enter value");
    }
    else
    {
//  entervalue().then((result)=>
//  {
    alert(`User: ${result.user}\n Random: ${result.random}\n Points you got: ${result.points} points`); 
//  }).catch((error)=>
//  {
//      alert(error);
//  })
    }}
    catch(error)
    {
        alert(error);
    }
}; 

