export const InfoCard = (info) => {
  return (
    <div className="info-card">
      <h2 className="title">{info.title}</h2>
      <h2 className="details">{info.details}</h2>
    </div>
  );
};
