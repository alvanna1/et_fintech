import React, { useEffect, useRef, useState } from 'react';

interface GMapProps {
    onError?: () => void;
}

const GMap: React.FC<GMapProps> = ({ onError }) => {
    const googleMapRef = useRef<HTMLDivElement | null>(null);
    const [map, setMap] = useState<google.maps.Map | null>(null);
    const hasMapErrorRef = useRef(false);

    const handleMapError = () => {
        if (hasMapErrorRef.current) return;
        hasMapErrorRef.current = true;
        onError?.();
    };

    useEffect(() => {
        if (!googleMapRef.current) return;

        try {
            const googleMap = new window.google.maps.Map(googleMapRef.current, {
                center: { lat: 22.277116, lng: 114.164415 },
                zoom: 17,
                mapTypeControl: false,
		        fullscreenControl: false,
		        streetViewControl: false,
                mapId: 'DEMO_MAP_ID',
                styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"color":"#000000"},{"lightness":13}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#144b53"},{"lightness":14},{"weight":1.4}]},{"featureType":"administrative.locality","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"administrative.locality","elementType":"labels.icon","stylers":[{"visibility":"on"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#14173c"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#010105"},{"lightness":5}]},{"featureType":"poi.attraction","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"simplified"},{"weight":"0.01"},{"hue":"#1f00ff"}]},{"featureType":"poi.business","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"poi.business","elementType":"labels.text","stylers":[{"lightness":"0"},{"weight":"0.01"},{"color":"#59576d"}]},{"featureType":"poi.business","elementType":"labels.icon","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#515582"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"lightness":25},{"hue":"#ff0000"},{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#0b3d51"},{"lightness":16}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"}]},{"featureType":"transit","elementType":"all","stylers":[{"color":"#083433"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#050b14"}]}]
            });
            setMap(googleMap);
        } catch (error) {
            console.error('Error creating Google Map:', error);
            handleMapError();
        }
    }, [onError]);

    useEffect(() => {
        if (!googleMapRef.current) return;

        const observer = new MutationObserver(() => {
            const mapText = googleMapRef.current?.textContent ?? '';
            if (
                mapText.includes('Oops! Something went wrong.') ||
                mapText.includes("This page can't load Google Maps correctly.")
            ) {
                handleMapError();
            }
        });

        observer.observe(googleMapRef.current, {
            childList: true,
            subtree: true,
            characterData: true,
        });

        return () => observer.disconnect();
    }, [onError]);

    useEffect(() => {
        if (map) {
            try {
                const markerImg = document.createElement('img');
                markerImg.src = '/2017/images/map-pin.png';
                markerImg.width = 140;
                markerImg.height = 83;

                new window.google.maps.marker.AdvancedMarkerElement({
                    position: { lat: 22.277116, lng: 114.164415 },
                    map,
                    content: markerImg,
                });
            } catch (error) {
                console.error('Error creating map marker:', error);
                handleMapError();
            }
        }
    }, [map, onError]);

    return <div ref={googleMapRef} style={{ width: '100%', height: '100%' }} />;
};

export default GMap;