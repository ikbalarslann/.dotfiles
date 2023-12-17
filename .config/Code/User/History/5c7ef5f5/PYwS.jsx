const ShoppingCard = () => {
  return (
    <div className="shopping-card">
      <div className="shopping-card__icon">
        <img src={shoppingCardIcon} alt="Shopping card icon" />
      </div>
      <div className="shopping-card__count">
        <span>0</span>
      </div>
    </div>
  );
};

export default ShoppingCard;
