import Avatar from './Avatar';

export default function Work({
  title,
  description,
  years,
}: {
  title: string;
  description: string;
  years: string;
}) {
  console.log(title);
  return (
    <>
      <Avatar />
      <p> {title} </p>
      <p> {description} </p>
      <p> {years} </p>
    </>
  );
}
