// "use client";
// import React from "react";
// import VideoPopup from "../modal/popup-video";
// import ModalProvider from "../modal/modal-provider";

// type IProps = {
//   cls?: string;
//   children: React.ReactNode;
//   videoId?: string;
//   vimeoPlayer?: boolean;
// }

// export default function VideoProvider({cls='',children,videoId,vimeoPlayer }: IProps) {
//   const [isVideoOpen, setIsVideoOpen] = React.useState(false);
//   return (
//     <>
//       <a
//         onClick={() => setIsVideoOpen(true)}
//         className={`${cls} popup-video pointer`}
//       >
//         {children}
//       </a>

//       <ModalProvider>
//         <VideoPopup
//             isVideoOpen={isVideoOpen}
//             onHide={() => setIsVideoOpen(false)}
//             videoId={`${videoId?videoId:'LlCwHnp3kL4'}`}
//             vimeoPlayer={vimeoPlayer}
//           />
//       </ModalProvider>
//     </>
//   );
// }

// "use client";
// import React from "react";
// import VideoPopup from "../modal/popup-video";
// import ModalProvider from "../modal/modal-provider";

// type IProps = {
//   cls?: string;
//   children: React.ReactNode;
//   videoId?: string;
//   vimeoPlayer?: boolean;
// };

// export default function VideoProvider({
//   cls = "",
//   children,
//   videoId,
//   vimeoPlayer,
// }: IProps) {
//   const [isVideoOpen, setIsVideoOpen] = React.useState(false);

//   // ✅ Extract YouTube ID from full URL or return ID directly
//   const getYoutubeId = (url: string | undefined) => {
//     if (!url) return "LlCwHnp3kL4";

//     const regExp = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/;
//     const match = url.match(regExp);

//     return match ? match[1] : url; // if already ID, return as is
//   };

//   const finalVideoId = getYoutubeId(videoId);

//   return (
//     <>
//       <a
//         onClick={() => setIsVideoOpen(true)}
//         className={`${cls} popup-video pointer`}
//       >
//         {children}
//       </a>

//       <ModalProvider>
//         <VideoPopup
//           isVideoOpen={isVideoOpen}
//           onHide={() => setIsVideoOpen(false)}
//           videoId={finalVideoId}
//           vimeoPlayer={vimeoPlayer}
//         />
//       </ModalProvider>
//     </>
//   );
// }



"use client";
import React from "react";

type IProps = {
  cls?: string;
  children: React.ReactNode;
  videoId?: string;
  vimeoPlayer?: boolean;
};

export default function VideoProvider({
  cls = "",
  children,
  videoId,
  vimeoPlayer,
}: IProps) {
  const [isPlaying, setIsPlaying] = React.useState(false);

  // Extract YouTube ID
  const getYoutubeId = (url: string | undefined) => {
    if (!url) return "LlCwHnp3kL4";

    const regExp = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/;
    const match = url.match(regExp);

    return match ? match[1] : url;
  };

  const finalVideoId = getYoutubeId(videoId);

  return (
    <>
      {!isPlaying ? (
        <a
          onClick={() => setIsPlaying(true)}
          className={`${cls} popup-video pointer`}
        >
          {children}
        </a>
      ) : (
        <iframe
          className={cls}
          width="100%"
          height="100%"
          src={
            vimeoPlayer
              ? `https://player.vimeo.com/video/${finalVideoId}?autoplay=1`
              : `https://www.youtube.com/embed/${finalVideoId}?autoplay=1`
          }
          title="Video player"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      )}
    </>
  );
}


