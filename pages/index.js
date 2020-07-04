import { useState, useMemo } from "react";
import channels from "../data/channels.json";

export default function Home() {
  const [search, setSearch] = useState("");
  const refinedChannels = useMemo(
    () =>
      channels.filter(
        c =>
          search === "" || c.name.toLowerCase().includes(search.toLowerCase())
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
          value={search}
          onChange={({ target }) => setSearch(target.value)}
          type="search"
          style={{ WebkitAppearance: "none" }}
          placeholder="Search channels..."
          className="bg-white border border-gray-300 rounded w-full p-3 focus:shadow-outline"
        />
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {refinedChannels.map((c, i) => (
          <a
            key={`channel-${c.name}-${i}`}
            href={c.link}
            className="w-full p-2 py-5 border border-gray-200 shadow-md bg-white mb-3 flex flex-col items-center rounded hover:bg-teal-500 text-gray-800 transition ease-in-out duration-300 hover:text-white"
          >
            {c.logo && (
              <img
                className="rounded-full"
                alt={`${c.name} logo`}
                height={64}
                width={64}
                src={c.logo}
              />
            )}
            <h3 className="font-semibold text-xl mt-2">{c.name}</h3>
          </a>
        ))}
      </div>
    </div>
  );
}
