import NextTopLoader from "nextjs-toploader";

export default function Toploader() {
  return (
    <>
      <NextTopLoader
        color="#9ef01a"
        initialPosition={0.08}
        crawlSpeed={200}
        height={3}
        crawl={true}
        showSpinner={false}
        easing="ease"
        speed={200}
        zIndex={1600}
        showAtBottom={false}
      />
    </>
  );
}
