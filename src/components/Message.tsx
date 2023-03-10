/* eslint-disable @next/next/no-img-element */
import { DocumentData } from "firebase/firestore";
import Image from "next/image";

type Props = {
  message: DocumentData;
};

export default function Message({ message }: Props) {
  const isChatGTP = message.user.name === "ChatGPT";

  return (
    <div className={`py-5 text-white ${isChatGTP && "bg-[#434654]"}`}>
      <div className="flex space-x-5 px-10 max-w-2xl mx-auto">
        <img src={message.user.avatar} alt="Profile logo" className="w-8 h-8" />
        <p className="pt-1 text-sm">{message.text}</p>
      </div>
    </div>
  );
}
