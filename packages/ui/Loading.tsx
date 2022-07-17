import Image from "next/image";

export const Loading: React.FC = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center object-contain">
      <Image src="/loading.svg" alt="loading" width="150" height="150" />
    </div>
  );
};
