import { cn } from "@/lib/utils";
import { Marquee } from "../ui/marquee";
import { useTranslations } from "next-intl";

type Review = {
  img: string;
  name: string;
  username: string;
  body: string;
  link?: string;
};

const reviews = [
  {
    name: "Jack",
    username: "@Accomplished-End-479",
    body: "👏👏",
    img: "https://avatar.vercel.sh/jack",
    link: "https://www.reddit.com/r/carIndia/comments/1oliu0f/comment/nmi7ssz/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button",
  },
  {
    name: "Jill",
    username: "@BhupeshV",
    body: "Good effort, would be nice if you can figure out and add sources for all the rules mentioned.",
    img: "https://avatar.vercel.sh/jill",
    link: "https://www.reddit.com/r/developersIndia/comments/1olixxk/comment/nmi8sgx/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button",
  },
  {
    name: "John",
    username: "@Ok_Antelope_1953",
    body: "thanks bro after reading your site i am become heroadha from zeroadha",
    img: "https://avatar.vercel.sh/john",
    link: "https://www.reddit.com/r/developersIndia/comments/1olixxk/comment/nmiktof/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button",
  },
  {
    name: "Jane",
    username: "@cultivatewill",
    body: "Good Blog",
    img: "https://avatar.vercel.sh/jane",
    link: "https://www.reddit.com/r/developersIndia/comments/1olixxk/comment/nmi95gt/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button",
  },
  {
    name: "Jenny",
    username: "@aloo_matar_",
    body: "Great!",
    img: "https://avatar.vercel.sh/jenny",
    link: "https://www.reddit.com/r/developersIndia/comments/1olixxk/comment/nmif2td/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button",
  },
  {
    name: "James",
    username: "@Kusthi",
    body: "thanks for this, highly appreciate your efforts in educating the people.",
    img: "https://avatar.vercel.sh/james",
    link: "https://www.reddit.com/r/developersIndia/comments/1olixxk/comment/nmo09yy/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button",
  },
  {
    name: "James",
    username: "@TheMadEmperor666",
    body: "Brilliant initiative mate",
    img: "https://avatar.vercel.sh/jill",
    link: "https://www.reddit.com/r/indianbikes/comments/1olp771/comment/nmjqplh/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button",
  },
  {
    name: "James",
    username: "@SlicKilled",
    body: "Buddy, this is one of the best things I have seen coming from an Indian dev. But this will fail because people who need this don't know or think they need to learn something, they know everything.",
    img: "https://avatar.vercel.sh/james",
    link: "https://www.reddit.com/r/IndiaTechnology/comments/1ooervy/comment/nn3p1ru/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button",
  },
  {
    name: "James",
    username: "@_predatorx7",
    body: "This is awesome! Shared with my friends! 😄",
    img: "https://avatar.vercel.sh/james",
    link: "https://www.reddit.com/r/indianbikes/comments/1olp771/comment/nmkijw5/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button",
  },
  {
    name: "James",
    username: "@parlellname",
    body: "Super informative mate",
    img: "https://avatar.vercel.sh/jill",
    link: "https://www.reddit.com/r/indianbikes/comments/1olp771/comment/nmkjptp/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button",
  },
  {
    name: "James",
    username: "@Miserable-Dig-2823",
    body: "Thank you man.👍🏼",
    img: "https://avatar.vercel.sh/james",
    link: "https://www.reddit.com/r/indianbikes/comments/1olp771/comment/nmkiuuy/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button",
  },
  {
    name: "James",
    username: "@undergradmech",
    body: "Hey, that's a nice initiative man 👍 here's to a better 2026 for us riders !!",
    img: "https://avatar.vercel.sh/james",
    link: "https://www.reddit.com/r/indianbikes/comments/1olp771/comment/nmm9vhp/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button",
  },
  {
    name: "James",
    username: "@Lanky-Patience-1523",
    body: "Bahut badhiya Bhai. 🤗",
    img: "https://avatar.vercel.sh/jill",
    link: "https://www.reddit.com/r/indianbikes/comments/1olp771/comment/nmn73li/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button",
  },
  {
    name: "James",
    username: "@tonystarkn",
    body: "Wonderful initiative Op! All the best for your journey ahead. Wishing this takes off in full swing.",
    img: "https://avatar.vercel.sh/james",
    link: "https://www.reddit.com/r/indianbikes/comments/1olp771/comment/nmnovai/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button",
  },
  {
    name: "James",
    username: "@Creepy-Ad-242",
    body: "Good initiative bro we don't have driving sense I have lost my cousin in road accident although it was his mistake was driving on wrong side was hit by a truck .",
    img: "https://avatar.vercel.sh/jill",
    link: "https://www.reddit.com/r/IndianEngineers/comments/1ooeu8v/comment/nn74tb7/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button",
  },
  {
    name: "James",
    username: "@TaxMeDaddy_",
    body: "Good job bro. Awesome",
    img: "https://avatar.vercel.sh/james",
    link: "https://www.reddit.com/r/indianbikes/comments/1olp771/comment/nmnhrbj/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button",
  },
  {
    name: "James",
    username: "@Infinite-Doubt7177",
    body: "Shared this with my friends thankss broo. I had a bus accident last night loll, funny how i found this today cheers man",
    img: "https://avatar.vercel.sh/james",
    link: "https://www.reddit.com/r/indianbikes/comments/1olp771/comment/nmnv0za/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button",
  },
  {
    name: "James",
    username: "@av_666",
    body: "This is great man, will share it in my circles.",
    img: "https://avatar.vercel.sh/james",
    link: "https://www.reddit.com/r/indianbikes/comments/1olp771/comment/nmo4835/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button",
  },
  {
    name: "James",
    username: "@saswatrule",
    body: "Impressive, great help and wonderful initiative... Thanks 👍😊",
    img: "https://avatar.vercel.sh/james",
    link: "https://www.reddit.com/r/indianbikes/comments/1olp771/comment/nmqhjax/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button",
  },
  {
    name: "James",
    username: "@sarvesh_18",
    body: "Excellent initiative! Hope it reaches lots of people.",
    img: "https://avatar.vercel.sh/jill",
    link: "https://www.reddit.com/r/indianbikes/comments/1olp771/comment/nmqhjax/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button",
  },
  {
    name: "James",
    username: "@Connect-Catch-4848",
    body: "Cool work mate! Site wide search is nice to have bcz people might be in a hurry to learn about rules relating any particular topic.",
    img: "https://avatar.vercel.sh/james",
    link: "https://www.reddit.com/r/developersIndia/comments/1onhyja/comment/nmx48ux/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button",
  },
  {
    name: "James",
    username: "@ShareHonest",
    body: "Good job, OP 👏👏",
    img: "https://avatar.vercel.sh/james",
    link: "https://www.reddit.com/r/Dashcamindia/comments/1oni63u/comment/nmxade5/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button",
  },
  {
    name: "James",
    username: "@rohanad1986",
    body: "Great work man. Looks good.",
    img: "https://avatar.vercel.sh/jill",
    link: "https://www.reddit.com/r/Dashcamindia/comments/1oni63u/comment/nn0wkrw/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button",
  },
  {
    name: "James",
    username: "@Much_Fall8884",
    body: "Great work keep it up 💪",
    img: "https://avatar.vercel.sh/james",
    link: "https://www.reddit.com/r/Dashcamindia/comments/1oni63u/comment/nn19408/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button",
  },
  {
    name: "James",
    username: "@Mutthal8",
    body: "I appreciate your effort OP",
    img: "https://avatar.vercel.sh/james",
    link: "https://www.reddit.com/r/IndiaTechnology/comments/1ooervy/comment/nn40njb/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button",
  },
  {
    name: "James",
    username: "@AlphaPhiKappa",
    body: "I am on 'how to wear seat belts' lesson now. Jokes apart, really grateful for such a thoughtful website. Looking forward to find surprising things that gets easily ignored",
    img: "https://avatar.vercel.sh/jill",
    link: "https://www.reddit.com/r/vercel/comments/1ooew9k/comment/nn3rigl/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button",
  },
  {
    name: "James",
    username: "@CruxyNil",
    body: "damn lovely project and initiative. including videos from twitter and yt along with law stuff, the thought process behind making this, i highly appreciate it. will share among friends.",
    img: "https://avatar.vercel.sh/james",
    link: "https://www.reddit.com/r/Btechtards/comments/1ooeytp/comment/nn777ls/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button",
  },
];

