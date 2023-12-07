import { SinglePostSkeleton } from "@/components/Skeletons";
import { Suspense } from "react";

function PostPage({ params: { id } }: { params: { id: string } }) {
  return (
    <div>
      <Suspense fallback={<SinglePostSkeleton />}></Suspense>

      <Suspense></Suspense>
    </div>
  );
}

export default PostPage;
