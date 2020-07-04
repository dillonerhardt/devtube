export default function Channel({ thumbnail, name, channelId, description }) {
  return (
    <div className="w-full p-2 py-5 border border-gray-200 shadow-md bg-white mb-3 flex flex-col items-center rounded text-gray-800">
      {thumbnail && (
        <img
          className="rounded-full"
          alt={`${name} logo`}
          height={64}
          width={64}
          src={thumbnail}
        />
      )}
      <h3 className="font-semibold text-xl mt-2">{name}</h3>
      <div
        className={`flex flex-grow flex-col items-center ${!open &&
          "hide-mobile"}`}
      >
        {description && (
          <p className="flex-grow text-center text-gray-600 mt-2 mb-3">
            {description}
          </p>
        )}
        <a
          className="btn-primary"
          href={`https://www.youtube.com/channel/${channelId}`}
        >
          Visit channel
        </a>
      </div>
    </div>
  );
}
