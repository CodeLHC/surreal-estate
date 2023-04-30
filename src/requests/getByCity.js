import axios from "axios";

const getByCity = ({ search }, setProperties) => {
  axios
    .get(`http://localhost:4000/api/v1/PropertyListing${search}`)
    .then(({ data }) => setProperties(data))
    .catch((err) => console.error(err));
};

export default getByCity;
