import Button from "./Button";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="max-w-8xl mx-auto px-4 py-12 text-center">
        <h1 className="title">
          Secure. Innovative. Global.
        </h1>

        <p className="title">
          Empower your business with Garagol Consulting
        </p>

        <div className="space-y-6 mt-20">
          <div className=" paragraph  ">
            Schedule a call with us to discuss your project and get a quote in
            minutes.
          </div>
        </div>
        <Button class="mt-5" title="Secure your project" />
      </div>
    </div>
  );
};

export default Home;
