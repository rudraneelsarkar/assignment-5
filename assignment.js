    
    // console.log('Js File Connected')

    const callData = []  // Call history add functionality

    // Copy Button and Reaction Functionality 
  const copyCounter = document.getElementById('copyCounter')
  let count = 0;
      
          // function to design alert notification 
   function showToast() {
  const toast = document.getElementById("toast");
  toast.classList.remove("hidden");
  setTimeout(() => {
    toast.classList.add("hidden");
  }, 2000);
}


            //  copyBtn1 
   document.getElementById('copyBtn1')
   .addEventListener('click', function(){

const numberText = document.getElementById("number1").innerText;  // functionality for clipboard copy

   if(numberText){
      navigator.clipboard.writeText(numberText);
   }
       showToast();
       count ++;
       copyCounter.textContent = count;
   })
            //  copyBtn2 
   document.getElementById('copyBtn2')
   .addEventListener('click', function(){
const numberText = document.getElementById("number2").innerText;  // functionality for clipboard copy

   if(numberText){
      navigator.clipboard.writeText(numberText);
   }

       showToast();
       count ++;
       copyCounter.textContent = count;
   })
            //  copyBtn3 
   document.getElementById('copyBtn3')
   .addEventListener('click', function(){
    const numberText = document.getElementById("number3").innerText;  // functionality for clipboard copy

   if(numberText){
      navigator.clipboard.writeText(numberText);
   }


       showToast();
       count ++;
       copyCounter.textContent = count;
   })
            //  copyBtn4 
   document.getElementById('copyBtn4')
   .addEventListener('click', function(){
  const numberText = document.getElementById("number4").innerText;  // functionality for clipboard copy

   if(numberText){
      navigator.clipboard.writeText(numberText);
   }

       showToast();
       count ++;
       copyCounter.textContent = count;
   })
            //  copyBtn5 
   document.getElementById('copyBtn5')
   .addEventListener('click', function(){
 const numberText = document.getElementById("number5").innerText;  // functionality for clipboard copy

   if(numberText){
      navigator.clipboard.writeText(numberText);
   }


       showToast();
       count ++;
       copyCounter.textContent = count;
   })

            //  copyBtn6 
   document.getElementById('copyBtn6')
   .addEventListener('click', function(){
  const numberText = document.getElementById("number6").innerText;  // functionality for clipboard copy

   if(numberText){
      navigator.clipboard.writeText(numberText);
   }

       showToast();
       count ++;
       copyCounter.textContent = count;
   })


            //  copyBtn7
   document.getElementById('copyBtn7')
   .addEventListener('click', function(){
  const numberText = document.getElementById("number7").innerText;  // functionality for clipboard copy

   if(numberText){
      navigator.clipboard.writeText(numberText);
   }

       showToast();
       count ++;
       copyCounter.textContent = count;
   })


            //  copyBtn8
   document.getElementById('copyBtn8')
   .addEventListener('click', function(){
  const numberText = document.getElementById("number8").innerText;  // functionality for clipboard copy

   if(numberText){
      navigator.clipboard.writeText(numberText);
   }

       showToast();
       count ++;
       copyCounter.textContent = count;
   })


            //  copyBtn9
   document.getElementById('copyBtn9')
   .addEventListener('click', function(){
  const numberText = document.getElementById("number9").innerText;  // functionality for clipboard copy

   if(numberText){
      navigator.clipboard.writeText(numberText);
   }

       showToast();
       count ++;
       copyCounter.textContent = count;
   })

            //  Copy Functionality Ends here
    
            // Reaction btn handle and reaction count functionality 

  const heartCounter = document.getElementById('react-counter');
  let heartCount = 0;
         
         //heart button = 1
  document.getElementById('heart-btn1')
  .addEventListener('click', function(){
//console.log('react btn clicked')  

     heartCount++
    document.getElementById('react-counter').innerText = heartCount;
  })


         //heart button = 2
  document.getElementById('heart-btn2')
  .addEventListener('click', function(){
//console.log('react btn clicked')  

     heartCount++
    document.getElementById('react-counter').innerText = heartCount;
  })


         //heart button = 3
  document.getElementById('heart-btn3')
  .addEventListener('click', function(){
//console.log('react btn clicked')  

     heartCount++
    document.getElementById('react-counter').innerText = heartCount;
  })


         //heart button = 4
  document.getElementById('heart-btn4')
  .addEventListener('click', function(){
//console.log('react btn clicked')  

     heartCount++
    document.getElementById('react-counter').innerText = heartCount;
  })


         //heart button = 5
  document.getElementById('heart-btn5')
  .addEventListener('click', function(){
//console.log('react btn clicked')  

     heartCount++
    document.getElementById('react-counter').innerText = heartCount;
  })


  
         //heart button = 6
  document.getElementById('heart-btn6')
  .addEventListener('click', function(){
//console.log('react btn clicked')  

     heartCount++
    document.getElementById('react-counter').innerText = heartCount;
  })

         //heart button = 7
  document.getElementById('heart-btn7')
  .addEventListener('click', function(){
//console.log('react btn clicked')  

     heartCount++
    document.getElementById('react-counter').innerText = heartCount;
  })


         //heart button = 8
  document.getElementById('heart-btn8')
  .addEventListener('click', function(){
//console.log('react btn clicked')  

     heartCount++
    document.getElementById('react-counter').innerText = heartCount;
  })


         //heart button = 9
  document.getElementById('heart-btn9')
  .addEventListener('click', function(){
//console.log('react btn clicked')  

     heartCount++
    document.getElementById('react-counter').innerText = heartCount;
  })
            // reaction button handle Ends here 

            // Call button handle functionality


            let coins = 100; 
