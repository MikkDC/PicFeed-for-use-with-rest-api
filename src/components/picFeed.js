export const PicFeed = ({ pic }) => {
    return (
      <div className="pic-feed">
        <p className="author">{pic.author}</p>
        <img src={pic.download_url} alt="Lorem Picsum fetch grabbed data" />
      </div>
    );
  };