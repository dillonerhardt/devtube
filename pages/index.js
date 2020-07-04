import { useState, useMemo } from "react";
import channels from "../data/channels.json";
import Channel from "../components/Channel";

export default function Home() {
  const [search, setSearch] = useState("");
  const refinedChannels = useMemo(
    () =>
      channels.filter(
        c =>
          search === "" ||
          (c.name.toLowerCase().includes(search.toLowerCase()) ||
            c.description.toLowerCase().includes(search.toLowerCase()))
      ),
    [search]
  );
  return (
    <div className="p-6">
      <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-800 sm:text-3xl sm:leading-10 mb-4">
        Find a channel
      </h1>
      <div className="mb-5">
        <input
          aria-label="Search channels"
          id="channelSearch"
          value={search}
          onChange={({ target }) => setSearch(target.value)}
          type="search"
          style={{ WebkitAppearance: "none" }}
          placeholder="Search channels..."
          className="bg-white border border-gray-300 rounded w-full p-3 focus:shadow-outline"
        />
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {refinedChannels.slice(0, 10).map((c, i) => (
          <Channel key={`channel-${c.name}-${i}`} {...c} />
        ))}
      </div>
    </div>
  );
}
