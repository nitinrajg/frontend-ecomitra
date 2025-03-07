import merchants from "../assets/merchants.png";

const Merchants = () => {
  return (
    <section
      id="blogs"
      className="flex justify-center items-center bg-[#1C211B] min-h-screen"
    >
      <div className="w-3/4 h-3/4 flex justify-center items-center">
        <img
          src={merchants}
          alt="merchants around you"
          className="w-3/5 h-3/5 object-contain"
        />
      </div>
    </section>
  );
};

export default Merchants;
