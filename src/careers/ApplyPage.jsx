import React from "react";

const ApplyPage = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-2 sm:px-4 overflow-x-hidden w-full">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-3xl font-bold text-green-400 mb-8 px-2">Apply Now</h1>
        <div className="bg-[#1C211B] rounded-lg shadow-lg overflow-hidden">
          <iframe
            src="https://app.nocodb.com/#/nc/form/44b0e9b2-186a-4e06-9f35-1dc2e419668f"
            className="w-full"
            height="800px"
            style={{ border: "none", overflow: "hidden" }}
            title="Application Form"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ApplyPage;
