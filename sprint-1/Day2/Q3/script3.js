let Header = () => {
  return (
    <header>
      <h1>
        The Right Plan For<span>Your Business</span>
      </h1>
      <p>
        In the digital age, staying connected has never been more important, as
        the world becomes increasingly reliant on the internet for communication
        and commerce.
      </p>
    </header>
  );
};

let Plan = ({ title, price, features }) => {
  return (
    <div className="plan-card">
      <h2>{title}</h2>
      <h3>{price}</h3>
      <ul>
        {features.map((feature, index) => {
          return (
            <li key={index}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#5f6368"
              >
                <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
              </svg>

              {feature}
            </li>
          );
        })}
      </ul>
      <button>Get Started</button>
    </div>
  );
};

const PlanList = () => {
  const plans = [
    {
      title: "Starter",
      price: "free",
      features: ["1 lorem ipsum", "lorem,ipsum dolor", "Monthly Updates"],
    },
    {
      title: "Lorem Plus",
      price: "$32.000",
      features: ["1 lorem ipsum", "lorem,ipsum dolor", "Monthly Updates"],
    },
    {
      title: "Lorem Pro",
      price: "$50.33",
      features: ["1 lorem ipsum", "lorem,ipsum dolor", "Monthly Updates"],
    },
  ];
  return (
    <div className="plan-container">
      {plans.map((plan, index) => {
        return (
          <Plan
            key={index}
            title={plan.title}
            price={plan.price}
            features={plan.features}
          />
        );
      })}
    </div>
  );
};

function App() {
  return (
    <>
      <Header />
      <PlanList />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
