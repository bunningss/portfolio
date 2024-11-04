import Image from "next/image";
import pr from "@/assets/profile.png";
import { Section } from "./section";
import { Facebook, Linkedin } from "lucide-react";

export function Profile() {
  return (
    <Section>
      <div className="border border-input rounded-sm py-4 px-2 flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <figure className="relative h-10 w-10 rounded-full overflow-hidden">
            <Image
              src={pr}
              alt="tayef mahmud"
              className="object-cover"
              fill
              sizes="40px"
            />
          </figure>

          <div>
            <h1 className="font-bold text-base leading-none">Tayef Mahmud</h1>
            <span className="text-xs leading-none font-semibold">
              Full Stack Developer
            </span>
          </div>
        </div>
        {/* Socials */}
        <div className="flex gap-2">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <Facebook size={16} />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </Section>
  );
}
