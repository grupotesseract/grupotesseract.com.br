'use client';

interface TeamMemberNameProps {
  name: string;
  position: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function TeamMemberName(props: TeamMemberNameProps) {
  return (
    <div className="flex flex-col justify-center gap-2">
      <h2 className="team-name">{props.name}</h2>
      <h3 className="team-position">{props.position}</h3>
      <div className="flex gap-4">
        <div>tags</div>
        <div>tags</div>
        <div>tags</div>
      </div>
    </div>
  );
}
