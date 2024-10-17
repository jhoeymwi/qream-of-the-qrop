import { useState } from "react";
import AreaTitle from "../components/AreaTitle";
import AreaBox from "../components/AreaBox";
import TextInput from "../components/TextInput";
import ActionButton from "../components/ActionButton";
import { QRCode } from "react-qrcode-logo";

function ReceiptPage() {
  const [fieldOne, setFieldOne] = useState("");
  const [fieldTwo, setFieldTwo] = useState("");

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <AreaTitle title="Your Receipt" />
        <div className="flex flex-col rounded-sm shadow-2xl items-center bg-onPrimary p-8">
          <h1 className="p-4 text-2xl bg-onSurface text-onPrimary mb-8">
            LOREM BANK RECEIPT
          </h1>
          <h2>1234 Bank Lane</h2>
          <h2 className="mb-4">San Antonio, TX</h2>

          <h3>Operation Number: 1324566980</h3>
          <h3>Operation Date: 10/17/2024</h3>
          <h3>Operation Time: 9:23am CT</h3>

          <div>------------------------------</div>
          <div className="flex flex-col items-center pb-4">
            <h2 className="text-xl mb-6">**** **** **** 8083</h2>
            <h2 className="text-xl">Total Amount</h2>
            <h1 className="text-4xl p-2">$1,234</h1>
          </div>
          <div>------------------------------</div>

          <h3>Ref No.: 90238495</h3>
          <h3>Approved No.: 28398592</h3>
          <div className="py-4">
            <QRCode
              value="https://github.com/gcoro/react-qrcode-logo"
              logoHeight={60}
              logoWidth={60}
              logoImage="https://qream-of-the-qrop.s3.amazonaws.com/logos/1729174546882SBB.png"
            />
          </div>
          <h1 className=" text-2xl  mt-4">LOREM BANK</h1>
        </div>
        <div className="h-6"></div>
      </div>
    </>
  );
}

export default ReceiptPage;
