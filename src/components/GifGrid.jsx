import {CirclesWithBar} from "react-loader-spinner";
import {GifItem} from "./GifItem.jsx";
import {useFetchGifs} from "../hooks/useFetchGifs.js";
import PropTypes from "prop-types";

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );

    return (
        <>
            <h3>{ category }</h3>
            { isLoading && (<CirclesWithBar
                height="100"
                width="100"
                color="#4fa94d"
                outerCircleColor="#4fa94d"
                innerCircleColor="#4fa94d"
                barColor="#4fa94d"
                ariaLabel="circles-with-bar-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />) }
            <div className="card-grid">
                {
                    images.map( (image, index) => (
                        <GifItem key={image.id} {...image} />
                    ))
                }
            </div>
        </>
    );
};

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}