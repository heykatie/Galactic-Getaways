import { FaCarrot } from 'react-icons/fa';

export default function ProfileButton() {
  const Carrot = () => {
    return (
      <div style={{ color: 'orange', fontSize: '2rem' }}>
        <FaCarrot />
      </div>
    );
  };
  return (
    <>
    {Carrot()}
    </>
  )
}
