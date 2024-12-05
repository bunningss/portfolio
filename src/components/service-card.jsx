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
          <CardTitle className="text-sm">Unavailable</CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <CardDescription className="text-xs line-clamp-2">
            Unavailable
          </CardDescription>
        </CardContent>
      </MouseAnimation>
    </Card>
  );
}
