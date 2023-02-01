const Testing = () => {
  const array = ["Joshua", "Wanjugu", "Mary", "Lovely", "Focusly"];
  return (
    <>
      <div>
        {array.map((item, index) => {
          <p key={`${index}+${item}`}>{item}</p>;
        })}
      </div>
    </>
  );
};

export default Testing;
