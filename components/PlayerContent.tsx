"use client"

import { Song } from "@/types"


import LikeButton from "./LikeButton";
import MediaItem from "./MediaItem";

interface PlayerContentProps {
  song: Song;
  songUrl: string;
}

const PlayerContent: React.FC<PlayerContentProps> = ({
  song,
  songUrl
}) => {
  return (
    <div
      className="
    grid
    grid-cols
    md:grid-cols-3
    h-full
    ">
      <div
        className="
      flex
      w-full
      justify-start
      ">
        <div className="
        flex
        items-center
        gap-x-4
        ">
          <MediaItem data={song} />
          <LikeButton songId={ song.id} />
        </div>
      </div>
    </div>
  )
}

export default PlayerContent
