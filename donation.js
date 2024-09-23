// Nk equation
const nkInputFieldEl = document.getElementById("nk-input-field");
const nkdonbtnEl = document.getElementById("nk-don-btn");
const nkTotalAmountEl = document.getElementById("nk-total-amount");

// Feni equation
const feniInputFieldEl = document.getElementById("feni-input-field");
const fenidonbtnEl = document.getElementById("feni-don-btn");
const feniTotalAmountEl = document.getElementById("feni-total-amount");

// Quota equation
const qoInputFieldEl = document.getElementById("qo-input-field");
const qodonbtnEl = document.getElementById("qo-don-btn");
const qoTotalAmountEl = document.getElementById("qo-total-amount");

///show modal

 function updateDateTime(timeId) {
    const now = new Date();
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true // Change to false for 24-hour format
    };
    
    const formattedDateTime = now.toLocaleString('en-US', options);
    
    // Update the time section of the transaction
    document.getElementById(timeId).innerText = formattedDateTime;
  }
  




const mainAccountBalanceEl = document.getElementById("mainAccountBalance");

// Blog button step
const blogButtonStep = document.getElementById("blog-btn");
blogButtonStep.addEventListener("click", function () {
  window.location.href = "blog.html";
});

// btn color change
function btnColorChange(button) {
  button.style.backgroundColor = "#B4F461";
  button.style.color = "black";
}

const donationBtn = document.getElementById("donation-btn");

const historyBtn = document.getElementById("history-btn");

const hirtoryList = document.getElementById('historty-list')

donationBtn.addEventListener("click", function () {
  const donationPage = document.getElementById("donation-section");
  donationPage.classList.remove("hidden");
  btnColorChange(donationBtn);
  historyBtn.style.backgroundColor = "";
});
historyBtn.addEventListener("click", function () {
  const donationPage = document.getElementById("donation-section");
  donationPage.classList.add("hidden");
  hirtoryList.classList.remove('hidden')
  btnColorChange(historyBtn);
  donationBtn.style.backgroundColor = "";
  donationBtn.classList.remove("bg-[#B4F461]");
});

// Nk money added


nkdonbtnEl.addEventListener("click", function () {
    const nkinputvalue = parseFloat(nkInputFieldEl.value);
  
    // Check if the input is a valid number
    if (!isNaN(nkinputvalue) && nkinputvalue > 0) {
      if (parseFloat(mainAccountBalanceEl.innerText) <= 0) {
        alert("Balance finished");
      } else {
        // Add money to nkTotalAmountEl
        const amoutNk = parseFloat(nkTotalAmountEl.innerText);
        const newamountNk = amoutNk + nkinputvalue;
        nkTotalAmountEl.innerText = newamountNk;
  
        // Decrease the main account balance
        const totalaccountBalance = parseFloat(mainAccountBalanceEl.innerText);
        const newtotalaccountBalance = totalaccountBalance - nkinputvalue;
        mainAccountBalanceEl.innerText = newtotalaccountBalance;
  
        
        const timeId = `time-section-${Date.now()}`;
  
        //  Transaction money
        const transactionBalance = document.getElementById("historty-list");
        transactionBalance.innerHTML += `
         <div
            class="flex space-x-4 bg-red-500 p-5 text-black font-bold shadow rounded-lg border-2 text-2xl gap-3 mb-5"
          >
           <h2>  <span >${nkinputvalue} </span> </h2>
  
          <h2><span> Taka donated for Famine-2024 at Noakhali, Bangladesh</span></h2>
            <p>Date:</p>
            <p id="${timeId}">0</p>
          </div>
        `;
  
        // Show the modal
        const modelShow = document.getElementById('my_modal_2');
        modelShow.showModal();
  
        
        updateDateTime(timeId);
      }
    } else {
      alert("Please provide a valid donation amount.");
    }
  });
  
//Feni money added
fenidonbtnEl.addEventListener("click", function () {
  const feniinputvalue = parseFloat(feniInputFieldEl.value);

  // Check if the input is a valid number
  if (!isNaN(feniinputvalue) && feniinputvalue > 0) {
    if (parseFloat(mainAccountBalanceEl.innerText) <= 0) {
      alert("Balance finished");
    } else {
      // Add money to nkTotalAmountEl
      const amoutFeni = parseFloat(feniTotalAmountEl.innerText);
      const newamountFeni = amoutFeni + feniinputvalue;
      feniTotalAmountEl.innerText = newamountFeni;

      // Decrease the main account balance
      const totalaccountBalance = parseFloat(mainAccountBalanceEl.innerText);
      const newtotalaccountBalance = totalaccountBalance - feniinputvalue;
      mainAccountBalanceEl.innerText = newtotalaccountBalance;

      const timeId = `time-section-${Date.now()}`;
  
        //  Transaction money
        const transactionBalance = document.getElementById("historty-list");
        transactionBalance.innerHTML += `
         <div
            class="flex space-x-4 bg-red-500 p-5 text-black font-bold shadow rounded-lg border-2 text-2xl gap-3 mb-5"
          >
           <h2>  <span >${feniinputvalue} </span> </h2>
  
          <h2><span> Taka donated for Food-2024 at Feni, Bangladesh</span></h2>
            <p>Date:</p>
            <p id="${timeId}">0</p>
          </div>
        `;
  
        // Show the modal
        const modelShow = document.getElementById('my_modal_2');
        modelShow.showModal();
  
        
        updateDateTime(timeId);
      
    }
  } else {
    alert("Please provide a valid donation amount.");
  }
});
//   Quota money added
qodonbtnEl.addEventListener("click", function () {
  const qoinputvalue = parseFloat(qoInputFieldEl.value);

  // Check if the input is a valid number
  if (!isNaN(qoinputvalue) && qoinputvalue > 0) {
    if (parseFloat(mainAccountBalanceEl.innerText) <= 0) {
      alert("Balance finished");
    } else {
      // Add money to nkTotalAmountEl
      const amoutQo = parseFloat(qoTotalAmountEl.innerText);
      const newamountQo = amoutQo + qoinputvalue;
      qoTotalAmountEl.innerText = newamountQo;

      // Decrease the main account balance
      const totalaccountBalance = parseFloat(mainAccountBalanceEl.innerText);
      const newtotalaccountBalance = totalaccountBalance - qoinputvalue;
      mainAccountBalanceEl.innerText = newtotalaccountBalance;

      const timeId = `time-section-${Date.now()}`;
  
        //  Transaction money
        const transactionBalance = document.getElementById("historty-list");
        transactionBalance.innerHTML += `
         <div
            class="flex space-x-4 bg-red-500 p-5 text-black font-bold shadow rounded-lg border-2 text-2xl gap-3 mb-5"
          >
           <h2>  <span >${qoinputvalue} </span> </h2>
  
          <h2><span> Taka donated for Quota injure-2024 , Bangladesh</span></h2>
            <p>Date:</p>
            <p id="${timeId}">0</p>
          </div>
        `;
  
        // Show the modal
        const modelShow = document.getElementById('my_modal_2');
        modelShow.showModal();
  
        
        updateDateTime(timeId);
      
    }
  } else {
    alert("Please provide a valid donation amount.");
  }
});
