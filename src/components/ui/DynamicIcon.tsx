import { Target, Cog, Code, LucideIcon } from "lucide-react";

interface DynamicIconProps {
  name: string;
  className?: string;
}

const iconMap: Record<string, LucideIcon> = {
  Target,
  Cog,
  Code,
};

export function DynamicIcon({ name, className = "h-8 w-8" }: DynamicIconProps) {
  const IconComponent = iconMap[name];
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in iconMap`);
    return <Target className={className} />; // fallback icon
  }
  
  return <IconComponent className={className} />;
}
