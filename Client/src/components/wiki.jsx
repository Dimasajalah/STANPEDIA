import * as React from "react";

const MyComponent = () => {
  return (
    <div className="flex flex-col items-stretch">
      <div className="flex-col overflow-hidden relative flex min-h-[515px] w-full items-stretch pl-6 max-md:max-w-full max-md:pl-5">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/74ee6695-5d73-43a9-a7bb-c1c7d6657fb5?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/74ee6695-5d73-43a9-a7bb-c1c7d6657fb5?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/74ee6695-5d73-43a9-a7bb-c1c7d6657fb5?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/74ee6695-5d73-43a9-a7bb-c1c7d6657fb5?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/74ee6695-5d73-43a9-a7bb-c1c7d6657fb5?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/74ee6695-5d73-43a9-a7bb-c1c7d6657fb5?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/74ee6695-5d73-43a9-a7bb-c1c7d6657fb5?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/74ee6695-5d73-43a9-a7bb-c1c7d6657fb5?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&"
          className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
        />
        <div className="relative flex w-full justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
          <div className="text-orange-700 text-3xl font-semibold leading-10 tracking-[2px] uppercase">
            STANpedia
          </div>
        </div>
        <div className="relative mt-10 pr-2.5 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[74%] max-md:w-full max-md:ml-0">
              <div className="relative flex grow flex-col max-md:max-w-full max-md:mt-5">
                <div className="flex w-[290px] max-w-full items-stretch gap-4 pr-1">
                  <div className="text-black text-center text-3xl leading-9 tracking-wide w-[242px]">
                    Princess Zelda
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9b163f2-2801-436c-82a9-0a8914785a65?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&"
                    className="aspect-[1.64] object-contain object-center w-9 overflow-hidden shrink-0 max-w-full self-start"
                  />
                </div>
                <div className="text-black text-sm leading-4 tracking-wide underline self-stretch mt-3 max-md:max-w-full">
                  This article is about the eponymous character of The Legend of
                  Zelda franchise.
                  <br /> For the video-game series named after her, see{" "}
                  <a
                    href="https://zelda.fandom.com/wiki/The_Legend_of_Zelda_(Series)"
                    target="_blank"
                  >
                    The Legend of Zelda series
                  </a>
                  .<br /> For other uses, see{" "}
                  <a
                    href="https://zelda.fandom.com/wiki/Zelda_(disambiguation)"
                    target="_blank"
                  >
                    Zelda (disambiguation)
                  </a>
                  .<br />
                  <br />
                  <br />
                  <br />
                </div>
                <div className="text-black text-sm leading-4 tracking-wide self-stretch mt-3 max-md:max-w-full">
                  Zelda is the eponymous character of
                  The Legend of Zelda series. With the exception of Links
                  Awakening, Majoras Mask, and Tri Force Heroes, an incarnation
                  of Zelda or one of her alter egos has always been one of the
                  central characters in the series.
                </div>
                <div className="border backdrop-blur-[2.4000000953674316px] bg-white bg-opacity-40 flex w-[301px] max-w-full gap-2.5 ml-7 mt-4 pr-px border-solid border-white border-opacity-10 max-md:ml-2.5">
                  <div className="flex grow basis-[0%] flex-col mt-3.5">
                    <div className="text-black text-sm leading-4 tracking-wide w-full ml-3 max-md:ml-2.5">
                      Content
                    </div>
                    <div className="text-black text-sm leading-4 tracking-wide self-stretch mt-3.5">
                      <ul>
                        <li>Characteristic</li>
                      </ul>{" "}
                      1.1 Physical Apperance
                      <br /> 1.2 Personalities
                      <br /> 1.3 Abilities
                      <br /> 2. Naming Tradition and Law
                      <br /> 2.1 Origin
                      <br /> 2.2 The Tragedy of”Princess Zelda I”
                      <br /> 3. Unified Timeline
                      <br /> 3.1 Skyward Sword
                    </div>
                  </div>
                  <div className="items-stretch border backdrop-blur-[0.800000011920929px] bg-white bg-opacity-40 self-stretch flex basis-[0%] flex-col pt-px pb-12 px-0.5 border-solid border-white border-opacity-10 max-md:hidden">
                    <div className="items-start rounded bg-stone-300 flex shrink-0 h-[25px] flex-col mb-20 max-md:mb-10" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[26%] ml-5 max-md:w-full max-md:ml-0">
              <div className="bg-gray-200 relative flex w-full flex-col items-center mx-auto pb-3 rounded-[30px] max-md:mt-6">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/74d63862-c94f-484b-aac0-9fcb01a85040?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/74d63862-c94f-484b-aac0-9fcb01a85040?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/74d63862-c94f-484b-aac0-9fcb01a85040?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/74d63862-c94f-484b-aac0-9fcb01a85040?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/74d63862-c94f-484b-aac0-9fcb01a85040?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/74d63862-c94f-484b-aac0-9fcb01a85040?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/74d63862-c94f-484b-aac0-9fcb01a85040?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/74d63862-c94f-484b-aac0-9fcb01a85040?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&"
                  className="aspect-[1.04] object-contain object-center w-44 overflow-hidden -ml-px"
                />
                <div className="self-stretch flex items-stretch justify-between gap-1.5">
                  <div className="flex flex-col items-stretch">
                    <div className="flex items-stretch justify-between gap-1.5 pr-0.5">
                      <div className="flex-col text-white text-center text-xs font-extrabold leading-3 tracking-normal relative fill-slate-500 overflow-hidden aspect-[4.166666666666667] w-[75px] pl-8 pr-5 py-1.5 max-md:pl-2.5">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e9074b34-acd7-4087-bb05-f38ea85ca53f?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&"
                          className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
                        />
                        Race
                      </div>
                      <div className="text-white text-center text-xs font-extrabold leading-3 tracking-normal bg-slate-500 grow pl-8 pr-5 py-1.5 rounded-none max-md:pl-2.5">
                        Hylian
                      </div>
                    </div>
                    <div className="flex items-stretch justify-between gap-1.5 pr-0.5">
                      <div className="flex-col text-white text-center text-xs font-extrabold leading-3 tracking-normal relative fill-slate-500 overflow-hidden aspect-[4.166666666666667] w-[75px] px-5 py-1.5 max-md:pl-1.5">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f36c30ea-aef0-4e6b-acf5-dc8c6d380fd9?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&"
                          className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
                        />
                        Gender
                      </div>
                      <div className="text-white text-center text-xs font-extrabold leading-3 tracking-normal bg-slate-500 grow pl-8 pr-5 py-1.5 rounded-none">
                        Female
                      </div>
                    </div>
                    <div className="flex items-stretch justify-between gap-1.5 mt-1 pr-1">
                      <div className="flex-col text-white text-center text-xs font-extrabold leading-3 tracking-normal relative fill-slate-500 overflow-hidden aspect-[0.7653061224489796] w-[75px] items-stretch pt-2.5 pb-16">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/889a0a19-71fc-4860-a2fa-54a38d6a5d6b?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&"
                          className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
                        />
                        Main Appearance(s)
                      </div>
                      <div className="text-white text-center text-xs font-extrabold leading-3 tracking-normal bg-slate-500 grow items-stretch pt-2.5 pb-5">
                        Tears of the kingdom
                        <br />
                        Breath of the wild <br /> A link between worlds
                      </div>
                    </div>
                    <div className="flex items-stretch justify-between gap-1 mt-1 pr-1.5">
                      <div className="flex-col text-white text-center text-xs font-extrabold leading-3 tracking-normal relative fill-slate-500 overflow-hidden aspect-[1.1538461538461537] w-[75px] items-stretch pt-3 pb-11 px-2">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fcd06de2-c051-45ae-a1fb-d24483e95b0e?apiKey=710a86f1bb004f72a1791d1b1ff5a68b&"
                          className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
                        />
                        Counterparts
                      </div>
                      <div className="text-white text-center text-xs font-extrabold leading-3 tracking-normal bg-slate-500 grow items-stretch px-4 py-2.5 rounded-none max-md:pr-px">
                        <ul>
                          <li>Princess Hilda</li>
                          <li>Marin</li>
                          <li>Styla</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="items-stretch border backdrop-blur-[0.800000011920929px] bg-white bg-opacity-40 flex basis-[0%] flex-col pt-px pb-12 px-0.5 rounded-none border-solid border-white border-opacity-10 max-md:hidden">
                    <div className="items-start rounded bg-stone-300 flex shrink-0 h-[25px] flex-col mb-24 max-md:mb-10" />
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


