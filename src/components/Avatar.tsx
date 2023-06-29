import pic from '../assets/globant.svg';

export default function Avatar() {
    return (
      <img
        className="avatar"
        src={pic}
        alt='moon'
        width={50}
        height={50}
      />
    );
  }