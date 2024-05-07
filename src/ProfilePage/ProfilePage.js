import "./ProfilePage.css";

export default function Profile() {
  return (
    <section className="yourProfile">
      <div className="profileInfo">
        <h2>Welcome, [Username]</h2>
        <p>Email: [User's Email]</p>
        <p>Phone: [User's Phone Number]</p>
        <p>Address: [User's Address]</p>
      </div>
      <div className="profileActions">
        <button>Edit Profile</button>
        <button>Change Password</button>
        <button>Logout</button>
      </div>
    </section>
  );
}
