import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import CampaignCreate from "./pages/CampaignCreate";
import Root from "./pages/CampaignCreate";
import PaymentForm from "./pages/PaymentForm";
import ReceiptPage from "./pages/ReceiptPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CampaignCreate />}></Route>
          <Route path="/payment" element={<PaymentForm />}></Route>
          <Route path="/receipt" element={<ReceiptPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
