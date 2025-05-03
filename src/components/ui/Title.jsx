const Title = ({ title, color = "var(--color-primary)" }) => {
  const [w1, w2] = title.split(" ");

  return (
    <div className="text-4xl font-light mb-10  border-b-1 w-fit pb-5 ">
      <span className="font-bold" style={{ color }}>
        {w1}{" "}
      </span>
      {w2}
    </div>
  );
};

export default Title;
