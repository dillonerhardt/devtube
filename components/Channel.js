import * as Fathom from "fathom-client";

export default function Channel({ thumbnail, name, channelId, description }) {
  return (
    <div className="w-full p-2 py-5 border border-gray-200 shadow-md bg-white mb-3 flex flex-col items-center rounded text-gray-800">
      {thumbnail && (
        <img
          className="rounded-full bg-gray-300 text-transparent"
          style={{ width: 64, height: 64 }}
          alt={`${name} logo`}
          height={64}
          width={64}
          src={thumbnail}
        />
      )}
      <h3 className="font-semibold text-xl mt-2">{name}</h3>
      <div className="flex flex-grow flex-col items-center">
        <p className="flex-grow text-center text-gray-600 mt-2 mb-3">
          {description ? description.substring(0, 175) : "No description"}
        </p>
        <a
          className="btn-primary"
          onClick={() => Fathom.trackGoal("ZVZPJA8J", 0)}
          href={`https://www.youtube.com/channel/${channelId}`}
        >
          Visit channel
        </a>
      </div>
    </div>
  );
}
