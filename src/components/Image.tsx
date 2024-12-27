import { IKImage } from "imagekitio-react";
export default function Image({
  src,
  width,
  height,
  className,
  lazy,
}: {
  src: string;
  className?: string;
  width?: string;
  height?: string;
  lazy?: boolean;
}) {
  const urlEndpoint = "https://ik.imagekit.io/pokwil20g/";
  return (
    <IKImage
      urlEndpoint={urlEndpoint}
      path={src}
      className={className}
      loading={lazy ? "lazy" : undefined}
      lqip={{ active: true, quality: 20 }}
      alt={src}
      height={height}
      width={width}
      transformation={[
        {
          width,
          height,
        },
      ]}
    />
  );
}
