import axios from "axios";

const postProperty = (propertyDetails, setAlert) => {
  axios
    .post("http://localhost:4000/api/v1/PropertyListing", propertyDetails)
    .then(() =>
      setAlert({
        message: "Property Added",
        isSuccess: true,
      })
    )
    .catch(() =>
      setAlert({
        message: "Server error. Please try again later",
        isSuccess: false,
      })
    );
};

export default postProperty;
