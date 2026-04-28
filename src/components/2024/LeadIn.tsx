import { useTranslation } from 'react-i18next';

export const LeadIn = () => {
    const { t, i18n } = useTranslation('2024');
    const isZh = (i18n.resolvedLanguage || i18n.language || '').startsWith('zh');

    // Retrieve leadin data, ensuring it returns an array
    const leadinData = t('leadin', { returnObjects: true });

    // Ensure data is correctly formatted as an array
    if (!Array.isArray(leadinData)) {
        console.error("Expected 'leadin' to be an array, but got:", leadinData);
        return null; // Prevent rendering if data is incorrect
    }

    return (
        <div id="Intro_Wrapper">
            <div id="Intro_Container">
                <div id="Intro_Text">
                    <div id="Solgan"><h1>{t('leadin_title')}
                    </h1></div>
                    <div id="LeadIn" className={isZh ? 'LeadInZh' : ''}>
                        {leadinData.map((item, index) => (
                            <p key={index} dangerouslySetInnerHTML={{ __html: item.text }} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeadIn;