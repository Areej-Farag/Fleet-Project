import React , {useContext} from "react";
import Typograph from "../Atoms/Typograph";
// import colors from "../Atoms/Colors";
import "../Styles/templates.css";
import CardSection from "../Organisms/CardSection";
import { ColorContext } from '../../Context/ColorContext';
import AnimatedSection from "../Atoms/AnimationSection";

const WishlistHeaderTemplate = ({ trips }) => {
  const colors = useContext(ColorContext);
  return (
    <div className="wishlist-header-template p-4">
      <AnimatedSection delay={0.2}>
      <Typograph variant="h4" bold color={colors.Neutrals[1]}>
        Your wishlist 
      </Typograph>
      </AnimatedSection>

      <AnimatedSection delay={0.3}>
      <Typograph variant="muted" className="mb-4">
        You added {trips?.length} items to wishlist
      </Typograph>
      </AnimatedSection>

      <AnimatedSection delay={0.3}>
      {trips ? (
        <CardSection trips={trips} />
      ) : (
        <Typograph variant="muted" className="mb-4">
          You added no items to wishlist
        </Typograph>
      )}
      ;
      </AnimatedSection>
    </div>
  );
};

export default WishlistHeaderTemplate;

