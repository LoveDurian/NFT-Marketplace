import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';

import getWeb3 from "../../utils/getWeb3";
import { api } from "../../services/api";

import ArtMarketplace from "../../contracts/ArtMarketplace.json";
import ArtToken from "../../contracts/ArtToken.json";

import {
  setNft,
  setAccount,
  setTokenContract,
  setMarketContract,
} from "../../redux/actions/nftActions";
import Card from "../../components/Card";

import { useStyles } from "./styles.js";

import veterans from "../../assets/arts/Sparse-Ahmed-Mostafa-vetarans-2.jpg";
import lionKing from "../../assets/arts/suresh-pydikondala-lion.jpg";
import dreaming from "../../assets/arts/phuongvp-maybe-i-m-dreaming-by-pvpgk-deggyli.jpg";
import modeling3d from "../../assets/arts/alan-linssen-alanlinssen-kitbashkitrender2.jpg";
import woman from "../../assets/arts/ashline-sketch-brushes-3-2.jpg";
import stones from "../../assets/arts/rentao_-22-10-.jpg";
import wale from "../../assets/arts/luzhan-liu-1-1500.jpg";
import comic from "../../assets/arts/daniel-taylor-black-and-white-2019-2.jpg";
import galerie from "../../assets/galerie.svg";


const Home = () => {
  const classes = useStyles();
  const nft = useSelector((state) => state.allNft.nft);
  const account = useSelector((state) => state.allNft.account);
  const dispatch = useDispatch();

  useEffect(() => {
    let itemsList = [];
    const init = async () => {
      try {
        const web3 = await getWeb3();
        const accounts = await web3.eth.getAccounts();

        if (typeof accounts === undefined) {
          alert("Please login with Metamask!");
          console.log("login to metamask");
        }

        const networkId = await web3.eth.net.getId();
        try {
          const artTokenContract = new web3.eth.Contract(
            ArtToken.abi,
            ArtToken.networks[networkId].address
          );
          // console.log("Contract: ", artTokenContract);
          const marketplaceContract = new web3.eth.Contract(
            ArtMarketplace.abi,
            ArtMarketplace.networks[networkId].address
          );
          const totalSupply = await artTokenContract.methods
            .totalSupply()
            .call();
          const totalItemsForSale = await marketplaceContract.methods
            .totalItemsForSale()
            .call();

          for (var tokenId = 1; tokenId <= totalSupply; tokenId++) {
            let item = await artTokenContract.methods.Items(tokenId).call();
            let owner = await artTokenContract.methods.ownerOf(tokenId).call();

            const response = await api
              .get(`/tokens/${tokenId}`)
              .catch((err) => {
                console.log("Err: ", err);
              });
            console.log("response: ", response);

            itemsList.push({
              name: response.data.name,
              description: response.data.description,
              image: response.data.image,
              tokenId: item.id,
              creator: item.creator,
              owner: owner,
              uri: item.uri,
              isForSale: false,
              saleId: null,
              price: 0,
              isSold: null,
            });
          }
          if (totalItemsForSale > 0) {
            for (var saleId = 0; saleId < totalItemsForSale; saleId++) {
              let item = await marketplaceContract.methods
                .itemsForSale(saleId)
                .call();
              let active = await marketplaceContract.methods
                .activeItems(item.tokenId)
                .call();

              let itemListIndex = itemsList.findIndex(
                (i) => i.tokenId === item.tokenId
              );

              itemsList[itemListIndex] = {
                ...itemsList[itemListIndex],
                isForSale: active,
                saleId: item.id,
                price: item.price,
                isSold: item.isSold,
              };
            }
          }

          dispatch(setAccount(accounts[0]));
          dispatch(setTokenContract(artTokenContract));
          dispatch(setMarketContract(marketplaceContract));
          dispatch(setNft(itemsList));
        } catch (error) {
          console.error("Error", error);
          alert(
            "Contracts not deployed to the current network " +
              networkId.toString()
          );
        }
      } catch (error) {
        alert(
          `Failed to load web3, accounts, or contract. Check console for details.` +
            error
        );
        console.error(error);
      }
    };
    init();
  }, [dispatch]);

  console.log("Nft :", nft);

  const nftItem = useSelector((state) => state.allNft.nft);
  
  // 根据owner地址分组NFT
  const myNfts = nftItem.filter(nft => nft.owner.toLowerCase() === account?.toLowerCase());
  const otherNfts = nftItem.filter(nft => nft.owner.toLowerCase() !== account?.toLowerCase());

  return (
    <div className={classes.homepage}>
      <section className={classes.banner}>
        <Grid container spacing={0} xs={12} className={classes.gridBanner}>
          <Grid item xs={3}>
            <Grid container spacing={0}>
              <Grid item xs={8}>
                <img src={dreaming} alt="dreaming" className={classes.images} />
              </Grid>
              <Grid item xs={4}>
                <img src={veterans} alt="veterans" className={classes.images} />
              </Grid>
              <Grid item xs={7}>
                <img src={modeling3d} alt="modeling3d" className={classes.images} />
              </Grid>
              <Grid item xs={5}>
                <img src={lionKing} alt="lionKing" className={classes.images} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} className={classes.main}>
            <img src={galerie} alt="galerie" />
            <Typography>A decentralized NFT marketplace where you can expose your art.</Typography>
            <Link to="/create-nft">
              <Button variant="contained" color="primary" disableElevation>
                Mint your art
              </Button>
            </Link>
          </Grid>
          <Grid item xs={3}>
            <Grid container spacing={0}>
              <Grid item xs={8}>
                <img src={stones} alt="dreaming" className={classes.images} />
              </Grid>
              <Grid item xs={4}>
                <img src={woman} alt="veterans" className={classes.images} />
              </Grid>
              <Grid item xs={7}>
                <img src={wale} alt="modeling3d" className={classes.images} />
              </Grid>
              <Grid item xs={5}>
                <img src={comic} alt="lionKing" className={classes.images} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </section>
      {/* 我的NFT区域 */}
      {myNfts.length > 0 && (
        <section className={classes.allNfts}>
          <Typography className={classes.title}>我的NFT ({myNfts.length})</Typography>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            {myNfts.map((nft) => (
              <Grid item key={nft.tokenId}>
                <Card {...nft} />
              </Grid>
            ))}
          </Grid>
        </section>
      )}

      {/* 其他NFT区域 */}
      {otherNfts.length > 0 && (
        <section className={classes.allNfts}>
          <Typography className={classes.title}>其他NFT ({otherNfts.length})</Typography>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            {otherNfts.map((nft) => (
              <Grid item key={nft.tokenId}>
                <Card {...nft} />
              </Grid>
            ))}
          </Grid>
        </section>
      )}

      {/* 如果没有NFT，显示提示信息 */}
      {nftItem.length === 0 && (
        <section className={classes.allNfts}>
          <Typography className={classes.title}>暂无NFT</Typography>
          <Typography className={classes.emptyText}>
            还没有任何NFT，快去创建您的第一个NFT吧！
          </Typography>
        </section>
      )}
    </div>
  );
};

export default Home;
