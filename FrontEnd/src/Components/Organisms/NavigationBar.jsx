
import React from "react";
import { useParams, Link } from "react-router-dom";
// import { cities as governates } from "../../Mocks/Governates";
import Button from "../Atoms/Button";
import "../Styles/organisms.css";
import Typograph from "../Atoms/Typograph";
import { IoIosArrowBack } from "react-icons/io";
import AnimatedSection from "../Atoms/AnimationSection"
import useGovernateStore from "../../Reducers/GovernateReducersStore";


const NavigationBar = () => {
  const { governateId } = useParams();
  const { governates, getAll } = useGovernateStore();
  const selectedGovernate = governates && governates?.find(
    (gov) => (gov.id || gov.gov_id) === governateId
  );

  return (
    <AnimatedSection delay={0.1}>
      <div className="navigation-bar">

        <Link to="/" className="go-home-link">
          <Button color="trans" size="small" icon={<IoIosArrowBack />} iconSize={16} iconcolor="var(--icon-color)" iconPosition="left" >
            <Typograph variant="small">Go Home</Typograph>
          </Button>
        </Link>
        <div className="breadcrumbs">
          <Link to="/">Home</Link> {" "}
          <Link to={`/governate/${governateId}`}>
            {selectedGovernate?.name || "Governate"}
          </Link>{" "}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default NavigationBar;