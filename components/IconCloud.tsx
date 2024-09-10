import IconCloud from "@/components/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "mongodb",
  "tailwindcss",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "gitlab",
  "django",
  "tensorflow",
];

export function IconCloudDemo() {
  return (
    <div className="hidden md:flex relative h-full w-full max-w-[32rem] items-center justify-center overflow-hidden px-28 pb-20 pt-8 ">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}