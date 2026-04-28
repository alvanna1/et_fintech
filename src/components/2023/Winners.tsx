import { ImageDir } from "@/utils/2023/config";
import { useTranslation } from "react-i18next";
import {
    winnerFunction,
    scrolltoFintechofyear,
    scrolltoMarketing,
    scrolltoStartUp,
    scrolltoBigData,
    scrolltoArtificialIntelligence,
    scrolltoLending,
    scrolltoRegTech,
    scrolltoFX,
    scrolltoInsurance,
    scrolltoProTech,
    scrolltoCorporateBanking,
    scrolltoCorporatePaymentsInitiative,
    scrolltoConsumerPaymentsInitiative,
    scrolltoCybersecurity,
    scrolltoESGSolution,
    scrolltoGBAService,
    scrolltoGreenFinanceDevelopment,
    scrolltoRetailBanking,
    scrolltoRetailSupplyChainManagement,
    scrolltoTradingSystems,
    scrolltoVirtualBank,
    scrolltoWealthInvestment,
    scrolltoUniversity,
    scrolltoESGCert,
} from "@/assets/2023/js/controller.js";

const scrollFunctions = {
    Fintechofyear: scrolltoFintechofyear,
    Marketing: scrolltoMarketing,
    StartUp: scrolltoStartUp,
    BigData: scrolltoBigData,
    ArtificialIntelligence: scrolltoArtificialIntelligence,
    Lending: scrolltoLending,
    RegTech: scrolltoRegTech,
    FX: scrolltoFX,
    Insurance: scrolltoInsurance,
    ProTech: scrolltoProTech,
    CorporateBanking: scrolltoCorporateBanking,
    CorporatePaymentsInitiative: scrolltoCorporatePaymentsInitiative,
    ConsumerPaymentsInitiative: scrolltoConsumerPaymentsInitiative,
    Cybersecurity: scrolltoCybersecurity,
    ESGSolution: scrolltoESGSolution,
    GBAService: scrolltoGBAService,
    GreenFinanceDevelopment: scrolltoGreenFinanceDevelopment,
    RetailBanking: scrolltoRetailBanking,
    RetailSupplyChainManagement: scrolltoRetailSupplyChainManagement,
    TradingSystems: scrolltoTradingSystems,
    VirtualBank: scrolltoVirtualBank,
    WealthInvestment: scrolltoWealthInvestment,
    University: scrolltoUniversity,
    ESGCert: scrolltoESGCert,
};

