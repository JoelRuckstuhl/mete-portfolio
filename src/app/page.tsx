import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/live";
import { Header } from "@/components/Header";

const EVENTS_QUERY = defineQuery(`*[
  _type == "event"
]{ Name, Video, Description}`);

export default async function IndexPage() {
  const { data: events } = await sanityFetch({ query: EVENTS_QUERY });

  return (
    <>
      <Header />

      <main className="flex bg-gray-100 min-h-screen flex-col p-24">
        {/* Mapping through the events data */}
        <div className="flex flex-wrap justify-center gap-40">
          {" "}
          {/* Use flex-wrap and gap */}
          {events.map((event, index) => (
            <div key={index} className="flex-shrink-0">
              {" "}
              {/* Prevent shrinking */}
              <div>{event.Name}</div>
              <iframe
                width="560"
                height="315"
                src={event.Video}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
