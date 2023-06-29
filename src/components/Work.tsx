import Avatar from './Avatar';

export default function Work(job: any) {
  console.log(job);
  return (
    <>
      <Avatar />
      <p> Title </p>
      <p> Description </p>
      <p> Years </p>
    </>
  );
}
