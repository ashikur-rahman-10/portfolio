import React from "react";
import UseMessages from "../../Hooks/UseMessages";

const Messeges = () => {
  const messages = UseMessages();
  console.log(messages);
  return (
    <div className="p-4">
      {messages.map((m) => (
        <div className="border w-full p-2 ">
          <p>{m?.user_name}</p>
          <p>{m?.user_email}</p>
          <p>{m?.subject}</p>
          <p>{m?.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Messeges;
