import { unstable_noStore as noStore } from "next/cache";
import prisma from "./prisma";

export async function fetchPosts() {
  // equivalent to doing fetch, cache: no-store
  noStore();

  try {
    const data = await prisma.post.findMany({
      include: {
        comments: {
          include: {
            user: true,
          },
          orderBy: {
            createdAt: "desc",
          },
        },
        likes: {
          include: {
            user: true,
          },
        },
        savedBy: true,
        user: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return data;
  } catch (error) {
    throw new Error("Failed to fetch posts");
  }
}
