import { FC } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const { REACT_APP_GOOGLE_API_KEY } = process.env;

const libraries = ["places"];
const mapContainerStyle = {
    width: "500px",
    height: "500px",
};
const center = {
    lat: 54.0484064574227,
    lng: 27.083673485873184,
};

export const LocationComponent: FC = () => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: `${REACT_APP_GOOGLE_API_KEY}`,
        // libraries,
    });

    if (loadError) {
        return <div>Error loading maps</div>;
    }

    if (!isLoaded) {
        return <div>Loading maps</div>;
    }

    return (
        <div>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={90}
                center={center}
            >
                <Marker position={center} cursor="pointer" />
            </GoogleMap>
        </div>
    );
};