const coinBalance = document.getElementById('coinBalance');

            // Call btn1
document.getElementById('callBtn1').addEventListener('click', function() {
    const serviceName = document.getElementById('serviceName1').innerText;
    const number = document.getElementById('number1').innerText;

    if(coins >= 20){
        coins -= 20;
        coinBalance.innerText = coins;
        alert(`Calling ${serviceName} (${number}) ☎️`);

        } else {
        alert("Not enough coins ❌");
    }

// history add object data for call btn 1
const data = {
     name : 'National Emergency',
     date : new Date().toLocaleTimeString(),
      number: 'ph-999'
   }
   callData.push(data)
   
 


});

           // call btn 2

     
document.getElementById('callBtn2').addEventListener('click', function() {
    const serviceName = document.getElementById('serviceName2').innerText;
    const number = document.getElementById('number2').innerText;

    if(coins >= 20){
        coins -= 20;
        coinBalance.innerText = coins;
        alert(`Calling ${serviceName} (${number}) ☎️`);

        } else {
        alert("Not enough coins ❌");
    }

// history add object data for call btn 2
const data = {
     name : 'Police Helpline',
     date : new Date().toLocaleTimeString(),
      number: 'ph-999'
   }
   callData.push(data)
   


});            

        //  call btn3 

document.getElementById('callBtn3').addEventListener('click', function() {
    const serviceName = document.getElementById('serviceName3').innerText;
    const number = document.getElementById('number3').innerText;

    if(coins >= 20){
        coins -= 20;
        coinBalance.innerText = coins;
        alert(`Calling ${serviceName} (${number}) ☎️`);

        } else {
        alert("Not enough coins ❌");
    }

// history add object data for call btn 3
const data = {
     name : 'Fire Service',
     date : new Date().toLocaleTimeString(),
      number: 'ph-998'
   }
   callData.push(data)
   

});

            // call btn-4 

