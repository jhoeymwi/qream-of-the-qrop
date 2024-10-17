import { useState } from "react";
import AreaTitle from "../components/AreaTitle";
import AreaBox from "../components/AreaBox";
import TextInput from "../components/TextInput";
import ActionButton from "../components/ActionButton";
import { Link } from "react-router-dom";

function CampaignCreate() {
  const [formData, setFormData] = useState({
    fieldOne: "",
    fieldTwo: "",
    fieldThree: "",
  });

  const handleChange = (field: string) => (value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    console.log(formData.fieldOne);
    console.log(formData.fieldTwo);
    console.log(formData.fieldThree);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <AreaTitle title="Create Your Campaign" />
        <AreaBox>
          <form>
            <TextInput
              label="Campaign Name"
              value={formData.fieldOne}
              setValue={handleChange(formData.fieldOne)}
            />
            <TextInput
              label="Brand Logo"
              value={formData.fieldTwo}
              setValue={handleChange(formData.fieldTwo)}
            />
            <TextInput
              label="QR Code Link"
              value={formData.fieldTwo}
              setValue={handleChange(formData.fieldTwo)}
            />
            <TextInput
              label="QR COde Foreground Color"
              value={formData.fieldThree}
              setValue={handleChange(formData.fieldThree)}
            />
          </form>
        </AreaBox>
        <div className="h-6"></div>
        <Link to="/payment">
          <ActionButton onClick={handleSubmit} />
        </Link>
      </div>
    </>
  );
}

export default CampaignCreate;
