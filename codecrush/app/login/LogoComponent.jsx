import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LogoComponent() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/login");
    }, 2500);
    return () => clearTimeout(timer);
  });

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    </>
  );
}
