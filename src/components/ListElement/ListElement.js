import PropTypes from "prop-types";
import { FaUser } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { Button, Contact, TextWrapper } from "./ListElement.styled";

const ListElement = ({ elData, deleteBtn }) => {
  const deleteItem = (e) => {
    deleteBtn(elData.id);
  };
  return (
    <Contact>
      <TextWrapper>
        <FaUser />
        {elData.name}: {elData.number}
      </TextWrapper>
      <Button type="button" data-id={elData.id} onClick={deleteItem}>
        <RiDeleteBin5Fill />
      </Button>
    </Contact>
  );
};

ListElement.propTypes = { elData: PropTypes.object, deleteBtn: PropTypes.func };

export default ListElement;
