function Footer({ openTime, closeTime }) {
  return (
    <>
      <footer className="footer">
        <div className="order">
          <p>
            We're are open from {openTime}:00 until {closeTime}:00. Come visit
            us or order online !.
          </p>
          <button className="btn">Order</button>
        </div>
      </footer>
    </>
  );
}

export default Footer;
