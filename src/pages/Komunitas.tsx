import MainLayout from "@/layouts/MainLayout";

const Komunitas = () => {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold py-5 text-center">Komunitas</h1>
      <div className="w-full px-5">
        {/*  CHAT START */}
        <div className="flex gap-2.5 justify-start">
          <div className="">
            <div className="grid mb-2">
              <h5 className="text- text-gray-900 text-sm font-semibold leading-snug pb-1">
                Danipinion
              </h5>
              <div className="px-3 py-2 bg-white rounded">
                <h2 className="text-black text-sm font-normal leading-snug">
                  Yes, let’s see, send your work here
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2.5 justify-end pb-40">
          <div className="">
            <div className="grid mb-2">
              <h5 className="text-right text-gray-900 text-sm font-semibold leading-snug pb-1">
                You
              </h5>
              <div className="px-3 py-2 bg-indigo-600 rounded">
                <h2 className="text-white text-sm font-normal leading-snug">
                  Yes, let’s see, send your work here
                </h2>
              </div>
            </div>
          </div>
        </div>
        {/*  CHAT END */}
        <div className="w-[90vw] pl-3 pr-1 py-1 rounded-3xl border bg-gray-200 border-gray-200 items-center gap-2 inline-flex justify-between absolute bottom-20 z-10">
          <div className="flex items-center gap-2">
            <input
              className="grow shrink basis-0 text-black text-xs font-medium leading-4 focus:outline-none bg-gray-200 py-2"
              placeholder="Type here..."
            />
          </div>
          <div className="flex items-center gap-2">
            <button className="items-center flex px-3 py-2 bg-indigo-600 rounded-full shadow ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <g id="Send 01">
                  <path
                    id="icon"
                    d="M9.04071 6.959L6.54227 9.45744M6.89902 10.0724L7.03391 10.3054C8.31034 12.5102 8.94855 13.6125 9.80584 13.5252C10.6631 13.4379 11.0659 12.2295 11.8715 9.81261L13.0272 6.34566C13.7631 4.13794 14.1311 3.03408 13.5484 2.45139C12.9657 1.8687 11.8618 2.23666 9.65409 2.97257L6.18714 4.12822C3.77029 4.93383 2.56187 5.33664 2.47454 6.19392C2.38721 7.0512 3.48957 7.68941 5.69431 8.96584L5.92731 9.10074C6.23326 9.27786 6.38623 9.36643 6.50978 9.48998C6.63333 9.61352 6.72189 9.7665 6.89902 10.0724Z"
                    stroke="white"
                    stroke-width="1.6"
                    stroke-linecap="round"
                  />
                </g>
              </svg>
              <h3 className="text-white text-xs font-semibold leading-4 px-2">
                Send
              </h3>
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Komunitas;
