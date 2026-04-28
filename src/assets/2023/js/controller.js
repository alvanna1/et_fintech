// JavaScript Document
export function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

window.addEventListener('DOMContentLoaded', function () {
    var svgUrl = "/2023/images/contourline_left.svg";

    // Create a new Image object
    var img = new Image();

    // Set the source of the Image object to the SVG URL
    img.src = svgUrl;

    // Once the image is fully loaded
    img.onload = function () {
        // Create a new SVG element
        var svgElement = document.createElement('img');

        // Set the source of the SVG element to the SVG URL
        svgElement.src = svgUrl;

        // Add the SVG element only when target containers exist on current page
        var leftContainer = document.querySelector('.background_animation_contourline_left');
        var rightContainer = document.querySelector('.background_animation_contourline_right');

        if (leftContainer) {
            leftContainer.appendChild(svgElement);
        }

        if (rightContainer) {
            rightContainer.appendChild(svgElement.cloneNode(true));
        }
    };
});




export const pop = () => {
    var x = document.getElementById("navmenulist");
    if(x !== null) {
        if (x.style && x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }
}

export function cross(x) {
    var x = document.getElementById("navmenulist");
    if(x !== null) {
        x.classList.toggle("change");
    }
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
export function winnerFunction() {
    document.getElementById("winnerDropdown").classList.toggle("winnershow");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('winnershow')) {
                openDropdown.classList.remove('winnershow');
            }
        }
    }
}

export function scrolltoFintechofyear() {
    let e = document.getElementById("winner_categories_Fintechofyear");
    e.scrollIntoView({ block: 'start', behavior: 'smooth', inline: 'start' });
}
export function scrolltoMarketing() {
    let e = document.getElementById("winner_categories_Marketing");
    e.scrollIntoView({ block: 'start', behavior: 'smooth', inline: 'start' });
}
export function scrolltoStartUp() {
    let e = document.getElementById("winner_categories_Start_Up");
    e.scrollIntoView({ block: 'start', behavior: 'smooth', inline: 'start' });
}
export function scrolltoArtificialIntelligence() {
    let e = document.getElementById("winner_categories_Artificial_Intelligence");
    e.scrollIntoView({ block: 'start', behavior: 'smooth', inline: 'start' });
}
export function scrolltoBigData() {
    let e = document.getElementById("winner_categories_Big_Data");
    e.scrollIntoView({ block: 'start', behavior: 'smooth', inline: 'start' });
}
export function scrolltoBlockchainSolution() {
    let e = document.getElementById("winner_categories_Blockchain_Solution");
    e.scrollIntoView({ block: 'start', behavior: 'smooth', inline: 'start' });
}
export function scrolltoCloud() {
    let e = document.getElementById("winner_categories_Cloud");
    e.scrollIntoView({ block: 'start', behavior: 'smooth', inline: 'start' });

}
export function scrolltoConsumerPaymentsInitiative() {
    let e = document.getElementById("winner_categories_Consumer_Payments_Initiative");
    e.scrollIntoView({ block: 'start', behavior: 'smooth', inline: 'start' });
}
export function scrolltoCorporateBanking() {
    let e = document.getElementById("winner_categories_Corporate_Banking");
    e.scrollIntoView({ block: 'start', behavior: 'smooth', inline: 'start' });
}
export function scrolltoCorporatePaymentsInitiative() {
    let e = document.getElementById("winner_categories_Corporate_Payments_Initiative");
    e.scrollIntoView({ block: 'start', behavior: 'smooth', inline: 'start' });
}
export function scrolltoCybersecurity() {
    let e = document.getElementById("winner_categories_Cybersecurity");
    e.scrollIntoView({ block: 'start', behavior: 'smooth', inline: 'start' });
}

