const Banner = () => {
  return (
    <div className="hero bg-base-200 py-16">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          className="max-w-sm"
        />

        <div>
          <h1 className="text-5xl font-bold">
            Build Your Dream Career
          </h1>

          <p className="py-6">
            Powerful tools to help you create resumes, portfolios,
            and track job applications.
          </p>

          <button className="btn btn-primary mr-4">
            Get Started
          </button>

          <button className="btn btn-outline">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;