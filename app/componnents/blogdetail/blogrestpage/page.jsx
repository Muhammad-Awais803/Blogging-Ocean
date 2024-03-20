import React from "react";
import Image from "next/image";
import BlogCard from "../../home/blogCard/page";
import BlogsPageCard from "../../blogspage/blogspagecard/page";

const BlogRestPage = () => {
  return (
    <div className="flex flex-col w-full p-12 gap-12">
      <div className="flex flex-col gap-4">
        <div className="flex w-full items-center justify-between p-2 ">
          <h2 className="text-base bg-cover bg-no-repeat bg-center  text-gray-600"> Jan 10, 2024 </h2>
          <Image
            src="/share.png"
            width={20}
            height={20}
            alt="Picture of the author"
            className=""
          />
        </div>

        <p className="text-base text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          quaerat expedita atque nulla? Autem animi praesentium saepe
          aspernatur! Fugit voluptatibus eveniet consequuntur, adipisci dolorem
          voluptas! Praesentium nam corporis, exercitationem quibusdam quasi, ex
          delectus aspernatur dolorum rerum, facere similique. Rerum maxime
          sint, consectetur tempore quis doloremque consequuntur tempora cum?
          Iure, excepturi.Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Repellat quaerat expedita atque nulla? Autem animi praesentium
          saepe aspernatur! Fugit voluptatibus eveniet consequuntur, adipisci
          dolorem voluptas! Praesentium nam corporis, exercitationem quibusdam
          quasi, ex delectus aspernatur dolorum rerum, facere similique. Rerum
          maxime sint, consectetur tempore quis doloremque consequuntur tempora
          cum? Iure, excepturi.
        </p>
      </div>
      <div className="flex flex-col w-full">
        <h2 className="text-xl font-bold items-center ">Minds for Earth</h2>
        <p className="text-base text-gray-500">
          {" "}
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
          aperiam quia, inventore veritatis quod quo quidem reprehenderit.
          Numquam, officia quae? Fugiat fuga ipsum a. Laborum vel temporibus,
          accusamus aut porro cumque voluptate velit ipsam perspiciatis nostrum
          explicabo saepe optio natus error minus dicta molestiae corrupti
          mollitia enim illo culpa maxime dolor. Animi quibusdam ratione odio
          commodi molestias maxime dolor et libero id tempora, eveniet possimus
          eum veritatis illo voluptates. Mollitia totam fugit et voluptas iste
          nisi sed sint? Molestiae delectus repellat accusamus corrupti
          temporibus! Incidunt odit temporibus sequi sed alias? In eaque sed
          odio facilis voluptatum recusandae ad alias quibusdam?
        </p>
      </div>
      <div className="flex items-center justify-center w-full">
        <Image
          src="/Man.jpg"
          width={700}
          height={20}
          alt="Picture of the author"
          className=""
        />
      </div>

      <div className="flex flex-col w-full">
        <h2 className="text-xl font-bold items-center ">Minds for Earth</h2>
        <p className="text-base text-gray-500">
          {" "}
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
          aperiam quia, inventore veritatis quod quo quidem reprehenderit.
          Numquam, officia quae? Fugiat fuga ipsum a. Laborum vel temporibus,
          accusamus aut porro cumque voluptate velit ipsam perspiciatis nostrum
          explicabo saepe optio natus error minus dicta molestiae corrupti
          mollitia enim illo culpa maxime dolor. Animi quibusdam ratione odio
          commodi molestias maxime dolor et libero id tempora, eveniet possimus
          eum veritatis illo voluptates. Mollitia totam fugit et voluptas iste
          nisi sed sint? Molestiae delectus repellat accusamus corrupti
          temporibus! Incidunt odit temporibus sequi sed alias? In eaque sed
          odio facilis voluptatum recusandae ad alias quibusdam?
        </p>
      </div>
      <div className="w-full border-t-4 border-t-zinc-300"></div>
      <div className="flex flex-col items-center gap-8 justify-center">
        <h2 className="text-2xl font-bold">Trending Blogs</h2>
        <div className="flex gap-3">
          <BlogsPageCard/>
          <BlogsPageCard/>
          <BlogsPageCard/>

        </div>
      </div>
    </div>
  );
};

export default BlogRestPage;