export function scrolltoESGIndexProvider() {
    let e = document.getElementById("winner_categories_ESG_Index_Provider");
    e.scrollIntoView({ block: 'start', behavior: 'smooth', inline: 'start' });
}
export function scrolltoESGProduct() {
    let e = document.getElementById("winner_categories_ESG_Product");
    e.scrollIntoView({ block: 'start', behavior: 'smooth', inline: 'start' });
}
export function scrolltoESGProject() {
    let e = document.getElementById("winner_categories_ESG_Project");
    e.scrollIntoView({ block: 'start', behavior: 'smooth', inline: 'start' });
}
export function scrolltoESGSolution() {
    let e = document.getElementById("winner_categories_ESG_Solution");
    e.scrollIntoView({ block: 'start', behavior: 'smooth', inline: 'start' });
}
export function scrolltoFX() {
    let e = document.getElementById("winner_categories_FX_Payment_Solution");
    e.scrollIntoView({ block: 'start', behavior: 'smooth', inline: 'start' });
}
export function scrolltoGBAService() {
    let e = document.getElementById("winner_categories_GBA_Service");
    e.scrollIntoView({ block: 'start', behavior: 'smooth', inline: 'start' });
}
export function scrolltoGreenFinanceDevelopment() {
    let e = document.getElementById("winner_categories_Green_Finance_Development");
    e.scrollIntoView({ block: 'start', behavior: 'smooth', inline: 'start' });
}
export function scrolltoInsurance() {
    let e = document.getElementById("winner_categories_Insurance");
    e.scrollIntoView({ block: 'start', behavior: 'smooth', inline: 'start' });
}
export function scrolltoLending() {
    let e = document.getElementById("winner_categories_Lending");
    e.scrollIntoView({ block: 'start', behavior: 'smooth', inline: 'start' });
}
export function scrolltoProTech() {
    let e = document.getElementById("winner_categories_ProTech");
    e.scrollIntoView({ block: 'start', behavior: 'smooth', inline: 'start' });
}
export function scrolltoRegTech() {
    let e = document.getElementById("winner_categories_RegTech");
    e.scrollIntoView({ block: 'start', behavior: 'smooth', inline: 'start' });
}
export function scrolltoResearchPlatform() {
    let e = document.getElementById("winner_categories_Research_Platform");
    e.scrollIntoView({ block: 'start', behavior: 'smooth', inline: 'start' });
}
export function scrolltoRetailBanking() {
    let e = document.getElementById("winner_categories_Retail_Banking");
    e.scrollIntoView({ block: 'start', behavior: 'smooth', inline: 'start' });
}
export function scrolltoRetailSupplyChainManagement() {
    let e = document.getElementById("winner_categories_Retail_Supply_Chain_Management");
    e.scrollIntoView({ block: 'start', behavior: 'smooth', inline: 'start' });
}
export function scrolltoTradingSystems() {
    let e = document.getElementById("winner_categories_Trading_Systems");
    e.scrollIntoView({ block: 'start', behavior: 'smooth', inline: 'start' });
}
export function scrolltoVirtualBank() {
    let e = document.getElementById("winner_categories_Virtual_Bank");
    e.scrollIntoView({ block: 'start', behavior: 'smooth', inline: 'start' });
}
export function scrolltoWealthInvestment() {
    let e = document.getElementById("winner_categories_Wealth_Investment_and_Management");
    e.scrollIntoView({ block: 'end', behavior: 'smooth', inline: 'start' });
}
export function scrolltoUniversity() {
    let e = document.getElementById("winner_categories_University");
    e.scrollIntoView({ block: 'end', behavior: 'smooth', inline: 'start' });
}
export function scrolltoESGCert() {
    let e = document.getElementById("winner_categories_ESG_cert");
    e.scrollIntoView({ block: 'end', behavior: 'smooth', inline: 'start' });
}



export function scrolltoWinners() {
    let e = document.getElementById("winners");
    e.scrollIntoView({ block: 'start', behavior: 'smooth', inline: 'start' });
    document.getElementById("newsAlert").style.display = "none";
}

export function newstolater() {
    document.getElementById("newsAlert").style.display = "none";
}

export function scrolltotop() {
    let e = document.getElementById("navmenu");
    e.scrollIntoView({ block: 'start', behavior: 'smooth', inline: 'start' });
}
