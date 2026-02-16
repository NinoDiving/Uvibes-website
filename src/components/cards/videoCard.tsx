import Resize from "@/services/resize/resize";

export default function VideoCard({
  videoSrcDdesktop,
  videoSrcMobile,
  title,
}: {
  videoSrcDdesktop: string | MediaSource;
  videoSrcMobile: string | MediaSource;
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
        paddingLeft: 20,
        paddingRight: 20,
        boxSizing: "border-box",
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
        playsInline
        style={{
          width: "100%",
          maxWidth: isMobile ? "400px" : "1200px",
          justifySelf: "center",
          marginBottom: 40,
          borderRadius: 8,
          boxShadow: "0px 0px 0 18px rgba(0, 177, 221, 0.46)",
        }}
      ></video>
    </div>
  );
}
