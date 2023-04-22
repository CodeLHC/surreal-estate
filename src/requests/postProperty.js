import axios from "axios";

const postProperty = (propertyDetails) => {
  axios
    .post("http://localhost:4000/api/v1/PropertyListing", propertyDetails)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export default postProperty;
