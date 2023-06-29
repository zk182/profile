import Avatar from './Avatar';
import '../style/Work.css';

export default function Work({
  index,
  title,
  description,
  years,
}: {
  index: number;
  title: string;
  description: string;
  years: string;
}) {
  return (
    <>
      <Avatar index={index} />
      <p> {title} </p>
      <p> {description} </p>
      <p> {years} </p>
    </>
  );
}
