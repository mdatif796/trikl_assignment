import { useEffect, useState } from "react";
import DraggableAndEditableHeading from "./DraggableAndEditableHeading";

const Home = () => {
  const [img, setImg] = useState(
    "https://images.unsplash.com/photo-1692997075181-c76b9379f0a1?ixid=M3w0OTYzNDR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTM1NDQ4Mzd8&ixlib=rb-4.0.3"
  );
  useEffect(() => {
    const getImg = async () => {
      let response = await fetch(
        "https://api.unsplash.com/photos/random/?client_id=1m05Nl3Lo4JRFzQFuwPLfs_eKeow9EjN_5LSwvdtR4o",
        {
          method: "GET",
        }
      );
      response = await response.json();
      setImg(response.urls?.full);
      console.log(response);
    };
    // getImg();
  }, []);
  return (
    <div
      className="bg-cover bg-center h-screen w-screen"
      style={{ backgroundImage: `url(${img})` }}
    >
      <DraggableAndEditableHeading />
    </div>
  );
};

export default Home;
