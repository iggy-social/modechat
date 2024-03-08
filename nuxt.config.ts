import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill';

// https://nuxt.com/docs/api/configuration/nuxt-config 
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        {
          "name": "viewport",
          "content": "width=device-width, initial-scale=1"
        },
        {
          "charset": "utf-8"
        }
      ],
      link: [
        { // Bootstrap
          rel: "stylesheet",
          href: "	https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        },
        { // Bootstrap icons
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
        },
        { // Custom
          rel: "stylesheet",
          href: "/css/custom.css"
        }
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
        }
      ]
    }
  },
  components: false,
  css: [
    'vue-toastification/dist/index.css' 
  ],
  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
  ],
  router: {
    options: {
      hashMode: false
    }
  },
  runtimeConfig: {
    public: {
      activityPointsAddress: "0xce314209aB485bE222CE85F653Ac918f54532503",
      airdropApAddress: "", // chat token claim for APs
      airdropClaimDomainsAddress: "", // chat token claim for domain holders
      altDomain: ".mode", // alternative domain (e.g. .eth, .crypto, etc.)
      blockExplorerBaseUrl: "https://explorer.mode.network", // no trailing slash!
      chatChannels: { // go to Orbis Dashboard (https://useorbis.com/dashboard), create a new Project and then create a new Context for each of the channels below
        "general": "kjzl6cwe1jw149v2ugvw3kux2bllw3bka0vl2rzgmdkaceg3srm62nww7iuvkwi", // general discussion channel
        "memesImages": "kjzl6cwe1jw14baa970et2v1t5dow17o99i86l7a731pvbz8n1ncakq02e1j80z",
        "shill": "kjzl6cwe1jw149xdx2rhelufxdl02mh0mdhpwl4kp0fnb5srr8qdrpbd5nzvoed",
        "nftLaunchpad": "kjzl6cwe1jw145u6xa5xq8lrdhgwbcfk9ik79lonmkk9inn36e444sw43ykel3u",
        "friendKeys": "kjzl6cwe1jw14b20jz0shleevpvoa1ba5m09ggc7jf46o26d686iqcnedcazoqc",
      },
      chatTokenAddress: "", // chat token address
      chatTokenImage: "", // chat token image
      chatTokenSymbol: "MCHAT", // chat token symbol or name
      domainRequiredToPost: false,
      expiryCollections: 1000 * 60 * 60 * 24 * 7, // must be in milliseconds (0 means no expiration)
      expiryUsernames: 1000 * 60 * 60 * 24 * 7, // must be in milliseconds (0 means no expiration)
      favicon: "/img/favicon.svg",
      fileUploadEnabled: true, // enable/disable file uploads (enable only if external file storage is used, e.g. IPFS via Spheron)
      fileUploadSizeLimit: 1 * 1024 * 1024, // max file upload size in bytes (1 * 1024 * 1024 = 1 MB)
      fileUploadTokenService: process.env.FILE_UPLOAD_SERVICE || "netlify", // "netlify" or "vercel" (or leave empty for no file uploads)
      getPostsLimit: 30, // number of posts to fetch from Orbis in the getPosts() function
      governanceUrl: "", // governance url (snapshot, Tally, etc.)
      iggyPostAddress: "0x5e54CebB2612744cB56547bC7CC41466ad7ac557",
      iggyPostMinterAddress: "0x2F103ec022a1d99291077a082b2DC24C734E58A3",
      iggyPostStatsAddress: "0x2D4144B4E00cf1dC1c4DeDa37cb1CaCEda030998",
      imagekitEndpoint: process.env.IMAGEKIT_ENDPOINT,
      imagekitPublicKey: process.env.IMAGEKIT_PUBLIC_KEY,
      ipfsGateway: "https://cloudflare-ipfs.com/ipfs/",
      keysAddress: "0xD48e9b2D25CEe123be1d01c09645A0a355174db0", // FriendKeys contract address 
      keysFeatured: ["tempe", "tekr"],
      linkPreviews: process.env.LINK_PREVIEW_SERVICE || "netlify", // "netlify", "vercel", or "microlink" (or leave empty for no link previews)
      lpTokenAddress: "", // liquidity pool token (token to stake in the staking contract)
      lpTokenSymbol: "LP tokens", // LP token symbol
      marketplacePostNftUrl: "https://explorer.mode.network/token/0x5e54CebB2612744cB56547bC7CC41466ad7ac557",
      marketplacePostNftItemUrl: "https://explorer.mode.network/token/0x5e54CebB2612744cB56547bC7CC41466ad7ac557/instance/", // url (append nft id to it)
      marketplaceNftCollectionBaseUrl: "https://explorer.mode.network/token/", // url (append nft address to it)
      newsletterLink: "https://paragraph.xyz/@iggy?modal=subscribe",
      nftDefaultRatio: 1, // default ratio for the NFT price bonding curve
      nftLaunchpadBondingAddress: "0x305912c0d03C22e6eB7D37E06A47ab899e48B9Af", // NFT launchpad with bonding curve contract address
      nftLaunchpadLatestItems: 4, // number of latest NFTs to show in the NFT launchpad
      orbisTest: false, // if true, test context will be used instead of the production one
      orbisTestContext: "kjzl6cwe1jw145tfqv2eqv8tiz6puo27meyz4smz40atppuc13tulqca87k35z2", // test context
      previewImage: "/img/covers/cover.png",
      previewImageAirdrop: "/img/covers/cover-airdrop.png",
      previewImageNftCollection: "/img/covers/cover-nft-collection.png",
      previewImageNftCreate: "/img/covers/cover-nft-create.png",
      previewImageNftLaunchpad: "/img/covers/cover-nft-launchpad.png",
      previewImagePost: "/img/covers/cover-post.png",
      previewImagePostNft: "/img/covers/cover-post-nft.png",
      previewImageProfile: "/img/covers/cover-profile.png",
      previewImageStake: "/img/covers/cover-stake.png",
      profileMintedPostIdsMax: 36, // max number of minted post ids to show in the profile page
      projectMetadataTitle: "ModeChat | Web3 Social on Mode Network",
      projectName: "ModeChat",
      projectDescription: "Web3 Social is here. ModeChat is the first decentralized social network on the Mode L2 chain.",
      projectTwitter: "https://twitter.com/iggysocial",
      projectUrl: "https://modechat.xyz", // without trailing slash!
      punkMinterAddress: "0xf6A44f61030115B5dA382b198B711130D98390d9", // punk domain minter contract address
      punkNumberOfPrices: 5, // number of different prices (based on domain length), usually 1 (price()) or 5 (price1char() - price5char())
      punkTldAddress: "0x523a7050df3DC7E96B7faAF4dDECCc244d886a90", // punk domain TLD address
      randomPostsNumber: 1, // number of random post NFTs to show in the sidebar widget
      rpcCustom: process.env.RPC_CUSTOM || "https://mainnet.mode.network/", // Custom RPC URL
      showFeatures: { // show/hide features in sidebars (if you have too many "true", make the sidebar scrollable --> sidebarLeftSticky: false)
        "activityPoints": true, 
        "airdrop": false, 
        "friendKeys": true, 
        "governance": false,
        "newsletter": false, 
        "nftLaunchpad": false, 
        "randomMintedPosts": true, 
        "swap": true, 
        "stake": false, 
        "sendTokens": true, 
        "spotify": false
      }, 
      showRepliesOnHomepage: true, // show replies on the homepage  
      sidebarLeftSticky: false, // make the left sidebar sticky (always visible)
      spotifyPlaylistId: "5y7f2Wxfq49G5KuNQfMPbk", // enter just the ID of the playlist (not the full URL)  
      stakingContractAddress: "", // this is also the stake/gov token address
      stakeTokenSymbol: "MCG", // stake token symbol (governance token symbol)
      supportedChainId: 34443,
      swapPriceImpactMaxBps: 1000, // max price impact in bips (1 bps = 0.01%, 1000bps = 10%) for the swap function
      swapRouterAddress: "0x8FF82d2b0ab704Ba2AB5a567f32F1447A6158260", // iggy swap router contract address
      tenorApiKey: process.env.TENOR_KEY || "",
      tldName: ".modechat",
      tokenAddress: null, // leave null if it's a native token of the chain
      tokenDecimals: 18,
      tokenSymbol: "ETH"
    }
  },
  vite: {
    build: {
      target: ['es2020'] // fix big integer literals error
    },
    optimizeDeps: {
      esbuildOptions: {
        define: {
          global: 'globalThis'  // fix nuxt3 global
        },
        plugins: [
          NodeGlobalsPolyfillPlugin({
            process: true,  // fix nuxt3 process
            buffer: true
          }),
          NodeModulesPolyfillPlugin()
        ],
        target: "es2020" // fix big integer literals error
      }
    }
  }
})
