import React , {useContext} from "react";
import Typograph from "../Atoms/Typograph";
// import colors from "../Atoms/Colors";
import "../Styles/templates.css";
import CardSection from "../Organisms/CardSection";
import { ColorContext } from '../../Context/ColorContext';
const WishlistHeaderTemplate = ({ trips }) => {
  const colors = useContext(ColorContext);
  return (
    <div className="wishlist-header-template p-4">
      <Typograph variant="h4" bold color={colors.Neutrals[1]}>
        Your wishlist 
      </Typograph>
      <Typograph variant="muted" className="mb-4">
        You added {trips?.length} items to wishlist
      </Typograph>
      {trips ? (
        <CardSection trips={trips} />
      ) : (
        <Typograph variant="muted" className="mb-4">
          You added no items to wishlist
        </Typograph>
      )}
      ;
    </div>
  );
};

export default WishlistHeaderTemplate;

