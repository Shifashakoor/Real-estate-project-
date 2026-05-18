interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: "lazy" | "eager";
  decoding?: "async" | "auto" | "sync"; // Ye line add karein
}

const Image = ({ 
  src, 
  alt, 
  className, 
  width, 
  height, 
  loading = "lazy", 
  decoding = "async", 
  ...props 
}: ImageProps) => {
  return (
    <img 
      src={src} 
      alt={alt} 
      className={`w-full h-full ${className}`} 
      width={width}
      height={height}
      loading={loading}
      decoding={decoding} // Ab error nahi ayega
      {...props} 
    />
  );
};

export default Image;