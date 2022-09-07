import Article from "../Article";
import SectionHeading from "../SectionHeading";
import Nav from "../Nav";
import RegistrationImage from "../RegistrationImage";
import Dashboard from "../Dashboard";


function Registration() {
  const links = [
    {
      id: "1",
      text: "a. How do I register to use BusyBee for my Business?",
      link: "/",
    },
    { id: "2", text: "b. Setting up my BusyBee account.", link: "/SettingUp" },
  ];

 

  return (
    <>
      <Nav
        path={{
          name: "Registration",
          link: "/",
        }}
      />
      <div className=" px-32 font-['Mulish'] flex flex-row my-10 sm:p-0 md:pl-5 lg:pl-12 xl:px-32 2xl:pl-40">
        <Dashboard links={links} title="Registration" />

        <div className="flex flex-col px-32 sm:px-5 lg:px-16 xl:px-24">
          <SectionHeading
            heading="MERCHANT APP"
            subHeading="How do I register to use BusyBee for my Business?"
            description="Registering on BusyBee is easy, just open BusyBee from your browser and click ‘try for free’. Fill in your business details and hit submit to start your free trial right away."
          />
          <RegistrationImage />
          <Article />
        </div>

      </div>
    </>
  );
}

export default Registration;
