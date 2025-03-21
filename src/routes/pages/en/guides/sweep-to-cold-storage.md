---
title: Sweep to Cold Storage
description: Complete guide to moving your Bitcoin from mobile wallets to hardware security
---

<div class="text-center mb-12">
  <img src="/images/badges/webp/sweep-to-cold.webp" alt="Hardware wallets for Bitcoin cold storage" class="mx-auto h-40 mb-4" />
</div>

# Moving Bitcoin to Hardware Cold Storage

This guide provides step-by-step instructions for securing your Bitcoin in cold storage using hardware wallets. Follow these detailed steps to ensure your Bitcoin is safely transferred from mobile wallets to long-term secure storage.

## Table of Contents

- [Understanding Cold Storage](#understanding-cold-storage)
- [Preparing for the Transfer](#preparing-for-the-transfer)
- [Setting Up Your Hardware Wallet](#setting-up-your-hardware-wallet)
- [Creating a Secure Receive Address](#creating-a-secure-receive-address)
- [Transferring Bitcoin from Mobile Wallets](#transferring-bitcoin-from-mobile-wallets)
  - [From Flash Wallet](#from-flash-wallet)
  - [From Other Mobile Wallets](#from-other-mobile-wallets)
- [Verifying Your Transfer](#verifying-your-transfer)
- [Best Practices for Cold Storage](#best-practices-for-cold-storage)
- [Recovery and Backup Procedures](#recovery-and-backup-procedures)
- [Advanced Cold Storage Options](#advanced-cold-storage-options)

## Understanding Cold Storage

Cold storage refers to keeping your Bitcoin private keys offline on a dedicated hardware device, dramatically reducing potential attack vectors compared to mobile or online wallets.

### Benefits of Hardware Wallets

- **Enhanced Security**: Private keys never leave the device
- **Protection from Malware**: Immune to computer viruses and keyloggers
- **Physical Verification**: Transactions require physical confirmation
- **Disaster Recovery**: Built-in backup and recovery options
- **Long-term Storage**: Designed for secure, long-term Bitcoin storage

### When to Use Cold Storage

Cold storage is recommended when:
- Your Bitcoin holdings exceed $1,000 in value
- You plan to hold Bitcoin for more than 6 months
- You want maximum protection against remote attacks
- You're creating a long-term savings plan or inheritance

## Preparing for the Transfer

Before beginning the transfer process, prepare the following:

1. **Hardware wallet device** (Bitkey, ColdCard, or Trezor)
2. **Pen and paper** for recording recovery phrases
3. **Secure location** free from cameras or onlookers
4. **Mobile wallet** with Bitcoin to transfer
5. **Small amount for testing** (always send a test transaction first)
6. **Time without distractions** (30-60 minutes for setup)
7. **Stable internet connection** (for the mobile wallet side)

## Setting Up Your Hardware Wallet

Each hardware wallet has a specific setup process. Select your device below:

<div class="tabs">
  <div class="tab-input">
    <input type="radio" id="tab1" name="tab-control" checked>
    <input type="radio" id="tab2" name="tab-control">
    <input type="radio" id="tab3" name="tab-control">
    <ul>
      <li><label for="tab1">Bitkey</label></li>
      <li><label for="tab2">ColdCard</label></li>
      <li><label for="tab3">Trezor</label></li>
    </ul>
    
    <div class="slider"><div class="indicator"></div></div>
    <div class="content">
      <section>
        <div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4">
          Bitkey uses a "two-of-three" multi-signature security model with a mobile app component, hardware component, and recovery key component.
        </div>

        <ol>
          <li>
            <strong>Initial Hardware Setup</strong>
            <ul>
              <li>Unbox your Bitkey hardware device</li>
              <li>Power on by pressing the circular button</li>
              <li>Follow on-screen instructions to set up your device PIN</li>
              <li>Verify the device displays an untampered seal message</li>
            </ul>
          </li>
          <li>
            <strong>Install the Bitkey Mobile App</strong>
            <ul>
              <li>Download the Bitkey app from the App Store or Google Play</li>
              <li>Open the app and select "Set up a new wallet"</li>
              <li>Follow the pairing instructions to connect to your hardware device</li>
              <li>Create a secure PIN for the app</li>
            </ul>
          </li>
          <li>
            <strong>Create Your Recovery Key</strong>
            <ul>
              <li>When prompted, the app will guide you through creating a recovery key</li>
              <li>Write down all 12 or 24 seed words IN ORDER on provided recovery cards</li>
              <li>Verify each word carefully - these words ARE your Bitcoin</li>
              <li>Store recovery cards in a secure, private location</li>
            </ul>
          </li>
          <li>
            <strong>Verify Your Setup</strong>
            <ul>
              <li>Complete the recovery phrase verification test on both devices</li>
              <li>Ensure both the hardware and mobile components show the same wallet balance</li>
              <li>Test the approval process for a small transaction</li>
            </ul>
          </li>
        </ol>
      </section>
      <section>
        <div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4">
          ColdCard is a Bitcoin-only hardware wallet that can operate completely air-gapped and offers advanced security features.
        </div>

        <ol>
          <li>
            <strong>Initial Hardware Setup</strong>
            <ul>
              <li>Unbox your ColdCard</li>
              <li>Insert a microSD card (optional but recommended)</li>
              <li>Connect the device using the included USB cable</li>
              <li>Create a new wallet when prompted</li>
              <li>Set up a strong PIN with both a prefix and suffix</li>
            </ul>
          </li>
          <li>
            <strong>Backup Your Seed Words</strong>
            <ul>
              <li>Carefully write down all 24 seed words in order</li>
              <li>Double-check each word against the ColdCard screen</li>
              <li>Consider stamping seed words on metal for fire/water resistance</li>
              <li>Secure your backup in a safe location</li>
            </ul>
          </li>
          <li>
            <strong>Advanced Security Setup</strong>
            <ul>
              <li>Set up a BrickMe PIN (emergency delete function)</li>
              <li>Configure Duress PIN if desired (shows limited funds)</li>
              <li>Set up a passphrase for additional security (optional)</li>
              <li>Test your PINs to ensure they work correctly</li>
            </ul>
          </li>
          <li>
            <strong>Install Companion Software</strong>
            <ul>
              <li>For desktop interaction, install <a href="https://sparrowwallet.com/">Sparrow Wallet</a></li>
              <li>Connect your ColdCard via USB or use the microSD card for air-gapped operation</li>
              <li>Export the wallet public key to Sparrow using the microSD card</li>
              <li>Verify the wallet appears correctly in Sparrow</li>
            </ul>
          </li>
        </ol>
      </section>
      <section>
        <div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4">
          Trezor offers an intuitive user experience with a simple interface while maintaining strong security.
        </div>

        <ol>
          <li>
            <strong>Initial Hardware Setup</strong>
            <ul>
              <li>Unbox your Trezor device</li>
              <li>Connect it to your computer via USB cable</li>
              <li>Visit <a href="https://trezor.io/start">trezor.io/start</a></li>
              <li>Follow the on-screen instructions</li>
              <li>Create a new wallet when prompted</li>
            </ul>
          </li>
          <li>
            <strong>Create Device PIN</strong>
            <ul>
              <li>Create a strong PIN following the on-screen instructions</li>
              <li>The PIN entry uses a randomized keypad for protection</li>
              <li>Remember this PIN - it protects physical access to your device</li>
            </ul>
          </li>
          <li>
            <strong>Backup Recovery Seed</strong>
            <ul>
              <li>Write down all 12 or 24 seed words in exact order</li>
              <li>Verify the recovery seed when prompted by the setup wizard</li>
              <li>Store in a secure, private location away from potential threats</li>
              <li>Consider creating a metal backup for fire/water resistance</li>
            </ul>
          </li>
          <li>
            <strong>Setup Trezor Suite</strong>
            <ul>
              <li>Install Trezor Suite on your computer</li>
              <li>Connect your device and unlock it with your PIN</li>
              <li>Create a Bitcoin wallet in Trezor Suite</li>
              <li>Optionally add a passphrase for additional security</li>
            </ul>
          </li>
        </ol>
      </section>
    </div>
  </div>
</div>

<style>
.tabs {
  width: 100%;
  margin: 0 auto 2rem;
}

.tab-input {
  position: relative;
}

.tab-input input[type="radio"] {
  display: none;
}

.tab-input ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  border-bottom: 1px solid #e5e7eb;
  margin-bottom: 1rem;
}

.tab-input ul li {
  margin-right: 0.5rem;
}

.tab-input ul li label {
  display: block;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem 0.375rem 0 0;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.tab-input ul li label:hover {
  background-color: rgba(139, 92, 246, 0.1);
}

.tab-input .content {
  position: relative;
}

.tab-input .content section {
  display: none;
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Set the active tab using the radio buttons */
#tab1:checked ~ ul li:nth-child(1) label,
#tab2:checked ~ ul li:nth-child(2) label,
#tab3:checked ~ ul li:nth-child(3) label {
  color: white;
  background-color: #8b5cf6;
}

#tab1:checked ~ .content section:nth-child(1),
#tab2:checked ~ .content section:nth-child(2),
#tab3:checked ~ .content section:nth-child(3) {
  display: block;
}

/* Dark mode adjustments */
.dark .tab-input ul {
  border-color: #374151;
}

.dark .tab-input ul li label:hover {
  background-color: rgba(139, 92, 246, 0.2);
}
</style>

## Creating a Secure Receive Address

After setting up your hardware wallet, generate a receive address to accept Bitcoin transfers:

1. **Connect Your Hardware Wallet**
   - Bitkey: Open the mobile app and ensure it's synced with your hardware device
   - ColdCard: Connect via USB or use microSD card with Sparrow Wallet
   - Trezor: Connect via USB and open Trezor Suite

2. **Navigate to Receive Function**
   - Bitkey: Tap "Receive" in the mobile app
   - ColdCard: In Sparrow, select "Receive" tab
   - Trezor: In Trezor Suite, click on "Receive" tab

3. **Verify the Address on Hardware**
   - Bitkey: Confirm the address matches on both mobile and hardware devices
   - ColdCard: Verify address on ColdCard screen (crucial security step)
   - Trezor: Confirm address on Trezor screen when prompted

4. **Choose Address Type** (Advanced)
   - Native SegWit (bc1... addresses): Lowest fees, most efficient
   - Nested SegWit (3... addresses): Compatible with older wallets
   - Legacy (1... addresses): Only use if specifically required

5. **Label the Address** (Optional)
   - Add a description like "Flash Transfer - March 2025"
   - Helps track the source of funds later

## Transferring Bitcoin from Mobile Wallets

Now you're ready to send Bitcoin from your mobile wallet to your hardware wallet:

### From Flash Wallet

1. **Open Flash App**
   - Go to the "Wallet" tab
   - Ensure you have sufficient balance

2. **Initiate Transfer**
   - Tap "Send" or "Withdraw"
   - Select "On-chain withdrawal"

3. **Enter Details**
   - Paste your hardware wallet's receive address
   - Double-check the address is correct (first and last few characters)
   - Start with a small test amount (e.g., 0.0001 BTC or 10,000 sats)

4. **Review and Confirm**
   - Check the withdrawal fee (higher fees confirm faster)
   - Prioritize security over saving on fees for cold storage transfers
   - Tap "Confirm" to initiate the transfer

5. **Initial Test Verification**
   - Wait for the test transaction to confirm (10-60 minutes)
   - Verify receipt on your hardware wallet
   - Once confirmed, proceed with transferring larger amounts

### From Other Mobile Wallets

1. **Open Your Mobile Wallet**
   - Access the wallet containing your Bitcoin
   - Navigate to Send/Transfer function

2. **Enter Hardware Wallet Address**
   - Paste your verified hardware wallet address
   - Double-check the entire address if possible
   - For large transfers, verify the address through multiple channels

3. **Set Transaction Fee**
   - Choose an appropriate fee based on urgency
   - For cold storage, medium priority is usually sufficient
   - Check [mempool.space](https://mempool.space) for current fee recommendations

4. **Send Test Transaction**
   - Start with a minimal amount
   - Confirm the transaction
   - Record the transaction ID/hash

5. **Complete the Transfer**
   - After confirming receipt of test transaction
   - Send remaining amount in one or multiple transactions
   - Consider privacy implications of transaction patterns

## Verifying Your Transfer

After sending, verify the transfer was successful:

1. **Check Transaction Status**
   - Use a block explorer like [mempool.space](https://mempool.space)
   - Enter your transaction ID or wallet address
   - Monitor confirmations (6+ is considered extremely secure)

2. **Verify on Hardware Wallet**
   - Bitkey: Check balance in both mobile app and hardware device
   - ColdCard: Check balance in Sparrow Wallet or via microSD export
   - Trezor: Check balance in Trezor Suite

3. **Document the Transfer**
   - Record the transaction ID
   - Note the date, amount, and sending address
   - Store this information securely for future reference

## Best Practices for Cold Storage

Maximize your security with these best practices:

1. **Multiple Hardware Wallets**
   - Consider using different brands for diversification
   - Separate wallets for different purposes (spending vs. long-term)

2. **Regular Verification**
   - Check device functionality every 6-12 months
   - Update firmware when security updates are released
   - Perform test recoveries annually

3. **Secure Storage Environment**
   - Keep hardware wallets in cool, dry locations
   - Protect from electromagnetic interference
   - Consider a fireproof, waterproof container

4. **Physical Security**
   - Don't discuss hardware wallet ownership publicly
   - Consider a home safe or bank safety deposit box
   - Have a "decoy" wallet with small funds if concerned about physical threats

5. **Avoid Common Mistakes**
   - Never enter seed phrases on a computer or phone
   - Don't store seed phrases in cloud services or digital formats
   - Don't share photos of seed phrases or hardware wallets
   - Beware of phishing attempts targeting hardware wallet users

## Recovery and Backup Procedures

Prepare for emergencies with proper backup procedures:

1. **Seed Phrase Protection**
   - Store seed phrases separately from hardware devices
   - Consider metal backup solutions (Cryptosteel, BlockPlate, etc.)
   - Split backups across multiple secure locations

2. **Test Recovery Procedure**
   - Practice recovery without actual funds
   - Understand the process before an emergency
   - Document steps for heirs or trusted individuals

3. **Inheritance Planning**
   - Create clear instructions for heirs
   - Consider multi-signature setups for inheritance
   - Establish legal frameworks appropriate to your jurisdiction

## Advanced Cold Storage Options

For users seeking maximum security:

1. **Multi-Signature Setups**
   - Require multiple devices to approve transactions
   - Distribute risk across different security models
   - Popular options: [Sparrow Wallet](https://sparrowwallet.com/) multisig, [Caravan](https://unchained.com/caravan/)

2. **Air-Gapped Operations**
   - Keep signing device completely offline
   - Transfer transaction data via microSD or QR codes
   - ColdCard and some Trezor models support this workflow

3. **Geographic Distribution**
   - Store backup components in different physical locations
   - Consider jurisdictional diversification for large holdings
   - Balance security with practical accessibility

---

<div class="bg-purple-100 dark:bg-purple-900 p-4 rounded-lg my-8">
  <h3 class="font-bold text-purple-800 dark:text-purple-200 mb-2">Need Help?</h3>
  <p class="text-purple-700 dark:text-purple-300">
    If you encounter any issues during the transfer process, reach out to Flash support through the app or visit our community forums for assistance.
  </p>
</div>

<!-- Navigation links -->
<div class="flex justify-between items-center mt-8 pt-4 border-t border-zinc-200 dark:border-zinc-700">
  <div class="w-1/3 text-left">
    <a href="non-custodial-wallets" class="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
      Non-Custodial Wallets
    </a>
  </div>
  <div class="w-1/3 text-center">
    <!-- Optional center content -->
  </div>
  <div class="w-1/3 text-right">
    <a href="dca" class="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md">
      Dollar Cost Averaging
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </a>
  </div>
</div>
