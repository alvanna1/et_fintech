import React from 'react';
import { useTranslation } from 'react-i18next';
import { ImageDir } from "@/utils/2024/config";

const Awards = () => {
    const { t } = useTranslation('2024');

    // Corrected key name: "awards_categories"
    const awardCategories = t('awards_array.awards_categories', { returnObjects: true });

    if (!Array.isArray(awardCategories)) {
        console.error("Expected 'awards_array.awards_categories' to be an array, but got:", awardCategories);
        return null;
    }

    return (
        <div id="Category_Wrapper">
            <h2>{t('awards_array.title')}</h2>
            <div id="Category_Container">


                {/* Dynamically rendered awards */}
                {awardCategories.map((item, index) => (
                    <div key={index} className="CategoryBox">
                            <img
                                className="CategoryVisual"
                                src={`${ImageDir}images/category/${item.img}`}
                                alt={item.award}
                                loading="lazy"
                            />
                        <div className="CategoryName Grand">
                            <h3>{item.award}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Awards;