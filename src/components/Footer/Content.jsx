const Content = () => {
  return (
    <div className="relative h-full bg-primary text-white px-5 py-16 flex flex-col md:flex-row justify-between items-start overflow-hidden">
      <div className="flex-1 space-y-6">
        <h3 className="text-2xl font-bold">About Us</h3>
        <p className="text-gray-200 md:max-w-[50%]">
          At ShelfShare, we connect readers with the books they love. From
          timeless classics to today's bestsellers, our platform is built for
          discovering, sharing, and celebrating the joy of reading. Join our
          community and find your next favorite book today.
        </p>
      </div>

      <div className="flex-1 space-y-6">
        <h3 className="text-2xl font-bold">Contact Us</h3>
        <div className="text-gray-200 space-y-3">
          <p>
            Email:{" "}
            <a
              href="mailto:support@shelfshare.com"
              className="underline hover:text-white"
            >
              support@shelfshare.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:+11234567890" className="underline hover:text-white">
              +1 (123) 456-7890
            </a>
          </p>
          <p>Address: 123 Book Street, Library City, BK 45678</p>
        </div>
      </div>

      <span className="absolute md:bottom-5 md:left-0 text-[15vw] md:text-[10vw] font-extrabold text-white/10 pointer-events-none select-none leading-none">
        ShelfShare
      </span>
    </div>
  );
};

export default Content;
