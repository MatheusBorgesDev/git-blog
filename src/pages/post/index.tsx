import { PostProfile } from "./components/post-profile";

export function PostDetails() {
  return (
    <main className="mx-auto flex w-[54rem] flex-col justify-center">
      <PostProfile />
      <div className="px-8 py-10 text-baseText">// Post content</div>
    </main>
  );
}
