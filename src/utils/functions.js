import { startTransition } from "react";

export const switchLanguage = (event, i18n, navigate) => {
    event.preventDefault();
    if(i18n.language === 'zh'){
        i18n.changeLanguage('en').then(()=>{
            navigate('/');
        });
    }else{
        i18n.changeLanguage('zh').then(()=>{
            navigate('/zh/');
        });
    }
};
export const LanguageSwitcher = (event, i18n, navigate, location) => {
    event.preventDefault();

    const pathParts = location.pathname.split("/").filter(Boolean); // Remove empty parts
    const isChinese = pathParts.includes("zh");

    // Find the year dynamically (assuming it's a 4-digit number at the start)
    const yearIndex = pathParts.findIndex(part => /^\d{4}$/.test(part));
    let newPathParts = [...pathParts]; // Clone the array

    if (isChinese) {
        // Remove "zh" from the path but keep everything else (preserving year and other routes)
        newPathParts = newPathParts.filter(part => part !== "zh");
        i18n.changeLanguage("en").then(() => {
            startTransition(() => {
                navigate("/" + newPathParts.join("/")); // Ensures correct navigation
            });
        });
    } else {
        if (yearIndex !== -1) {
            // Insert "zh" after the year if it's missing
            if (!newPathParts.includes("zh")) {
                newPathParts.splice(yearIndex + 1, 0, "zh");
            }
        } else {
            // If no year exists, prepend "zh" (for paths like `/awards`)
            newPathParts.unshift("zh");
        }

        i18n.changeLanguage("zh").then(() => {
            startTransition(() => {
                navigate("/" + newPathParts.join("/")); // Ensures correct navigation
            });
        });

    }

};
function SocialShareBar({ shareUrl = 'https://fintech.etnet.com.hk/', title = 'FinTech Awards', description = 'Celebrating innovation in financial technology.' }) {
    const encodedUrl = encodeURIComponent(shareUrl);
    const encodedTitle = encodeURIComponent(title);
    const encodedDescription = encodeURIComponent(description);

    const handleLineShare = () => {
      const message = encodeURIComponent(`${title} ${shareUrl}`);
      window.location.href = `https://line.me/R/msg/text/?${message}`;
    };

    const handleWhatsappShare = () => {
      const message = encodeURIComponent(`${title} ${shareUrl}`);
      window.location.href = `whatsapp://send?text=${message}`;
    };
};