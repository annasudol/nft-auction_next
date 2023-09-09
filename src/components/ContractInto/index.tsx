import { useAddress, useContract, useContractRead } from '@thirdweb-dev/react';

import { formatBigNumber } from '@/utils/formatBigNumbers';

const ContractInfo = () => {
  const address = useAddress();
  const { contract } = useContract(process.env.NEXT_PUBLIC_CONTRACT_ERC20);
  const { data: balance, isLoading: isLoadingBalance } = useContractRead(
    contract,
    'balanceOf',
    [address]
  );
  const { data: name } = useContractRead(contract, 'symbol');
  const { data: totalSupply, isLoading: isLoadingSupply } = useContractRead(
    contract,
    'totalSupply'
  );
  const balanceFormatted = balance && formatBigNumber(balance);
  const totalSupplyFormatted = totalSupply && formatBigNumber(totalSupply);
  return (
    <div className='my-4'>
      <p>
        {!address
          ? 'Not connected to Wallet'
          : isLoadingBalance
          ? '...Loading balance'
          : `Balance: ${balanceFormatted} ${name}`}
      </p>
      <p>
        {isLoadingSupply
          ? '...Loading Total supply'
          : `Total Supply: ${totalSupplyFormatted} ${name}`}
      </p>
    </div>
  );
};
export default ContractInfo;
