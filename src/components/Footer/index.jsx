import Content from "./Content";

const Footer = () => {
  return (
    <div className="relative bg-primary">
      <div
        className="relative h-100 mt-5 container mx-auto"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        }}
      >
        <div className="fixed h-100 w-full bottom-0">
          <Content />
        </div>
      </div>
    </div>
  );
};

export default Footer;
