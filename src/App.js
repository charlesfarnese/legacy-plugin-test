import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

function LegacyPlugin() {
  const [eventData, setEventData] = useState(null);
  // const frontLegacyPlugin = () => {
  //   const script = document.createElement("script");
  //   script.src = "https://dl.frontapp.com/libs/frontjs.min.js";
  //   script.onload = () => {
  //     window.Front.on("conversation", (data) => {
  //       console.log("Event data --> ", data);
  //       setEventData(data);
  //     });
  //   };
  //   document.body.append(script);
  // };

  useEffect(() => {
    window.Front.on("conversation", (data) => {
            console.log("Event data --> ", data);
            setEventData(data);
          });
  }, []);

  return (
    <>
      <Helmet>
        <script
          src="https://dl.frontapp.com/libs/frontjs.min.js"
          integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
        />
      </Helmet>
      <h3>Legacy Plugin</h3>
      {eventData && <div>{`event data --> ${eventData.conversation.id}`}</div>}
    </>
  );
}

export default LegacyPlugin;