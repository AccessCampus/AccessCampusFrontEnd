import ubcImg from './campus-images/ubc-campus.jpg';
import sfuImg from './campus-images/sfu-campus.jpg';
import harvardImg from './campus-images/harvard-campus.jpg';
import googleImg from './campus-images/google-campus.jpg';

const campusList = [
    {
        campus: "ubc",
        color: "#0C2344",
        image: ubcImg,
        coords: {
            lat: 49.2621294,
            lng: -123.249704
        }
    },
    {
        campus: "sfu",
        color: "#CD3D3D",
        image: sfuImg,
        coords: {
            lat: 49.2780937,
            lng: -122.9198833
        }
    },
    {
        campus: "harvard",
        color: "#A41034",
        image: harvardImg,
        coords: {
            lat: 42.3770029,
            lng: -71.1188488,
        }
    },
    {
        campus: "googleplex",
        color: "#3DDC84",
        image: googleImg,
        coords: {
            lat: 37.4220041,
            lng: -122.0862462
        }
    },
    // {
    //     campus: "shopify",
    //     color: "#999999",
    //     image: "//cdn.torontolife.com/wp-content/uploads/2019/09/GAC_Shopify-0046.jpg"
    // }
];

export default campusList;