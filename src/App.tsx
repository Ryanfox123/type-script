import Card from "./Components/Card";

function App() {
  return (
    <>
      <div className="grid grid-cols-3 gap-8 w-2/3 mx-auto pt-3">
        <Card
          img="https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/65e0c942ac953c06d3a42696_379_DesignBlogHeader_2400x1260-p-500.jpg"
          link="#"
          linkText="Go to Blueprints"
          title="Component Blueprints"
          description="Ready-to-use HTML and CSS UI elements provide the foundation for Salesforce experience development"
        />
        <Card
          img="https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/60107f29c4e460040fb8aedd_6002086f72b727a72b01e3fc_design-systems-marketing-p-800.jpeg"
          link="#"
          linkText="View Tokens"
          title="Tokens"
          description="Ready-to-use HTML and CSS UI elements provide the foundation for Salesforce experience Ready-to-use HTML and CSS UI elements provide the foundation for Salesforce experience developmentReady-to-use HTML and CSS UI elements provide the foundation for Salesforce experience developmentReady-to-use HTML and CSS UI elements provide the foundation for Salesforce experience development"
        />
        <Card
          img="https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/6176e7db593ac1f89fa296d5_6-design-systems-you-can-clone_BlogHero%20(1)-p-500.jpeg"
          link="#"
          linkText="Read Guidelines"
          title="Design Guidelines"
          description="Ready-to-use HTML and CSS UI elements provide the foundation for Salesforce experience development"
        />
        <Card
          img="https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/6144c0c69bdaa2317b8e816d_Building-brand-design-systems-in-Webflow_BlogHero-p-500.jpeg"
          link="#"
          linkText="Get Tools"
          title="Tools"
          description="Ready-to-use HTML and CSS UI elements provide the foundation for Salesforce experience development"
        />
      </div>
    </>
  );
}

export default App;
