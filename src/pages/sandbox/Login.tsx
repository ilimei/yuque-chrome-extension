import React, { useState } from 'react';
import {
  Button,
} from 'antd';
import { setCurrentAccount } from '@/core/account';
import FeedBack from './FeedBack';

import type { IYuqueAccount } from './UserInfo';

import YuqueLogo from '@/assets/images/yuque-logo.png';

import styles from './Login.module.less';

const Login = props => {
  const [ currentAccount ] = useState<IYuqueAccount>(
    {} as IYuqueAccount,
  );

  const onConfirm = () => {
    setCurrentAccount(currentAccount).then(() => {
      props.onConfirm(currentAccount);
    });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.welcome}>
        <img width="60" src={YuqueLogo} alt="yuque logo" />
        <div className={styles.loginTip}>{__i18n('欢迎，请点击登录语雀账户')}</div>
      </div>
      <Button
        type="primary"
        block
        onClick={onConfirm}
        disabled={false}
      >
        {__i18n('登录验证')}
      </Button>
      <FeedBack className={styles.feedback} />
    </div>
  );
};

export default Login;
