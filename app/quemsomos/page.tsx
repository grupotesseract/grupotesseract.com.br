import CompanyCulture from '../components/CompanyCulture';
import TeamMemberList from '../components/TeamMemberList';
import TextWithButton from '../components/TextWithButton';

export default function AboutUs() {
  return (
    <>
      <div className="container">
        <CompanyCulture />
        <TeamMemberList />
        <TextWithButton />
      </div>
    </>
  );
}
