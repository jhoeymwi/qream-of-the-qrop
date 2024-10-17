import { AppColors } from "../theme";

function AreaBox({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div
        className={
          "bg-onPrimary rounded-3xl shadow-xl flex justify-evenly items-center pt-8 pb-16 px-12"
        }
      >
        {children}
      </div>
    </>
  );
}

export default AreaBox;