document.getElementById('callBtn4').addEventListener('click', function() {
    const serviceName = document.getElementById('serviceName4').innerText;
    const number = document.getElementById('number4').innerText;

    if(coins >= 20){
        coins -= 20;
        coinBalance.innerText = coins;
        alert(`Calling ${serviceName} (${number}) ☎️`);

        } else {
        alert("Not enough coins ❌");
    }

// history add object data for call btn 4
const data = {
     name : 'Ambulance Service',
     date : new Date().toLocaleTimeString(),
      number: 'ph-1994-999999'
   }
   callData.push(data)
   
});   

             // Call btn5
document.getElementById('callBtn5').addEventListener('click', function() {
    const serviceName = document.getElementById('serviceName5').innerText;
    const number = document.getElementById('number5').innerText;

    if(coins >= 20){
        coins -= 20;
        coinBalance.innerText = coins;
        alert(`Calling ${serviceName} (${number}) ☎️`);

        } else {
        alert("Not enough coins ❌");
    }

// history add object data for call btn 5
const data = {
     name : 'Women & Child Helpline',
     date : new Date().toLocaleTimeString(),
      number: 'ph-109'
   }
   callData.push(data)

});

                    // Call btn6
document.getElementById('callBtn6').addEventListener('click', function() {
    const serviceName = document.getElementById('serviceName6').innerText;
    const number = document.getElementById('number6').innerText;

    if(coins >= 20){
        coins -= 20;
        coinBalance.innerText = coins;
        alert(`Calling ${serviceName} (${number}) ☎️`);

        } else {
        alert("Not enough coins ❌");
    }
    // history add object data for call btn 5
const data = {
     name : 'Anti-Corruption Helpline',
     date : new Date().toLocaleTimeString(),
      number: 'ph-106'
   }
   callData.push(data)

});

                 // Call btn7
document.getElementById('callBtn7').addEventListener('click', function() {
    const serviceName = document.getElementById('serviceName7').innerText;
    const number = document.getElementById('number7').innerText;

    if(coins >= 20){
        coins -= 20;
        coinBalance.innerText = coins;
        alert(`Calling ${serviceName} (${number}) ☎️`);

        } else {
        alert("Not enough coins ❌");
    }
// history add object data for call btn 7
const data = {
     name : 'Electricity-Helpline',
     date : new Date().toLocaleTimeString(),
      number: 'ph-16216'
   }
   callData.push(data)

});

             // Call btn8
document.getElementById('callBtn8').addEventListener('click', function() {
    const serviceName = document.getElementById('serviceName8').innerText;
    const number = document.getElementById('number8').innerText;

    if(coins >= 20){
        coins -= 20;
        coinBalance.innerText = coins;
        alert(`Calling ${serviceName} (${number}) ☎️`);

        } else {
        alert("Not enough coins ❌");
    }
// history add object data for call btn 8
const data = {
     name : 'Brac-Helpline',
     date : new Date().toLocaleTimeString(),
      number: 'ph-164456'
   }
   callData.push(data)
    
});

               // Call btn9
document.getElementById('callBtn9').addEventListener('click', function() {
    const serviceName = document.getElementById('serviceName9').innerText;
    const number = document.getElementById('number9').innerText;

    if(coins >= 20){
        coins -= 20;
        coinBalance.innerText = coins;
        alert(`Calling ${serviceName} (${number}) ☎️ The Call May Charge 20 coins`);

        } else {
        alert("Not enough coins ❌");
    }




// history add object data for call btn 9
   

       
   const data = {
     name : 'Bangladesh Railway',
     date : new Date().toLocaleTimeString(),
      number: 'ph-163'
   }
   callData.push(data)
   
 
})




      //  card-1
