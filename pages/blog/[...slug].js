import { useRouter } from "next/router";

function BlogPostsPage() {
  const router = useRouter();
  console.log(router.query);

  return (
    <div>
      <h1>The Blog Posts Page</h1>
    </div>
  );
}

export default BlogPostsPage;
