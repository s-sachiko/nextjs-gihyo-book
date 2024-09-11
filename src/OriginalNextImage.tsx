import Image, { ImageProps } from "../node_modules/next/image";

const OriginalNextImage = (props: ImageProps) =>
  // It is possible to pass props to Image as shown below.
  typeof props.src === "string" ? <Image {...props} unoptimized blurDataURL={props.src} /> : <Image {...props} unoptimized />;
export default OriginalNextImage;
