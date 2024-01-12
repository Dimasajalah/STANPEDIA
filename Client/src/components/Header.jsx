import { FunctionComponent } from "react";
import "./index.css";
import { Link } from 'react-router-dom';

function MyComponent(props) {
  return (
    <div className="flex-col overflow-hidden self-stretch relative flex min-h-[885px] w-full justify-center items-center pl-16 py-12 max-md:max-w-full max-md:pl-5">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9299a07a075e1c9c69471ee629241bd011bc778abd2f6fa06cdae54a4b1730b1?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9299a07a075e1c9c69471ee629241bd011bc778abd2f6fa06cdae54a4b1730b1?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9299a07a075e1c9c69471ee629241bd011bc778abd2f6fa06cdae54a4b1730b1?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9299a07a075e1c9c69471ee629241bd011bc778abd2f6fa06cdae54a4b1730b1?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9299a07a075e1c9c69471ee629241bd011bc778abd2f6fa06cdae54a4b1730b1?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9299a07a075e1c9c69471ee629241bd011bc778abd2f6fa06cdae54a4b1730b1?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9299a07a075e1c9c69471ee629241bd011bc778abd2f6fa06cdae54a4b1730b1?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9299a07a075e1c9c69471ee629241bd011bc778abd2f6fa06cdae54a4b1730b1?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&"
        className="absolute h-full w-full object-cover object-center inset-0"
      />
      <div className="relative w-full max-w-[1406px] mt-36 mb-12 max-md:max-w-full max-md:my-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[49%] max-md:w-full max-md:ml-0">
            <div className="relative flex flex-col my-auto items-end max-md:max-w-full max-md:mt-10">
              <div className="text-black text-5xl font-extralight max-md:max-w-full max-md:text-4xl">
                Welcome to my website
              </div>
              <div className="text-black text-2xl font-extralight self-stretch mt-10 max-md:max-w-full">
                L
                <span className="text-lg">
                  <span className="text-lg">
                    orem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do{" "}
                  </span>
                  <br />
                  <span className="text-lg">
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                  </span>
                  <br />
                  <span className="text-lg">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris{" "}
                  </span>
                  <br />
                  <span className="text-lg">
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    dolor in{" "}
                  </span>
                  <br />
                  <span className="text-lg">
                    reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur.
                  </span>
                  <br />
                  <span className="text-lg">
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia{" "}
                  </span>
                  <br />
                  <span className="text-lg">
                    deserunt mollit anim id est laborum.
                  </span>
                </span>
              </div>
              <div className="text-sky-700 text-2xl font-bold leading-6 tracking-tight whitespace-nowrap justify-center items-stretch shadow-md bg-gray-100 self-center mt-28 px-14 py-4 rounded-md max-md:mt-10 max-md:px-5">
                Button
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[17%] ml-5 max-md:w-full max-md:ml-0" />
          <div className="flex flex-col items-stretch w-[34%] ml-5 max-md:w-full max-md:ml-0">
            <div className="relative flex grow flex-col mt-3.5 items-end max-md:mt-10">
              <div className="flex flex-row">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9139495442cb0201c57c627f57f4b0c82dc1ea026737df346e9c5732d88812ae?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9139495442cb0201c57c627f57f4b0c82dc1ea026737df346e9c5732d88812ae?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9139495442cb0201c57c627f57f4b0c82dc1ea026737df346e9c5732d88812ae?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9139495442cb0201c57c627f57f4b0c82dc1ea026737df346e9c5732d88812ae?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9139495442cb0201c57c627f57f4b0c82dc1ea026737df346e9c5732d88812ae?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9139495442cb0201c57c627f57f4b0c82dc1ea026737df346e9c5732d88812ae?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9139495442cb0201c57c627f57f4b0c82dc1ea026737df346e9c5732d88812ae?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9139495442cb0201c57c627f57f4b0c82dc1ea026737df346e9c5732d88812ae?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&"
                  className="aspect-[0.47] object-contain object-center w-[205px] overflow-hidden max-w-full mt-4 self-start"
                />
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/346e500b4548d0d263dfb3d92aa6a9b8dcdf9d8194451f0700956dc7d6e3b204?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/346e500b4548d0d263dfb3d92aa6a9b8dcdf9d8194451f0700956dc7d6e3b204?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/346e500b4548d0d263dfb3d92aa6a9b8dcdf9d8194451f0700956dc7d6e3b204?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/346e500b4548d0d263dfb3d92aa6a9b8dcdf9d8194451f0700956dc7d6e3b204?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/346e500b4548d0d263dfb3d92aa6a9b8dcdf9d8194451f0700956dc7d6e3b204?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/346e500b4548d0d263dfb3d92aa6a9b8dcdf9d8194451f0700956dc7d6e3b204?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/346e500b4548d0d263dfb3d92aa6a9b8dcdf9d8194451f0700956dc7d6e3b204?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/346e500b4548d0d263dfb3d92aa6a9b8dcdf9d8194451f0700956dc7d6e3b204?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&"
                  className="aspect-[0.66] object-contain object-center w-[403px] overflow-hidden shrink-0 max-w-full -ml-0.5 max-md:mt-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-stretch">
      <div className="flex-col overflow-hidden relative flex min-h-[845px] w-full items-stretch pl-6 pr-14 py-12 max-md:max-w-full max-md:px-5">
        <div className="relative text-black text-5xl font-light mt-11 max-md:max-w-full max-md:text-4xl max-md:mt-10">
          Popular Pages
        </div>
        <div className="relative mt-24 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
              <div className="items-start shadow-md bg-gray-100 relative flex grow flex-col w-full p-4 rounded-lg max-md:max-w-full max-md:mt-10">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/db8d1e3dcc3b33b63bc663666b489b4059f6a44393db84fe37b11e516877afa4?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/db8d1e3dcc3b33b63bc663666b489b4059f6a44393db84fe37b11e516877afa4?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/db8d1e3dcc3b33b63bc663666b489b4059f6a44393db84fe37b11e516877afa4?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/db8d1e3dcc3b33b63bc663666b489b4059f6a44393db84fe37b11e516877afa4?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/db8d1e3dcc3b33b63bc663666b489b4059f6a44393db84fe37b11e516877afa4?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/db8d1e3dcc3b33b63bc663666b489b4059f6a44393db84fe37b11e516877afa4?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/db8d1e3dcc3b33b63bc663666b489b4059f6a44393db84fe37b11e516877afa4?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/db8d1e3dcc3b33b63bc663666b489b4059f6a44393db84fe37b11e516877afa4?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&"
                  className="aspect-[1.54] object-contain object-center w-full justify-center items-center self-stretch shadow overflow-hidden"
                />
                <div className="self-stretch text-purple-800 text-4xl font-bold leading-[56px] whitespace-nowrap mt-4">
                  Card title
                </div>
                <div className="self-stretch text-slate-500 text-3xl font-bold leading-10 whitespace-nowrap mt-1">
                  Sub Heading
                </div>
                <div className="self-stretch text-slate-500 text-xl leading-8 tracking-normal mt-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                  purus tellus arcu sit nibh consectetur.
                </div>
                <div className="text-sky-700 text-xl font-bold leading-6 tracking-normal whitespace-nowrap justify-center items-stretch shadow-md bg-gray-100 mt-4 px-3 py-2 rounded-md self-start">
                  Read more
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <div className="items-start shadow-md bg-gray-100 relative flex grow flex-col w-full p-4 rounded-lg max-md:max-w-full max-md:mt-10">
                <div className="justify-center items-stretch self-stretch shadow bg-gray-100 flex flex-col">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4187394b7b215b63de8db87e8c87cba5f84e36b9169326b8601a16c3ee03c959?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4187394b7b215b63de8db87e8c87cba5f84e36b9169326b8601a16c3ee03c959?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4187394b7b215b63de8db87e8c87cba5f84e36b9169326b8601a16c3ee03c959?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4187394b7b215b63de8db87e8c87cba5f84e36b9169326b8601a16c3ee03c959?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4187394b7b215b63de8db87e8c87cba5f84e36b9169326b8601a16c3ee03c959?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4187394b7b215b63de8db87e8c87cba5f84e36b9169326b8601a16c3ee03c959?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4187394b7b215b63de8db87e8c87cba5f84e36b9169326b8601a16c3ee03c959?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4187394b7b215b63de8db87e8c87cba5f84e36b9169326b8601a16c3ee03c959?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&"
                    className="aspect-[1.51] object-contain object-center w-full shadow-md overflow-hidden"
                  />
                </div>
                <div className="self-stretch text-purple-800 text-4xl font-bold leading-[50.4px] whitespace-nowrap mt-4">
                  Card title
                </div>
                <div className="self-stretch text-slate-500 text-3xl font-bold leading-10 whitespace-nowrap mt-1">
                  Sub Heading
                </div>
                <div className="self-stretch text-slate-500 text-xl leading-8 tracking-normal mt-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                  purus tellus arcu sit nibh consectetur.
                </div>
                <div className="text-sky-700 text-xl font-bold leading-6 tracking-normal whitespace-nowrap justify-center items-stretch shadow-md bg-gray-100 mt-4 px-3 py-2 rounded-md self-start">
                  Read more
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <div className="items-start shadow-md bg-gray-100 relative flex grow flex-col w-full p-4 rounded-lg max-md:max-w-full max-md:mt-10">
                <div className="justify-center items-stretch self-stretch shadow bg-gray-100 flex flex-col">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/312eeefef734c0553f3ec16de89b540d5e58c594fe5d8315c07f1dda0a582075?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/312eeefef734c0553f3ec16de89b540d5e58c594fe5d8315c07f1dda0a582075?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/312eeefef734c0553f3ec16de89b540d5e58c594fe5d8315c07f1dda0a582075?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/312eeefef734c0553f3ec16de89b540d5e58c594fe5d8315c07f1dda0a582075?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/312eeefef734c0553f3ec16de89b540d5e58c594fe5d8315c07f1dda0a582075?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/312eeefef734c0553f3ec16de89b540d5e58c594fe5d8315c07f1dda0a582075?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/312eeefef734c0553f3ec16de89b540d5e58c594fe5d8315c07f1dda0a582075?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/312eeefef734c0553f3ec16de89b540d5e58c594fe5d8315c07f1dda0a582075?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&"
                    className="aspect-[1.51] object-contain object-center w-full shadow-md overflow-hidden"
                  />
                </div>
                <div className="self-stretch text-purple-800 text-4xl font-bold leading-[50.4px] whitespace-nowrap mt-4">
                  Card title
                </div>
                <div className="self-stretch text-slate-500 text-3xl font-bold leading-10 whitespace-nowrap mt-1">
                  Sub Heading
                </div>
                <div className="self-stretch text-slate-500 text-xl leading-8 tracking-normal mt-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                  purus tellus arcu sit nibh consectetur.
                </div>
                <div className="text-sky-700 text-xl font-bold leading-6 tracking-normal whitespace-nowrap justify-center items-stretch shadow-md bg-gray-100 mt-4 px-3 py-2 rounded-md self-start">
                  Read more
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>    
  );
}

export default MyComponent;

