/*
 Aura AI – Portfolio Project
 Features:
 - Credits system using localStorage
 - Fake payment flow
 - Dynamic UI updates
 - Modal-based navigation
*/


// DOM Elements
const navLogoName = document.querySelector("#nav-logo-name");
const credits = document.querySelector(".credits-amount");
const navList = document.querySelectorAll(".nav-list");
const navListResources = document.querySelectorAll(".nav-li-resources");
const navListPricing = document.querySelectorAll(".nav-li-pricing");
const navListcust = document.querySelectorAll(".nav-li-customers");
const listIcon = document.querySelector(".list-icon");
const ulHeadCont = document.querySelector(".hidden-ul-header-cont");
const listUlHead = document.querySelector(".list-ul-header");
const signinBtn = document.querySelector("#signin-btn");
const demoBtn = document.querySelector("#start-demo-btn");
const demoImg = document.querySelector(".demo-img");
const processReqImg = document.querySelector(".processing-req");
const demoInput = document.querySelector(".demo-input");
const searchBtnDemo = document.querySelector(".search-btn-demo");
const purposeLI = document.querySelectorAll(".purpose-li");
const founderLI = document.querySelectorAll(".founder-li");
const portfolioLI = document.querySelectorAll(".portfolio-li");
const bluredBG = document.querySelector(".blured-bg");
const infocont = document.querySelector(".info-container");
const infoPara = document.querySelector(".info-para");
const infocontent = document.querySelector(".info-content");
const section2 = document.querySelector(".section2");
const section3 = document.querySelector(".section3");
const section4 = document.querySelector(".section4");
const planCard = document.querySelectorAll(".plan-card");
const proPlanCard = document.querySelector("#pro-plan");
const premPlanCard = document.querySelector("#premium-plan");
const ultiPlanCard = document.querySelector("#ultimate-plan");
let paymentCont;
let paymentInput;
let paymentBtn;



// Initialize credits from localStorage or set default
let creditsAm = JSON.parse(localStorage.getItem("credits"));
if (creditsAm === null) {
    credits.innerText = `credits: ${creditsAm || 0}`;
} else {
    creditsAm = creditsAm;
    credits.innerText = `credits: ${creditsAm}`;
}


// Under Development Function
function underDev() {
    bluredBG.style.display = "flex";
    infocontent.innerHTML = "";
    infoPara.innerText = "this section is under development. stay tuned!";
};



// Event Listeners
navLogoName.addEventListener("click", () => {
    window.location.href = "index.html";
});



// customers list functionality
navListcust.forEach((item) => {
    item.addEventListener("click", () => {
        bluredBG.style.display = "flex";
        infoPara.innerText = "meet our customers";
        infocontent.innerHTML = `<div class="customers-list">
    <i class="fa-brands fa-amazon customers-icon"></i>
    <i class="fa-brands fa-apple customers-icon"></i>
    <i class="fa-brands fa-angular customers-icon"></i>
    <i class="fa-brands fa-discord customers-icon"></i>
    <i class="fa-brands fa-docker customers-icon"></i>
    <i class="fa-brands fa-ebay customers-icon"></i>
  </div>`;
    });
});

// list icon functionality
listIcon.addEventListener("click", (e) => {
    ulHeadCont.classList.toggle("ul-header-cont");
    listUlHead.classList.toggle("hidden");
    listIcon.classList.toggle("list-icon-active");
    e.stopPropagation();
});
// plan card click functionality
const plan = {
    "pro-plan": 4,
    "premium-plan": 19,
    "ultimate-plan": 64
};
const paymentHtml = `<div class="payment-cont">
          <i class="fa-brands fa-google-pay payment-app"></i>
          <div class="pay-info">
            <input type="text" placeholder="enter cash amount" class="payment-input">
            <button class="payment-btn">pay</button>
          </div>
          <p class="pay-para">pay securely</p>
        </div>`;


function processingPayment() {
    let processingPara = document.createElement("p");
    paymentCont.appendChild(processingPara);

    processingPara.innerText = "connecting with bank...";

    setTimeout(() => {
        processingPara.innerText = "processing payment...";
    }, 2000);

    setTimeout(() => {
        processingPara.innerText = "verifying amount...";
    }, 4000);

    setTimeout(() => {
        paymentCont.innerHTML = `<div class="success-container">
        <svg class="checkmark-svg" viewBox="0 0 52 52">
        <circle class="checkmark-circle" cx="26" cy="26" r="25" />
        <path class="checkmark-tick" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
        </svg> </div>
        <p>payment successful!</p>`;
        infoPara.innerText = "you can close this window now.";

        // update credits
        if (paymentInput.value === "4") {
            creditsAm += 10;
        } else if (paymentInput.value === "19") {
            creditsAm += 30;
        } else if (paymentInput.value === "64") {
            creditsAm += 60;
        }
        credits.innerText = `credits: ${creditsAm}`;
        localStorage.setItem("credits", JSON.stringify(creditsAm));
    }, 6000);
}

