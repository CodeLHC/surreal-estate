import axios from "axios";

const getProperties = (setProperties, setAlert) => {
  axios
    .get("http://localhost:4000/api/v1/PropertyListing")
    .then((response) => {
      setProperties(response.data);
    })
    .catch(function (error) {
      setAlert({ message: "Server error. Please try again later." });
      console.log(error);
    });
};
export default getProperties;
