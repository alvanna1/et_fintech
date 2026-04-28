
import { ImageDir } from "@/utils/2023/config";
import { useTranslation } from 'react-i18next';
export const Awards = () => {
    const { t } = useTranslation('2023');
    // Fetch the translated awards array
    const specialCategories = t('awards_array.special_categories', { returnObjects: true });
    const awardCategories = t('awards_array.award_categories', { returnObjects: true });

    // Ensure the data is an array
    if (!Array.isArray(specialCategories)) {
        console.error("Expected 'awards_array.special_categories' to be an array, but got:", specialCategories);
        return null; // Prevent rendering if data is incorrect
    }
    if (!Array.isArray(awardCategories)) {
        console.error("Expected 'awards_array.award_categories' to be an array, but got:", awardCategories);
        return null; // Prevent rendering if data is incorrect
    }
    return (
        <section className="awards" id="awards">
            <div className="title">{t('awards_array.title')}</div>
            <div className="award_special_table">
                {specialCategories.map((item, index) => (
                    <div className="award_special_categories" key={`special-${item.award}-${index}`}>
                        <div className="award_icon">
                            <img src={`${ImageDir}images/award_icon/${item.img}`} alt="" loading="lazy" />
                        </div>
                        <div className="award_special_categories_cube" />
                        <div className="award_special_categories_namebox_long">
                            <div className="award_special_categories_name">
                                {item.award}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="award_table">
            {awardCategories.map((categoryObj, index) => {
                  const categoryKey = Object.keys(categoryObj)[0]; // Get the category key
                  const category = categoryObj[categoryKey];// Get the actual award details
                  return (
                    <div className="award_categories" key={`award-${categoryKey}-${index}`}>
                        <div className="award_icon">
                            <img src={`${ImageDir}images/award_icon/${category.img}`} alt="" loading="lazy" />
                        </div>
                        <div className="award_special_categories_cube" />
                        <div className="award_categories_namebox_short">
                            <div className="award_categories_name">
                                {category.award}
                            </div>
                        </div>
                    </div>
                    );
                })}
            </div>
        </section>

    )
}
export default Awards;
