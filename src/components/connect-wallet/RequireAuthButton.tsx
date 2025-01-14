import { useWeb3React } from '@web3-react/core';
import { displayToast, TToastType } from 'components/Toasts/Toast';
import { BSC_CHAIN_ID, NOTI_INSTALL_OWALLET } from 'config/constants';
import { Contract } from 'config/contracts';
import { network } from 'config/networks';
import useConfigReducer from 'hooks/useConfigReducer';
import { injected, useEagerConnect } from 'hooks/useMetamask';
import React, { useState } from 'react';
import ConnectWalletModal from './ConnectWalletModal';

const RequireAuthButton: React.FC<any> = ({ address, setAddress, ...props }) => {
  const [openConnectWalletModal, setOpenConnectWalletModal] = useState(false);
  const [isInactiveMetamask, setIsInactiveMetamask] = useState(false);
  const [metamaskAddress, setMetamaskAddress] = useConfigReducer('metamaskAddress');
  const { activate, deactivate } = useWeb3React();

  useEagerConnect(isInactiveMetamask, false);
  const onClick = () => {
    setOpenConnectWalletModal(true);
  };

  const connectMetamask = async () => {
    try {
      setIsInactiveMetamask(false);

      // if chain id empty, we switch to default network which is BSC
      if (!window.ethereum.chainId) {
        await window.Metamask.switchNetwork(BSC_CHAIN_ID);
      }
      await activate(injected, (ex) => {
        console.log('error: ', ex);
        displayToast(TToastType.METAMASK_FAILED, { message: ex.message });
      });
    } catch (ex) {
      console.log('error in connecting metamask: ', ex);
    }
  };

  const disconnectMetamask = async () => {
    try {
      deactivate();
      setIsInactiveMetamask(true);
      setMetamaskAddress(undefined);
    } catch (ex) {
      console.log(ex);
    }
  };

  const connectKeplr = async () => {
    if (!(await window.Keplr.getKeplr())) {
      return displayToast(TToastType.TX_INFO, NOTI_INSTALL_OWALLET, {
        toastId: 'install_keplr'
      });
    }

    await window.Keplr.suggestChain(network.chainId);
    const address = await window.Keplr.getKeplrAddr();
    Contract.sender = address;
    setAddress(address as string);
  };

  const disconnectKeplr = async () => {
    try {
      window.Keplr.disconnect();
      Contract.sender = '';
      setAddress('');
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <React.Fragment>
      <button {...props} onClick={onClick}>
        {props.children}
      </button>
      {openConnectWalletModal && (
        <ConnectWalletModal
          connectMetamask={connectMetamask}
          connectKeplr={connectKeplr}
          disconnectMetamask={disconnectMetamask}
          disconnectKeplr={disconnectKeplr}
          address={address}
          metamaskAddress={metamaskAddress}
          isOpen={openConnectWalletModal}
          close={() => {
            setOpenConnectWalletModal(false);
          }}
          open={() => {
            setOpenConnectWalletModal(true);
          }}
        />
      )}
    </React.Fragment>
  );
};

export default RequireAuthButton;
