import Image from "next/image";
import { getImagePath, getImageLabel } from "@/lib/images";

interface PlaceholderImageProps {
  page: string;
  imageFile: string;
  alt?: string;
  className?: string;
  priority?: boolean;
}

export default function PlaceholderImage({
  page,
  imageFile,
  alt,
  className = "",
  priority = false,
}: PlaceholderImageProps) {
  const imagePath = getImagePath(page, imageFile);
  const defaultAlt = alt || getImageLabel(page, parseInt(imageFile.split('-')[0]) || 1);

  return (
    <div className={`relative w-full ${className}`}>
      <Image
        src={imagePath}
        alt={defaultAlt}
        width={1600}
        height={900}
        priority={priority}
        className="w-full h-auto rounded-lg"
      />
    </div>
  );
}

