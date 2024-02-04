import { ethers } from "ethers";
import { createWeb3Name } from '@web3-name-sdk/core';

const web3name = createWeb3Name();

export async function getAltDomainHolder(domainName) {
  const config = useRuntimeConfig();
  
  let fullDomainName = domainName;

  if (!domainName.includes(config.altDomain)) {
    fullDomainName = fullDomainName + config.altDomain;
  }

  const address = await web3name.getAddress(fullDomainName);

  if (address && address !== ethers.constants.AddressZero) {
    return address;
  }

  return null;
}

export async function getAltDomainName(userAddress) {
  const config = useRuntimeConfig();
  const altDomain = config.altDomain.replace(".", "");

  const name = await web3name.getDomainName({
    address: String(userAddress),
    queryTldList: [altDomain],
  })

  if (name) {
    return name;
  }

  return null;
}

export async function getDomainHolder(domainName, signer) {
  const config = useRuntimeConfig();
  
  let provider = signer;

  if (!provider) {
    provider = this.$getFallbackProvider(config.supportedChainId);
  }

  if (domainName.includes(config.tldName)) {
    domainName = domainName.replace(config.tldName, "");
  }

  const tldInterface = new ethers.utils.Interface([
    "function getDomainHolder(string memory) public view returns(address)"
  ]);

  const contract = new ethers.Contract(config.punkTldAddress, tldInterface, provider);

  // get user's default domain
  const userAddress = await contract.getDomainHolder(domainName);

  return userAddress;
}

export async function getDomainName(userAddress, signer) {
  const config = useRuntimeConfig();
  
  let provider = signer;

  if (!provider) {
    provider = this.$getFallbackProvider(config.supportedChainId);
  }

  const tldInterface = new ethers.utils.Interface([
    "function defaultNames(address) view returns (string)"
  ]);

  const contract = new ethers.Contract(config.punkTldAddress, tldInterface, provider);

  // get user's default domain
  const userDomain = await contract.defaultNames(userAddress);

  return userDomain;
}
