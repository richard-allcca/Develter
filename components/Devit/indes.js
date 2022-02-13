import Avatar from "components/Avatar";

const Devit = ({ id, user, avatar, message }) => {
  return (
    <>
      <article>
        <div>
          <Avatar src={avatar} alt={user} text={message} />
        </div>
        <section>
          <strong>{user}</strong>
          <p>{message}</p>
        </section>
      </article>
      <style jsx>{`
        article {
          padding: 10px 15px;
          display: flex;
          border-bottom: 1px solid #eaf7ff;
        }
        div {
          padding-right: 10px;
        }
        p {
          margin: 0;
        }
      `}</style>
    </>
  );
};

export default Devit;
