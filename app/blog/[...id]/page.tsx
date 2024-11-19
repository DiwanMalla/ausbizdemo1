"use client";
import { useParams } from "next/navigation";

const Page = () => {
  const params = useParams();
  const slug = params.id;
  return (
    <div className="flex flex-col justify-center items-center">
      <div>Currently on development</div>
      <div>You clicked blog {slug}</div>
    </div>
  );
};

export default Page;
