import { IncreaseDiv, DecreaseDiv } from "../components/Table/Table.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp } from "@fortawesome/free-solid-svg-icons";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

export const IncOrDecArrow = ({ value }) => {
    if (value.charAt(0) == "-") {
      value = value.slice(1);
      return (
        <DecreaseDiv>
          <FontAwesomeIcon
            icon={faSortDown}
            style={{ marginRight: 4, marginBottom: 2 }}
          />
          {value}
        </DecreaseDiv>
      );
    } else {
      return (
        <IncreaseDiv>
          <FontAwesomeIcon
            icon={faSortUp}
            style={{ marginRight: 4, marginTop: 6 }}
          />
          {value}
        </IncreaseDiv>
      );
    }
  };