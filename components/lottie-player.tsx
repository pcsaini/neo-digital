"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const LottiePlayer = ({ url }: { url: string }) => {
  return (
    <DotLottieReact
      src={url}
      style={{ maxWidth: "600px", maxHeight: "600px" }}
      loop
      autoplay
    />
  );
};

export default LottiePlayer;
