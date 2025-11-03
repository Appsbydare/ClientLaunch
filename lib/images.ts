export interface ImageManifest {
  [key: string]: {
    title: string;
    images: {
      file: string;
      label: string;
    }[];
  };
}

export function getImagePath(page: string, imageFile: string): string {
  return `/images/${page}/${imageFile}`;
}

export function getImageLabel(page: string, imageIndex: number): string {
  const pageNum = page.split('-')[0];
  const pageTitle = page
    .split('-')
    .slice(1)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  return `${pageNum}. ${pageTitle} - Image ${String(imageIndex).padStart(3, '0')}`;
}

