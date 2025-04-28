import { Skeleton } from "~/components/ui/skeleton";

export default function SkeletonCard() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-80 h-96 flex flex-col gap-4 p-4">
        <Skeleton className="w-full h-64 rounded-md bg-zinc-300" />
        <div className="space-y-4 w-full">
          <Skeleton className="h-4 w-full bg-zinc-200" />
          <Skeleton className="h-4 w-full bg-zinc-200" />
        </div>
      </div>
    </div>
  );
}
