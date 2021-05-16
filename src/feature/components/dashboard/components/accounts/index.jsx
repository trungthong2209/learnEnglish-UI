import React from 'react';
import PropTypes from 'prop-types';
import AccountList from './components/account_list';

ManageAccount.propTypes = {
    
};

function ManageAccount(props) {
    return (
        <div>
            <AccountList />
        </div>
    );
}

export default ManageAccount;