planCard.forEach((item) => {


    item.addEventListener("click", () => {
        bluredBG.style.display = "flex";
        infocontent.innerHTML = paymentHtml;

        paymentCont = document.querySelector(".payment-cont");
        paymentInput = document.querySelector(".payment-input");
        paymentBtn = document.querySelector(".payment-btn");

        const price = plan[item.id];
        infoPara.innerText = `you have selected the ${item.id.replace("-", " ")}. please pay $${price} to proceed.`;
       paymentInput.value = price;

        paymentBtn.addEventListener("click", () => {
            if (paymentInput.value === "" || isNaN(paymentInput.value) || Number(paymentInput.value) !== 4 && item.id === "pro-plan" || Number(paymentInput.value) !== 19 && item.id === "premium-plan" || Number(paymentInput.value) !== 64 && item.id === "ultimate-plan") {
                paymentInput.style.border = "1px solid red";
                paymentInput.value = "";
                paymentInput.placeholder = "please enter a valid amount. i.e. $4, $19 or $64";
                setTimeout(() => {
                    paymentInput.style.borderColor = "";
                    paymentInput.placeholder = "enter cash amount";
                }, 2000);
            } else {
                paymentCont.innerHTML = `<span class="loader"></span>`;
                processingPayment();
            }
        });
    });
})


// header elements functionality
signinBtn.addEventListener("click", () => {
    bluredBG.style.display = "flex";
    infoPara.innerText = "sign in here";
    infocontent.innerHTML = `<form class="info-form">
    <input type="email" placeholder="Email" class="info-input" required>
    <input type="password" placeholder="Password" class="info-input" required>
    <button type="submit" class="info-submit-btn">Sign In</button>
  </form>`;

    document.querySelector(".info-form").addEventListener("submit", (e) => {
        e.preventDefault();
        infoPara.innerText = "Signed in successfully!";
        infocontent.innerHTML = "";

        localStorage.setItem("signin-info", JSON.stringify(10));

        const leaveBtn = document.createElement("button");
        leaveBtn.innerText = "Close";
        leaveBtn.className = "info-submit-btn";
        infocont.appendChild(leaveBtn);
        leaveBtn.style.margin = "1rem auto";
        leaveBtn.addEventListener("click", () => {
            bluredBG.style.display = "none";
            leaveBtn.remove();
        });
    });
});

demoBtn.addEventListener("click", () => {
    scrollTo({
        top: section2.offsetTop,
        behavior: "smooth"
    });
});

navListPricing.forEach((item) => {
    item.addEventListener("click", () => {
        scrollTo({
            top: section3.offsetTop,
            behavior: "smooth"
        });
    });
});

navListResources.forEach((item) => {
    item.addEventListener("click", () => {
        scrollTo({
            top: section4.offsetTop,
            behavior: "smooth"
        });
    });
});


// about us list functionality
purposeLI.forEach((item) => {
    item.addEventListener("click", () => {
        bluredBG.style.display = "flex";
        infoPara.innerText = "the purpose";
        infocontent.innerText = "At Aura AI, we believe that technology should be an accelerator for human imagination, not a replacement for it. Founded in 2025, our mission is to build the world’s most intuitive generative platform, allowing creators, entrepreneurs, and teams to manifest their ideas instantly. We are a collective of designers and engineers dedicated to democratizing high-end production, ensuring that world-class visual and audio content is accessible to everyone, everywhere";
    });
});
founderLI.forEach((item) => {
    item.addEventListener("click", () => {
        bluredBG.style.display = "flex";
        infoPara.innerText = "the founder";
        infocontent.innerText = "Our founder, Eedain Bhat, is a front-end developer with a passion for creating innovative web applications.";
    });
});
portfolioLI.forEach((item) => {
    item.addEventListener("click", () => {
        bluredBG.style.display = "flex";
        infoPara.innerText = "the portfolio";
        infocontent.innerText = "This is a fake AI product made by Eedain Bhat. I made this project to showcase my skills in web development. Also i made this project for my portfolio. You can check out my other portfolio projects. This project is not affiliated with any real AI company or product.";
    });
});

// img demo functionality

const images = [
    "img-feature.jpg",
    "text-speech2.jpg",
    "vid-feature.jpg",
    "text-speech.jpg"
];

let index = 0;

function updateDemoImage() {
    if (creditsAm <= 0) {
        demoInput.style.border = "1px solid red";
        demoInput.value = "";
        demoInput.placeholder = "You have no credits left!";
        setTimeout(() => {
            demoInput.style.borderColor = "";
            demoInput.placeholder = "create images";
        }, 2000);
    } else if (demoInput.value === "") {
        demoInput.style.border = "1px solid red";
        demoInput.placeholder = "Please enter some text to generate a demo.";
        setTimeout(() => {
            demoInput.style.borderColor = "";
            demoInput.placeholder = "create images";
        }, 2000);
    } else {
        processReqImg.style.display = "block";
        processReqImg.textContent = "processing the request...";
        searchBtnDemo.disabled = true;
        setTimeout(() => {
            index = (index + 1) % images.length;
            demoImg.src = images[index];
            creditsAm -= 1;
            credits.innerText = `credits: ${creditsAm}`;
            localStorage.setItem("credits", JSON.stringify(creditsAm));
            processReqImg.style.display = "none";
            processReqImg.textContent = "";
            searchBtnDemo.disabled = false;
        }, 1000);
    }
}
searchBtnDemo.addEventListener("click", updateDemoImage);

// blured background functionality

bluredBG.addEventListener("click", (e) => {
    if (e.target === bluredBG) {
        bluredBG.style.display = "none";
    };
});