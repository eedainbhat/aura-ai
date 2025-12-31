// DOM Elements
const navLogo = document.querySelector(".nav-logo");
const navList = document.querySelectorAll(".nav-list");
const navListResources = document.querySelectorAll("#nav-li-resources");
const navListPricing = document.querySelectorAll("#nav-li-pricing");
const navListcust = document.querySelectorAll("#nav-li-customers");
const listIcon = document.querySelector(".list-icon");
const signinBtn = document.querySelector("#signin-btn");
const demoBtn = document.querySelector("#start-demo-btn");
const demoImg = document.querySelector(".demo-img");
const demoInput = document.querySelector(".demo-input");
const searchBtnDemo = document.querySelector(".search-btn-demo");
const purposeLI = document.querySelector("#purpose-li");
const founderLI = document.querySelector("#founder-li");
const portfolioLI = document.querySelector("#portfolio-li");
const bluredBG = document.querySelector(".blured-bg");
const infocont = document.querySelector(".info-container");
const infoPara = document.querySelector(".info-para");
const infocontent = document.querySelector(".info-content");
const section2 = document.querySelector(".section2");
const planCard = document.querySelectorAll(".plan-card");


function underDev() {
    bluredBG.style.display = "flex";
    infoPara.innerText = "this section is under development. stay tuned!";
};



// Event Listeners
navLogo.addEventListener("click", () => {
    window.location.href = "index.html";
});

navList.forEach((item) => {
    item.addEventListener("click", () => {
        underDev();
    });
});

planCard.forEach((item) => {
    item.addEventListener("click", () => {
        underDev();
    });
});

signinBtn.addEventListener("click", () => {
    bluredBG.style.display = "flex";
    infoPara.innerText = "sign in here!";
    infocontent.innerHTML = `<form class="info-form">
    <input type="email" placeholder="Email" class="info-input" required>
    <input type="password" placeholder="Password" class="info-input" required>
    <button type="submit" class="info-submit-btn">Sign In</button>
  </form>`;


    document.querySelector(".info-form").addEventListener("submit", (e) => {
        e.preventDefault();
        infoPara.innerText = "Signed in successfully!";
        infocontent.innerHTML = "";

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


purposeLI.addEventListener("click", () => {
    bluredBG.style.display = "flex";
    infoPara.innerText = "the purpose";
    infocontent.innerText = "At Aura AI, we believe that technology should be an accelerator for human imagination, not a replacement for it. Founded in 2025, our mission is to build the world’s most intuitive generative platform, allowing creators, entrepreneurs, and teams to manifest their ideas instantly. We are a collective of designers and engineers dedicated to democratizing high-end production, ensuring that world-class visual and audio content is accessible to everyone, everywhere";
});

founderLI.addEventListener("click", () => {
    bluredBG.style.display = "flex";
    infoPara.innerText = "the founder";
    infocontent.innerText = "Our founder, Eedain Bhat, is a visionary entrepreneur and technologist with over a decade of experience in artificial intelligence and creative technology. Alex holds a PhD in Computer Science from MIT and has previously led research teams at Google and Microsoft. His passion for democratizing AI tools stems from his belief that creativity should be accessible to everyone, regardless of technical expertise or budget constraints.";
});

portfolioLI.addEventListener("click", () => {
    bluredBG.style.display = "flex";
    infoPara.innerText = "the portfolio";
    infocontent.innerText = "This is a fake AI product made by Eedain Bhat. I made this project to showcase my skills in web development. Also i made this project for my portfolio. You can check out my other portfolio projects. This project is not affiliated with any real AI company or product.";

});


bluredBG.addEventListener("click", (e) => {
    if (e.target === bluredBG) {
        bluredBG.style.display = "none";
    }
});


// img demo functionality

const images = [
  "text-speech.jpg",
  "text-speech2.jpg",
  "vid-feature.jpg",
  "img-feature.jpg"
];

let index = 0;

searchBtnDemo.addEventListener("click", () => {
    if (demoInput.value === "") {
        demoInput.style.border = "1px solid red";
        demoInput.placeholder = "Please enter some text to generate a demo.";
        setTimeout(() => {
            demoInput.style.borderColor = "";
            demoInput.placeholder = "create images";
        }, 2000);
    } else {
  index = (index + 1) % images.length;
  demoImg.src = images[index];
    }
});
