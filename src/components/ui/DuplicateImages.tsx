type image = {
  src: string;
  alt: string;
  width: number;
  height: number;
  id: number;
};

export default function DuplicateImages({images}: {images: image[]}) {
  return (
    <>
      {images.map(i => (
        <img
          key={i.id}
          src={i.src}
          alt={i.alt}
          width={i.width}
          height={i.height}
        />
      ))}
      {images.map(i => (
        <img
          key={i.id}
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
