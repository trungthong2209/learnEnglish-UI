import { useSnackbar } from "notistack";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import groupsApi from "../../../../../api/groupsApi";
import CreateGroupForm from "./components/create_group_form";
import { useParams } from "react-router";
CreateGroups.propTypes = {
  closeDialog: PropTypes.func,
};

function CreateGroups(props) {
  const { enqueueSnackbar } = useSnackbar();
  const param = useParams();
  var idTopic = param.topicId;
  const loggedInUser = useSelector((state) => state.user.current);
  const [groups, setGroups] = useState({
    topicId: "",
    groupName: "",
    image: "",
    timeTeaching: "",
    managerId: loggedInUser._id,
  });
  const setValueGroup = (value) => {
    setGroups(value);
    console.log("group: ",groups)

  };
    
  const handleSubmit = async (values) => {

    try {
      console.log(values);
      await groupsApi.createGroup(values);
      const groupList = await groupsApi.getGroupsByTopicId(idTopic);

      // close dialog
      const { closeDialog } = props.closeDialog;
      const {setGroups} = props.setGroups;
      setGroups(groupList);
      if (closeDialog) {
        closeDialog();
      }

      enqueueSnackbar("Tạo nhóm thành công", { variant: "success" });
      window.location.reload();
    } catch (error) {
      console.log(error);
      enqueueSnackbar("Tạo nhóm thất bại", { variant: "error" });
    }
  };

  return (
    <div>
      <CreateGroupForm onSubmit={handleSubmit} />
    </div>
  );
}

export default CreateGroups;
