import NewslatterBg from "../../assets/images/Newslatter_bg.png";

export default function Newslatter() {
  return (
    <div className="pt-12">
      <div
        className=" relative w-full h-[380px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${NewslatterBg})`,
        }}
      >
        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h2 className="text-4xl font-bold mb-2">Join Our Newsletter</h2>
          <p className="mb-6 opacity-90">
            Sign up for deals, new products and promotions
          </p>

          <div className="flex items-center gap-3 border-b border-white/40 pb-2">
            <input
              type="email"
              placeholder="Email address"
              className="bg-transparent text-white outline-none placeholder-white/70"
            />
            <button className="px-4 py-1 border border-white rounded hover:bg-white hover:text-black transition">
              Signup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
