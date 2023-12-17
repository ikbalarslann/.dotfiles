const WishlistButton = () => {
  return (
    <button className="btn btn--wishlist">
      <svg
        className="btn__icon btn__icon--wishlist"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M12.5 19.5L5.5 15.5L5.5 5.5L18.5 5.5L18.5 15.5L12.5 19.5ZM12 17.793L16.5 14.5L16.5 7.5L7.5 7.5L7.5 14.5L12 17.793Z" />
      </svg>
      <span className="btn__text">Wishlist</span>
    </button>
  );
};

export default WishlistButton;
