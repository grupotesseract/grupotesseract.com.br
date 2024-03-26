'use client';

interface TeamMemberDescriptionProps {
  description: string;
}

export default function TeamMemberDescription(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  props: TeamMemberDescriptionProps
) {
  return (
    <div className="team-description">
      <p>{props.description}</p>
    </div>
  );
}
