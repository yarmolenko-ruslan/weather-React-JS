import "./footer.css";

const Footer = () => {
  return (
    <div className="card__footer">
      <p className="card__footer-date">{new Date().getFullYear()}</p>
      <p className="card__footer-copy">Ярмоленко Руслан ©️</p>
    </div>
  );
};

export default Footer;
