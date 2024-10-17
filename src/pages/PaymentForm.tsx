import AreaTitle from "../components/AreaTitle";
import { Link } from "react-router-dom";

function PaymentForm() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-left">
        <AreaTitle title="Create Your Payment" />

        {/* Responsive Container */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 p-8">
          {/* Left Image */}
          <div className="flex-1 max-w-md">
            <img
              src="src\assets\images\confirmpage.png"
              alt="Payment Form Example"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Right Image */}
          <div className="flex-1 max-w-md">
            <img
              src="src\assets\images\confirmemail.png"
              alt="Email Notification Example"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Button */}
        <div className="mt-8">
          <Link to="/receipt">
            <button
              onClick={() => console.log("hello")}
              className="px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-md shadow-md transition"
            >
              Submit
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default PaymentForm;

/* function PaymentForm() {
  const [fieldOne, setFieldOne] = useState("");
  const [fieldTwo, setFieldTwo] = useState("");

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <AreaTitle title="Create Your Payment" />
        <AreaBox>
          <form>
            <TextInput
              label="FieldOne"
              value={fieldOne}
              setValue={setFieldOne}
            />
            <TextInput
              label="FieldTwo"
              value={fieldTwo}
              setValue={setFieldTwo}
            />
            <TextInput
              label="FieldTwo"
              value={fieldTwo}
              setValue={setFieldTwo}
            />
            <TextInput
              label="FieldTwo"
              value={fieldTwo}
              setValue={setFieldTwo}
            />
            <TextInput
              label="FieldTwo"
              value={fieldTwo}
              setValue={setFieldTwo}
            />
            <TextInput
              label="FieldTwo"
              value={fieldTwo}
              setValue={setFieldTwo}
            />
          </form>
        </AreaBox>
        <div className="h-6"></div>
        <Link to="/receipt">
          <ActionButton onClick={() => console.log("hello")} />
        </Link>
      </div>
    </>
  );
}

export default PaymentForm; */
