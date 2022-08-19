import { useEffect, useState } from "react";

function LegacyPlugin() {
  const [eventData, setEventData] = useState(null);
  const frontLegacyPlugin = () => {
    const script = document.createElement("script");
    script.src = "https://dl.frontapp.com/libs/frontjs.min.js";
    script.onload = () => {
      window.Front.on("conversation", (data) => {
        console.log("Event data --> ", data);
        setEventData(data);
      });
    };
    document.body.append(script);
  };

  useEffect(() => {
    frontLegacyPlugin();
  }, []);

  return (
    <>
      <h3>Legacy Plugin</h3>
      {eventData && <div>{`event data --> ${eventData.conversation.id}`}</div>}
    </>
  );
}

export default LegacyPlugin;