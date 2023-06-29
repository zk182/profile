import globant from '../assets/globant.svg';
import spark from '../assets/intive.svg';

//TODO
const srcs = [globant, spark];

export default function Avatar({ index }: { index: number }) {
  return (
    <img
      style={{ borderRadius: 20 }}
      className="avatar"
      src={srcs[index]}
      alt="moon"
      width={40}
      height={40}
    />
  );
}
