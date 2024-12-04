"use client";

import { useState } from "react";
import { shortenUrl } from "../api/url.api";

interface ShortenedUrl {
  original: string;
  short: string;
}

const UrlResult = ({ item }: { item: ShortenedUrl }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(item.short);
    setCopied(true);

    // set timeout to reset copied state
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <div className="bg-white rounded-lg p-4 flex flex-col md:flex-row md:items-center justify-between gap-3">
      <p className="text-veryDarkBlue truncate">{item.original}</p>
      <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
        <p className="text-cyan">{item.short}</p>
        <button
          onClick={handleCopy}
          className={`hover:bg-opacity-70 transition-all text-white px-6 py-2 rounded-lg font-bold text-sm ${
            copied ? "bg-darkViolet" : "bg-cyan"
          }`}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
};

const Shortener = () => {
  const [url, setUrl] = useState("");
  const [shortenedUrls, setShortenedUrls] = useState<ShortenedUrl[]>([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!url) {
      setError(true);
      return;
    }
    setError(false);
    setIsLoading(true);

    try {
      const { result, error } = await shortenUrl(url);

      if (error) throw error;

      console.log(result);

      if (result) {
        setShortenedUrls((prev) => [
          {
            original: url,
            short: result.full_short_link,
          },
          ...prev,
        ]);
        setUrl("");
      }
    } catch (error) {
      setError(true);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-6 md:px-10 -mb-20 relative z-10">
      <div className="bg-darkViolet rounded-lg p-6 md:p-12 md:bg-[url('/images/bg-shorten-desktop.svg')] bg-[url('/images/bg-shorten-mobile.svg')] bg-no-repeat bg-cover">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row gap-4 md:gap-6"
        >
          <div className="flex-1">
            <input
              type="url"
              placeholder="Shorten a link here..."
              value={url}
              onChange={(e) => {
                setUrl(e.target.value);
                if (error) setError(false);
              }}
              className={`w-full px-6 py-3 md:py-4 rounded-lg text-base md:text-lg outline-none placeholder:text-gray/70 ${
                error
                  ? "border-2 border-red placeholder-red/70 focus:border-red"
                  : "focus:border-2 focus:border-cyan"
              }`}
            />
            {error && (
              <p className="text-red text-sm italic mt-2">
                Please add a valid link
              </p>
            )}
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className={`bg-cyan hover:bg-opacity-70 transition-all text-white px-6 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg whitespace-nowrap ${
              isLoading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? "Shortening..." : "Shorten It!"}
          </button>
        </form>
      </div>

      {/* Shortened URLs List */}
      {shortenedUrls.length > 0 && (
        <div className="mt-6 space-y-4">
          {shortenedUrls.map((item, index) => (
            <UrlResult item={item} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Shortener;
