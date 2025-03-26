import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  // Default WhatsApp number - replace with your actual number
  const phoneNumber = '+918978674545'; // Format: country code + phone number without '+'
  const message = 'Hello, I would like to know more about EcoMitra services.';
  
  const handleWhatsAppClick = () => {
    // Create WhatsApp URL with phone number and pre-filled message
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div 
      className="fixed bottom-6 right-6 z-50 cursor-pointer"
      onClick={handleWhatsAppClick}
      aria-label="Chat on WhatsApp"
    >
      <div className="bg-[#25D366] p-3 rounded-full shadow-lg hover:bg-[#128C7E] transition-colors duration-300 flex items-center justify-center">
        <FaWhatsapp className="text-white text-3xl" />
      </div>
    </div>
  );
};

export default WhatsAppButton;