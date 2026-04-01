import person from "../../assets/user.png";
import box from "../../assets/package.png";
import rocket from "../../assets/rocket.png";
function Steps() {
  return (
    
    <div className="grid grid-cols-1 md:grid-cols-3  max-w-[1200px] justify-center gap-[30px] items-center mx-auto my-12 px-4">

      <div className="card bg-white shadow-md max-h-[400px] max-w-[250px] lg:max-w-[300px] mx-auto space-y-3">
        <div className="relative">
          <span className="absolute top-3 right-3 badge bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full text-right p-1 text-[14px]">01</span>
        </div>
        <div className="card-body text-center  ">
          <img className="w-16 h-16 mx-auto bg-[#E1E7FF] rounded-full p-2" src={person} alt="Person" />
          <h1 className="text-[#101727] text-[24px] font-bold">Create Account</h1>
          <p className="text-[14px] text-[#627382]">Sign up for free in seconds. No credit card required to get started.</p>
        </div>
      </div>
      <div className="card bg-white shadow-md max-h-[400px] max-w-[250px] lg:max-w-[300px] mx-auto space-y-3">
        <div className="relative">
          <span className="absolute top-3 right-3 badge bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full text-right p-1 text-[14px]">02</span>
        </div>
        <div className="card-body text-center  ">
          <img className="w-16 h-16 mx-auto bg-[#E1E7FF] rounded-full p-2" src={box} alt="box" />
          <h1 className="text-[#101727] text-[24px] font-bold">Choose Products</h1>
          <p className="text-[14px] text-[#627382]">Browse our catalog and select the toolsthat fit your needs.</p>
        </div>
      </div>
      <div className="card bg-white shadow-md max-h-[400px] max-w-[250px] lg:max-w-[300px] mx-auto space-y-3">
        <div className="relative">
          <span className="absolute top-3 right-3 badge bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full text-right p-1 text-[14px]">03</span>
        </div>
        <div className="card-body text-center  ">
          <img className="w-16 h-16 mx-auto bg-[#E1E7FF] rounded-full p-2" src={rocket} alt="rocket" />
          <h1 className="text-[#101727] text-[24px] font-bold">Start Creating</h1>
          <p className="text-[14px] text-[#627382]">Download and start using your premium tools immediately.</p>
        </div>
      </div>

    </div>
  );
}

export default Steps;