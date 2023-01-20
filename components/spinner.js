import Image from "next/image";

function Spinner() {
  return (
    <div className="h-[100vh] flex items-center justify-center space-x-2  max-w-full">
      <Image
        src="/img/Loading.gif"
        alt=""
        height={240}
        width={240}
        className="object-contain"
      />
    </div>
  );
}

export default Spinner;
