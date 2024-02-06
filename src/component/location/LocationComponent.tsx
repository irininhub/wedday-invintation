import { FC, useState } from "react";
import { GoogleMap, InfoWindow, MarkerF } from "@react-google-maps/api";
import s from "./styles.module.scss";

const markers = [
    {
        id: 1,
        name: "Место проведения свадьбы: Усадьба Ганка",
        position: { lat: 54.0484064574227, lng: 27.083673485873184 },
    },
    {
        id: 2,
        name: "Место трансфера 1 (д. Острошицы)",
        position: { lat: 54.112498, lng: 27.764 },
    },
    {
        id: 3,
        name: "Место трансфера 2 (г. Минск, метро Каменная горка)",
        position: { lat: 53.907375950801764, lng: 27.434143940039057 },
    },
];

export const LocationComponent: FC = () => {
    const [activeMarker, setActiveMarker] = useState(null);

    const handleActiveMarker = (marker: any) => {
        if (marker === activeMarker) {
            return;
        }
        setActiveMarker(marker);
    };

    const handleOnLoad = (map: any) => {
        const bounds = new google.maps.LatLngBounds();
        markers.forEach(({ position }) => bounds.extend(position));
        map.fitBounds(bounds);
    };

    const showInMapClicked = (lat: number, lng: number) => {
        window.open(`https://maps.google.com?q=${lat},${lng}`);
    };

    return (
        <GoogleMap
            onLoad={handleOnLoad}
            onClick={() => setActiveMarker(null)}
            mapContainerStyle={{
                width: "100%",
                height: "300px",
                minHeight: "300px",
            }}
            zoom={10}
            center={{ lat: 54.0484064574227, lng: 27.083673485873184 }}
        >
            {markers.map(({ id, name, position }) => (
                <MarkerF
                    key={id}
                    position={position}
                    onClick={() => handleActiveMarker(id)}
                >
                    {activeMarker === id ? (
                        <InfoWindow
                            zIndex={100}
                            onCloseClick={() => setActiveMarker(null)}
                        >
                            <button
                                type="button"
                                className={s.location}
                                onClick={() =>
                                    showInMapClicked(position.lat, position.lng)
                                }
                            >
                                <div className={s.details}>
                                    <span>{name}</span>
                                    <span className={s.show}>
                                        Показать детали
                                    </span>
                                </div>
                            </button>
                        </InfoWindow>
                    ) : null}
                </MarkerF>
            ))}
        </GoogleMap>
    );
};
