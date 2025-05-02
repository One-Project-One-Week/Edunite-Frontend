import OrbitProgress from "react-loading-indicators/OrbitProgress";
export default function Loading() {
  return (
    <div className="flex justify-center items-center p-5 h-auto">
      <OrbitProgress variant="track-disc" color="purple" size="small" />
    </div>
  );
}
