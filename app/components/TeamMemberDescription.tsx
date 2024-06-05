'use client';

interface TeamMemberDescriptionProps {
  description: string;
}

export default function TeamMemberDescription(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  props: TeamMemberDescriptionProps,
) {
  return (
    <div className="team-description w-80 pt-2 text-justify md:pl-6">
      <p>{props.description}</p>
    </div>
  );
}
