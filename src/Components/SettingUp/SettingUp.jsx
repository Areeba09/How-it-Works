import Article from "../Article";
import SectionHeading from "../SectionHeading";
import Dashboard from "../Dashboard";
import Nav from "../Nav";
import SettingUpImage from "../SettingUpImage";

const SettingUp = () => {
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

      <div className="px-32 font-['Mulish'] flex flex-row my-10 sm:p-0 md:pl-5 lg:pl-12 xl:px-32 2xl:pl-40">
        <Dashboard links={links} title="Registration" />
        <div className="flex flex-col px-32 sm:px-5 lg:px-16 xl:px-24">
          <SectionHeading
            heading="MERCHANT APP"
            subHeading="Setting up my BusyBee account."
            description="Once you arrive at your dashboard for the first time you will be greeted by a set up guide to walk you through the steps to add your sales team and merchants."
          />
          <SettingUpImage />
          <Article />
        </div>
      </div>
    </>
  );
};
export default SettingUp;
