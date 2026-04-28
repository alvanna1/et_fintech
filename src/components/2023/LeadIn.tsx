import { useTranslation } from 'react-i18next';

export const LeadIn = () => {
    const { t } = useTranslation('2023');

    // Retrieve leadin data, ensuring it returns an array
    const leadinData = t('leadin', { returnObjects: true });

    // Ensure data is correctly formatted as an array
    if (!Array.isArray(leadinData)) {
        console.error("Expected 'leadin' to be an array, but got:", leadinData);
        return null; // Prevent rendering if data is incorrect
    }

    return (
        <section className="leadin" id="leadin">
            <div className="leadin_frame" />
            <div className="leadin_box">
                <div className="leadin_box_text_column">
                    {leadinData.map((item, index) => (
                        <p key={index} dangerouslySetInnerHTML={{ __html: item.text }} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LeadIn;