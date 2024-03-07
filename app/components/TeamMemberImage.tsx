'use client';

/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';

interface TeamMemberImageProps {
  imageUrl: string;
  imageName: string;
  width: number;
  height: number;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function TeamMemberImage(props: TeamMemberImageProps) {
  return (
    <div className="flex justify-center">
      <Image
        src={props.imageUrl}
        alt={props.imageName}
        width={props.width}
        height={props.height}
      />
    </div>
  );
}
