
import PropTypes from 'prop-types';
import UpdateProfileForm from './components/UpdateProfileForm';
import React, { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import { useSelector } from "react-redux";
import userApi from '../../../../../../../api/userApi';

UpdateProfile.propTypes = {
    closeDialog: PropTypes.func,
};



function UpdateProfile(props) {
    const { enqueueSnackbar } = useSnackbar();
    const loggedInUser = useSelector((state) => state.user.current);
    const handleSubmit = async (values) => {

      try {
        console.log(values);
      //   await groupsApi.createGroup(values);
         await userApi.infoProfile(values);
     
        // close dialog
        const { closeDialog } = props;
        if (closeDialog) {
          closeDialog();
        }
  
        enqueueSnackbar("Tạo khóa học thành công", { variant: "success" });
      } catch (error) {
        console.log(error);
        enqueueSnackbar("Tạo khóa học thất bại", { variant: "error" });
      }
    };
    return (
        <div>
            <UpdateProfileForm onSubmit={handleSubmit} />
        </div>
    );
}

export default UpdateProfile;