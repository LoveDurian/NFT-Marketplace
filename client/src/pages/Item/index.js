import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Web3 from "web3";

import { selectedNft, removeSelectedNft } from "../../redux/actions/nftActions";

import { useStyles } from "./styles.js";

const Item = () => {
  const classes = useStyles();
  const history = useHistory();

  const { nftId } = useParams();
  const marketplaceContract = useSelector(
    (state) => state.allNft.marketplaceContract
  );
  const artTokenContract = useSelector(
    (state) => state.allNft.artTokenContract
  );
  const account = useSelector((state) => state.allNft.account);
  let nft = useSelector((state) => state.nft);
  let nftItem = useSelector((state) =>
    state.allNft.nft.filter((nft) => nft.tokenId === nftId)
  );
  const {
    image,
    name,
    price,
    owner,
    creator,
    description,
    tokenId,
    saleId,
    isForSale,
    isSold,
  } = nftItem && nftItem[0] ? nftItem[0] : nft;
  const dispatch = useDispatch();

  useEffect(() => {
    if (nftId && nftId !== "" && nftItem) {
      console.log("NFT Item data:", nftItem[0]);
      dispatch(selectedNft(nftItem[0]));
    }
    return () => {
      dispatch(removeSelectedNft());
    };
  }, [nftId]);

  console.log("Current NFT data:", nft);
  console.log("NFT Item from filter:", nftItem);
  console.log("Price value:", price);


  async function putForSale(id, price) {
    try {
      if (!artTokenContract || !marketplaceContract) {
        alert("合约未加载，请刷新页面重试");
        return;
      }

      console.log("开始授权NFT给市场合约...");
      
      // 先授权NFT给市场合约
      const approveReceipt = await artTokenContract.methods
        .approve(marketplaceContract.options.address, id)
        .send({ gas: 100000, from: account });
      console.log("授权成功:", approveReceipt);
      
      // 等待授权确认
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log("开始上架NFT...");
      const receipt = await marketplaceContract.methods
        .putItemForSale(id, price)
        .send({ gas: 210000, from: account });
      console.log("上架成功:", receipt);
      
      history.push('/');
    } catch (error) {
      console.error("Error, puting for sale: ", error);
      alert("Error while puting for sale!");
    }
  }

  async function buy(saleId, price) {
    try {
      const receipt = await marketplaceContract.methods
        .buyItem(saleId)
        .send({ gas: 210000, value: price, from: account });
      console.log(receipt);
      const id = receipt.events.itemSold.id; ///saleId
      
      // 购买成功后，自动授权NFT给市场合约，方便下次出售
      if (artTokenContract && marketplaceContract) {
        try {
          console.log("购买成功，自动授权NFT给市场合约...");
          await artTokenContract.methods
            .approve(marketplaceContract.options.address, id)
            .send({ gas: 100000, from: account });
          console.log("自动授权成功");
        } catch (approveError) {
          console.warn("自动授权失败，但不影响购买:", approveError);
        }
      }
      
      history.push('/');
    } catch (error) {
      console.error("Error, buying: ", error);
      alert("Error while buying!");
    }
  }

  return (
    <div className={classes.pageItem}>
      {Object.keys(nft).length === 0 ? (
        <div>...CARREGANDO</div>
      ) : (
        <main>
          <header className={classes.pageHeader}>
            <Link to="/">
              <KeyboardBackspaceIcon fontSize="large" />
            </Link>
          </header>
          <section>
            <Grid container 
              spacing={0} 
              alignItems="center"
              justify="center"
            >
              <Grid item md={7} sm={7} xs={12}>
                <figure> 
                  <img className="ui fluid image" src={image} />
                </figure>
              </Grid>
              <Grid item md={5} sm={5} xs={12}>
                <fieldset>
                  <h1>{name}</h1>
                  <TextField
                    label="creator"
                    name="creator"
                    variant="filled"
                    margin="dense"
                    fullWidth
                    disabled
                    defaultValue={
                      creator.slice(0, 7) + "..." + creator.slice(-4)
                    }
                  />
                  <TextField
                    label="owner"
                    name="owner"
                    variant="filled"
                    disabled
                    fullWidth
                    margin="dense"
                    defaultValue={owner.slice(0, 7) + "..." + owner.slice(-4)}
                  />
                  <TextField
                    id="outlined-multiline-static"
                    multiline
                    rows={4}
                    label="Description"
                    name="description"
                    variant="filled"
                    margin="dense"
                    disabled
                    fullWidth
                    defaultValue={description}
                  />
                  <TextField
                    label="price"
                    name="price"
                    variant="filled"
                    margin="dense"
                    defaultValue={Web3.utils.fromWei(String(price), "ether")}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">ETH</InputAdornment>
                      ),
                    }}
                    fullWidth
                    disabled
                  />
                  {owner === account && !isForSale && (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => putForSale(tokenId, price)}
                    >
                      Sell
                    </Button>
                  )}
                  {owner !== account && isForSale && (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => buy(saleId, price)}
                    >
                      Buy
                    </Button>
                  )}
                </fieldset>
              </Grid>
            </Grid>
          </section>
        </main>
      )}
    </div>
  );
};

export default Item;
