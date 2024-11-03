import Image from "next/image";
import { Section } from "./section";

export function Profile() {
  return (
    <Section>
      <div className="border border-input rounded-sm py-4 px-2 flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <figure className="relative h-10 w-10 rounded-full overflow-hidden bg-red-50">
            <Image src="" alt="tayef mahmud" className="object-cover" fill />
          </figure>

          <div>
            <h1 className="font-semibold text-base leading-none">
              Tayef Mahmud
            </h1>
            <span className="text-xs leading-none">Full Stack Developer</span>
          </div>
        </div>
        {/* Socials */}
        <div>fb</div>
      </div>
    </Section>
  );
}