const ReviewCard = ({ img, username, body, link }: Review) => {
  return (
    <a href={link ? link : ""} target="_blank">
      <figure
        className={cn(
          "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
          // light styles
          "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
          // dark styles
          "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
        )}
      >
        <div className="flex flex-row items-center gap-2">
          <img
            className="rounded-full"
            width="32"
            height="32"
            alt=""
            src={img}
          />
          <div className="flex flex-col">
            <p className="text-xs font-medium dark:text-white/40">{username}</p>
          </div>
        </div>
        <blockquote className="mt-2 text-sm">{body}</blockquote>
      </figure>
    </a>
  );
};

export function ReviewsMarquee() {
  const t = useTranslations("Testimonials");
  const translatedReviews = t.raw("reviews");

  const translationMap = new Map(
    translatedReviews.map((r: { username: string; body: string }) => [
      r.username,
      r.body,
    ])
  );

  const mergedReviews: Review[] = reviews.map((review) => ({
    ...review,
    body: String(translationMap.get(review.username) || review.body),
  }));

  const firstRow = mergedReviews.slice(0, reviews.length / 2);
  const secondRow = mergedReviews.slice(reviews.length / 2);

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:80s]">
        {firstRow.map((review: Review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:80s]">
        {secondRow.map((review: Review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </div>
  );
}
