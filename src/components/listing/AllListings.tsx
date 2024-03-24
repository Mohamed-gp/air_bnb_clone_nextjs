import Image from "next/image";
import EmptyListings from "./EmptyListings";

navigator.geolocation.getCurrentPosition((position) => {
  console.log(position.coords.latitude, position.coords.longitude);
}
const result = await fetch("http://localhost:3000/api/listings");
const data = await result.json();

const AllListings = () => {
  return (
    <>
      {data.length > 0 ? (
        <div className="container my-6 flex gap-10 gap-y-2 justify-center  items-center  flex-wrap">
          {data.map((property) => (
            <div className="flex h-[280px] flex-col w-[250px]">
              <div className="h-[160px] w-[250px]  relative">
                <Image
                  src={property.imageSrc}
                  layout="fill"
                  objectFit="contain"
                  alt={property.title}
                  className="rounded-3xl"
                />
              </div>
              <div className="flex items-center justify-between max-w-[300px] px-2 my-2">
                <div className="flex flex-col w-[70%]">
                  <h1 className="font-bold">{property.title}</h1>
                  <p className="opacity-70 line-clamp-1 ">
                    {property.description}
                  </p>
                </div>
                <p className="font-bold line-clamp-1">${property.price}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <EmptyListings />
      )}
    </>
  );
};
export default AllListings;
