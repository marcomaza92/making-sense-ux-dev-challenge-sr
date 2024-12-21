const Avatar = () => {
  const user = "Robert";
  return (
    <div>
      <img src="user.png" alt="User Avatar" />
      <p>Hi, {user}!</p>
    </div>
  );
};

export default Avatar;
