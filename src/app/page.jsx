import { CurrentWorks } from "@/components/current-works";
import { Profile } from "@/components/profile";
import { Projects } from "@/components/projects";
import { Services } from "@/components/services";

export default function Page() {
  return (
    <>
      <Profile />
      <CurrentWorks />
      <Services />
      <Projects />
    </>
  );
}
