import { MouseAnimation } from "./mouse-animation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export function ServiceCard() {
  return (
    <Card>
      <MouseAnimation>
        <CardHeader>
          <CardTitle className="text-sm">hire me as a developer</CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <CardDescription className="text-xs line-clamp-2">
            my youtube channel has over 350k views and i&apos;m looking to
            partner with brands to create content.
          </CardDescription>
        </CardContent>
      </MouseAnimation>
    </Card>
  );
}
