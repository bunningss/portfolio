"use client";
import Image from "next/image";
import { MouseAnimation } from "./mouse-animation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { usePreviewModal } from "@/hooks/controllers";

export function ProjectCard({ project }) {
  const { onOpen } = usePreviewModal();

  return (
    <a href={project?.url} target="_blank">
      <Card>
        <MouseAnimation>
          <CardContent>
            <figure className="relative h-[140px]">
              <Image
                src={project?.image}
                alt={project?.title}
                fill
                className="object-contain"
                sizes="300px"
              />
            </figure>
          </CardContent>
          <CardHeader className="pt-0">
            <CardTitle className="text-sm">{project?.title}</CardTitle>
            <CardDescription className="text-xs line-clamp-2">
              {project?.desc}
            </CardDescription>
          </CardHeader>
        </MouseAnimation>
      </Card>
    </a>
  );
}