const Winners = () => {
    const { t } = useTranslation("2023");
    const specialAward = t("winners_array.special_award", { returnObjects: true }) as any[];
    const awardCategories = t("awards_array.award_categories", { returnObjects: true });
    const winnerList = t("winners_array.winners", { returnObjects: true });

    if (!Array.isArray(awardCategories)) {
        console.error("Expected 'awards_array.award_categories' to be an array, but got:", awardCategories);
        return null;
    }
    if (!Array.isArray(winnerList)) {
        console.error("Expected 'winners_array.winners' to be an array, but got:", winnerList);
        return null;
    }

    // **Create a mapping of award images**
    const awardCategoryMap = {};
    awardCategories.forEach((category) => {
        const categoryKey = Object.keys(category)[0];
        awardCategoryMap[categoryKey] = {
            award: category[categoryKey].award,
            img: category[categoryKey].img,
            id: category[categoryKey].id,
        };
    });

    // **Create a mapping of award images**

    return (
        <section className="winners" id="winners">
            <div className="title">{t("winners_array.title")}</div>

            {/* Booklet QR Code */}
            <div className="bookletqrcode">
                <a href="/2023/images/FA2023_Booklet_online_0115.pdf" target="_blank">
                    <img src={`${ImageDir}images/booklet_QR_code.png`} alt="Booklet QR Code" loading="lazy" />
                </a>
            </div>

            {/* Winner Filter Dropdown */}
            <div className="winner_filter">
                <button onClick={winnerFunction} className="dropbtn">
                    {t("winners_array.winner_dropbtn")}
                </button>
                <div id="winnerDropdown" className="dropdown-content">
                    {/* Special Awards */}
                    {specialAward.map((awardObj, index) => {
                        const specialawardKey = Object.keys(awardObj)[0];
                        const specialawardCat = awardObj[specialawardKey];

                        return (
                            <div
                                key={index}
                                className="winner_categories_dropdown"
                                onClick={() => {
                                    const scrollFunction = scrollFunctions[specialawardKey];
                                    if (scrollFunction) {
                                        scrollFunction();
                                    } else {
                                        console.warn(`No scroll function found for ${specialawardKey}`);
                                    }
                                }}
                            >
                                {t(specialawardCat.award)}
                            </div>
                        );
                    })}

                    {/* Winner Categories */}
                    {winnerList.map((winnersObj, index) => {
                        const categoryKey = Object.keys(winnersObj)[0];
                        const categoryData = awardCategoryMap[categoryKey] || {}; // Avoid errors if not found
                        const categoryName = categoryData.award;
                        const winnerKey = Object.keys(winnersObj)[0];

                        return (
                            <div
                                key={index}
                                className="winner_categories_dropdown"
                                onClick={() => {
                                    const scrollFunction = scrollFunctions[winnerKey];
                                    if (scrollFunction) {
                                        scrollFunction();
                                    } else {
                                        console.warn(`No scroll function found for ${winnerKey}`);
                                    }
                                }}
                            >
                                {t("winners_array.winner_title")} {categoryName}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Winners List */}
            <div className="winner_list_wrapper" id="scrollbar">
                <div className="winner_list">
                    {specialAward.map((awardObj, index) => {
                        const specialawardKey = Object.keys(awardObj)[0];
                        const specialawardCat = awardObj[specialawardKey];

                        return (
                            <div
                                key={index}
                                className="winner_categories" id={`winner_categories_${specialawardCat.id}`}
                            >
                                <div className="winner_categories_icon">

                                    <img src={`${ImageDir}images/award_icon/${specialawardCat.img}`} alt="" />
                                    <div className="winner_categories_cube">
                                        <img src={`${ImageDir}images/award_icon/award_stand.png`} alt="Award Stand" loading="lazy" />
                                    </div>
                                </div>
                                <div className="winner_categories_award">
                                    <div className="winner_categories_award_name">
                                        {t(specialawardCat.award)}
                                    </div>
                                    <div className="winner_categories_winner">
                                        {t(specialawardCat.winners)}
                                    </div>
                                </div>

                            </div>
                        );
                    })}

                    {winnerList.map((winnersObj, index) => {
                        const categoryKey = Object.keys(winnersObj)[0];
                        const winnerCategory = winnersObj[categoryKey];
                        const categoryData = awardCategoryMap[categoryKey] || {}; // Avoid errors if not found
                        const categoryImage = categoryData.img;
                        const categoryId = categoryData.id;

                        return (
                            <div key={index} className="winner_categories" id={`winner_categories_${categoryId}`}>
                                <div className="winner_categories_icon">
                                    {categoryImage && (
                                        <img src={`${ImageDir}images/award_icon/${categoryImage}`} alt={categoryKey} />
                                    )}
                                    <div className="winner_categories_cube">
                                        <img src={`${ImageDir}images/award_icon/award_stand.png`} alt="Award Stand" loading="lazy" />
                                    </div>
                                </div>
                                <div className="winner_categories_award">
                                    <div className="winner_categories_award_name">  {t("winners_array.winner_title")} {categoryData.award}</div>
                                    {winnerCategory.map((winner, i) => (
                                        <div key={i} className="winner_entry">
                                            <div className="winner_categories_winner">{winner.name}</div>
                                            <div className="winner_categories_winner_title">{winner.title}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Winners;