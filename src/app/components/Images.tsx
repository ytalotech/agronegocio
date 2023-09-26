"use client";

import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface Props {
    images: {
      src: string;
      alt: string;
      width: number;
      height: number;
      srcSet ?: { src: string; width: number; height: number }[];
    }[];
  }

export default function Images({ images }: Props) {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <button className="bg-green-100 hover:bg-green-150 text-green font-bold py-1 px-4 mt-4 rounded" type="button" onClick={() => setOpen(true)}>
                <img src={images[0].src} alt="Imagens" className="w-full" /> Clique para ver mais imagens
            </button>

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={images.map((image) => ({
                    src: image.src,
                    alt: image.alt,
                    width: image.width,
                    height: image.height,
                    srcSet: image.srcSet,
                  }))}
            />
        </>
    );
}