
import { ImageDir } from "@/utils/2023/config";
import { useTranslation } from 'react-i18next';
import {winnerFunction, scrolltoFintechofyear, scrolltoMarketing, scrolltoStartUp, scrolltoBigData, scrolltoArtificialIntelligence, scrolltoLending, scrolltoRegTech, scrolltoFX, scrolltoInsurance, scrolltoProTech, scrolltoCorporateBanking,  scrolltoCorporatePaymentsInitiative, scrolltoConsumerPaymentsInitiative, scrolltoCybersecurity, scrolltoESGSolution, scrolltoGBAService, scrolltoGreenFinanceDevelopment, scrolltoRetailBanking, scrolltoRetailSupplyChainManagement, scrolltoTradingSystems, scrolltoVirtualBank, scrolltoWealthInvestment, scrolltoUniversity, scrolltoESGCert} from "@/assets/2023/js/controller.js";

export const Winners = () => {
const { t } = useTranslation('2023');
const specialAward = t('winners_array.special_award', { returnObjects: true });
const awardCategories = t('awards_array.award_categories', { returnObjects: true });
const winnerList = t('winners_array.winners', { returnObjects: true });

if (!Array.isArray(awardCategories)) {
    console.error("Expected 'awards_array.award_categories' to be an array, but got:", awardCategories);
    return null; // Prevent rendering if data is incorrect
}
if (!Array.isArray(winnerList)) {
    console.error("Expected 'winners_array.winners' to be an array, but got:", winnerList);
    return null; // Prevent rendering if data is incorrect
}

    // **Create a mapping of functions**
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
        ESGCert: scrolltoESGCert
    };
    return (
        <section className="winners" id="winners">
            <div className="title">{t('winners_array.title')}</div>
            <div className="bookletqrcode">
                <a
                    href="https://fintech.etnet.com.hk/2023/FA2023_Booklet_online_0115.pdf"
                    target="_blank"
                >
                    <img src={ImageDir + "images/booklet_QR_code.png"} alt="" loading="lazy" />
                </a>
            </div>
            <div className="winner_filter">
                <button onClick={winnerFunction} className="dropbtn">
                {t('winners_array.winner_dropbtn')}
                </button>
                <div id="winnerDropdown" className="dropdown-content">
                    {specialAward.map((awardObj, index) => {
                    const specialawardKey = Object.keys(awardObj)[0]; // Get the category key
                    const specialawardCat = awardObj[specialawardKey];// Get the actual award details
                    return (
                        <div
                        key={index}
                        className="winner_categories_dropdown"
                        onClick={() => {
                            const scrolltoTab = scrollFunctions[specialawardKey];
                            if (scrolltoTab) {
                                scrollFunctions(); // Call the function correctly
                            } else {
                                console.warn(`No scroll function found for ${specialawardKey}`);
                            }
                        }}
                        >
                            {t(specialawardCat.award)}
                            </div>
                        );
                        })}

                {winnerList.map((winnersObj, index) => {
                  const winnerKey = Object.keys(winnersObj)[0]; // Get the category key
                  const winnercategory = winnersObj[winnerKey];// Get the actual award details
                  return (
                    <div
                    key={index}
                    className="winner_categories_dropdown"
                    onClick={() => {
                        const scrollFunction = scrollFunctions[winnerKey];
                        if (scrollFunction) {
                            scrollFunction(); // Call the function correctly
                        } else {
                            console.warn(`No scroll function found for ${winnerKey}`);
                        }
                    }}
                    >
                          {t('winners_array.winner_title')}{winnerKey}
                        </div>
                    );
                    })}
                </div>
            </div>
            <div className="winner_list_wrapper" id="scrollbar">
                <div className="winner_list">
                    <div className="winner_categories" id="winner_categories_Fintechofyear">
                        <div className="winner_categories_icon">
                            <img src={ImageDir + "images/award_icon/award_icon_Fintechofyear.png"} alt="" loading="lazy" />
                            <div className="winner_categories_cube">
                                <img src={ImageDir + "images/award_icon/award_stand.png"} alt="" loading="lazy" />
                            </div>
                        </div>
                        <div className="winner_categories_award">
                            <div className="winner_categories_award_name">
                                FinTech of the Year 2023
                            </div>
                            <div className="winner_categories_winner">Hang Seng Bank Limited</div>
                        </div>
                    </div>
                    <div className="winner_categories" id="winner_categories_Marketing">
                        <div className="winner_categories_icon">
                            <img src={ImageDir + "images/award_icon/award_icon_Marketing.png"} alt="" loading="lazy" />
                            <div className="winner_categories_cube">
                                <img src={ImageDir + "images/award_icon/award_stand.png"} alt="" loading="lazy" />
                            </div>
                        </div>
                        <div className="winner_categories_award">
                            <div className="winner_categories_award_name">
                                FinTech Marketing Campaign of the Year 2023
                            </div>
                            <div className="winner_categories_winner">
                                Standard Chartered Bank (Hong Kong) Limited
                            </div>
                        </div>
                    </div>
                    <div className="winner_categories" id="winner_categories_Start_Up">
                        <div className="winner_categories_icon">
                            <img src={ImageDir + "images/award_icon/award_icon_Start_Up.png"} alt="" loading="lazy" />
                            <div className="winner_categories_cube">
                                <img src={ImageDir + "images/award_icon/award_stand.png"} alt="" loading="lazy" />
                            </div>
                        </div>
                        <div className="winner_categories_award">
                            <div className="winner_categories_award_name">
                                FinTech of the Year 2023 in Start-Up
                            </div>
                            <div className="winner_categories_winner">
                                Propcap Technologies Ltd
                            </div>
                        </div>
                    </div>
                    {winnerList.map((winnersObj, index) => {
                  const winnerKey = Object.keys(winnersObj)[0]; // Get the category key
                  const winnercategory = winnersObj[winnerKey];// Get the actual award details
                  return (
                    <div key={index}
                        className="winner_categories"
                        id={`winner_categories_${winnercategory.id}`}
                    >
                        <div className="winner_categories_icon">
                            <img
                                src={`${ImageDir}images/award_icon/${winnercategory.img}`} alt=""
                            />
                            <div className="winner_categories_cube">
                                <img src={ImageDir + "images/award_icon/award_stand.png"} alt="" loading="lazy" />
                            </div>
                        </div>
                        <div className="winner_categories_award">
                            <div className="winner_categories_award_name">
                            {t('winners_array.winner_title')}{winnerKey}
                            </div>
                            <div className="winner_categories_winner">{winnercategory.name}</div>
                            <div className="winner_categories_winner_title">
                            {winnercategory.title}
                            </div>
                            <div className="winner_categories_winner">
                                CGS International Holdings Limited
                            </div>
                            <div className="winner_categories_winner_title">
                                Outstanding Artificial Intelligence Financial Information Assistant
                            </div>
                        </div>
                    </div>
                          );
                        })}
                    <div className="winner_categories" id="winner_categories_Big_Data">
                        <div className="winner_categories_icon">
                            <img src={ImageDir + "images/award_icon/award_icon_Big_Data.png"} alt="" loading="lazy" />
                            <div className="winner_categories_cube">
                                <img src={ImageDir + "images/award_icon/award_stand.png"} alt="" loading="lazy" />
                            </div>
                        </div>
                        <div className="winner_categories_award">
                            <div className="winner_categories_award_name">
                                FinTech Awards 2023 in Big Data
                            </div>
                            <div className="winner_categories_winner">
                                BDO Financial Services Limited
                            </div>
                            <div className="winner_categories_winner_title">
                                Outstanding Big Data Integrated Analytics Tool
                            </div>
                            <div className="winner_categories_winner">FundPark Limited</div>
                            <div className="winner_categories_winner_title">
                                Outstanding Data Analytics Fintech Platform for Digital SMEs
                            </div>
                        </div>
                    </div>
                    <div
                        className="winner_categories"
                        id="winner_categories_Consumer_Payments_Initiative"
                    >
                        <div className="winner_categories_icon">
                            <img
                                src={ImageDir + "images/award_icon/award_icon_Consumer_Payments_Initiative.png"} alt=""
                            />
                            <div className="winner_categories_cube">
                                <img src={ImageDir + "images/award_icon/award_stand.png"} alt="" loading="lazy" />
                            </div>
                        </div>
                        <div className="winner_categories_award">
                            <div className="winner_categories_award_name">
                                FinTech Awards 2023 in Consumer Payments Initiative
                            </div>
                            <div className="winner_categories_winner">Coded Tech Limited</div>
                            <div className="winner_categories_winner_title">
                                Outstanding Blockchain in Payment Solution
                            </div>
                        </div>
                    </div>
                    <div
                        className="winner_categories"
                        id="winner_categories_Corporate_Banking"
                    >
                        <div className="winner_categories_icon">
                            <img
                                src={ImageDir + "images/award_icon/award_icon_Corporate_Banking.png"} alt=""
                            />
                            <div className="winner_categories_cube">
                                <img src={ImageDir + "images/award_icon/award_stand.png"} alt="" loading="lazy" />
                            </div>
                        </div>
                        <div className="winner_categories_award">
                            <div className="winner_categories_award_name">
                                FinTech Awards 2023 in Corporate Banking
                            </div>
                            <div className="winner_categories_winner">
                                Bank of China (Hong Kong) Limited
                            </div>
                            <div className="winner_categories_winner_title">
                                Outstanding Innovative SME Banking Services
                            </div>
                            <div className="winner_categories_winner">
                                China Construction Bank (Asia)
                            </div>
                            <div className="winner_categories_winner_title">
                                Outstanding Corporate Cash Management Solutions in GBA
                            </div>
                            <div className="winner_categories_winner">Hang Seng Bank Limited</div>
                            <div className="winner_categories_winner_title">
                                Outstanding Commercial Banking Service for Digital Banking
                                Experiences
                            </div>
                        </div>
                    </div>
                    <div
                        className="winner_categories"
                        id="winner_categories_Corporate_Payments_Initiative"
                    >
                        <div className="winner_categories_icon">
                            <img
                                src={ImageDir + "images/award_icon/award_icon_Corporate_Payments_Initiative.png"} alt=""
                            />
                            <div className="winner_categories_cube">
                                <img src={ImageDir + "images/award_icon/award_stand.png"} alt="" loading="lazy" />
                            </div>
                        </div>
                        <div className="winner_categories_award">
                            <div className="winner_categories_award_name">
                                FinTech Awards 2023 in Corporate Payments Initiative
                            </div>
                            <div className="winner_categories_winner">AsiaPay</div>
                            <div className="winner_categories_winner_title">
                                Outstanding All Rounded Digital Payment Platform
                            </div>
                            <div className="winner_categories_winner">
                                QFPay Haojin FinTech Limited
                            </div>
                            <div className="winner_categories_winner_title">
                                Outstanding All-round Payment Solution
                            </div>
                        </div>
                    </div>
                    <div className="winner_categories" id="winner_categories_Cybersecurity">
                        <div className="winner_categories_icon">
                            <img src={ImageDir + "images/award_icon/award_icon_Cybersecurity.png"} alt="" loading="lazy" />
                            <div className="winner_categories_cube">
                                <img src={ImageDir + "images/award_icon/award_stand.png"} alt="" loading="lazy" />
                            </div>
                        </div>
                        <div className="winner_categories_award">
                            <div className="winner_categories_award_name">
                                FinTech Awards 2023 in Cybersecurity / Anti-Fraud
                            </div>
                            <div className="winner_categories_winner">
                                HKT Enterprise Solutions
                            </div>
                            <div className="winner_categories_winner_title">
                                Outstanding Cybersecurity Solution (Business)
                            </div>
                        </div>
                    </div>
                    <div className="winner_categories" id="winner_categories_ESG_Solution">
                        <div className="winner_categories_icon">
                            <img src={ImageDir + "images/award_icon/award_icon_ESG_Solution.png"} alt="" loading="lazy" />
                            <div className="winner_categories_cube">
                                <img src={ImageDir + "images/award_icon/award_stand.png"} alt="" loading="lazy" />
                            </div>
                        </div>
                        <div className="winner_categories_award">
                            <div className="winner_categories_award_name">
                                FinTech Awards 2023 in ESG Solution
                            </div>
                            <div className="winner_categories_winner">
                                Carbon Exchange (Hong Kong) Limited
                            </div>
                            <div className="winner_categories_winner_title">
                                Outstanding ESG Data Management Reporting Solution
                            </div>
                            <div className="winner_categories_winner">
                                HKT Enterprise Solutions
                            </div>
                            <div className="winner_categories_winner_title">
                                Outstanding ESG Solution
                            </div>
                            <div className="winner_categories_winner">
                                Llewellyn and Partners Company Limited
                            </div>
                            <div className="winner_categories_winner_title">
                                Outstanding ESG Solution for Smart Cities
                            </div>
                            <div className="winner_categories_winner">
                                WiseSpot Company Limited
                            </div>
                            <div className="winner_categories_winner_title">
                                Outstanding Eco-Friendly Event Enabling Solution
                            </div>
                        </div>
                    </div>
                    <div
                        className="winner_categories"
                        id="winner_categories_FX_Payment_Solution"
                    >
                        <div className="winner_categories_icon">
                            <img
                                src={ImageDir + "images/award_icon/award_icon_FX_Payment_Solution.png"} alt=""
                            />
                            <div className="winner_categories_cube">
                                <img src={ImageDir + "images/award_icon/award_stand.png"} alt="" loading="lazy" />
                            </div>
                        </div>
                        <div className="winner_categories_award">
                            <div className="winner_categories_award_name">
                                FinTech Awards 2023 in FX / Payment Solution
                            </div>
                            <div className="winner_categories_winner">
                                Red Dot Technology Limited
                            </div>
                            <div className="winner_categories_winner_title">
                                Outstanding Crypto Payment Solution
                            </div>
                        </div>
                    </div>
                    <div className="winner_categories" id="winner_categories_GBA_Service">
                        <div className="winner_categories_icon">
                            <img src={ImageDir + "images/award_icon/award_icon_GBA_Service.png"} alt="" loading="lazy" />
                            <div className="winner_categories_cube">
                                <img src={ImageDir + "images/award_icon/award_stand.png"} alt="" loading="lazy" />
                            </div>
                        </div>
                        <div className="winner_categories_award">
                            <div className="winner_categories_award_name">
                                FinTech Awards 2023 in GBA Service
                            </div>
                            <div className="winner_categories_winner">
                                HKT Enterprise Solutions
                            </div>
                            <div className="winner_categories_winner_title">
                                Outstanding Cross Boundary Solution
                            </div>
                        </div>
                    </div>
                    <div
                        className="winner_categories"
                        id="winner_categories_Green_Finance_Development"
                    >
                        <div className="winner_categories_icon">
                            <img
                                src={ImageDir + "images/award_icon/award_icon_Green_Finance_Development.png"} alt=""
                            />
                            <div className="winner_categories_cube">
                                <img src={ImageDir + "images/award_icon/award_stand.png"} alt="" loading="lazy" />
                            </div>
                        </div>
                        <div className="winner_categories_award">
                            <div className="winner_categories_award_name">
                                FinTech Awards 2023 in Green Finance Development
                            </div>
                            <div className="winner_categories_winner">Coded Solution Limited</div>
                            <div className="winner_categories_winner_title">
                                Outstanding One Stop Loyalty &amp; Voucher Management Platform
                            </div>
                            <div className="winner_categories_winner">
                                Propcap Technologies Ltd
                            </div>
                            <div className="winner_categories_winner_title">
                                Outstanding Overseas Property Green Mortgage Match-lending Platform
                            </div>
                        </div>
                    </div>
                    <div className="winner_categories" id="winner_categories_Insurance">
                        <div className="winner_categories_icon">
                            <img src={ImageDir + "images/award_icon/award_icon_Insurance.png"} alt="" loading="lazy" />
                            <div className="winner_categories_cube">
                                <img src={ImageDir + "images/award_icon/award_stand.png"} alt="" loading="lazy" />
                            </div>
                        </div>
                        <div className="winner_categories_award">
                            <div className="winner_categories_award_name">
                                FinTech Awards 2023 in Insurance
                            </div>
                            <div className="winner_categories_winner">10Life</div>
                            <div className="winner_categories_winner_title">
                                Outstanding Insurance Rating and Comparison Platform
                            </div>
                            <div className="winner_categories_winner">
                                Nanoinsure Technology (Hong Kong) Limited
                            </div>
                            <div className="winner_categories_winner_title">
                                Outstanding Digital Insurance in Transformative Solutions
                            </div>
                            <div className="winner_categories_winner">
                                Prudential Hong Kong Limited
                            </div>
                            <div className="winner_categories_winner_title">
                                Outstanding Digital Insurance Services
                            </div>
                        </div>
                    </div>
                    <div className="winner_categories" id="winner_categories_Lending">
                        <div className="winner_categories_icon">
                            <img src={ImageDir + "images/award_icon/award_icon_Lending.png"} alt="" loading="lazy" />
                            <div className="winner_categories_cube">
                                <img src={ImageDir + "images/award_icon/award_stand.png"} alt="" loading="lazy" />
                            </div>
                        </div>
                        <div className="winner_categories_award">
                            <div className="winner_categories_award_name">
                                FinTech Awards 2023 in Lending
                            </div>
                            <div className="winner_categories_winner">FundPark Limited</div>
                            <div className="winner_categories_winner_title">
                                Outstanding Digital SME Fintech Platform
                            </div>
                            <div className="winner_categories_winner">K Cash Limited</div>
                            <div className="winner_categories_winner_title">
                                Outstanding Digital Lending Solution
                            </div>
                            <div className="winner_categories_winner">UNCLE2 FINTECH LIMITED</div>
                            <div className="winner_categories_winner_title">
                                Outstanding Intelligence (AI) Platform in Pawn
                            </div>
                            <div className="winner_categories_winner">WeLend Limited</div>
                            <div className="winner_categories_winner_title">
                                Outstanding Personal Lending Platform
                            </div>
                        </div>
                    </div>
                    <div className="winner_categories" id="winner_categories_ProTech">
                        <div className="winner_categories_icon">
                            <img src={ImageDir + "images/award_icon/award_icon_ProTech.png"} alt="" loading="lazy" />
                            <div className="winner_categories_cube">
                                <img src={ImageDir + "images/award_icon/award_stand.png"} alt="" loading="lazy" />
                            </div>
                        </div>
                        <div className="winner_categories_award">
                            <div className="winner_categories_award_name">
                                FinTech Awards 2023 in ProTech
                            </div>
                            <div className="winner_categories_winner">KE Holdings Inc.</div>
                            <div className="winner_categories_winner_title">
                                Outstanding ProTech in Residential Service Platform
                            </div>
                        </div>
                    </div>
                    <div className="winner_categories" id="winner_categories_RegTech">
                        <div className="winner_categories_icon">
                            <img src={ImageDir + "images/award_icon/award_icon_RegTech.png"} alt="" loading="lazy" />
                            <div className="winner_categories_cube">
                                <img src={ImageDir + "images/award_icon/award_stand.png"} alt="" loading="lazy" />
                            </div>
                        </div>
                        <div className="winner_categories_award">
                            <div className="winner_categories_award_name">
                                FinTech Awards 2023 in RegTech
                            </div>
                            <div className="winner_categories_winner">
                                Lyods Engineering Limited
                            </div>
                            <div className="winner_categories_winner_title">
                                Outstanding RegTech Data Analytics Solution
                            </div>
                            <div className="winner_categories_winner">Lyodssoft Limited</div>
                            <div className="winner_categories_winner_title">
                                Outstanding Regulatory Technology Solution
                            </div>
                            <div className="winner_categories_winner">
                                OKG Technology Holdings Limited
                            </div>
                            <div className="winner_categories_winner_title">
                                Outstanding RegTech Solution in Digital Assets
                            </div>
                        </div>
                    </div>
                    <div className="winner_categories" id="winner_categories_Retail_Banking">
                        <div className="winner_categories_icon">
                            <img src={ImageDir + "images/award_icon/award_icon_Retail_Banking.png"} alt="" loading="lazy" />
                            <div className="winner_categories_cube">
                                <img src={ImageDir + "images/award_icon/award_stand.png"} alt="" loading="lazy" />
                            </div>
                        </div>
                        <div className="winner_categories_award">
                            <div className="winner_categories_award_name">
                                FinTech Awards 2023 in Retail Banking
                            </div>
                            <div className="winner_categories_winner">Hang Seng Bank Limited</div>
                            <div className="winner_categories_winner_title">
                                Outstanding Digital Banking Service
                            </div>
                            <div className="winner_categories_winner">
                                Standard Chartered Bank (Hong Kong) Limited
                            </div>
                            <div className="winner_categories_winner_title">
                                Outstanding Digital Deposit Solution
                            </div>
                            <div className="winner_categories_winner">
                                The Hong Kong &amp; Shanghai Banking Corporation Limited
                            </div>
                            <div className="winner_categories_winner_title">
                                Outstanding All Rounded Financial Management Banking Services
                            </div>
                        </div>
                    </div>
                    <div
                        className="winner_categories"
                        id="winner_categories_Retail_Supply_Chain_Management"
                    >
                        <div className="winner_categories_icon">
                            <img
                                src={ImageDir + "images/award_icon/award_icon_Retail_Supply_Chain_Management.png"} alt=""
                            />
                            <div className="winner_categories_cube">
                                <img src={ImageDir + "images/award_icon/award_stand.png"} alt="" loading="lazy" />
                            </div>
                        </div>
                        <div className="winner_categories_award">
                            <div className="winner_categories_award_name">
                                FinTech Awards 2023 in Retail / Supply Chain Management
                            </div>
                            <div className="winner_categories_winner">Pato Entertainment</div>
                            <div className="winner_categories_winner_title">
                                Outstanding Online Ticketing Service Platform
                            </div>
                            <div className="winner_categories_winner">Uni-China Group</div>
                            <div className="winner_categories_winner_title">
                                Outstanding Digital Retail Experience
                            </div>
                        </div>
                    </div>
                    <div className="winner_categories" id="winner_categories_Trading_Systems">
                        <div className="winner_categories_icon">
                            <img src={ImageDir + "images/award_icon/award_icon_Trading_Systems.png"} alt="" loading="lazy" />
                            <div className="winner_categories_cube">
                                <img src={ImageDir + "images/award_icon/award_stand.png"} alt="" loading="lazy" />
                            </div>
                        </div>
                        <div className="winner_categories_award">
                            <div className="winner_categories_award_name">
                                FinTech Awards 2023 in Trading Systems
                            </div>
                            <div className="winner_categories_winner">
                                Rakuten Securities Bullion Hong Kong Limited
                            </div>
                            <div className="winner_categories_winner_title">
                                Outstanding Bullion Trading Service
                            </div>
                            <div className="winner_categories_winner">
                                Webull Securities Limited
                            </div>
                            <div className="winner_categories_winner_title">
                                Outstanding Intelligence Securities Trading Investment Mobile App
                            </div>
                        </div>
                    </div>
                    <div className="winner_categories" id="winner_categories_Virtual_Bank">
                        <div className="winner_categories_icon">
                            <img src={ImageDir + "images/award_icon/award_icon_Virtual_Bank.png"} alt="" loading="lazy" />
                            <div className="winner_categories_cube">
                                <img src={ImageDir + "images/award_icon/award_stand.png"} alt="" loading="lazy" />
                            </div>
                        </div>
                        <div className="winner_categories_award">
                            <div className="winner_categories_award_name">
                                FinTech Awards 2023 in Virtual Bank
                            </div>
                            <div className="winner_categories_winner">Mox Bank</div>
                            <div className="winner_categories_winner_title">
                                Outstanding Virtual Personal Banking Service
                            </div>
                            <div className="winner_categories_winner">
                                Ping An OneConnect Bank (Hong Kong) Limited
                            </div>
                            <div className="winner_categories_winner_title">
                                Outstanding Virtual SME Banking Services
                            </div>
                            <div className="winner_categories_winner">WeLab Bank</div>
                            <div className="winner_categories_winner_title">
                                Outstanding Innovative Funds Investment Platform
                            </div>
                        </div>
                    </div>
                    <div
                        className="winner_categories"
                        id="winner_categories_Wealth_Investment_and_Management"
                    >
                        <div className="winner_categories_icon">
                            <img
                                src={ImageDir + "images/award_icon/award_icon_Wealth_Investment_and_Management.png"} alt=""
                            />
                            <div className="winner_categories_cube">
                                <img src={ImageDir + "images/award_icon/award_stand.png"} alt="" loading="lazy" />
                            </div>
                        </div>
                        <div className="winner_categories_award">
                            <div className="winner_categories_award_name">
                                FinTech Awards 2023 in Wealth Investment and Management
                            </div>
                            <div className="winner_categories_winner">
                                BCT Financial Limited (“BCTF”)
                            </div>
                            <div className="winner_categories_winner_title">
                                Outstanding All Rounded MPF Management Platform
                            </div>
                            <div className="winner_categories_winner">
                                CGS International Holdings Limited
                            </div>
                            <div className="winner_categories_winner_title">
                                Outstanding Intelligent Investment Trading Mobile App
                            </div>
                            <div className="winner_categories_winner">
                                China Construction Bank (Asia)
                            </div>
                            <div className="winner_categories_winner_title">
                                Outstanding GBA Cross Border Financial Services Solutions
                            </div>
                            <div className="winner_categories_winner">Hang Seng Bank Limited</div>
                            <div className="winner_categories_winner_title">
                                Outstanding Digital Wealth Management Tool
                            </div>
                            <div className="winner_categories_winner">PortfoPlus Limited</div>
                            <div className="winner_categories_winner_title">
                                Outstanding Intelligent Insurance Agency Management and Analytics
                                Platform
                            </div>
                            <div className="winner_categories_winner">
                                Standard Chartered Bank (Hong Kong) Limited
                            </div>
                            <div className="winner_categories_winner_title">
                                Outstanding Personal Investment Analysis Service
                            </div>
                            <div className="winner_categories_winner">
                                Webull Securities Limited
                            </div>
                            <div className="winner_categories_winner_title">
                                Outstanding Intelligence Financial Technology Investment Platform
                            </div>
                        </div>
                    </div>
                    <div className="winner_categories" id="winner_categories_University">
                        <div className="winner_categories_icon">
                            <img src={ImageDir + "images/award_icon/award_icon_Universities.png"} alt="" loading="lazy" />
                            <div className="winner_categories_cube">
                                <img src={ImageDir + "images/award_icon/award_stand.png"} alt="" loading="lazy" />
                            </div>
                        </div>
                        <div className="winner_categories_award">
                            <div className="winner_categories_award_name">
                                FinTech Awards 2023 in University and College
                            </div>
                            <div className="winner_categories_winner">K-Quant</div>
                            <div className="winner_categories_winner_title">Sliver</div>
                            <div className="winner_categories_winner">PayPilot Group Limited</div>
                            <div className="winner_categories_winner_title">Gold</div>
                        </div>
                    </div>
                    <div className="winner_categories" id="winner_categories_ESG_cert">
                        <div className="winner_categories_icon">
                            <img src={ImageDir + "images/award_icon/award_icon_ESG_cert.png"} alt="" loading="lazy" />
                            <div className="winner_categories_cube">
                                <img src={ImageDir + "images/award_icon/award_stand.png"} alt="" loading="lazy" />
                            </div>
                        </div>
                        <div className="winner_categories_award">
                            <div className="winner_categories_award_name">
                                Appreciation Certificate on ESG
                            </div>
                            <div className="winner_categories_winner">
                                BCT Financial Limited (“BCTF”)
                            </div>
                            <div className="winner_categories_winner">
                                FTLife Insurance Company Limited
                            </div>
                            <div className="winner_categories_winner">
                                Llewellyn and Partners Company Limited
                            </div>
                            <div className="winner_categories_winner">
                                Prudential Hong Kong Limited
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Winners;
