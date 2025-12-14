import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface MenuCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
  badge?: string;
}

export function MenuCard({
  name,
  description,
  price,
  image,
  badge,
}: MenuCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div
        className="h-48 bg-cover bg-center"
        style={{ backgroundImage: `url('${image}')` }}
      />
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <CardTitle className="text-xl">{name}</CardTitle>
          {badge && (
            <Badge variant="secondary" className="bg-primary/10 text-primary">
              {badge}
            </Badge>
          )}
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold text-primary">{price}</p>
      </CardContent>
    </Card>
  );
}
