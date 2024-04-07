import Image from "next/image";
import EmptyListings from "./EmptyListings";
import IndividualListing from "./IndividualListing";

const result = await fetch("http://localhost:3000/api/listings");
const data = await result.json();

const AllListings = () => {
  return (
    <>
      {data.length > 0 ? (
        <div className="container my-6 flex gap-10 gap-y-2 justify-center  items-center  flex-wrap">
          {data.map((property : any) => (
            <IndividualListing
              id={property.id}
              title={property.title}
              imageSrc={property.imageSrc}
              description={property.description}
              price={property.price}
            />
          ))}
        </div>
      ) : (
        <EmptyListings />
      )}
    </>
  );
};
export default AllListings;
