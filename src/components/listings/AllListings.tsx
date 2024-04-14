import EmptyListings from "./EmptyListings";
import IndividualListing from "./IndividualListing";
import { headers } from "next/headers";


interface IListingsParams {
  category? : string 
}


const AllListings = async ({ category } : IListingsParams) => {
  const headersList = headers();
  const domain = headersList.get("host") || "";


  let url = "http:" + domain + "/api/listings/?category=" + category;
  const result = await fetch(url,{cache : "reload"});
  const {data} = await result.json();

  return (
    <>
    
      {data.length > 0 ? (
        <div className="container my-6 flex gap-10 gap-y-2 justify-center  items-center  flex-wrap">
          {data.map((property: any) => (
            <IndividualListing
              id={property.id}
              title={property.title}
              imageSrc={property.imageSrc}
              description={property.description}
              price={property.price}
              key={property.id}
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
