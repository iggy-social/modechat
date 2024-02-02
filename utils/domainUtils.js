import { ethers } from "ethers";

export async function getAltDomainHolder(domainName) {
  const config = useRuntimeConfig();
  
  let fullDomainName = domainName;

  if (!domainName.includes(config.altDomain)) {
    fullDomainName = fullDomainName + config.altDomain;
  }

  const altDomainWithoutDot = config.altDomain.replace(".", "");

  // Example: https://api.prd.space.id/v1/getAddress?tld=eth&name=tempetechie.eth
  const url = `https://api.prd.space.id/v1/getAddress?tld=${altDomainWithoutDot}&name=${fullDomainName}`;

  try {
    const resp = await $fetch(url).catch((error) => error.data);

    let response = resp;

    if (typeof(resp) === "string") {
      response = JSON.parse(resp);
    }

    if (response?.error) {
      console.log("Error fetching alt domain holder: ", response["error"]);
      return null;
    }

    if (response?.code == 1) {
      console.log("Error fetching alt domain:", response["msg"]);
      return null;
    } else if (response?.code == 0) {
      console.log("Alt domain holder:", response["address"]);
      return response["address"];
    }
    
  } catch (e) {
    console.log("Error fetching alternative domain holder: ", e);
  }

  return null;
}

export async function getAltDomainName(userAddress) {
  const config = useRuntimeConfig();
  const altDomain = config.altDomain.replace(".", "");

  // Example: https://api.prd.space.id/v1/getName?tld=eth&address=0xb29050965A5AC70ab487aa47546cdCBc97dAE45D
  const url = `https://api.prd.space.id/v1/getName?tld=${altDomain}&address=${userAddress}`;

  try {
    const resp = await $fetch(url).catch((error) => error.data);

    let response = resp;

    if (typeof(resp) === "string") {
      response = JSON.parse(resp);
    }

    if (response?.error) {
      console.log("Error fetching alt domain: ", response["error"]);
      return null;
    }

    if (response?.code == 1) {
      console.log("Error fetching alt domain:", response["msg"]);
      return null;
    } else if (response?.code == 0) {
      console.log("Alt domain name:", response["name"]);
      return response["name"];
    }
    
  } catch (e) {
    console.log("Error fetching alternative domain name: ", e);
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
