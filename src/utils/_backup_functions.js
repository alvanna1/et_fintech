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

    const isChinese = location.pathname.includes("/zh/");
    let newPath = "";

    if (isChinese) {
        newPath = location.pathname.replace("/zh", "");
        i18n.changeLanguage("en").then(() => {
            startTransition(() => {
                navigate(newPath);
            });
        });
    } else {
        newPath = location.pathname.replace("/2022", "/2022/zh");
        i18n.changeLanguage("zh").then(() => {
            startTransition(() => {
                navigate(newPath);
            });
        });
    }
};