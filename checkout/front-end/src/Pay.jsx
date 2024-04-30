import StripeCheckout from "react-stripe-checkout";
const KEY ="pk_test_51OFx0bACKrmnZgFSFVmpOkU91dumKE1AaKTMoZOdi0LOYWXhxqrFMtrbtqTzLaAJeVlJJM8Zii0sEzYXbRDzaDin00rIxsP4EM"
const Pay = () => {
    const onToken = (token) => {
      console.log(token);
      alert("Payment Successful");
    };
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
        <StripeCheckout name ="Eshop" image="https://avatars.githubusercontent.com/u/48270069?v=4"
            billingAddress
            shippingAddress
            description= "Your total amount is $5"
            amount={200}
            token={onToken}
            stripeKey={KEY}
            >
                  <button
        style={{
          border: 'none',
          width: '120px', // Added 'px' and corrected typo in width
          borderRadius: 5, // Corrected typo in borderRadius
          padding: '20px',
          background: 'black',
          color: 'white',
          fontSize: '20px',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
      >
        Pay Now
      </button>
      </StripeCheckout>
    </div>
  );
};

export default Pay;
