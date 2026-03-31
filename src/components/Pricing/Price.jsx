const Pricing = () => {
  return (

    <div className="grid md:grid-cols-3 gap-6 my-20">

      <div className="card shadow">
        <div className="card-body">
          <h2 className="card-title">Basic</h2>
          <p>$9/month</p>
          <button className="btn btn-primary">
            Start
          </button>
        </div>
      </div>

      <div className="card shadow">
        <div className="card-body">
          <h2 className="card-title">Pro</h2>
          <p>$19/month</p>
          <button className="btn btn-primary">
            Start
          </button>
        </div>
      </div>

      <div className="card shadow">
        <div className="card-body">
          <h2 className="card-title">Enterprise</h2>
          <p>$49/month</p>
          <button className="btn btn-primary">
            Start
          </button>
        </div>
      </div>

    </div>
  );
};

export default Pricing;