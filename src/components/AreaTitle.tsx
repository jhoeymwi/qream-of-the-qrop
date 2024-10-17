import { AppColors } from "../theme";

function AreaTitle({ title }: { title: string }) {
  return (
    <>
      <h1 className="text-3xl text-onPrimary p-4 font-semibold">{title}</h1>
    </>
  );
}

export default AreaTitle;
