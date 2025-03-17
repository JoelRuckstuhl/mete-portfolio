import Link from "next/link";
import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/live";

const EVENTS_QUERY = defineQuery(`*[
  _type == "event"
  
]{ Name, Video, date}|order(date desc)`);

export default async function IndexPage() {
  const { data: events } = await sanityFetch({ query: EVENTS_QUERY });

  return (
    <>
      <main className="flex bg-gray-100 min-h-screen flex-col p-24 gap-12">
        <h1 className="text-4xl font-bold tracking-tighter">Events</h1>
        <ul className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div> {events[0].Name}</div>
        </ul>
      </main>
    </>
  );
}
