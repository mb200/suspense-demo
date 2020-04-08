import React, {
  DetailedHTMLProps,
  ImgHTMLAttributes,
  useState,
  useEffect,
} from "react";
import { createResource } from "../cache/ReactCache";
import { delay } from "../api/delay";
import { TIMEOUTS } from "../api/config";

const loadImage = (src: string) => {
  return new Promise<string>((resolve) => {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      delay(() => resolve(src), TIMEOUTS.IMAGE_LOAD);
    };
  });
};

const imageResource = createResource((src: string) => loadImage(src));

const ImgDelayedSuspend: React.FC<Props> = (props) => {
  const src = imageResource.read(props.src);

  return <img {...props} src={src} alt={props.alt} />;
};

const ImgDelayed: React.FC<Props> = (props) => {
  const [src, setImageSrc] = useState<string>();

  useEffect(() => {
    loadImage(props.src).then(setImageSrc);
  }, [props.src]);

  if (!src) {
    return null;
  }

  return <img {...props} src={src} alt={props.alt} />;
};

type Base = DetailedHTMLProps<
  ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;
interface Props extends Base {
  src: string;
  alt: string;
}

export { ImgDelayed, ImgDelayedSuspend };
