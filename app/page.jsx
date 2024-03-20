import Image from "next/image";
import BlogCard from "./componnents/home/blogCard/page";
import CategoryCard from "./componnents/home/categoryCard/page";
import NavBar from "./componnents/common/navBar/page";
import TrendingBlog from "./componnents/home/trendingBlogcard/page";
import FirstBlog from "./componnents/home/firstBlog/page";
import AboutUs from "./componnents/aboutUs/page";
import Dashboard from "./admin/dashboard/page";
import BlogsHeroSection from "./componnents/blogspage/blogsherosection/page";
import Blogs from "./blogs/page";
import BlogDetail from "./blogdetail/[slug]/page";
import Register from "./admin/register/page";
import Login from "./admin/login/page";
import BlogsPageCard from "./componnents/blogspage/blogspagecard/page";
import TopTrendingCategories from "./componnents/home/toptrendingcategories/page";
import Test from "./componnents/home/carouselBlogs/page";
import CarouselBlogs from "./componnents/home/carouselBlogs/page";
import TopBlog from "./componnents/home/topblog/page";
import SecondSection from "./componnents/home/secondsection/page";

export default function Home() {
  return (
    // <div>

    //   {/* <Login/> */}
    //   {/* <Register/> */}
    //   {/* <Dashboard/> */}
    //   {/* <Blogs/> */}
    //   {/* <AddBlog/> */}
    //   {/* <BlogDetail/> */}

    //   {/* <NavBar/> */}
    // </div>

    <div className="w-full ">
      {/* NavBar starts  */}
      <div className="md:px-10 xl:px-20 2xl:px-40 ">
        <NavBar></NavBar>
      </div>
      {/* NavBar ends  */}
      <div className="flex w-full px-10 items-center justify-center mt-20">
        <TopBlog image="/ai2.jpg" />
      </div>
      <div className="hidden md:px-10 md:flex w-full py-5 bg-opacity-20 gap-5 items-center md:justify-between lg:justify-center mt-20 bg-[url(/lining.jpg)]">
        <SecondSection image="/secondsection1.jpg"/>
        <SecondSection image="/secondsection2.jpg"/>
        <SecondSection image="/secondsection3.jpg"/>
        <SecondSection image="/secondsection4.jpg"/>
      </div>
      {/* hero section starts  */}

      <div className="flex flex-col px-3 md:px-10 lg:flex-row lg:gap-3 w-full h-full md:items-center md:justify-center md:gap-3 mt-20">
        <FirstBlog image="/car.jpg"></FirstBlog>
        <div className="flex flex-col mt-5 lg:mt-0 gap-3 w-full lg:w-2/3 xl:w-2/5 2xl:w-2/6 ">
          <h2 className="flex text-xl font-bold justify-center md:items-center w-full lg:justify-start  w-fit px-2 py-1 rounded-lg">
            Recomended
          </h2>
          <div className="flex flex-col gap-6 p-2 overflow-scroll h-[500px] lg:h-[350px] xl:h-[430px] 2xl:h-[550px]">
            <TrendingBlog image="/cat.jpg"></TrendingBlog>
            <TrendingBlog image="/bike.jpg"></TrendingBlog>
            <TrendingBlog image="/nature.jpg"></TrendingBlog>
            <TrendingBlog image="/trees.jpg"></TrendingBlog>
            <TrendingBlog image="/coding.jpg"></TrendingBlog>
            <TrendingBlog image="/cat2.jpg"></TrendingBlog>
            <TrendingBlog image="/ai.jpg"></TrendingBlog>
          </div>
        </div>
      </div>
      {/* hero section ends  */}

      {/* Trending Topics Section Starts  */}
      <div className="flex flex-col  md:px-40 mt-10 h-full gap-5">
        <div className="flex flex-col gap-2 h-full mt-10">
          <h2 className="text-3xl font-bold flex justify-center">
            Top Trending Topics
          </h2>
          <p className="text-lg text-zinc-400 font-semibold flex justify-center">
            Discover all topics
          </p>
        </div>
      </div>
      <div className="  mt-5 xl:px-5 2xl:px-20 w-full mb-28">
        <CarouselBlogs />
      </div>

      <div className="flex flex-col bg-zinc-200  py-5 gap-8">
        <div className="flex flex-col md:px-36">
          <h2 className="text-3xl font-bold md:text-center flex justify-center ">
            Top Articles
          </h2>
          <p className="text-lg text-zinc-400 md:text-center font-semibold flex justify-center text-center">
            Discover the more outstanding Articels of different topics of life{" "}
          </p>
        </div>
        <div className="flex gap-2 w-full it justify-center">
          <div className="flex flex-wrap gap-10 justify-center items-center w-9/12 xl:w-8/12 ">
            <BlogsPageCard image="/trees.jpg"/>
            <BlogsPageCard image="/trees.jpg" />
            <BlogsPageCard image="/trees.jpg" />
            <BlogsPageCard image="/trees.jpg" />
            <BlogsPageCard image="/trees.jpg" />
            <BlogsPageCard image="/trees.jpg" />
          </div>
          <div className="flex flex-col hidden md:flex md:w-5/12 lg:w-3/12 xl:w-2/12 h[100px] items-center sticky h-screen">
            <div className="w-2/3 justify-center">
              <Image
                src="/girlProfile.jpg"
                width={100}
                height={300}
                alt="Picture of the author"
                className="w-full rounded-full "
              />
            </div>
            <h2 className="text-xl font-bold flex justify-center w-full">
              Saad Ali
            </h2>
            <p className="text-base text-zinc-400 flex justify-center text-center w-full items-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero a
              voluptatibus cupiditate neque itaque veritatis saepe aperiam. Est,
              veniam rerum!
            </p>
          </div>
        </div>
        {/* Footer section starts  */}
        <div className="flex flex-col items-center justify-center mt-16 gap-10">
          <div className="flex flex-col items-center justify-center gap-4">
            <h2 className="text-2xl font-bold ">
              SUBSCRIBE TO OUR NEWS LETTER{" "}
            </h2>
            <p className="text-base text-zinc-500 ">
              Lorem ipsum dolor sit amet consectetur
            </p>
          </div>
          <div className="flex gap-5">
            <input
              type="email"
              className="text-base w-[500px] py-3 px-5 border-2 rounded-full shadow-xl "
              placeholder="Enter your email here"
            />
            <button className="px-5 py-2 bg-theme text-white rounded-xl">
              subscribe
            </button>
          </div>
          <div className="flex h-[500px] w-full bg-white justify-center">
            <div className="flex flex-col justify-center w-1/6 gap-5 ">
              <div className="flex items-center gap-3 ">
                <Image
                  src="/ManProfile.jpg"
                  width={70}
                  height={300}
                  alt="Picture of the author"
                  className=" rounded-full"
                />
                <h2 className="text-xl font-bold">Blogging Ocean</h2>
              </div>
              <p className="text-base text-zinc-500 ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus, quos modi iusto sunt architecto aspernatur fugiat
                placeat dicta laboriosam blanditiis.
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 justify-center w-1/6 ">
              <h2 className="text-xl font-bold ">Categories</h2>
              <div className="flex flex-col">
              <p className="text-base text-zinc-500">Travelling</p>
              <p className="text-base text-zinc-500">Travelling</p>
              <p className="text-base text-zinc-500">Travelling</p>
              <p className="text-base text-zinc-500">Travelling</p>
              <p className="text-base text-zinc-500">Travelling</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3 justify-center w-1/6 ">
              <h2 className="text-xl font-bold ">Categories</h2>
              <div className="flex flex-col">
              <p className="text-base text-zinc-500">Travelling</p>
              <p className="text-base text-zinc-500">Travelling</p>
              <p className="text-base text-zinc-500">Travelling</p>
              <p className="text-base text-zinc-500">Travelling</p>
              <p className="text-base text-zinc-500">Travelling</p>
              </div>
            </div><div className="flex flex-col items-center gap-3 justify-center w-1/6 ">
              <h2 className="text-xl font-bold ">Follow Us</h2>
              <div className="flex items-center justify-center w-1/2 gap-2">
              <Image
                  src="/ManProfile.jpg"
                  width={30}
                  height={300}
                  alt="Picture of the author"
                  className=" rounded-full"
                />
                <Image
                  src="/ManProfile.jpg"
                  width={30}
                  height={300}
                  alt="Picture of the author"
                  className=" rounded-full"
                />
                <Image
                  src="/ManProfile.jpg"
                  width={30}
                  height={300}
                  alt="Picture of the author"
                  className=" rounded-full"
                />
                <Image
                  src="/ManProfile.jpg"
                  width={30}
                  height={300}
                  alt="Picture of the author"
                  className=" rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Footer section ends  */}
      </div>
      {/* Trending Topics Section ends  */}
    </div>

    // <div className=" mx-10 lg:mx-10 xl:mx-40 ">
    //   {/* navBar Component */}

    //   <NavBar></NavBar>

    //   {/* Heros section Starts Here */}

    //   <div className="flex gap-3 w-full h-full items-center justify-center mt-6">
    //     <FirstBlog></FirstBlog>
    //     <div className="flex flex-col gap-3 ">
    //       <h2 className="flex text-xl font-bold items-center">Trending Post</h2>
    //       <div className="flex flex-col gap-6 p-2 bg-slate-200 overflow-scroll h-[470px]">
    //         <TrendingBlog></TrendingBlog>
    //         <TrendingBlog></TrendingBlog>
    //         <TrendingBlog></TrendingBlog>
    //         <TrendingBlog></TrendingBlog>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Heros Section end here  */}

    //   {/* Second Section Starts Here  */}

    //   <div className="flex flex-col gap-4 my-10 items-center">
    //     <h2 className="text-xl font-black justify-center">Top Picks</h2>
    //     <div className="flex flex-wrap gap-4  ">
    //       <BlogCard isGrid={false}></BlogCard>
    //       <BlogCard isGrid={false}></BlogCard>
    //       <BlogCard isGrid={false}></BlogCard>
    //       <BlogCard isGrid={false}></BlogCard>
    //       <BlogCard isGrid={false}></BlogCard>
    //       <BlogCard isGrid={false}></BlogCard>
    //     </div>
    //   </div>

    //   {/* Second Section ends Here  */}

    //   {/* Third Section Starts Here  */}

    //   <div className="flex flex-col gap-6 items-center">
    //     <h2 className="text-xl font-black justify-center w-fit">
    //       Top Categories
    //     </h2>
    //     <div className="flex flex-row gap-3 w-full">
    //       <CategoryCard title={"Fashion"}></CategoryCard>
    //       <CategoryCard title={"Travel"}></CategoryCard>
    //       <CategoryCard title={"Village"}></CategoryCard>
    //       <CategoryCard title={"City"}></CategoryCard>
    //     </div>
    //   </div>

    //   {/* Third Section Ends Here  */}

    //   {/* Fourth Section Start Here  */}

    //   <div className="flex flex-col my-10 gap-6 items-center">
    //     <h2 className="text-xl font-black   ">Top Blogs</h2>
    //     <div className=" flex flex-wrap justify-between ">
    //       <BlogCard isGrid={true}></BlogCard>
    //       <BlogCard isGrid={true}></BlogCard>
    //       <BlogCard isGrid={true}></BlogCard>
    //       <BlogCard isGrid={true}></BlogCard>
    //     </div>
    //   </div>

    //   {/* fourth section ends here  */}

    //   {/* fifth section starts  */}

    //   <div className="flex flex-col my-10 gap-10 items-center">
    //     <h2 className="text-xl font-black   ">Featured</h2>
    //     <div className="flex gap-4">
    //       <div className=" flex flex-col justify-between  ">
    //         <BlogCard isGrid={false}></BlogCard>
    //       </div>
    //       <div className="flex flex-col gap-6 p-2  mt-3 overflow-scroll h-[430px]">
    //         <TrendingBlog></TrendingBlog>
    //         <TrendingBlog></TrendingBlog>
    //         <TrendingBlog></TrendingBlog>
    //         <TrendingBlog></TrendingBlog>
    //       </div>
    //       <div className=" flex flex-col justify-between ">
    //         <BlogCard isGrid={false}></BlogCard>
    //       </div>
    //     </div>
    //   </div>

    //   {/* <div>
    //     <BlogCard></BlogCard>
    //     <BlogCard></BlogCard>
    //     <BlogCard></BlogCard>

    //   </div> */}
    // </div>
  );
}