document.getElementById('callBtn1')
.addEventListener('click', function(){
    const historyContainer = document.getElementById('history-container')

    for(const data of callData){
        const div = document.createElement('div')
        div.innerHTML = `
        
        <div class="w-full lg:w-[350px] h-auto p-5 m-5 bg-white rounded-xl">
         <div class="flex justify-between items-center">
            <h2 class="font-semibold text-lg md:text-xl">
               <i class="fa-regular fa-clock fa-lg mr-2"></i> Call History
            </h2>
            <button id ="clearHistory" class="btn px-4 py-2 text-sm md:text-base rounded-full bg-green-600 text-white">Clear</button>
         </div>
         <div class="drop-shadow-xs w-full mt-5 rounded-xl bg-gray-100">
            <div class="flex justify-between items-center p-4">
               <h1 class="font-bold text-base md:text-lg">${data.name}</h1>
               <p class="font-semibold text-sm md:text-base">${data.date}</p>
            </div>
            <div class="ml-6">
               <p class="font-semibold text-gray-600">${data.number}</p>
            </div>
         </div>
      </div>
        


     `   
     const historyList = document.getElementById('history-list');
historyList.appendChild(div);  


      div.querySelector('#clearHistory').addEventListener('click', function() {
        document.getElementById('history-list').innerHTML = "";
        callData.length = 0;
    });

    }
})



      //  card-2
document.getElementById('callBtn2')
.addEventListener('click', function(){
    const historyContainer = document.getElementById('history-container')

    for(const data of callData){
        const div = document.createElement('div')
        div.innerHTML = `
        
        <div class="w-full lg:w-[350px] h-auto p-5 m-5 bg-white rounded-xl">
         <div class="flex justify-between items-center">
            <h2 class="font-semibold text-lg md:text-xl">
               <i class="fa-regular fa-clock fa-lg mr-2"></i> Call History
            </h2>
            <button id ="clearHistory" class="btn px-4 py-2 text-sm md:text-base rounded-full bg-green-600 text-white">Clear</button>
         </div>
         <div class="drop-shadow-xs w-full mt-5 rounded-xl bg-gray-100">
            <div class="flex justify-between items-center p-4">
               <h1 class="font-bold text-base md:text-lg">${data.name}</h1>
               <p class="font-semibold text-sm md:text-base">${data.date}</p>
            </div>
            <div class="ml-6">
               <p class="font-semibold text-gray-600">${data.number}</p>
            </div>
         </div>
      </div>
        


     `   
     const historyList = document.getElementById('history-list');
historyList.appendChild(div);  


      div.querySelector('#clearHistory').addEventListener('click', function() {
        document.getElementById('history-list').innerHTML = "";
        callData.length = 0;
    });

    }
})



      //  card-3
document.getElementById('callBtn3')
.addEventListener('click', function(){
    const historyContainer = document.getElementById('history-container')

    for(const data of callData){
        const div = document.createElement('div')
        div.innerHTML = `
        
        <div class="w-full lg:w-[350px] h-auto p-5 m-5 bg-white rounded-xl">
         <div class="flex justify-between items-center">
            <h2 class="font-semibold text-lg md:text-xl">
               <i class="fa-regular fa-clock fa-lg mr-2"></i> Call History
            </h2>
            <button id ="clearHistory" class="btn px-4 py-2 text-sm md:text-base rounded-full bg-green-600 text-white">Clear</button>
         </div>
         <div class="drop-shadow-xs w-full mt-5 rounded-xl bg-gray-100">
            <div class="flex justify-between items-center p-4">
               <h1 class="font-bold text-base md:text-lg">${data.name}</h1>
               <p class="font-semibold text-sm md:text-base">${data.date}</p>
            </div>
            <div class="ml-6">
               <p class="font-semibold text-gray-600">${data.number}</p>
            </div>
         </div>
      </div>
        


     `   
     const historyList = document.getElementById('history-list');
historyList.appendChild(div);  


      div.querySelector('#clearHistory').addEventListener('click', function() {
        document.getElementById('history-list').innerHTML = "";
        callData.length = 0;
    });

    }
})



      //  card-4
