"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "../../styles/walletcheck.module.css";
import registeredWallets from "../../data/wallets.json";

export default function WalletCheck() {
  const [walletAddress, setWalletAddress] = useState("");
  const [result, setResult] = useState(null);
  const [resultType, setResultType] = useState("");

  const isSolanaAddress = (address) => {
    const solanaRegex = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/;
    return solanaRegex.test(address);
  };

  const isEthereumAddress = (address) => {
    return address.startsWith("0x") && address.length === 42;
  };

  const checkWallet = () => {
    const address = walletAddress.trim();

    if (!address) {
      setResult("Please enter a wallet address.");
      setResultType("error");
      return;
    }

    if (isEthereumAddress(address)) {
      setResult(
        "❌ Ethereum wallets are not supported.<br/>Please use a Solana wallet address.",
      );
      setResultType("error");
      return;
    }

    if (!isSolanaAddress(address)) {
      setResult(
        "❌ Invalid wallet format.<br/>Please enter a valid Solana wallet address.",
      );
      setResultType("error");
      return;
    }

    // Array'de includes ile kontrol et
    const isEligible = registeredWallets.includes(address);

    if (isEligible) {
      setResult("✓ Wallet is eligible!");
      setResultType("success");
    } else {
      setResult(
        "⚠ This wallet is not registered or not eligible.<br/><br/>If you believe your wallet should be eligible, please open a support ticket on Discord.",
      );
      setResultType("not-found");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      checkWallet();
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.logoContainer}>
          <Image
            src="/wb_tran.png"
            alt="Wonder Boss Logo"
            width={200}
            height={80}
            className={styles.logoImage}
            priority
          />
        </div>
        <div className={styles.subtitle}>Presale Wallet Address Checker</div>
      </div>

      <div className={styles.characterContainer}>
        <Image
          src="/bombillaMAC.png"
          alt="Wonder Boss Character"
          width={200}
          height={200}
          className={styles.characterImage}
          priority
        />
      </div>

      <div className={styles.checkerCard}>
        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>Solana Wallet Address</label>
          <input
            type="text"
            className={styles.walletInput}
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Enter your Solana wallet address..."
            spellCheck="false"
          />
        </div>

        <button className={styles.checkButton} onClick={checkWallet}>
          Check Wallet
        </button>

        {result && (
          <div
            className={`${styles.result} ${styles[resultType]}`}
            dangerouslySetInnerHTML={{ __html: result }}
          />
        )}
      </div>

      <div className={styles.actionButtons}>
        <a
          href="https://launchmynft.io/mint/wonderboss"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.actionBtn} ${resultType === "success" ? styles.highlight : ""}`}
          data-text="Go to Launchpad"
        >
          <svg className={styles.icon} fill="currentColor" viewBox="0 0 24 24">
            <path d="M13.5 2c-5.621 0-10.211 4.443-10.475 10h-3.025l5 6.625 5-6.625h-2.975c.257-3.351 3.06-6 6.475-6 3.584 0 6.5 2.916 6.5 6.5s-2.916 6.5-6.5 6.5c-1.863 0-3.542-.793-4.728-2.053l-2.427 3.216c1.877 1.754 4.389 2.837 7.155 2.837 5.79 0 10.5-4.71 10.5-10.5s-4.71-10.5-10.5-10.5z" />
          </svg>
          <span>Go to Launchpad</span>
        </a>

        <a
          href="https://discord.com/invite/GmZzzC72as"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.actionBtn} ${resultType === "error" || resultType === "not-found" ? styles.highlight : ""}`}
          data-text="Open a Ticket on Discord"
        >
          <svg className={styles.icon} fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
          </svg>
          <span>Open a Ticket on Discord</span>
        </a>

        <a
          href="https://x.com/wonderbossnft"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.actionBtn}
          data-text="Follow us on X"
        >
          <svg className={styles.icon} fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          <span>Follow us on X</span>
        </a>

        <a
          href="https://www.wonderboss.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.actionBtn}
          data-text="Go to Wonder Boss Website"
        >
          <svg className={styles.icon} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
          </svg>
          <span>Go to Wonder Boss Website</span>
        </a>
      </div>
    </div>
  );
}
