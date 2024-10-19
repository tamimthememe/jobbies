import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="w-full h-[100vh] border-2 flex justify-center items-center">
      <SignIn />
    </div>
  );
}