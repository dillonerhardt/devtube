import { useState, useMemo, useEffect } from "react";
import { useRouter } from "next/router";
import Router from "next/router";
import channels from "../data/channels.json";
import Channel from "../components/Channel";

const DEFAULT_NUM_CHANNELS = 12;

function Home({ searchTerm }) {
  const [channelsShown, setChannelsShown] = useState(DEFAULT_NUM_CHANNELS);
  const [search, setSearch] = useState(() => searchTerm || "");
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
  useEffect(() => {
    if (channelsShown !== DEFAULT_NUM_CHANNELS)
      setChannelsShown(DEFAULT_NUM_CHANNELS);
    let currentUrlParams = new URLSearchParams(window.location.search);
    if (search === "") currentUrlParams.delete("q");
    else currentUrlParams.set("q", search);
    Router.replace(
      `${window.location.pathname}${
        currentUrlParams.toString() !== ""
          ? "?" + currentUrlParams.toString()
          : ""
      }`
    );
  }, [search]);
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

Home.getInitialProps = ({ query }) => {
  return { searchTerm: query.q };
};

export default Home;
