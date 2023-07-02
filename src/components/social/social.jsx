import "./social.scss";

export const Social = (prob) => {
  return (
    <div className="social">
      <img src={prob.logo} alt="" />
      <h1>{prob.title}</h1>
    </div>
  );
};
