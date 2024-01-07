import AddPostCard from "@/components/widgets/add-post";
import Chat from "@/components/widgets/chat";
import SearchInput from "@/components/widgets/search-input";
import { Sidebar } from "@/components/widgets/sidebar";
import SocialMediaPostCard from "@/components/widgets/social-media-card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="wrapper">
      <div className="w-full flex container px-24">
        <div className="w-1/6">
          <Sidebar />
        </div>
        <div className="w-3/6 p-4">
          <div className="w-full">
            <AddPostCard />
            <div className="social-posts w-full mt-5">
              <SocialMediaPostCard />
              <SocialMediaPostCard />
            </div>
          </div>
        </div>
        <div className="w-2/6">
          <div className="mt-4">
            <SearchInput />
          </div>
        </div>
      </div>
      <div className="w-1/4 flex justify-end absolute right-0 bottom-0 ">
        <Chat />
      </div>
    </div>
  );
}
