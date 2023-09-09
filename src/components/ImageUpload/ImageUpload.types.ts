export interface ImageUploadProps {
  imgSrc?: string;
  accept?: string;
  onChange: (e: File | null) => void;
}
