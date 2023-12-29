"use client";
import React, { useState } from "react";

function Home() {
  const [formData, setFormData] = useState({
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    billingAddress: "",
  });
  const [paymentStatus, setPaymentStatus] = useState("");

  const handlePayment = () => {
    // Simulate payment processing (in a real application, use a payment gateway SDK)
    setTimeout(() => {
      setPaymentStatus("success"); // or 'failure' in case of error
    }, 2000);
  };

  return (
    <div>
      <h2>Payment Form</h2>
      <input
        type="text"
        name="cardNumber"
        placeholder="Card Number"
        value={formData.cardNumber}
        onChange={(e) => {
          const { name, value } = e.target;
          setFormData({ ...formData, [name]: value });
        }}
      />
      <input
        type="text"
        name="expirationDate"
        placeholder="Expiration Date"
        value={formData.cardNumber}
        onChange={(e) => {
          const { name, value } = e.target;
          setFormData({ ...formData, [name]: value });
        }}
      />
      <input
        type="text"
        name="cvv"
        placeholder="CVV"
        value={formData.cardNumber}
        onChange={(e) => {
          const { name, value } = e.target;
          setFormData({ ...formData, [name]: value });
        }}
      />
      <input
        type="text"
        name="billingAddress"
        placeholder="Billing Address"
        value={formData.cardNumber}
        onChange={(e) => {
          const { name, value } = e.target;
          setFormData({ ...formData, [name]: value });
        }}
      />
      {/* Add similar inputs for expiration date, CVV, and billing address */}
      <button onClick={handlePayment}>Make Payment</button>
      {paymentStatus && (
        <div className={paymentStatus === "success" ? "success" : "failure"}>
          {paymentStatus === "success"
            ? "Payment successful!"
            : "Payment failed."}
        </div>
      )}
    </div>
  );
}

export default Home;
