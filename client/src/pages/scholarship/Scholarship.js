import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import Navbar from "../../components/navbar/Navbar";
import "./Scholarship.css";
import DonateBanner from "../../assets/svg/Donation.svg";
import { BsArrowRight } from "react-icons/bs";
import Footer from "../../components/footer/Footer";
import SEO from "../../components/SEO";

let stripePromise;

// console.log(process.env.REACT_APP_STRIPE_KEY)
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_KEY}`);
  }

  return stripePromise;
};

const Scholarship = () => {
  const [stripeError, setStripeError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const item = {
    price: process.env.REACT_APP_PRODUCT_ID,
    quantity: 1,
  };

  const checkoutOptions = {
    lineItems: [item],
    mode: "payment",
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}/cancel`,
  };

  const redirectToCheckout = async () => {
    setLoading(true);
    console.log("redirectToCheckout");

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptions);
    console.log("Stripe checkout error", error);

    if (error) setStripeError(error.message);
    setLoading(false);
  };

  if (stripeError) alert(stripeError);

  return (
    <>
      <Navbar />
       <SEO dynamicTitle="SheRise | Scholarship" />
      <div className="scholarship">
        <div className="heading-scholarship">
          <div className="top-heading">
            <div className="overlay-donate">
              <p>Donate</p>
            </div>
            <div className="main-scholarship-heading">
              <p>Be the reason </p>
              <p>someone smiles today !</p>
            </div>
          </div>
          <div className="bottom-description">
            <p>
              We at SheRise want to give the opportunity to all the
              underprivileged girls, to come and explore the STEM field and
              excel their career in tech. Donate now and help to shape their
              futures!
            </p>
          </div>
          <div className="checkout">
            <button
              className="checkout-button"
              onClick={redirectToCheckout}
              disabled={isLoading}
            >
              <div className="donate-btn">
                <p className="checkout-btn-text">
                  {isLoading ? "Loading..." : "Donate Now"}
                </p>
              </div>
              <div className="purple-circle">
                <BsArrowRight className="arrow-icon" />
              </div>
            </button>
          </div>
        </div>
        <div className="scholarship-banner">
          <img src={DonateBanner} alt="DonateBanner" draggable="false" />
        </div>
      </div>

      <div className="poor-girl">
        <div className="poor-girl-section">
          <div className="poor-girl-section-main">
            <div className="desc">
              <div className="heading">
                <p></p>
              </div>
              <div className="scholarship-desc">
                <p></p>
              </div>
            </div>
          </div>
        </div>
        <div className="scholarship-form">
          <div className="scholarship-form-desc">
            <p>Scholarship Form</p>
            <p>*Fill the below form to avail for the scholarship</p>
          </div>
          <div className="contactFormContainer">
            <form action="https://formspree.io/f/xgebelva" method="POST">
              <div className="name">
                <label for="text">
                  {" "}
                  <input
                    type="text"
                    name="Name"
                    id="name"
                    placeholder="First Name*"
                    required
                  />
                </label>
                <label for="text">
                  {" "}
                  <input
                    type="text"
                    name="Name"
                    id="name"
                    placeholder="Last Name*"
                    required
                  />
                </label>
              </div>
              <label for="email">
                {" "}
                <input
                  type="email"
                  name="_replyto"
                  id="email"
                  placeholder="Your Email*"
                  required
                />{" "}
              </label>
              <label for="text">
                {" "}
                <input
                  type="text"
                  name="_replyto"
                  id="board"
                  placeholder="Your 10th Board Marks*"
                  required
                />{" "}
              </label>
              <label for="text">
                {" "}
                <input
                  type="text"
                  name="_replyto"
                  id="board"
                  placeholder="Your 12th Board Marks*"
                  required
                />{" "}
              </label>
              <label>
                {" "}
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Why you need this Scholarship? Write in brief*"
                ></textarea>
              </label>
              <button type="submit" value="Send">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Scholarship;
