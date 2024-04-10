import Categories from "@/components/categories/Categories";
import AllListings from "@/components/listing/AllListings";


interface IListingsParams {
  searchParams: any;
 }

export default function Home({searchParams}: IListingsParams) {
  return (
    <>
      <Categories />
      <AllListings category={searchParams.category} />
    </>
  );
}
