import { getTeamMembers } from '../../utils/teamMembers';
import TeamCardMember from './TeamCardMember';

export default function TeamMemberList() {
  const teamMembers = getTeamMembers();

  return (
    <>
      <h1 className="team-title flex font-extrabold uppercase">Equipe</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:w-4/5 xl:w-2/3 lg:gap-x-64 pl-36">
        {teamMembers.map((member: any) => (
          <TeamCardMember
            key={member.id}
            imageUrl={member.imageUrl}
            imageName={member.imageName}
            name={member.name}
            position={member.position}
            description={member.description}
          />
        ))}
      </div>
    </>
  );
}