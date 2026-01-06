export default {
  "*/1 * * * *": {
    task: runEveryMinuteTasks,
    options: {
      tz: "Europe/London",
    },
  },
};

async function runEveryMinuteTasks() {
  await Promise.all([
    publishPosts("api::blog-post.blog-post"),
    publishPosts("api::campaigns-post.campaigns-post"),
  ]);
}

async function publishPosts(strapiApiRoute: string) {
  try {
    // 1. Fetch every post whose scheduled time has passed
    const candidatePosts = await strapi.db.query(strapiApiRoute).findMany({
      where: {
        publish_at: { $lt: new Date() },
      },
    });

    // 2. Keep only those that are still in draft state (publishedAt is null)
    //    OR that were unpublished after an accidental publish (publishedAt is
    //    older than the intended publish_at date).
    const postsToBePublished = candidatePosts.filter((post) => {
      if (!post.publishedAt) return true; // still a draft
      return new Date(post.publishedAt) < new Date(post.publish_at);
    });

    if (!postsToBePublished.length) return;

    // 3. Publish them
    await Promise.all(
      postsToBePublished.map((post) => {
        return strapi.service(strapiApiRoute as any).update(post.id, {
          data: { publishedAt: new Date() },
        });
      })
    );
  } catch (error) {
    console.log("error", error);
  }
}
