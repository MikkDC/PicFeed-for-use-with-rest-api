export const PicFeed = ({ pic }) => {
    return (
      <div className="pic-feed">
        <p>{pic.author}</p>
        <img src={pic.download_url} alt="Lorem Picsum fetch grab" />
      </div>
    );
  };