document.getElementById('callBtn4')
.addEventListener('click', function(){
    const historyContainer = document.getElementById('history-container')

    for(const data of callData){
        const div = document.createElement('div')
        div.innerHTML = `
        
        <div class="w-full lg:w-[350px] h-auto p-5 m-5 bg-white rounded-xl">
         <div class="flex justify-between items-center">
            <h2 class="font-semibold text-lg md:text-xl">
               <i class="fa-regular fa-clock fa-lg mr-2"></i> Call History
            </h2>
            <button id ="clearHistory" class="btn px-4 py-2 text-sm md:text-base rounded-full bg-green-600 text-white">Clear</button>
         </div>
         <div class="drop-shadow-xs w-full mt-5 rounded-xl bg-gray-100">
            <div class="flex justify-between items-center p-4">
               <h1 class="font-bold text-base md:text-lg">${data.name}</h1>
               <p class="font-semibold text-sm md:text-base">${data.date}</p>
            </div>
            <div class="ml-6">
               <p class="font-semibold text-gray-600">${data.number}</p>
            </div>
         </div>
      </div>
        


     `   
     const historyList = document.getElementById('history-list');
historyList.appendChild(div);  


      div.querySelector('#clearHistory').addEventListener('click', function() {
        document.getElementById('history-list').innerHTML = "";
        callData.length = 0;
    });

    }
})



      //  card-5
document.getElementById('callBtn5')
.addEventListener('click', function(){
    const historyContainer = document.getElementById('history-container')

    for(const data of callData){
        const div = document.createElement('div')
        div.innerHTML = `
        
        <div class="w-full lg:w-[350px] h-auto p-5 m-5 bg-white rounded-xl">
         <div class="flex justify-between items-center">
            <h2 class="font-semibold text-lg md:text-xl">
               <i class="fa-regular fa-clock fa-lg mr-2"></i> Call History
            </h2>
            <button id ="clearHistory" class="btn px-4 py-2 text-sm md:text-base rounded-full bg-green-600 text-white">Clear</button>
         </div>
         <div class="drop-shadow-xs w-full mt-5 rounded-xl bg-gray-100">
            <div class="flex justify-between items-center p-4">
               <h1 class="font-bold text-base md:text-lg">${data.name}</h1>
               <p class="font-semibold text-sm md:text-base">${data.date}</p>
            </div>
            <div class="ml-6">
               <p class="font-semibold text-gray-600">${data.number}</p>
            </div>
         </div>
      </div>
        


     `   
     const historyList = document.getElementById('history-list');
historyList.appendChild(div);  


      div.querySelector('#clearHistory').addEventListener('click', function() {
        document.getElementById('history-list').innerHTML = "";
        callData.length = 0;
    });

    }
})



      //  card-6
document.getElementById('callBtn6')
.addEventListener('click', function(){
    const historyContainer = document.getElementById('history-container')

    for(const data of callData){
        const div = document.createElement('div')
        div.innerHTML = `
        
        <div class="w-full lg:w-[350px] h-auto p-5 m-5 bg-white rounded-xl">
         <div class="flex justify-between items-center">
            <h2 class="font-semibold text-lg md:text-xl">
               <i class="fa-regular fa-clock fa-lg mr-2"></i> Call History
            </h2>
            <button id ="clearHistory" class="btn px-4 py-2 text-sm md:text-base rounded-full bg-green-600 text-white">Clear</button>
         </div>
         <div class="drop-shadow-xs w-full mt-5 rounded-xl bg-gray-100">
            <div class="flex justify-between items-center p-4">
               <h1 class="font-bold text-base md:text-lg">${data.name}</h1>
               <p class="font-semibold text-sm md:text-base">${data.date}</p>
            </div>
            <div class="ml-6">
               <p class="font-semibold text-gray-600">${data.number}</p>
            </div>
         </div>
      </div>
        


     `   
     const historyList = document.getElementById('history-list');
historyList.appendChild(div);  


      div.querySelector('#clearHistory').addEventListener('click', function() {
        document.getElementById('history-list').innerHTML = "";
        callData.length = 0;
    });

    }
})



      //  card-7
