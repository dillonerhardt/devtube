import { useState, useMemo, useEffect } from "react";
import channels from "../data/channels.json";
import Channel from "../components/Channel";

const DEFAULT_NUM_CHANNELS = 12;

export default function Home() {
  const [channelsShown, setChannelsShown] = useState(DEFAULT_NUM_CHANNELS);
  const [search, setSearch] = useState("");
  const refinedChannels = useMemo(
    () =>
      channels.filter(
        (c) =>
          search === "" ||
          c.name.toLowerCase().includes(search.toLowerCase()) ||
          c.description?.toLowerCase().includes(search.toLowerCase())
      ),
    [search]
  );
  useEffect(() => setChannelsShown(DEFAULT_NUM_CHANNELS), [search]);
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
        {refinedChannels.slice(0, channelsShown).map((c, i) => (
          <Channel key={`channel-${c.name}-${i}`} {...c} />
        ))}
      </div>
      <div className="flex justify-center py-3">
        {channelsShown < refinedChannels.length && (
          <button
            onClick={() => setChannelsShown((prev) => prev + 12)}
            className="btn-primary"
          >
            Show more channels
          </button>
        )}
      </div>
    </div>
  );
}
