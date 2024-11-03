import Image from "next/image";
import { MouseAnimation } from "./mouse-animation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export function ProjectCard() {
  return (
    <Card>
      <MouseAnimation>
        <CardContent>
          <figure className="relative h-[160px]">
            <Image src="" alt="" fill className="object-cover" />
          </figure>
        </CardContent>
        <CardHeader className="pt-0">
          <CardTitle className="text-sm">nextjs starter kit</CardTitle>
          <CardDescription className="text-xs line-clamp-2">
            build you saas platform with this nextjs starter kit.
          </CardDescription>
        </CardHeader>
      </MouseAnimation>
    </Card>
  );
}
