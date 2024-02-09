"use client"

import { UserButton } from "@clerk/nextjs";
import VoiceAssistant from "../../components/VoiceAssistant";

export default function Home() {
  return (
    <div className="h-screen">
      <UserButton afterSignOutUrl="/"/>
      <VoiceAssistant />
    </div>
  );
}