document.getElementById('callBtn7')
.addEventListener('click', function(){
    const historyContainer = document.getElementById('history-container')

    for(const data of callData){
        const div = document.createElement('div')
        div.innerHTML = `
        
        <div class="w-full lg:w-[350px] h-auto p-5 m-5 bg-white rounded-xl">
         <div class="flex justify-between items-center">
            <h2 class="font-semibold text-lg md:text-xl">
               <i class="fa-regular fa-clock fa-lg mr-2"></i> Call History
            </h2>
            <button id ="clearHistory" class="btn px-4 py-2 text-sm md:text-base rounded-full bg-green-600 text-white">Clear</button>
         </div>
         <div class="drop-shadow-xs w-full mt-5 rounded-xl bg-gray-100">
            <div class="flex justify-between items-center p-4">
               <h1 class="font-bold text-base md:text-lg">${data.name}</h1>
               <p class="font-semibold text-sm md:text-base">${data.date}</p>
            </div>
            <div class="ml-6">
               <p class="font-semibold text-gray-600">${data.number}</p>
            </div>
         </div>
      </div>
        


     `   
     const historyList = document.getElementById('history-list');
historyList.appendChild(div);  


      div.querySelector('#clearHistory').addEventListener('click', function() {
        document.getElementById('history-list').innerHTML = "";
        callData.length = 0;
    });

    }
})



      //  card-8
document.getElementById('callBtn8')
.addEventListener('click', function(){
    const historyContainer = document.getElementById('history-container')

    for(const data of callData){
        const div = document.createElement('div')
        div.innerHTML = `
        
        <div class="w-full lg:w-[350px] h-auto p-5 m-5 bg-white rounded-xl">
         <div class="flex justify-between items-center">
            <h2 class="font-semibold text-lg md:text-xl">
               <i class="fa-regular fa-clock fa-lg mr-2"></i> Call History
            </h2>
            <button id ="clearHistory" class="btn px-4 py-2 text-sm md:text-base rounded-full bg-green-600 text-white">Clear</button>
         </div>
         <div class="drop-shadow-xs w-full mt-5 rounded-xl bg-gray-100">
            <div class="flex justify-between items-center p-4">
               <h1 class="font-bold text-base md:text-lg">${data.name}</h1>
               <p class="font-semibold text-sm md:text-base">${data.date}</p>
            </div>
            <div class="ml-6">
               <p class="font-semibold text-gray-600">${data.number}</p>
            </div>
         </div>
      </div>
        


     `   
     const historyList = document.getElementById('history-list');
historyList.appendChild(div);  


      div.querySelector('#clearHistory').addEventListener('click', function() {
        document.getElementById('history-list').innerHTML = "";
        callData.length = 0;
    });

    }
})



      //  card-9
document.getElementById('callBtn9')
.addEventListener('click', function(){
    const historyContainer = document.getElementById('history-container')

    for(const data of callData){
        const div = document.createElement('div')
        div.innerHTML = `
        
        <div class="w-full lg:w-[350px] h-auto p-5 m-5 bg-white rounded-xl">
         <div class="flex justify-between items-center">
            <h2 class="font-semibold text-lg md:text-xl">
               <i class="fa-regular fa-clock fa-lg mr-2"></i> Call History
            </h2>
            <button id ="clearHistory" class="btn px-4 py-2 text-sm md:text-base rounded-full bg-green-600 text-white">Clear</button>
         </div>
         <div class="drop-shadow-xs w-full mt-5 rounded-xl bg-gray-100">
            <div class="flex justify-between items-center p-4">
               <h1 class="font-bold text-base md:text-lg">${data.name}</h1>
               <p class="font-semibold text-sm md:text-base">${data.date}</p>
            </div>
            <div class="ml-6">
               <p class="font-semibold text-gray-600">${data.number}</p>
            </div>
         </div>
      </div>
        


     `   
     const historyList = document.getElementById('history-list');
historyList.appendChild(div);  


      div.querySelector('#clearHistory').addEventListener('click', function() {
        document.getElementById('history-list').innerHTML = "";
        callData.length = 0;
    });

    }
})






           