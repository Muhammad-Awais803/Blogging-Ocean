'use client'
import React, { useState } from "react";
import Editor from "react-simple-wysiwyg";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addBlog } from "@/store/reducer/user/addBlogReducer";

const AddBlog = () => {
  const { register, handleSubmit, setValue, getValues } = useForm();
  const [html, setHtml] = useState('');
  const [tags, setTags] = useState([]);

  function onChange(e) {
    setHtml(e.target.value);
        setValue("BlogDescription", e.target.value);
  }
const dispatch = useDispatch();

  const onSubmit = (data) => {
    data.tags = tags; // Include tags in form data
    data.BlogDescription = html; // Include HTML content in form data
    console.log('asd',data);
    dispatch(addBlog(data));

    // Here you can perform your API call to submit the blog data
  };

  const addTags = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      setTags([...tags, e.target.value]);
      e.target.value = "";
    }
  };

  const deleteTag = (val) => {
    let remainTags = tags.filter((t) => t !== val);
    setTags(remainTags);
  };

  return (
    <div className="flex px-5 md:px-20 lg:px-40 xl:px-40 gap-3">
      <div className="flex flex-col gap-7 md:gap-10 py-10">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold ">Upload Blog</h2>
          <p className="text-base ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
            tempora obcaecati incidunt labore quam quo et? Recusandae, obcaecati
            explicabo. Excepturi expedita eaque quisquam eos ipsa deleniti sint
            laborum voluptatibus officiis?
          </p>
        </div>
        <div className="flex flex-col gap-3 ">
          <p className="text-xs ">PROFILE PICTURE </p>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
            <div className="flex justify-between gap-2 md:gap-0 flex-col md:flex-row">
              <div className="flex gap-2 flex-col md:flex-row ">
                <input
                  type="file"
                  src="img_submit.gif"
                  alt="Submit"
                  width="48"
                  height="48"
                  name="picture"
                  {...register("picture", { required: true })}
                />
                <h2>Upload a Blog picture. Max Size 2MB</h2>
              </div>
              <div>
                <button className="px-2 py-1 border-2">Browse</button>
              </div>
            </div>
            <div className="flex flex-col w-5/12 gap-2">
              <p className="text-xs  ">Blog Title</p>
              <input
                type="text"
                className="w-l/2 p-2 border border-zinc-300 shadow-md border-black"
                placeholder="Is we are connected with nature"
                name="BlogTitle"
                {...register("BlogTitle", { required: true })}
              />
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col w-5/12 gap-2">
                <p className="text-xs">Category</p>
                <select
                  id=""
                  className="w-full p-2 border border-zinc-300 shadow-md border-black"
                  name="Category"
                  {...register("Category", { required: true })}
                >
                  <option value="latest">Travelling</option>
                  <option value="oldest">Art</option>
                  <option value="oldest">Hiking</option>
                </select>{" "}
              </div>
              <div className="flex w-5/12 gap-2 items-center justify-center">
                <p className="text-xs">Comments</p>
                <input type="switch" id="toggle" class="hidden" />
                <label
                  for="toggle"
                  class="toggle-label relative inline-block w-12 h-6"
                >
                  <span class="block bg-gray-400 w-full h-full rounded-full"></span>
                  <span class="absolute left-0 top-0 transform translate-x-0.5 translate-y-0.5 w-5 h-5 bg-white rounded-full shadow-md"></span>
                </label>
              </div>
            </div>
            <div className="flex flex-col w-full gap-2">
              <p className="text-xs  ">BLOG DESCRIPTION</p>
              <Editor
                placeholder="Enter your whole Blog here "
                onChange={onChange}
                value={html}
                containerProps={{ style: { height: "350px" } }}
                name="BlogDescription"
              />
            </div>
            <div className="flex flex-col gap-2  ">
              <h2 className="text-md font-bold">Tags</h2>
              <div className="w-50% flex flex-col gap-2 ">
                <div className="flex gap-2 ">
                  {tags.map((item, index) => {
                    return (
                      <button
                        className="bg-zinc-300 p-2 rounded-xl "
                        key={index}
                      >
                        {item}{" "}
                        <span
                          onClick={() => deleteTag(item)}
                          className="text-zinc-500"
                        >
                          X
                        </span>
                      </button>
                    );
                  })}
                </div>
                <input
                  type="text"
                  placeholder="Type and Enter"
                  onKeyDown={addTags}
                  className="w-full h-[50px] border-2"
                ></input>
              </div>
            </div>
            <button type="submit" className="px-2 py-1 bg-signupbutton text-white w-fit rounded-md">
              Publish Blog
            </button>
          </form>
        </div>
      </div>
      <div className="flex flex-col w-1/5 h-screen border-2 pt-10 gap-2 px-5 sticky top-0">
        <h2 className="text-xl font-bold ">Blog Heading</h2>
        <h2 className="text-md font-bold underline">Steps:</h2>
        <div>
          <p className="text-base">Plagarism checked</p>
          <p className="text-base">Lorem ipsum dolor sit amet. </p>
          <p className="text-base">Lorem ipsum dolor sit.</p>
        </div>
        <button className="px-2 py-1 border-2 w-fit rounded-md">
          Save Draft
        </button>
      </div>
    </div>
  );
};

export default AddBlog;