import { cn } from "../../lib/utils";
import Marquee from "@/components/magicui/marquee";

const reviews = [
    {
      name: "Amit",
      username: "@amit",
      body: "I've never seen anything like this before. The Intelliseit coding courses are amazing. I love it.",
      img: "https://avatar.vercel.sh/amit",
    },
    {
      name: "Priya",
      username: "@priya",
      body: "I don't know what to say. I'm speechless. The courses at Intelliseit are outstanding.",
      img: "https://avatar.vercel.sh/priya",
    },
    {
      name: "Rahul",
      username: "@rahul",
      body: "I'm at a loss for words. The Intelliseit coding courses are amazing. I love it.",
      img: "https://avatar.vercel.sh/rahul",
    },
    {
      name: "Sana",
      username: "@sana",
      body: "The Intelliseit courses are fantastic. I've learned so much. Highly recommend it!",
      img: "https://avatar.vercel.sh/sana",
    },
    {
      name: "Anjali",
      username: "@anjali",
      body: "I'm really impressed with the Intelliseit coding courses. They are thorough and very well explained.",
      img: "https://avatar.vercel.sh/anjali",
    },
    {
      name: "Rohit",
      username: "@rohit",
      body: "The coding courses at Intelliseit are the best I've ever taken. They are simply amazing.",
      img: "https://avatar.vercel.sh/rohit",
    },
  ];
  
const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function Reviews() {
  return (
    <div className="bg-black flex flex-col  items-center justify-center">
        <div className="text-center mt-10">
          <h1 className="text-white sm:text-6xl text-3xl opacity-60">What Our Student Says!</h1>
        </div>
    <div className="relative max-w-[1080px]  text-white flex h-[500px] w-full flex-col items-center justify-center overflow-hidden ">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black dark:from-background"></div>
    </div>
    </div>
  );
}
