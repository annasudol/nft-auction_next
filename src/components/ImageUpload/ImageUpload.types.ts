export interface ImageUploadProps {
  id: string;
  imgSrc?: string;
  accept?: string;
  onChange: (e: File | null) => void;
}
