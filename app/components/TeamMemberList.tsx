import teamMembers from '@/data/TeamData';
import TeamCardMember from '@/components/TeamCardMember';

export default function TeamMemberList() {
  return (
    <>
      <div className="mt-40 ml-32">
        <h1 className="team-title flex font-extrabold uppercase">Equipe</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-x-12">
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
      </div>
    </>
  );
}
