import teamMembers from '@/data/TeamData';
import TeamCardMember from '@/components/TeamCardMember';

export default function TeamMemberList() {
  return (
    <>
      <div className="p-5 xl:mt-40 xl:ml-32 2xl:mx-0 2xl:p-12">
        <h1 className="team-title flex font-extrabold uppercase">Equipe</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 lg:gap-x-12">
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
