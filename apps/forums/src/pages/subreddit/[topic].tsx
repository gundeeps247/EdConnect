// Import necessary dependencies and components
import React from "react";
import { useRouter } from "next/router";
import Avatar from "../../../components/Avatar";
import Feed from "../../../components/Feed";
import PostBox from "../../../components/postbox";

// Define the Subreddit functional component
function Subreddit() {
  // Get the topic from the router
  const router = useRouter();
  const { topic } = router.query;
  
  // Log the topic to ensure it's correct
  console.log("Router query topic:", topic);
  
  // Render the component UI
  return (
    <div className={`h-24 bg-red-400 p-8`}>
      <div className="-mx-8 mt-10 bg-white">
        <div className="mx-auto flex max-w-5xl items-center space-x-4 pb-3">
          <div className="-mt-5">
            {/* Display the subreddit avatar */}
            <Avatar seed={topic as string} large />
          </div>
          <div className="py-2">
            {/* Display the subreddit name and topic */}
            <h1 className="text-3xl font-semibold">
              Welcome to the r/{topic} subreddit
            </h1>
            <p className="text-sm text-gray-400">r/{topic}</p>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-5 max-w-5xl pb-10">
        {/* Render the post box component */}
        <PostBox subreddit={topic as string} />

        {/* Render the feed component */}
        <Feed topic={topic as string}/>
      </div>
    </div>
  );
}

// Export the Subreddit component as default
export default Subreddit;
