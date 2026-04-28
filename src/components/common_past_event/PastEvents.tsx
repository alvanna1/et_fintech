
export const ImageDir = "/images";
export const PastEvents = () => {
    return (
        <div className="col-md-11 grid highlights row">
        {[
            { year: 2021, url: "/2021/" },
            { year: 2020, url: "/2020/" },
            { year: 2019, url: "/2019/" },
            { year: 2018, url: "/2018/" },
            { year: 2017, url: "/2017/" },
        ].map(({ year, url }) => (
            <div
            key={year}
            className="item col-md-6 col-xs-12"
            >
            <a target="_blank" href={url}>
                <figure>
                    <img src={`${ImageDir}/archive_${year}.jpg`} alt={`Archive ${year}`} />
                </figure>
            </a>
            </div>
        ))}
        </div>
    );
};

export default PastEvents;
