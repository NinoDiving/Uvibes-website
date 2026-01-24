import Resize from "@/services/resize/resize";

export default function VideoCard({
  videoSrcDdesktop,
  videoSrcMobile,
  width,
  title,
}: {
  videoSrcDdesktop: string | MediaSource;
  videoSrcMobile: string | MediaSource;
  width: number;
  title?: string;
}) {
  const { isMobile } = Resize();
  return (
    <div
      style={{
        paddingTop: 100,
        paddingBottom: 100,
        width: "100%",
        textAlign: "center",
      }}
    >
      <h2
        className="title-h2-orange"
        style={{ textAlign: "center", paddingBottom: 50 }}
      >
        {title}
      </h2>
      <video
        src={isMobile ? videoSrcMobile : videoSrcDdesktop}
        muted
        autoPlay
        loop
        width={width}
        style={{
          marginBottom: 40,
          borderRadius: 8,
          boxShadow: "0px 0px 0 18px rgba(0, 177, 221, 0.46)",
        }}
      ></video>
    </div>
  );
}
