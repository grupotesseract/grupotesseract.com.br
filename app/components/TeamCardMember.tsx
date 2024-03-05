'use client';

import TeamMemberDescription from '../components/TeamMemberDescription';
import TeamMemberImage from '../components/TeamMemberImage';
import TeamMemberName from './TeamMemberName';

interface TeamCardMemberProps {
  imageUrl: string;
  imageName: string;
  name: string;
  position: string;
  description: string;
}

export default function TeamCardMember(props: TeamCardMemberProps) {
  return (
    <>
      <div className="box-card grid grid-cols-2">
        <TeamMemberImage
          imageUrl={props.imageUrl}
          imageName={props.imageName}
          width={158}
          height={150}
        />
        <TeamMemberName name={props.name} position={props.position} />
        <TeamMemberDescription description={props.description} />
      </div>
    </>
  );
}
