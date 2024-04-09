import IndividualListing from "@/components/listing/IndividualListing"

const page = async ({params} : params: {listingId : string}) => {
  const {listingId} = params
  const result = await fetch(`http://localhost:3000/api/listings/${listingId}`)
  const data = await result.json()
  
  return (
    <>
      <IndividualListing
      id={data.id}
      title={data.title}
      imageSrc={data.imageSrc}
      description={data.description}
      price={data.price}
      key={data.id}
      />
      <div>page
    </div>
      </>
  )
}
export default page


