type image = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export default function duplicateImages(images: image[]) {
  return (
    <>
      {images.map((i, index) => (
        <img
          key={index}
          src={i.src}
          alt={i.alt}
          width={i.width}
          height={i.height}
        />
      ))}
      {images.map((i, index) => (
        <img
          key={index}
          src={i.src}
          alt={i.alt}
          width={i.width}
          height={i.height}
          aria-hidden="true"
        />
      ))}
    </>
  );
}
