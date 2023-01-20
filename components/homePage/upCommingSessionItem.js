import Image from "next/image";
import Link from "next/link";

const SessionItem = ({ session }) => {
  const { id } = session;
  // console.log(id);
  return (
    <>
      <Link
        href={`/session/${id}`}
        className="w-[90%] xs:w-[80%] sm:w-[45%]  lg:w-[30.2%] xl:w-[23.18%]"
        // className="w-[304px]"
      >
        <div
          className=" flex flex-col gap-4 mb-8  bg-[#F4F4F4] rounded-[12px]
                "
        >
          <div
            className=" h-[206px] w-full bg-[length:100%_206px]  bg-no-repeat rounded-xl "
            style={{
              backgroundImage: "url(" + session?.image + ")",
            }}
          >
            {/* <Image
              src={session?.image}
              alt=""
              fill
              sizes=""
              className=" rounded-[20px]  "
            /> */}

            {/* <img
              src={session?.image}
              alt="img"
              className=" rounded-[20px] w-full object-cover"
            /> */}
          </div>

          <div className="flex flex-col  mx-3">
            <div className="flex flex-row mb-3 justify-between">
              <p className="text-[16px] font-medium leading-[20px] font-['Raleway'] text-[#8B8B8B]">
                {session?.students?.length} +Attendees
              </p>
              <p className="text-[16px] font-medium leading-[20px] font-['Raleway'] text-[#8B8B8B]">
                {new Date(
                  session?.startTime?.seconds * 1000
                ).toLocaleDateString()}
              </p>
            </div>
            <div className=" mb-4 max-h-[30px] ">
              <p className="text-[20px] hover:text-clip overflow-hidden ... truncate xs:text-[24px] leading-[28px] font-normal font-['Raleway'] text-black">
                {session?.title}
              </p>
            </div>

            <div className="flex  gap-2 mb-4 h-[32px]">
              <Image
                src={session?.instructor?.summry?.image}
                alt=""
                height={32}
                width={32}
                className="rounded-[50px] object-cover"
              />
              {/* <img
                src={session?.instructor?.summry?.image}
                alt=""
                className="rounded-[50px] w-[10.52%] object-cover"
              /> */}
              <p className="text-[16px] font-['Raleway'] leading-[19px] font-medium text-[#8B8B8B] pt-2">
                {session?.instructor?.summry?.displayName}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default SessionItem;
